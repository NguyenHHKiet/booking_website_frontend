import React from "react"
import styled from "./Subscribe.module.scss"

const Subscribe = () => {
    return (
        <div className="py-2">
            <div className={styled.form}>
                <div className="container py-3">
                    <div className={styled.subscribe}>
                        <h1>Save time, save money!</h1>
                        <p>Sign up and we'll send the best deals to you</p>
                        <form className={styled.subscribe__form}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
