import React from "react";

const RenderDetailPage = ({ detail }) => {
    console.log(detail);
    return (
        <div className="container">
            <div className="py-3">{detail.name}</div>
        </div>
    );
};

export default RenderDetailPage;
