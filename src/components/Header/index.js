import React from 'react'
import { NavLink, Toolbar, Link } from 'rebass'

const Header = () => (
  <header>
    <Toolbar mb="4em">
      <NavLink href="/#serment" ml="auto" color="dark_grey">
        Signer le serment
      </NavLink>
      <NavLink href="/presse" ml="1em" color="dark_grey">
        Presse
      </NavLink>
      <NavLink width={['100%', 'auto']} href="/team" ml="1em" color="dark_grey">
        Qui sommes nous ?
      </NavLink>
      <NavLink
        hiden={['true', 'false']}
        href="http://www.dataforgood.fr/?utm_source=hippocrate_batch4&utm_campaign=heading_website"
        target="_blank"
        ml="1em"
        color="dark_grey"
      >
        Data for good
      </NavLink>
    </Toolbar>
  </header>
)

export default Header
