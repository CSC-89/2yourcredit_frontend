import React from "react";
import formatter from "../functions/currency-format";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import contentData from "../data/content";

const SelectionProduct = (props) => {
    const bank = props.productInfo;
    const countryId = props.countryId;
    const content = contentData[`${countryId}`];


    return (
        <ul className="flex flex-col gap-y-6 sm:gap-y-8">
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href={bank.trackingUrl} target="_blank">
                <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 hover:shadow-blue-300">
                        <blockquote className="relative">
                            <div id="star-rating" className="float-right">
                                <Rating
                                    name="text-feedback"
                                    value={bank.rating < 40 ? (40 / 10 / 2) : (bank.rating / 10 / 2)}
                                    readOnly
                                    precision={0.25}
                                    emptyIcon={
                                        <StarIcon
                                            style={{ opacity: 0.55 }}
                                            fontSize="inherit"
                                        />
                                    }
                                />
                            </div>
                            <p className="text-md tracking-tight text-slate-900">
                                {" "}
                                <strong>{content.card.amount}:</strong>{" "}
                                <br />
                                {formatter
                                    .format(bank.minLoanAmount)
                                    .replace(",00", "") + " - " + formatter
                                    .format(bank.maxLoanAmount)
                                    .replace(",00", "")}
                            </p>
                            <p className="text-md tracking-tight text-slate-900">
                                {" "}
                                <strong>{content.card.nom_interest}: </strong> {parseFloat(bank.minInterestRate) + " "}
                                    {bank.minInterestRate ? "- " : "N/A"}
                                    {bank.maxInterestRate !== null && parseFloat(bank.maxInterestRate)}{" "}
                                    {bank.maxInterestRate ? "%" : " No limit"}
                            </p>
                            <p className="text-md tracking-tight text-slate-900">
                                {" "}
                                <strong>{content.card.age}: </strong> {bank.minAge} år
                            </p>
                            <p className="text-md tracking-tight text-slate-900">
                                {" "}
                                <strong>{content.card.min_income}: </strong>{" "}
                                {formatter
                                    .format(parseFloat(bank.minIncomeRequired))
                                    .replace(",00", "")}
                            </p>
                            {/* <p className="text-md tracking-tight text-slate-900">
                                {" "}
                                <strong>Utbetaling:</strong> 0 - {bank.payout}{" "}
                                {bank.payout === 1 ? "dag" : "dager"}
                            </p> */}
                        </blockquote>
                        <p className="mt-5 text-xs tracking-tight text-slate-400 italic overflow-scroll h-9 border shadow-inner rounder-lg border-gray-200">
                            {bank.loanExample}
                        </p>
                        <figcaption className="relative mt-3 flex items-center justify-between border-t border-slate-100 pt-6">
                            <div>
                                <div className="font-display text-base text-slate-900">
                                    {bank.name}
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                {content.card.eff_interest}:  {bank.minEffectiveRate}{" "}
                                    {bank.minEffectiveRate ? "- " : "N/A"}
                                    {bank.maxEffectiveRate}{" "}
                                    {bank.maxEffectiveRate && "%"}
                                </div>
                            </div>
                            <div className="overflow-hidden w-32 rounded-md bg-slate-50">
                                <img
                                    className="p-2 w-full object-contain h-20"
                                    src={bank.imageUrl}
                                    alt=""
                                />
                            </div>
                        </figcaption>
                    </figure>
                </li>
            </a>
        </ul>
    );
};

export default SelectionProduct;
