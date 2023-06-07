import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Subscribe from "../../components/subscribe/Subscribe";
import Footer from "../../components/footer/Footer";

import NAVBAR from "../../data/navBar.json";
import FOOTER from "../../data/footer.json";
import RenderDetailPage from "../../components/render/RenderDetailPage";

const Detail = ({ detail }) => {
    const [navBar, setNavBar] = useState(NAVBAR);
    const [footer, setFooter] = useState(FOOTER);

    return (
        <>
            <Navbar navBar={navBar} choice={false} />
            <RenderDetailPage detail={detail} />
            <Subscribe />
            <Footer footer={footer} />
        </>
    );
};

export default Detail;
