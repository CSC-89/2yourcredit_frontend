import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Selection } from "../Selection";
import { Faqs } from "../Faqs";
import ThreeCards from "../ThreeCards";

const Main = (props) => {
    const [cookies, setCookie] = useCookies("cookies");

    const [data, setData] = useState(null);

    // React.useEffect(() => {
    //     fetch(
    //         "http://localhost:5000/finance-affiliate-app/europe-west1/hello/sendData",
    //         {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //                 name: "Chris",
    //                 age: 32,
    //             }),
    //         }
    //     )
    //         .then((res) => res.json())
    //         .catch((e) => console.log(e));
    // }, []);

    // console.log("data:", data);
    // useEffect(() => {
    //     setCookie("TestCookie", "Hello", {
    //         path: "/",
    //         // domain: "2yourcredit.com",
    //         secure: false,
    //         httpOnly: false,
    //     });
    // }, [setCookie]);

    return (
        <div class="">
            <Header country={props.country} />
            <main className="bg-sky-200/50">
                <Hero country={props.country} />
                <ThreeCards country={props.country} />
                <Selection country={props.country} className="mx-auto" />
                <Faqs country={props.country}/>
            </main>
            <Footer country={props.country} />
        </div>
    );
};

export default Main;
