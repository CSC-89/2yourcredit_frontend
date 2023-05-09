// import Image from 'next/future/image'

import { Container } from "./Container";
import contentData from "../data/content";


export function Faqs(props) {
    const countryId = props.country.countryId;
    const content = contentData[`${countryId}`];

    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="relative overflow-hidden bg-gradient-to-b from-sky-100/50 to-white pb-20  pt-10 sm:pb-32 sm:pt-10"
        >
                       <hr id="tab" className="my-8 h-px bg-gray-300 border-0 dark:bg-gray-700 w-20 py-1 rounded-xl mx-auto opacity-60"/>

            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faq-title"
                        className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                    >
                        {content.faqs_title}
                    </h2>
                </div>
                <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                    {content.faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul className="flex flex-col gap-y-8">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="font-display text-lg leading-7 text-slate-900">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-4 text-sm text-slate-700">
                                            {faq.answer}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
