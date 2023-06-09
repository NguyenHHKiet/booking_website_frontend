import React from "react"
import styled from "./SearchPopup.module.scss"

const SearchPopup = () => {
    return (
        <div className={styled.box} style={{ backgroundColor: "#FEBB02" }}>
            <h3>Search</h3>
            <section>
                <form className={styled.box__form}>
                    <div>
                        <label htmlFor="destination">Destination</label>
                        <input type="text" name="destination" />
                        <br />
                        <label htmlFor="check-in">Check-in Date</label>
                        <input type="text" name="check-in" />
                    </div>
                    <div className={styled.options}>
                        <h5>Options</h5>
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
    )
}

export default SearchPopup
