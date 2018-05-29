import React from 'react'
import { NavLink, Toolbar } from 'rebass'

const Header = () => (
  <header>
    <Toolbar mb="4em">
      <NavLink href="/#serment" ml="auto" color="dark_blue">
        Signer le serment
      </NavLink>
      <NavLink href="/presse" ml="auto" color="dark_blue">
        Presse
      </NavLink>
      <NavLink href="/team" mx="1em" color="dark_blue">
        Qui sommes nous ?
      </NavLink>
      <NavLink
        href="http://www.dataforgood.fr/?utm_source=hippocrate_batch4&utm_campaign=heading_website"
        target="_blank"
        color="dark_blue"
      >
        Data for good
      </NavLink>
    </Toolbar>
  </header>
)

export default Header
