import React from 'react'
import { NavLink, Toolbar, Link } from 'rebass'
import Hide from 'hidden-styled'

const Header = ({ location }) => (
  <header>
    <Toolbar bg={'white'} mb="4em">
      <NavLink
        href="/"
        ml="auto"
        color="dark_grey"
        fontWeight={location.pathname === '/' ? 700 : 300}
      >
        Accueil
      </NavLink>
      <NavLink
        href="/presse"
        ml="1em"
        color="dark_grey"
        fontWeight={location.pathname.match('presse') ? 700 : 300}
      >
        Presse
      </NavLink>
      <NavLink
        width={['100%', 'auto']}
        href="/team"
        ml="1em"
        color="dark_grey"
        fontWeight={location.pathname.match('team') ? 700 : 300}
      >
        Qui sommes-nous ?
      </NavLink>
      <Hide xs>
        <NavLink
          href="http://www.dataforgood.fr/?utm_source=hippocrate_batch4&utm_campaign=heading_website"
          target="_blank"
          ml="1em"
          color="dark_grey"
          fontWeight={300}
        >
          Data for good
        </NavLink>
      </Hide>
    </Toolbar>
  </header>
)

export default Header
