// import Image from 'next/future/image'
import { React, useEffect, useState } from "react";
import { Container } from "./Container";
import SliderBox from "./UI/SliderBox";
import NoBanks from "./NoBanks";
import LoadingPage from "./LoadingComponent";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import SelectionProduct from "./Selection-product";
import contentData from "../data/content";
import { Pagination } from "@mui/material/";
import flagNO from "../assets/imgs/flags/norway-flag-icon.png"
import flagSE from "../assets/imgs/flags/sweden-flag-icon.svg"
import flagDK from "../assets/imgs/flags/denmark-flag-icon.svg"

const options = [
    {
        label: 'Norway',
        value: "NO",
        image: flagNO,
    },
    {
        label: 'Sweden',
        value: "SE",
        image: flagSE,
    },
    {
        label: 'Denmark',
        value: "DK",
        image: flagDK,
    }
];

export function Selection(props) {
    const [banksArray, setBanksArray] = useState([]);
    const [loadStatus, setLoadStatus] = useState(false);
    const [priceSliderData, setPriceSliderData] = useState(40000);
    const [yearSliderData, setYearSliderData] = useState(3);

    const countryId = props.country.countryId;
    const dbRef = collection(db, `banks_${countryId}`);
    const content = contentData[`${countryId}`];

    const getData = async () => {
        //Get the data from Firebase database
        const data = await getDocs(dbRef).catch((e) => console.log(e));

        //Place data into local state
        await setBanksArray(
            data.docs.map((elem) => ({
                ...elem.data(),
                id: elem.id,
            }))
        );

        await setTimeout(() => {
            //Avoid async load issues by setting a timeout for the load status change.
            setLoadStatus(true);
        }, 1000);

        clearTimeout();
    };

    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onPriceChange = (price) => {
        setPriceSliderData(price);
    };

    const onYearChange = (year) => {
        setYearSliderData(year);
    };

    const filteredBanks = banksArray
        .filter((bank) => {
            return (
                priceSliderData >= bank.minLoanAmount &&
                priceSliderData <= bank.maxLoanAmount
            );
        })
        .sort((a, b) => {
            const aa = parseInt(a.rating)
            const bb = parseInt(b.rating)
            if (aa < bb) {
                return 1;
            }
            if (aa > bb) {
                return -1;
            }
            return 0;
        });

    return (
        <section
            id="selection"
            aria-label="Our Selection"
            className=" py-10 mx-auto"
        >
            <hr id="tab" className="my-8 h-px bg-gray-300 border-0 dark:bg-gray-100 w-20 py-1 rounded-xl mx-auto"/>
            <Container className=" min-h-screen pt-20 bg-opacity-60">
                <div className="mx-auto max-w-2xl md:text-center bg-opacity-60">
                    {/* <h2 className="font-display text-center text-3xl tracking-tight text-slate-900 sm:text-4xl">
                        {content.selection_text1}
                    </h2> */}
                    <p className="text-center mt-4 text-2xl md:text-4xl tracking-tight text-slate-700">
                        {content.selection_text2}
                    </p>
                </div>
                <SliderBox
                    onPriceChange={onPriceChange}
                    onYearChange={onYearChange}
                    price={priceSliderData}
                />
                {!loadStatus && <LoadingPage />}

                <div id="countrySelection" className="mt-16 lg:mt-20 flex items-center gap-x-5 md:gap-x-8">
                        {options.map((elm, i) => {
                          return (
                            <form method="GET" action={"/" + elm.value + "#selection"}>
                                <button type="submit" key={i} id={`button_${elm.value}`} className={`w-8 md:w-10 h-8 md:h-10 mt-5 md:mt-0 p-1 border rounded-md ${elm.value === countryId && "focus:outline-none disabled:opacity-25"}`} disabled={elm.value === countryId}>
                                <img src={elm.image} alt={elm.label} />
                                </button>
                            </form>
                          )
                        })}
                    </div>

                {loadStatus && (
                    <div>
                        <p className="mt-2 lg:mt-2 text-sm italic mb-4">
                            Showing{" "}
                            <span className="font-bold">
                                {!filteredBanks.length ? 0 : 1} -{" "}
                                {filteredBanks.length}
                            </span>{" "}
                            of{" "}
                            <span className="font-bold">
                                {filteredBanks.length}
                            </span>{" "}
                            items
                        </p>
                        {/* <Pagination count={10} color="primary"/> */}
                        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-3 mt-5">
                            {/* If no banks are found */}
                            {filteredBanks.length === 0 && (
                                <li className="col-start-2 text-center">
                                    <NoBanks countryId={countryId}/>
                                </li>
                            )}

                            {filteredBanks.length > 0 &&
                                filteredBanks.map((bank, columnIndex) => (
                                    <li key={columnIndex}>
                                        <SelectionProduct
                                            countryId={countryId}
                                            productInfo={bank}
                                            year={yearSliderData}
                                            loanAmount={priceSliderData}
                                        />
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
            </Container>
        </section>
    );
}
