// import Image from 'next/future/image'
import { useState, useEffect } from "react";
import { Container } from "./Container";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import contentData from "../data/content";

export function Hero(props) {
    const [banksArray, setBanksArray] = useState([]);
    const [examples, setExamples] = useState([]);

    const countryId = props.country.countryId;
    const dbRef = collection(db, `banks_${countryId}`);
    const content = contentData[`${countryId}`]

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
    };

    const getExamples = (array) => {
        const examples = [];

        for (let index = 0; index < 4; index++) {
            let item = array.splice(
                Math.floor(Math.random() * array.length),
                1
            );

            if (item === typeof undefined) {
                item = [array.pop()];
            }
            examples.push({ name: item[0].name, logo: item[0].imageUrl });
        }
        const newArr = splitInTwo(examples, 2);
        return newArr;
    };

    const splitInTwo = (array, cols) => {
        //Split the 'bank examples' array into two, for design input later.
        if (cols === 1) return array;
        var size = Math.ceil(array.length / cols);
        return [array.splice(0, size)].concat([array.splice(0, size)]);
    };

    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (banksArray && banksArray.length) {
            setTimeout(() => {
                const examples = getExamples(banksArray);
                setExamples(examples);
            }, 1000);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [banksArray]);

    return (
        <div className="bg-white">
        <Container className={`pt-20 text-center lg:pt-32 bg-hero-pattern bg-cover md:bg-contain bg-no-repeat bg-center min-w-full`}>
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-blue-400 drop-shadow-2xl sm:text-7xl">
                {content.header1} <br />
                <span className="relative whitespace-nowrap text-blue-100">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                        preserveAspectRatio="none"
                    >
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                    </svg>
                    <span className="relative">{content.header2}</span>
                </span>{" "}
            </h1>
            <p className="mx-auto max-w-2xl text-lg tracking-tight text-blue-100 mt-4">
            {content.subheader1}
                {/* <span className="text-white">{content.subheader2}</span>. */}
            </p>
            <div className="sm:mt-10 lg:mx-64 sm:flex sm:justify-center sm:gap-x-6">
                
            </div>
            {
                <div className="mt-10 lg:mt-20 pb-10">
                    <ul className="mt-8 mb-5 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">

                        {examples.map((group, groupIndex) => (
                            <li key={groupIndex}>
                                <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0 p-4 md:p-0 max-w-sm">
                                    {group.map((company) => (
                                        <li key={company.name} className="flex justify-between">
                                            <img
                                                className="p-2 w-full object-contain h-20 bg-white rounded bg-blend-normal shadow-2xl"
                                                src={company.logo}
                                                alt={company.name}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </Container>
        </div>
    );
}
