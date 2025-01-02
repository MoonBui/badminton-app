import { TextField } from '@mui/material'
import NameTag from '../components/NameTag'
function Home() {
  return (
    <div className="prose dark:prose-invert lg:prose-xl">
      <h2 className="text-2xl font-bold mb-4">Welcome to Badminton Match Making</h2>
      <p className="text-gray-600">
        Find your perfect badminton partner and schedule matches with players of your skill level.
      </p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <NameTag />
    </div>
    
  )
}

export default Home 