import { Match } from '../types/Match';
import { getPlayers } from './playerService';
import { Player } from '../types/Player';

const MATCHES_STORAGE_KEY = 'badminton_matches';

export async function getMatches(): Promise<Match[]> {
    try {
        const storedMatches = localStorage.getItem(MATCHES_STORAGE_KEY);
        return storedMatches ? JSON.parse(storedMatches) : [];
    } catch (error) {
        console.error('Error fetching matches from localStorage:', error);
        throw error;
    }
}

export async function saveMatches(matches: Match[]): Promise<void> {
    try {
        localStorage.setItem(MATCHES_STORAGE_KEY, JSON.stringify(matches));
    } catch (error) {
        console.error('Error saving matches to localStorage:', error);
        throw error;
    }
}

export async function createMatch(): Promise<Match> {
    try {
        const players = await getPlayers();
        const randomizedPlayers = players.sort(() => Math.random() - 0.5);
        
        if (randomizedPlayers.length < 4) {
            throw new Error('Not enough players to create a match');
        }

        const matchPlayers = randomizedPlayers.slice(0, 4) as [Player, Player, Player, Player];

        const match: Match = {
            id: Date.now().toString(),
            players: matchPlayers,
            team1: [matchPlayers[0], matchPlayers[1]],
            team2: [matchPlayers[2], matchPlayers[3]],
            score: {
                team1: 0,
                team2: 0
            },
            date: new Date(),
            isCompleted: false,
            court: 2
        };

        const matches = await getMatches();
        matches.push(match);
        await saveMatches(matches);
        return match;
    } catch (error) {
        console.error('Error creating match:', error);
        throw error;
    }
}

export async function deleteMatch(id: string): Promise<void> {
    try {
        const matches = await getMatches();
        const index = matches.findIndex(match => match.id === id);
        if (index !== -1) {
            matches.splice(index, 1);
            await saveMatches(matches);
        }
    } catch (error) {
        console.error('Error deleting match:', error);
        throw error;
    }
}

    
    