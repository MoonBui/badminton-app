import { Player } from './Player';

export interface Match {
    id: string;
    players: [Player, Player, Player, Player];
    team1: [Player, Player];
    team2: [Player, Player];
    score: {
        team1: number;
        team2: number;
    }
    date: Date;
    isCompleted: boolean;
    court: number;
}

// export function createBalancedMatch(players: [Player, Player, Player, Player]): Match {
//     const skillLevel = players.map(player => player.skillLevel);
//     const sortedPlayers = players.sort((a, b) => skillLevel[a.id] - skillLevel[b.id]);
//     const team1: [Player, Player] = [sortedPlayers[0], sortedPlayers[1]];
//     const team2: [Player, Player] = [sortedPlayers[2], sortedPlayers[3]];
//     return createMatch([...team1, ...team2]);
// }

export function createMatch(players: [Player, Player, Player, Player]): Match {
    const team1: [Player, Player] = [players[0], players[1]];
    const team2: [Player, Player] = [players[2], players[3]];
    return {
        id: new Date().getTime().toString(),
        players,
        team1,
        team2,
        score: {
            team1: 0,
            team2: 0
        },
        date: new Date(),
        isCompleted: false,
        court: 1
    }
}
