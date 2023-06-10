import React from "react"
import SearchPopup from "../input/SearchPopup"
import SearchList from "../render/search/SearchList"

const RenderSearchPage = ({ search }) => {
    return (
        <div className="container">
            <div className="search-page py-3 flex gap-4">
                <aside className="input-search">
                    <SearchPopup />
                </aside>
                <main className="list-hotel">
                    <SearchList search={search} />
                </main>
            </div>
        </div>
    )
}

export default RenderSearchPage
