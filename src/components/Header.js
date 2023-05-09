import { Container } from "./Container";
import logo from "../assets/imgs/logo/logo1.svg";
import flagNO from "../assets/imgs/flags/norway-flag-icon.png"
import flagSE from "../assets/imgs/flags/sweden-flag-icon.svg"
import flagDK from "../assets/imgs/flags/denmark-flag-icon.svg"
import { NavLink } from "./NavLink";
import contentData from "../data/content";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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

export function Header(props) {
    const countryId = props.country.countryId;
    const content = contentData[`${countryId}`];

    return (
            <Container>
                <nav className="relative z-50 py-10">
                    <div className="md:flex items-center md:justify-between">
                        <a href="/" aria-label="Home">
                            <img
                                src={logo}
                                className="h-14 w-auto sm:w-3/4"
                                alt="2YourCredit.com"
                            />
                        </a>
                        <div className="hidden md:flex md:gap-x-6">
                            <span className="text-2xl underline underline-offset-4 text-blue-100">
                                <NavLink href="#selection">
                                    {content.buttons.selection}
                                </NavLink>
                            </span>
                            <span className="text-2xl underline underline-offset-4 text-blue-100">
                                <NavLink href={content.buttons.laws_link}>
                                    {content.buttons.laws_text}
                                </NavLink>
                            </span>
                            {countryId === "NO" && (
                                <span className="text-2xl underline underline-offset-4 text-blue-100">
                                    <NavLink href="/ordliste">
                                        {content.buttons.wordlist}
                                    </NavLink>
                                </span>
                            )}
                        </div>
                        <div id="countrySelection" className="flex items-center gap-x-5 md:gap-x-8">
                        {options.map((elm, i) => {
                          return (
                            <form method="GET" action={"/" + elm.value} className="flex">
                                
                                <button type="submit" key={i} id={`button_${elm.value}`} className={`w-8 md:w-10 h-8 md:h-10 mt-5 md:mt-0 p-1 border rounded-md ${elm.value === countryId && "focus:outline-none disabled:opacity-25"}`} disabled={elm.value === countryId}>
                                <img src={elm.image} alt={elm.label} />
                                </button>
                            </form>
                          )
                        })}
                    </div>
                    </div>
                    
                </nav>
            </Container>
    );
}
