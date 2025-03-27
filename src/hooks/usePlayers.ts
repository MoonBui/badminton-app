import { useState } from 'react';
import { SkillLevel } from '../types/SkillLevel';
export interface Player {
  id: string;
  name: string;
  skillLevel: SkillLevel;
}

export function usePlayers(initialCount = 1) {
  // Initialize state with the specified number of players
  const [players, setPlayers] = useState<Player[]>(
    Array.from({ length: initialCount }, (_, i) => ({
      id: (i + 1).toString(),
      name: '',
      skillLevel: SkillLevel.Beginner
    }))
  );

  // Maximum number of players allowed
  const MAX_PLAYERS = 36;

  // Handler to update a specific player
  const updatePlayer = (updatedPlayer: Player) => {
    setPlayers(players.map(player => 
      player.id === updatedPlayer.id ? updatedPlayer : player
    ));
  };

  // Handler to add a new player
  const addPlayer = () => {
    if (players.length < MAX_PLAYERS) {
      setPlayers([...players, {
        id: (players.length + 1).toString(),
        name: '',
        skillLevel: SkillLevel.Beginner
      }]);
    }
  };

  // Handler to remove a player
  const removePlayer = (id: string) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  return {
    players,
    updatePlayer,
    addPlayer,
    removePlayer,
    isMaxReached: players.length >= MAX_PLAYERS
  };
} 