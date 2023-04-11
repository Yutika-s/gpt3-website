import React, {useState} from 'react'
import './navbar.css'
//importing the gpt logo
import logo from '../../assets/assets/logo.svg'

// importing icons
import{RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const Menu = () => (
  <>
     <p><a href='#home'>Home</a></p>
      <p><a href='#wgpt3'>What is GPT3?</a></p>
      <p><a href='#possibility'>OpenAI</a></p>
      <p><a href='#features'>Case Studies</a></p>
      <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {

  // toggleMenu is the variable which tells us whether we are showing the mobile menu or not
  // setToggleMenu is a fn that allows us to change the toggleMenu Variable.
  //in the beginning toggleMenu is set to false.
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
    <div className='gpt3__navbar-links'>
    <div className='gpt3__navbar-links_logo'>
    <img src= {logo} alt = 'logo' />
    </div>

    <div className='gpt3__navbar-links_container'>
      <Menu />
    </div>

    </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign In!</p>
        <button type='button'><p>Sign up</p></button>
      </div>

      {/* this part of the code makes the website mobile- friendly by having a menu instead of a nav-bar at the top of the screen. */}
      <div className='gpt3__navbar-menu'>

      {toggleMenu
      /* This is an if-else statement. */
      /* If (?) toggleMenu is currently open, the menu closes on click. Else (:) it remains true. */
        ?<RiCloseLine color = '#fff' size = {27} onClick = {()=> setToggleMenu(false)} />
        :<RiMenu3Line color = '#fff' size = {27} onClick = {()=> setToggleMenu(true)} />

      }
      {toggleMenu &&(
        <div className='gpt3__navbar-menu_container scale-up center'>
        <div className='gpt3__navbar-menu_container-links'>
        
        <Menu />

        <div className='gpt3__navbar-menu_container-links-sign'>
          <p>Sign In!</p>
          <button type='button'><p>Sign up</p></button>
        </div>

        </div>

        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar