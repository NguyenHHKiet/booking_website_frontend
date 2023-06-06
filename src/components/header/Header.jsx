import React from "react";
import styled from "../navbar/Navbar.module.scss";
import "../../App.scss";

const Header = () => {
    const submittedHandle = () => {
        window.location.replace("http://localhost:3000/seach");
    };
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
            <div className={styled.search} style={{ margin: "0.5rem 0" }}>
                <form
                    // onSubmit={submittedHandle}
                    className={`flex flex__between`}
                >
                    <input
                        placeholder="Where are you going?"
                        type="search"
                        name="searching"
                    />
                    <input placeholder="Date" type="date" name="search-date" />
                    <input
                        placeholder="People"
                        type="radio"
                        name="search-people"
                    />
                    <button
                        className={styled.nav__submitted}
                        type="button"
                        onClick={submittedHandle}
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Header;
