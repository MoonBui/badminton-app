import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { SkillLevel } from '../types/SkillLevel'

interface SkillLevelMenuProps {
    value: SkillLevel
    onChange: (skillLevel: SkillLevel) => void
}

const SkillLevelMenu: React.FC<SkillLevelMenuProps> = ({ value, onChange }) => {
    return (
        <FormControl variant="outlined" className="min-w-[200px]">
            <InputLabel id="skill-level-label">Skill Level</InputLabel>
            <Select
                labelId="skill-level-label"
                id="skill-level"
                value={value}
                onChange={(e) => onChange(e.target.value as SkillLevel)}
                label="Skill Level"
                className="w-32"
            >
                {Object.values(SkillLevel).map((level) => (
                    <MenuItem key={level} value={level}>
                        {level}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SkillLevelMenu
