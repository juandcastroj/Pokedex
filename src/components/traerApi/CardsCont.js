import React from 'react'
import { CardPoke } from './CardPoke'

export const CardsCont = ({ results }) => {

    return (
        <div>
            <ul>
                {
                    results.map(p => (
                        <li key={p.name} > 
                        <CardPoke url={p.url} />
                        </li>                 
            ))
                }
            </ul>
        </div>
    )
}
