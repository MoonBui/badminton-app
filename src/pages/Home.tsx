// import NameTag from '../components/NameTag'
import PlayerEntry from '../components/PlayerEntry'
import { usePlayers } from '../hooks/usePlayers'

function Home() {
  const { players, updatePlayer, addPlayer, isMaxReached, removePlayer } = usePlayers();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl mb-8 font-bold">Players on {new Date().toLocaleDateString()}</h2>

      <div className="flex flex-col gap-4">
        {players.map((player) => (
          <PlayerEntry 
            key={player.id}
            player={player}
            onChange={updatePlayer}
            onRemove={removePlayer}
            showRemoveButton={players.length > 1}
          />
        ))}
      </div>

      <button 
        className={`${isMaxReached ? 'bg-gray-500' : 'bg-blue-500'} text-white p-2 rounded-md`}
        onClick={addPlayer}
        disabled={isMaxReached}
      >
        Add another player {isMaxReached && "(max reached)"}
      </button>
    </div>
  )
}

export default Home 