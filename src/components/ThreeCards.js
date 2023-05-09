import React from "react";
import contentData from '../data/content'
import num1 from "../assets/imgs/icons/numbers/one-svgrepo-com.svg";
import num2 from "../assets/imgs/icons/numbers/two-svgrepo-com.svg";
import num3 from "../assets/imgs/icons/numbers/three-svgrepo-com.svg";

const ThreeCards = (props) => {
    const countryId = props.country.countryId;
    const content = contentData[`${countryId}`];

    return (
        <div id="threeCards" className=" bg-gradient-to-b from-white to-sky-100/50 py-10">
            <div className="container mx-auto">
                <div
                    id="cards-flex"
                    className="flex justify-center flex-col sm:flex-row"
                >
                    <div className="mx-auto w-80 mb-4 max-h-80 flex items-center flex-col">
                        <img className="w-20 m-4" src={num1} alt="" />
                        <h2 className="my-2 text-xl">
                            <strong>{content.three_cards_content.step_1.title}</strong>
                        </h2>
                        <p className=" italic text-md text-center">
                        {content.three_cards_content.step_1.message}
                        </p>
                    </div>
                    <div className="mx-auto w-80 mb-4 max-h-80 flex items-center flex-col">
                        <img className="w-20 m-4" src={num2} alt="" />
                        <h2 className="my-2 text-xl">
                            <strong>{content.three_cards_content.step_2.title}</strong>
                        </h2>
                        <p className=" italic text-md text-center">
                        {content.three_cards_content.step_2.message}
                        </p>
                    </div>
                    <div className="mx-auto w-80 mb-4 max-h-80 flex items-center flex-col">
                        <img className="w-20 m-4" src={num3} alt="" />
                        <h2 className="my-2 text-xl">
                            <strong>{content.three_cards_content.step_3.title}</strong>
                        </h2>
                        <p className=" italic text-md text-center">
                        {content.three_cards_content.step_3.message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeCards;
