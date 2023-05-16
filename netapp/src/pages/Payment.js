import React from "react";
import { NavLink } from "react-router-dom";
import Confirmo from "../components/Confirmo";
const Payment = () => {
    return (
        <div className="lg:container lg:mx-auto grid grid-cols-9 lg:grid-cols-12">
            <div className="col-span-9 lg:col-span-8 xl:col-span-9 bg-white h-auto lg:h-screen relative lg:px-10 p-6 lg:py-12">
                <p>
                    <svg className="inline" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L1 5L5 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <NavLink
                            to="/employees"
                            className="cursor-pointer text-gray-500 font-normal text-base ml-2.5">
                            Back
                    </NavLink>
                </p>
                <h3 className="font-semibold text-gray-800 text-4xl mt-2">Checkout</h3>
                <img src="https://cdn.pixabay.com/photo/2016/05/03/12/19/credit-card-1369111__340.png" class="h-25 w-45"/>
                <div className="mt-4 lg:mt-20">
                    <p className="font-normal text-sm text-gray-600 mb-3">You are now paying Ms. Stone, 30% of the scheduled payment, and accept to transfer the rest 70% after completion of the gig.</p>
                    <h3 className="text-2xl text-gray-800 font-medium">Enter your card details here</h3>

                    <form className="mt-8" autoComplete="off">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <input aria-label="emailAddress" className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none" type="email" name="email" id="email" placeholder="Card Number" />
                            <input aria-label="yourName" className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none" type="text" name="yourName" id="YourName" placeholder="Name on card" />
                            <input aria-label="phoneNumber" className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none" type="text" name="phoneNumber" id="phoneNumber" placeholder="CVC" />
                        </div>
                    </form>
                </div>
                <Confirmo/>
            </div>
            
        </div>
    );
};

export default Payment;