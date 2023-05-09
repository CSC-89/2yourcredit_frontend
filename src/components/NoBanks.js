import React from "react";
import contentData from "../data/content";
const NoBanks = (props) => {
    const content = contentData[`${props.countryId}`];

    return (
        <>
            <div className="relative rounded-2xl bg-white p-6 shadow-xl shadow-blue-300">
                <h1 className="mb-5 text-xl">
                    <b>{content.no_banks}..</b>
                </h1>
            </div>
        </>
    );
};

export default NoBanks;
