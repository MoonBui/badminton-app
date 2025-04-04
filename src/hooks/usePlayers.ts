import { useState, useEffect } from 'react';
import { SkillLevel } from '../types/SkillLevel';
import { Player } from '../types/Player';
import { getPlayers, createPlayer, updatePlayer as updatePlayerApi, deletePlayer } from '../services/playerService';

export function usePlayers() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Maximum number of players allowed
  const MAX_PLAYERS = 36;

  // Load players from API on component mount
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        const data = await getPlayers();
        setPlayers(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setPlayers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  // Handler to update a specific player
  const updatePlayer = async (updatedPlayer: Player) => {
    try {
      // Optimistically update UI
      setPlayers(players.map(player => 
        player.id === updatedPlayer.id ? updatedPlayer : player
      ));
      
      // Send update to server
      await updatePlayerApi(updatedPlayer);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update player'));
      // Could revert the optimistic update here if needed
    }
  };

  // Handler to add a new player
  const addPlayer = async () => {
    if (players.length < MAX_PLAYERS) {
      try {
        const newPlayerData = {
          name: '',
          skillLevel: SkillLevel.Beginner
        };
        
        // Create on server first to get ID
        const newPlayer = await createPlayer(newPlayerData);
        
        // Update local state with server-generated ID
        setPlayers([...players, newPlayer]);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to add player'));
      }
    }
  };

  // Handler to remove a player
  const removePlayer = async (id: string) => {
    try {
      // Optimistically update UI
      setPlayers(players.filter(player => player.id !== id));
      
      // Delete from server
      await deletePlayer(id);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to remove player'));
      // Could revert the optimistic update here if needed
    }
  };

  return {
    players,
    updatePlayer,
    addPlayer,
    removePlayer,
    isMaxReached: players.length >= MAX_PLAYERS,
    loading,
    error
  };
} 