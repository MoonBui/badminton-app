import { Player } from '../types/Player';

// LocalStorage key
const PLAYERS_STORAGE_KEY = 'badminton_players';

// Function to get all players from localStorage
export async function getPlayers(): Promise<Player[]> {
  try {
    const storedPlayers = localStorage.getItem(PLAYERS_STORAGE_KEY);
    return storedPlayers ? JSON.parse(storedPlayers) : [];
  } catch (error) {
    console.error('Error fetching players from localStorage:', error);
    throw error;
  }
}

// Function to save all players to localStorage
export async function savePlayers(players: Player[]): Promise<void> {
  try {
    localStorage.setItem(PLAYERS_STORAGE_KEY, JSON.stringify(players));
  } catch (error) {
    console.error('Error saving players to localStorage:', error);
    throw error;
  }
}

// Function to create a new player
export async function createPlayer(player: Omit<Player, 'id'>): Promise<Player> {
  try {
    const players = await getPlayers();
    const newPlayer = {
      ...player,
      id: Date.now().toString() // Generate a unique ID
    };
    
    players.push(newPlayer);
    await savePlayers(players);
    
    return newPlayer;
  } catch (error) {
    console.error('Error creating player:', error);
    throw error;
  }
}

// Function to update an existing player
export async function updatePlayer(updatedPlayer: Player): Promise<Player> {
  try {
    const players = await getPlayers();
    const updatedPlayers = players.map(player => 
      player.id === updatedPlayer.id ? updatedPlayer : player
    );
    
    await savePlayers(updatedPlayers);
    return updatedPlayer;
  } catch (error) {
    console.error('Error updating player:', error);
    throw error;
  }
}

// Function to delete a player
export async function deletePlayer(id: string): Promise<void> {
  try {
    const players = await getPlayers();
    const filteredPlayers = players.filter(player => player.id !== id);
    
    await savePlayers(filteredPlayers);
  } catch (error) {
    console.error('Error deleting player:', error);
    throw error;
  }
} 