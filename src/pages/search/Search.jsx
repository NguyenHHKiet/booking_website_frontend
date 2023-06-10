import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Subscribe from "../../components/subscribe/Subscribe"
import Footer from "../../components/footer/Footer"
import RenderSearchPage from "../../components/render/RenderSearchPage"

import NAVBAR from "../../data/navBar.json"
import FOOTER from "../../data/footer.json"
import SEARCH_STATE from "../../data/search.json"

const Search = () => {
    const [search, setSearch] = useState(SEARCH_STATE)
    const [navBar, setNavBar] = useState(NAVBAR)
    const [footer, setFooter] = useState(FOOTER)

    return (
        <>
            <Navbar navBar={navBar} choice={false} />
            <RenderSearchPage search={search} />
            <Subscribe />
            <Footer footer={footer} />
        </>
    )
}

export default Search
