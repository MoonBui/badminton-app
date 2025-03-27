// import NameTag from '../components/NameTag'
import PlayerEntry from '../components/PlayerEntry'
import { usePlayers } from '../hooks/usePlayers'

function Home() {
  const { players, updatePlayer, addPlayer, isMaxReached, removePlayer } = usePlayers()

  return (
    <div className="prose dark:prose-invert lg:prose-xl">
      <h2 className="text-2xl font-bold mb-4">Welcome to Badminton Match Making</h2>
      <p className="text-gray-600 mb-4">
        Find your perfect badminton partner and schedule matches with players of your skill level.
      </p>
      
      {players.map((player) => (
        <PlayerEntry 
          key={player.id}
          player={player}
          onChange={updatePlayer}
          onRemove={removePlayer}
          showRemoveButton={players.length > 1}
        />
      ))}

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