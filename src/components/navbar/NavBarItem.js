import React from "react"
import styled from "./Navbar.module.scss"

const NavBarItem = ({ items }) => {
    return (
        <ul className={`flex`} style={{ margin: "1rem 0" }}>
            {items.map((item) => (
                <li
                    key={item.type}
                    className={`btn flex flex__between ${styled.nav__text} ${styled.nav__gap} ${styled.active}`}>
                    <i className={`fa ${item.icon}`}></i>
                    {item.type}
                </li>
            ))}
        </ul>
    )
}

export default NavBarItem
