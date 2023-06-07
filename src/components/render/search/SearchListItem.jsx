import React from "react";
import styled from "./SearchListItem.module.scss";

const SearchListItem = ({ item }) => {
    return (
        <div className={`${styled.card}`}>
            <div className={styled.image}>
                <img src={item.image_url} alt={item.name} />
            </div>
            <div className={styled.info}>
                <h3>{item.name}</h3>
                <p>{item.distance} from center</p>
                <span className={styled.tag}>{item.tag}</span>
                <h5>{item.description}</h5>
                <p>{item.type}</p>
                <h5 className={styled.green}>Free cancellation</h5>
                <p className={styled.green}>
                    You can cancel later, so lock in this great price today!
                </p>
            </div>
            <div className={styled.rating}>
                <div>
                    <h4>{item.rate_text}</h4>
                    <span>{item.rate}</span>
                </div>
                <div>
                    <h1>$ {item.price}</h1>
                    <p style={{ opacity: "50%" }}>Includes taxes and fees</p>
                    <button type="submit">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchListItem;
