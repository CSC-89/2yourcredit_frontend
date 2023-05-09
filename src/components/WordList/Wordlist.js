import React from "react";
import wordlist from '../../data/wordlist_NO.json'

const WordList = () => {
    return (
        <>
            
            <div className="bg-sky-200/50 lg:px-72 py-12 absolute">
                <div className="bg-gray-50 py-4 mx-2 rounded-md mt-12 px-5 my-5">
                    <a href="/">
                <div className=" mx-auto w-20 text-center p-2 border-1 bg-gray-300 rounded-md">TILBAKE</div>
                </a>
                {wordlist.map((elm, i) => {
                    return(
                    <div key={i} className="py-5">
                    <h3 className="uppercase font-semibold text-2xl">{elm.name}</h3>
                    <p className="italic text-gray-800 pb-5">{elm.text}</p>
                    <hr />
                </div>
                )})}
                <a href="/">
                <div className=" mx-auto w-20 text-center p-2 border-1 bg-gray-300 rounded-md">TILBAKE</div>
                </a>
                </div>
            </div>
        </>
    );
};

export default WordList;
