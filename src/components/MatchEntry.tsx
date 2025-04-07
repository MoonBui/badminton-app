import { Match } from '../types/Match'
import { Player } from '../types/Player'
import { useMatchEntry } from '../hooks/useMatchEntry'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'

interface MatchEntryProps {
    match: Match;
    players: Player[];
    addMatch: () => void;
    removeMatch: (id: string) => void;
    showAddMatchButton: boolean;
}

const MatchEntry: React.FC<MatchEntryProps> = ({ match, players, addMatch, removeMatch }) => {
    const { handleMatchAdd, handleMatchRemove } = useMatchEntry(match, players, addMatch, removeMatch)

    return (
        <Card>
            <CardHeader>
                <CardTitle>Match</CardTitle>
                <CardDescription>
                    Court {match.court} • {new Date(match.date).toLocaleDateString()}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Team 1 */}
                    <div className="bg-blue-50 p-3 rounded-md">
                    <h4 className="font-medium mb-2">Team 1</h4>
                    <div className="space-y-2">
                        {match.team1.map((player) => (
                            <div key={player.id} className="flex items-center">
                                <span className="text-sm">{player.name}</span>
                                <span className="ml-2 text-xs bg-blue-200 px-2 py-1 rounded">
                                    {player.skillLevel}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team 2 */}
                <div className="bg-red-50 p-3 rounded-md">
                    <h4 className="font-medium mb-2">Team 2</h4>
                    <div className="space-y-2">
                        {match.team2.map((player) => (
                            <div key={player.id} className="flex items-center">
                                <span className="text-sm">{player.name}</span>
                                <span className="ml-2 text-xs bg-red-200 px-2 py-1 rounded">
                                    {player.skillLevel}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Score */}
            <div className="flex justify-center items-center space-x-4 mb-4">
                <div className="text-2xl font-bold text-blue-600">
                    {match.score.team1}
                </div>
                <div className="text-gray-500">vs</div>
                <div className="text-2xl font-bold text-red-600">
                    {match.score.team2}
                </div>
                </div>
            </CardContent>

            <CardFooter>
                <div className="w-full flex justify-between items-center">
                    <span className={`px-2 py-1 rounded text-sm ${
                        match.isCompleted 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                    }`}>
                        {match.isCompleted ? 'Completed' : 'In Progress'}
                    </span>
                    <div className="flex gap-2">
                        <button 
                            onClick={handleMatchRemove}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
                        >
                            Remove Match
                        </button>
                        <button 
                            onClick={handleMatchAdd}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                        >
                            Add Match
                        </button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default MatchEntry
