import { useState } from 'react';
import { SkillLevel } from '../types/SkillLevel';
import { Match, createMatch } from '../types/Match';

export function useMatches(initialCount = 1) {
  // Initialize state with the specified number of players
  const [matches, setMatches] = useState<Match[]>(
    Array.from({ length: initialCount }, (_, i) => createMatch([
      { id: (i + 1).toString(), name: '', skillLevel: SkillLevel.Beginner },
      { id: (i + 2).toString(), name: '', skillLevel: SkillLevel.Beginner },
      { id: (i + 3).toString(), name: '', skillLevel: SkillLevel.Beginner },
      { id: (i + 4).toString(), name: '', skillLevel: SkillLevel.Beginner }
    ]))
  );

  // Handler to update a specific match
  const updateMatch = (updatedMatch: Match) => {
    setMatches(matches.map(match => 
      match.id === updatedMatch.id ? updatedMatch : match
    ));
  };

  // Handler to add a new match
  const addMatch = () => {
      setMatches([...matches, createMatch([
        { id: (matches.length + 1).toString(), name: '', skillLevel: SkillLevel.Beginner },
        { id: (matches.length + 2).toString(), name: '', skillLevel: SkillLevel.Beginner },
        { id: (matches.length + 3).toString(), name: '', skillLevel: SkillLevel.Beginner },
        { id: (matches.length + 4).toString(), name: '', skillLevel: SkillLevel.Beginner }
      ])]);
  };

  // Handler to remove a match
  const removeMatch = (id: string) => {
    setMatches(matches.filter(match => match.id !== id));
  };

  return {
    matches,
    updateMatch,
    addMatch,   
    removeMatch
  };
} 