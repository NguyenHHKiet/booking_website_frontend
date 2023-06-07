import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import "./App.scss";

function App() {
    const [detailItem, setDetailItem] = useState({});
    window.scrollTo(0, 0); // on top of the screen

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home choiceItem={setDetailItem} />} />
                <Route path="/search" element={<Search />} />
                <Route
                    path="/detail"
                    element={<Detail detail={detailItem} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
