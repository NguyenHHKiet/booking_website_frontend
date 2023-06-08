import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import styled from "./SearchTools.module.scss";

const SearchTools = () => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const submittedHandle = () => {
        window.location.replace("/search");
    };
    return (
        <div className={styled.search} style={{ margin: "0.5rem 0" }}>
            <form className={`flex flex__between`}>
                <div>
                    <div className="flex" style={{ alignItems: "center" }}>
                        <i className="fa fa-bed"></i>
                        <input
                            placeholder="Where are you going?"
                            type="search"
                            name="searching"
                        />
                    </div>
                    <div
                        className={`flex col-sm-2 ${styled.adult} ${styled.headerSearchItem}`}
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <i className="fa fa-calendar"></i>
                        <p
                            onClick={() => setOpenDate(!openDate)}
                            className={styled.headerSearchText}
                        >{`${format(
                            date[0].startDate,
                            "MM/dd/yyyy"
                        )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</p>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className={styled.date}
                            />
                        )}
                    </div>
                    <div className={`flex flex__between ${styled.adult}`}>
                        <i className="fa fa-user-plus"></i>
                        <p>1 adult •</p>
                        <p>0 children •</p>
                        <p>1 room</p>
                    </div>
                </div>
                <button
                    className={styled.submitted}
                    type="button"
                    onClick={submittedHandle}
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchTools;
