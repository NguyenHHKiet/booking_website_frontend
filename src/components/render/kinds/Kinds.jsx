import React from "react";
import styled from "./Kinds.module.scss";
import types from "../../../data/type.json";

const Kinds = () => {
    return (
        <div className={`py-1`}>
            <h1 className={`py-1`}>Browse by property type</h1>
            <div className={`py-1`}>
                <div className={styled["img-container"]}>
                    {types.map((type) => (
                        <div key={type.name} className={styled.cards}>
                            <img src={type.image} alt={type.name} />
                            <div className={styled.typo}>
                                <h4>{type.name}</h4>
                                <p>{type.count} hotel</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Kinds;
