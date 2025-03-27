import { Match } from "../types/Match"
import { Player } from "../types/Player"
import { useState } from "react"


export function useMatchEntry(
    match: Match,
    players: Player[],
    addMatch: () => void,
    // onChange: (match: Match) => void,

    // onRemove: (match: Match) => void
) {
    const [localMatch, setLocalMatch] = useState(match)
    const [localPlayers, setLocalPlayers] = useState(players)

    const handleMatchAdd = () => {
        addMatch()
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
