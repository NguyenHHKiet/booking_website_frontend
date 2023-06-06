import InputSearch from "../../components/input/InputSearch";
import RenderSearch from "../../components/render/search/RenderSearch";

const Search = () => {
    return (
        <div className="container">
            <div className="search-page py-2">
                <aside className="input-search">
                    <InputSearch />
                </aside>
                <main
                    className="list-hotel"
                    style={{ backgroundColor: "greenyellow" }}
                >
                    <RenderSearch />
                </main>
            </div>
        </div>
    );
};

export default Search;
