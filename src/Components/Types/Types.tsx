import React from 'react'

export interface Props {
    path: string,
    setPath: React.Dispatch<React.SetStateAction<string>>
}