import { Match } from "../types/Match"
import { Player } from "../types/Player"
import { useState, useEffect } from "react"


export function useMatchEntry(
    match: Match,
    players: Player[],
    addMatch: () => void,
    // onChange: (match: Match) => void,

    // onRemove: (match: Match) => void
) {
    const [localMatch, setLocalMatch] = useState(match)
    const [localPlayers, setLocalPlayers] = useState(players)

    useEffect(() => {
        setLocalMatch(match)
        setLocalPlayers(players)
    }, [match, players])

    const handleMatchAdd = async () => {
        try {
            await addMatch()
        } catch (error) {
            console.error('Error adding match:', error)
        }
    }

    const handleMatchChange = (match: Match) => {
        setLocalMatch(match)
        // onChange(match)
    }

    
    return {
        handleMatchAdd,
        handleMatchChange
    }
}
