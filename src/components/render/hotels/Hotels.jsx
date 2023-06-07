import React from "react";
import styled from "./Hotel.module.scss";
import { useNavigate } from "react-router-dom";

const Hotels = ({ hotelList, choiceItem }) => {
    const navigation = useNavigate();
    const choiceItemHandler = (item) => {
        choiceItem(item);
        navigation("/detail");
    };

    return (
        <div className={`py-1`}>
            <h1 className={`py-1`}>Homes guests love</h1>
            <div className={`py-1`}>
                <div className={styled["img-container"]}>
                    {hotelList.map((item) => (
                        <div
                            key={item.name}
                            className={styled.cards}
                            onClick={() => choiceItemHandler(item)}
                        >
                            <img src={item.image_url} alt={item.name} />
                            <div className={styled["card-typo"]}>
                                <h3>{item.name}</h3>
                                <p>{item.city}</p>
                                <h4>Stating from ${item.price}</h4>
                                <div>
                                    <span className={styled.rating}>
                                        {item.rate}
                                    </span>
                                    <span>{item.type}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hotels;
