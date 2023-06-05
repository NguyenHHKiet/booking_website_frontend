import React from "react";
import styled from "./Navbar.module.scss";
import global from "../../App.module.scss";
import NavBarItem from "./NavBarItem";
import navBar from "../../data/navBar.json";
import Header from "../header/Header";

const Navbar = () => {
    return (
        <div className={styled.nav}>
            <div className={global.container}>
                <div className={[global.flex, global.flex__between].join(" ")}>
                    <h3>Booking Website</h3>
                    <div className={[global.flex, styled.nav__gap].join(" ")}>
                        <button className={styled.nav__btn} type="submit">
                            Register
                        </button>
                        <button className={styled.nav__btn} type="submit">
                            Login
                        </button>
                    </div>
                </div>
                <NavBarItem items={navBar} />
                <Header />
            </div>
        </div>
    );
};

export default Navbar;
