import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu/Menu'
import MenuDropdown  from './Menu/MenuDropdown'
import MenuButton from './Menu/MenuButton'
import MenuItem from './Menu/MenuItem'

function App() {
  const [count, setCount] = useState(0)
  const sports = ['Cricket','BasketBall','VolleyBall']
  const buttonText = 'Sports'
  return (
    <>
      <Menu>
        <MenuButton>
          {buttonText}
        </MenuButton>
        <MenuDropdown> 
          {sports.map(sport => <MenuItem key={sport} ><ol><li><a href='#'>{sport}</a></li></ol></MenuItem>)}
        </MenuDropdown>
      </Menu>
    </>
  )
}

export default App
