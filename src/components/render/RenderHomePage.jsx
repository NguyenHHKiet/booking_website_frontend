import React from "react";
import Cities from "./cities/Cities";
import Hotels from "./hotels/Hotels";
import Kinds from "./kinds/Kinds";

const RenderHomePage = ({ cities, hotelList, types, choiceItem }) => {
    return (
        <div className={`container`} style={{ marginTop: "5rem" }}>
            <Cities cities={cities} />
            <Kinds types={types} />
            <Hotels hotelList={hotelList} choiceItem={choiceItem} />
        </div>
    );
};

export default RenderHomePage;
