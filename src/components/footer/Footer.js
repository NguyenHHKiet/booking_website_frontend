import React from "react"
import styled from "./Footer.module.scss"

const Footer = ({ footer }) => {
    return (
        <div className="container">
            <div className={styled.footer}>
                {footer.map((item) => (
                    <div
                        key={item.col_number}
                        className={styled.footer__column}>
                        {item.col_values.map((i, index) => (
                            <div key={index}>{i}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer
