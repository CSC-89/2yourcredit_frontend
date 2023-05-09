import { Container } from "./Container";
import logo from "../assets/imgs/logo/logo1.svg";
import { NavLink } from "./NavLink";
import contentData from "../data/content";

export function Footer(props) {
    const countryId = props.country.countryId;
    const content = contentData[`${countryId}`];

    return (
        <footer className=" border-t-2 border-grey-200 bg-slate-50">
            <Container>
                <div></div>
                <div className="flex flex-col items-center border-t border-slate-400/10 py-2 sm:flex-row-reverse sm:justify-between">
                    <p className="mt-6 text-sm text-slate-500 sm:mt-0">
                        {/* Copyright &copy; {new Date().getFullYear()} 2YourCredit.
                        All rights reserved. */}
                    </p>
                    <nav
                        className="text-sm mb-4 sm:mb-0"
                        aria-label="quick links"
                    >
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
                    </nav>
                    <img
                        src={logo}
                        className="h-10 w-auto sm:w-1/4"
                        alt="2YourCredit.com"
                    />
                </div>
            </Container>
        </footer>
    );
}
