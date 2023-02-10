import React from "react";
import { Link } from "react-router-dom";
import "./Customcss.css";
export default function Otpver() {
    return (
        <div>
            <div className="bg-gray-100 h-screen">
                <div className="flex flex-col w-full pt-36 items-center justify-center">
                    <div>
                        <div className="otpver_mainBox rounded-md  py-10 px-12 shadow-lg">
                            <h1 className=" text-xl mt-2 text-center font-semibold custom_resendBtn">
                                OTP - Verification
                            </h1>
                            <div className=" mt-6 flex space-x-4 m-10 justify-center">
                                <input
                                    placeholder="4 Digit OTP"
                                    className="otpver-textBox bg-gray-100 rounded-md p-2 outline-none"
                                />

                                <Link to="/">
                                    <button
                                        className=" p-2 rounded-md font-semibold text-white"
                                        id="signupBtn"
                                    >
                                        Verify
                                    </button>
                                </Link>
                            </div>
                            <p />
                            {/* <p className="custom_resendBtn font-bold text-center">
                                Resend Otp
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}