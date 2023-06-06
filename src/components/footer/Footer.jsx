import React from "react";
import styled from "./Footer.scss";
import footer from "../../data/footer.json";

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                {footer.map((item) => (
                    <div key={item.col_number} className="footer__column">
                        {item.col_values.map((i, index) => (
                            <div key={index}>{i}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
