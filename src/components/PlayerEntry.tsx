import React from 'react';
import { TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SkillLevelMenu from './SkillLevelMenu';
import { Player } from '../hooks/usePlayers';
import { usePlayerEntry } from '../hooks/usePlayerEntry';

interface PlayerEntryProps {
  player: Player;
  onChange: (player: Player) => void;
  onRemove: (id: string) => void;
  showRemoveButton: boolean;
}

const PlayerEntry: React.FC<PlayerEntryProps> = ({ player, onChange, onRemove, showRemoveButton=true }) => {
  const { localName, handleNameChange, handleSkillChange, handleRemove } = usePlayerEntry(player, onChange, onRemove);
  
  return (
    <div className="w-full flex flex-row gap-4 mb-4">
      <TextField 
        id={`player-${player.id}`} 
        label={`Player ${player.id}`} 
        variant="outlined" 
        className="w-96"
        value={localName}
        onChange={(e) => handleNameChange(e.target.value)}
      />
      <SkillLevelMenu value={player.skillLevel} onChange={handleSkillChange} />
      {showRemoveButton && (
        <IconButton 
          aria-label="delete" 
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700"
        >
          <DeleteIcon />
        </IconButton>
      )}
    </div>
  );
};

export default PlayerEntry; 