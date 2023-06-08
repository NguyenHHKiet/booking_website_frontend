import React from "react";
import SearchTools from "./SearchTools";
import styled from "../navbar/Navbar.module.scss";

const Header = () => {
    return (
        <div>
            <div
                className={`flex`}
                style={{
                    flexDirection: "column",
                    gap: "1.5rem",
                    padding: "1.5rem 0",
                }}
            >
                <h1>A lifetime of discounts? It's Genius</h1>
                <p style={{ opacity: "80%" }}>
                    Get rewarded for your travels - unlock instant savings of
                    10% or more with a free account
                </p>
                <button className={styled.nav__submitted} type="submit">
                    Sign in / Register
                </button>
            </div>
            <SearchTools />
        </div>
    );
};

export default Header;
