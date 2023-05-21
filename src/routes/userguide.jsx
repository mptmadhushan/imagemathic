import React from "react";
import { Link } from 'react-router-dom';

function Userguide() {

    return (

        <div className="main-body-section">
            <div className="flex body-cotainer p-6 h-screen justify-center items-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400">
                <div className="body-content-container m-10 justify-center">

                    <div className="form-body p-10 mx-auto relative">

                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[480px] h-[700px] flex flex-col justify-center overflow-clip relative">



                            <div className="absolute -top-10 -left-10 opacity-25">
                                <div className="w-[80px] h-[80px] rounded-full bg-pink-400"></div>
                            </div>
                            <div className="absolute -top-10 -right-10 ">
                                <div className="w-[130px] h-[130px] rounded-full bg-purple-500 opacity-25"></div>
                            </div>
                            <div className="absolute -bottom-10 -left-20 transform -translate-y-1/2 opacity-25">
                                <div className="w-[150px] h-[150px] rounded-full bg-indigo-500"></div>
                            </div>
                            <div className="absolute -bottom-[80px] -right-10 transform -translate-y-1/7 opacity-25">
                                <div className="w-[200px] h-[200px] rounded-full bg-pink-600"></div>
                            </div>




                            <h3 className="mb-6 text-left text-xl z-10">How to use the application</h3>


                            <div className="step-container mb-3">
                                <span className="text-indigo-500 text-bold">First Step</span>
                                <p className="">In the Home Screen, click the <span className="text-blue-600">"Choose File"</span> button and choose the image of the handwritten equation.</p>
                            </div>

                            <div className="step-container mb-3">
                                <span className="text-indigo-500 text-bold">Second Step</span>
                                <p className="">Check whether the entered equation is correct or not. </p>
                            </div>

                            <div className="step-container mb-3">
                                <span className="text-indigo-500 text-bold">Third Step</span>
                                <p className="">Click the "Predict" button to solve the equation.</p>
                            </div>

                            <div className="step-container mb-3">
                                <span className="text-indigo-500 text-bold">Fourth Step</span>
                                <p className="">Then you can see the solution for the entered equation. </p>
                            </div>

                            <div className="step-container mb-3 mt-4">
                                <span className="text-pink-500 text-bold">Important</span>
                                <p className="">- Make sure your equation is written correctly without any mistakes.</p>
                                <p className="">- The radical equation should have the <span className="text-blue-600"> radicand sybmol (√) </span> and <span className="text-pink-600">don't use the words inside the equation.</span> i.e: "sqrt", "square root".</p>
                            </div>

                            <Link to="/">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 cursor-pointer"

                                >
                                    Back
                                </button>
                            </Link>
                        </div>
                    </div>
        
                </div>
                
            </div>
            
        </div>
    );
}

export default Userguide;