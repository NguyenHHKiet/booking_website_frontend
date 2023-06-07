import React from "react";
import styled from "./RenderDetailPage.module.scss";

const RenderDetailPage = ({ detail }) => {
    return (
        <div className="container">
            <div className={`${styled.detail} py-3`}>
                <div className={`${styled.detail__header}`}>
                    <div>
                        <h2>{detail.name}</h2>
                        <span style={{ fontSize: "0.85rem" }}>
                            <i
                                style={{
                                    fontSize: "1rem",
                                    marginRight: "0.25rem",
                                }}
                                className="fa fa-map-marker"
                            ></i>{" "}
                            {detail.address}
                        </span>
                        <p className="lightblue">{detail.distance}</p>
                        <p className="green">{detail.price}</p>
                    </div>
                    <button className="reserve" type="button">
                        Reserve or Book Now!
                    </button>
                </div>
                <div className={`${styled.detail__images} py-1`}>
                    {detail.photos.map((item, index) => (
                        <img key={index} src={item} alt={item} loading="lazy" />
                    ))}
                </div>
                <div className={`${styled.detail__footer} py-1`}>
                    <div>
                        <h2 style={{ marginBottom: "1rem" }}>{detail.title}</h2>
                        <p
                            style={{
                                fontSize: "0.85rem",
                                fontWeight: "500",
                                opacity: "80%",
                            }}
                        >
                            {detail.description}
                        </p>
                    </div>
                    <div
                        className={styled.credit}
                        style={{ backgroundColor: "#EBF3FF" }}
                    >
                        <h3 style={{ opacity: "60%" }}>
                            Perfect for a 9-night stay!
                        </h3>
                        <p style={{ opacity: "80%" }}>
                            Located in the real heart of Krakow, this property
                            has an excellent location score of 9.8!
                        </p>
                        <h2>
                            ${detail.nine_night_price}{" "}
                            <span style={{ opacity: "60%" }}>(9 nights)</span>
                        </h2>
                        <button className="reserve" type="button">
                            Reserve or Book Now!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RenderDetailPage;
