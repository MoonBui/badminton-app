import { useState, useEffect } from 'react';
import { Match } from '../types/Match';
import { getMatches, createMatch as createMatchApi } from '../services/matchService';

export function useMatches(initialCount = 1) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Load matches from API on component mount
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const data = await getMatches();
        setMatches(data.length > 0 ? data : []);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        // Fallback to local state if API fails
        setMatches([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  // Handler to update a specific match
  const updateMatch = (updatedMatch: Match) => {
    setMatches(matches.map(match => 
      match.id === updatedMatch.id ? updatedMatch : match
    ));
  };

  // Handler to add a new match
  const addMatch = async () => {
    try {
      const newMatch = await createMatchApi();
      setMatches([...matches, newMatch]);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to add match'));
    }
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