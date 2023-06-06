import React from "react";
import styled from "./Cities.module.scss";
import cities from "../../../data/city.json";

const Cities = () => {
    return (
        <ul className={`py-1 ${styled.cities}`}>
            {cities.map((city) => (
                <li key={city.name}>
                    <figure>
                        <img src={city.image} alt={city.name} />
                        <figcaption>
                            {city.name} <br />
                            {city.subText}
                        </figcaption>
                    </figure>
                </li>
            ))}
        </ul>
    );
};

export default Cities;
