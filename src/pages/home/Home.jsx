import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
// import RenderHomePage from "../../components/render/RenderHomePage"
import Subscribe from "../../components/subscribe/Subscribe"
import Footer from "../../components/footer/Footer"

import CITIES from "../../data/city.json"
import HOTEL_LIST from "../../data/hotel_list.json"
import TYPES from "../../data/type.json"
import NAVBAR from "../../data/navBar.json"
import FOOTER from "../../data/footer.json"

const Home = () => {
    const [navBar, setNavBar] = useState(NAVBAR)
    const [footer, setFooter] = useState(FOOTER)

    const [cities, setCities] = useState(CITIES)
    const [hotelList, setHotelList] = useState(HOTEL_LIST)
    const [types, setTypes] = useState(TYPES)

    return (
        <>
            <Navbar navBar={navBar} />
            {/* <RenderHomePage
                cities={cities}
                hotelList={hotelList}
                types={types}
            /> */}
            <Subscribe />
            <Footer footer={footer} />
        </>
    )
}

export default Home
