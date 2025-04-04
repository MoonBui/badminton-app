import MatchEntry from "../components/MatchEntry"
import { useMatches } from "../hooks/useMatches"
import { usePlayers } from "../hooks/usePlayers"

function Matches() {
    const {matches, addMatch, removeMatch} = useMatches()
    const {players} = usePlayers()

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Badminton Matches</h2>
        <button 
          onClick={async () => {
            await addMatch()
          }}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors"
        >
          Generate Matches
        </button>
      </div>

      <div className="space-y-6">
        {matches.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            No matches available. Create a new match to get started!
          </p>
        ) : (
          matches.map((match) => (
            <MatchEntry 
              key={match.id}
              match={match}
              players={players}
              addMatch={addMatch}
              removeMatch={removeMatch}
              showAddMatchButton={true}
            />
          ))
        )}
            </div>
        </div>
    )
    
}

export default Matches
