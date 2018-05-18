import React from 'react'
import { NavLink, Toolbar } from 'rebass'

const Header = () => (
  <header>
    <Toolbar mb="4em">
      <NavLink href="/#supporter" ml="auto" color="dark_blue">
        Signer le serment
      </NavLink>
      <NavLink href="/team" mx="1em" color="dark_blue">
        Qui sommes nous ?
      </NavLink>
      <NavLink color="dark_blue">Data for good</NavLink>
    </Toolbar>
  </header>
)

export default Header
