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