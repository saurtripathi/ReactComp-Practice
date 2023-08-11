import React from 'react'




export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        console.log('clicked')
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    open,
                    toggle
                })
            })}
        </div>
    )

}