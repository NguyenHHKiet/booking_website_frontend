import React from "react";
import styled from "./Navbar.module.scss";
import "../../App.scss";
import NavBarItem from "./NavBarItem";
import Header from "../header/Header";

const Navbar = ({ navBar, choice = "true" }) => {
    return (
        <div className={styled.nav}>
            <div className={`container`}>
                <div className={`flex flex__between`}>
                    <h3>Booking Website</h3>
                    <div className={`flex ${styled.nav__gap}`}>
                        <button className={styled.nav__btn} type="submit">
                            Register
                        </button>
                        <button className={styled.nav__btn} type="submit">
                            Login
                        </button>
                    </div>
                </div>
                <NavBarItem items={navBar} />
                {choice ? <Header /> : ""}
            </div>
        </div>
    );
};

export default Navbar;
