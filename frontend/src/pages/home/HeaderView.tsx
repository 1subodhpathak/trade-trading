// import React from 'react'

import { navLinks } from "../../constants/names"


const NavItems = () => {
  return (
    <>
      <ul className="nav-ul">
        {navLinks.map(({id, name, href}) => (
          <li key={id} className="nav-li">
            <a href={href} className="nav-li-a" onClick={() => {}}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
const HeaderView = () => {
  return (
    <header>
      <NavItems/>
    </header>
  )
}

export default HeaderView