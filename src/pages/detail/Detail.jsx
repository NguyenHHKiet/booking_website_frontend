import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Subscribe from "../../components/subscribe/Subscribe"
import Footer from "../../components/footer/Footer"
import RenderDetailPage from "../../components/render/RenderDetailPage"

import NAVBAR from "../../data/navBar.json"
import FOOTER from "../../data/footer.json"
import DETAIL from "../../data/detail.json"

const Detail = () => {
    const [navBar, setNavBar] = useState(NAVBAR)
    const [footer, setFooter] = useState(FOOTER)
    const [detail, setDetail] = useState(DETAIL)

    return (
        <>
            <Navbar navBar={navBar} choice={false} />
            <RenderDetailPage detail={detail} />
            <Subscribe />
            <Footer footer={footer} />
        </>
    )
}

export default Detail
