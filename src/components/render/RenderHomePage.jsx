import React from "react";
import Cities from "./cities/Cities";
import Hotels from "./hotels/Hotels";
import Kinds from "./kinds/Kinds";
import global from "../../App.module.scss";

const RenderHomePage = () => {
    return (
        <div className={global.container} style={{ marginTop: "5rem" }}>
            <Cities />
            <Kinds />
            <Hotels />
        </div>
    );
};

export default RenderHomePage;
