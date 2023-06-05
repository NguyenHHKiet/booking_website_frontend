import React from "react";
import styled from "./Navbar.module.scss";
import global from "../../App.module.scss";

const NavBarItem = ({ items }) => {
    return (
        <ul className={global.flex} style={{ margin: "1rem 0" }}>
            {items.map((item) => (
                <li
                    key={item.type}
                    className={[global.btn, global.flex, styled.nav__gap].join(
                        " "
                    )}
                >
                    <i className={`fa ${item.icon}`}></i>
                    {item.type}
                </li>
            ))}
        </ul>
    );
};

export default NavBarItem;
