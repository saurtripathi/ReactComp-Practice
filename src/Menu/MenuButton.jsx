import React from 'react'
import Button from '../Buttons/Button'

export default function MenuButton ({children,toggle}) {
    return (
        // <button onClick={toggle}>
        //     {children}
        // </button>

        <Button size="med" className="button" onClick={toggle}>
            {children}
        </Button>
    )

}