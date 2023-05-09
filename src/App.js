import React, { useEffect, useState } from "react";
import Main from "./components/main/Main";
import WordList from "./components/WordList/Wordlist";
import LocationSelect from "./components/LocationSelect";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import "./App.css";
import LoadingPage from "./components/LoadingComponent";

function App() {
    const [geodata, setGeodata] = useState(null);

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "bf4f0bcd4dmsh80d029d71bb44fbp10af29jsn13df6ebb96cb",
            "X-RapidAPI-Host": "geocodeapi.p.rapidapi.com",
        },
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, handleError);
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    const handleError = (error) => {
        let errorStr;
        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorStr = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                errorStr = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                errorStr = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                errorStr = "An unknown error occurred.";
                break;
            default:
                errorStr = "An unknown error occurred.";
        }
        console.error("Error occurred: " + errorStr);
        setGeodata(false);
    };

    const showPosition = (position) => {
        fetch(
            `https://geocodeapi.p.rapidapi.com/GetTimezone?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`,
            options
        )
            .then((response) => response.json())
            .then((response) => setGeodata(response))
            .catch((err) => console.error(err));
    };
    useEffect(() => {
        getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
            <Router>
                <Routes>
                    {geodata === null && (
                        <Route exact path="/" element={<LoadingPage />} />
                    )}

                    {geodata === false && (
                        <Route exact path="/" element={<Main
                            country={{
                                name: "Norway",
                                countryId: "NO",
                            }}
                        />} />
                    )}

                    {geodata && (
                        <Route
                            exact
                            path="/"
                            element={
                                <Navigate
                                    to={"/" + geodata.CountryId}
                                    replace
                                />
                            }
                        />
                    )}

                    <Route
                        exact
                        path="/NO"
                        element={
                            <Main
                                country={{
                                    name: "Norway",
                                    countryId: "NO",
                                }}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/SE"
                        element={
                            <Main
                                country={{
                                    name: "Sweden",
                                    countryId: "SE",
                                }}
                            />
                        }
                    />
                      <Route
                        exact
                        path="/DK"
                        element={
                            <Main
                                country={{
                                    name: "Denmark",
                                    countryId: "DK",
                                }}
                            />
                        }
                    />
                    <Route exact path="/ordliste" element={<WordList />} />
                    <Route
                        path="*"
                        element={<h3>Error 404: Site not Found</h3>}
                    />
                </Routes>
            </Router>
    );
}

export default App;
