import { Match } from '../types/Match'
import { Player } from '../types/Player'
import { useMatchEntry } from '../hooks/useMatchEntry'


interface MatchEntryProps {
    match: Match
    players: Player[]
    addMatch: () => void
}

const MatchEntry: React.FC<MatchEntryProps> = ({ match, players, addMatch }) => {
    const { handleMatchAdd } = useMatchEntry(match, players, addMatch)
    return (
        <button onClick={() => {
            handleMatchAdd
        }}>
            Add Match
        </button>
    )
}

export default MatchEntry
