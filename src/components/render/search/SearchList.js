import React from "react"
import SearchListItem from "./SearchListItem"

const SearchList = ({ search }) => {
    return (
        <div style={{ display: "grid", gap: "0.75rem" }}>
            {search.map((item) => (
                <SearchListItem key={item.name} item={item} />
            ))}
        </div>
    )
}

export default SearchList
