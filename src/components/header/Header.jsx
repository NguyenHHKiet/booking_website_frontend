import React from "react";
import styled from "../navbar/Navbar.module.scss";
import global from "../../App.module.scss";

const Header = () => {
    const submittedHandle = () => {
        window.location.replace("http://localhost:3000/seach");
    };
    return (
        <div>
            <div
                className={[global.flex].join(" ")}
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
            <div className={styled.search} style={{ margin: "0.5rem 0" }}>
                <form
                    onSubmit={submittedHandle}
                    className={[global.flex, global.flex__between].join(" ")}
                >
                    <input
                        placeholder="Where are you going?"
                        type="search"
                        name="searching"
                        value=""
                    />
                    <input
                        placeholder="Date"
                        type="date"
                        name="search-date"
                        value=""
                    />
                    <input
                        placeholder="People"
                        type="radio"
                        name="search-people"
                        value=""
                    />
                    <button className={styled.nav__submitted} type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Header;
