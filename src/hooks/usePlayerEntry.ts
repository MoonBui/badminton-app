import { useState, useEffect } from 'react';
import { Player } from './usePlayers';
import { SkillLevel } from '../types/SkillLevel';
export function usePlayerEntry(
  player: Player,
  onChange: (player: Player) => void,
  onRemove: (id: string) => void
) {
  // Local state for the player name (for debouncing/validation)
  const [localName, setLocalName] = useState(player.name);
  
  // Sync local state when props change
  useEffect(() => {
    setLocalName(player.name);
  }, [player.name]);
  
  // Handle name changes with validation
  const handleNameChange = (name: string) => {
    setLocalName(name);
    // You could add validation logic here
    onChange({ ...player, name });
  };
  
  // Handle skill level changes
  const handleSkillChange = (skillLevel: SkillLevel) => {
    onChange({ ...player, skillLevel });
  };

  // Handle removal of player entry
  const handleRemove = () => {
    onRemove(player.id);
  };
  
  return {
    localName,
    handleNameChange,
    handleSkillChange,
    handleRemove
  };
} 