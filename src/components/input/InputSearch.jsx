import React from "react";
import styled from "./InputSearch.module.scss";

const InputSearch = () => {
    return (
        <div className={styled.box} style={{ backgroundColor: "#FEBB02" }}>
            <h3>Search</h3>
            <section>
                <form>
                    <div>
                        <label for="destination">Destination</label>
                        <input type="text" name="destination" />
                        <br />
                        <label for="check-in">Check-in Date</label>
                        <input type="text" name="check-in" />
                    </div>
                    <div className="options">
                        <h6>Options</h6>
                        <div>
                            <p>Min price for night</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Max price per night</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Adult</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Children</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Room</p>
                            <input type="text" />
                        </div>
                    </div>
                    <button type="submit">Search</button>
                </form>
            </section>
        </div>
    );
};

export default InputSearch;
