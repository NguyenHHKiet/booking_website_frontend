import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import RenderHomePage from "../../components/render/RenderHomePage";
import Subscribe from "../../components/subscribe/Subscribe";

const Home = () => {
    return (
        <>
            <Navbar />
            <RenderHomePage />
            <Subscribe />
            <Footer />
        </>
    );
};

export default Home;
