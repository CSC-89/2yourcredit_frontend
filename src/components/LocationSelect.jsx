import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import logo from "../assets/imgs/logo/logo4.svg";

const LocationSelect = () => {
    return (
        <>
            <div className=" h-screen my-auto bg-gradient-to-b from-slate-200/50 to-sky-300/50">
                <div className=" container mx-auto text-center flex justify-center w-full mb-5">
                    <div className="mt-20 sm:mt-40 max-w-sm py-5 mx-4 bg-slate-50 relative rounded-2xl p-6 shadow-xl shadow-slate-900/10 hover:shadow-blue-300">
                        <img
                            src={logo}
                            className="h-10 mx-auto w-auto sm:w-3/4 px-4 sm:px-0"
                            alt="2YourCredit.com"
                        />
                        <h1 className="my-5 text-xl italic text-gray-600">
                            <b>Location is turned off..</b>
                        </h1>
                        <h2 className="mb-5 text-xl text-gray-600">
                            <b>Please select your country:</b>
                        </h2>
                        <div className="flex flex-col items-center">
                            <div className="">
                                <a href="/NO" alt="Norge/ Norway">
                                    <button className="m-4">Norge</button>
                                </a>
                                <span className="fi fi-no"></span>
                            </div>
                            <div className="">
                                <a href="/SE" alt="Sverige/ Sweden">
                                    <button className="m-4">Sverige</button>
                                </a>
                                <span className="fi fi-se"></span>
                            </div>
                            <div className="">
                                <a href="/DK" alt="Danmark / Denmark">
                                    <button className="m-4">Danmark</button>
                                </a>
                                <span className="fi fi-dk"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationSelect;
