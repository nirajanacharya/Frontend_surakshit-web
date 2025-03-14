import React from "react";

const LicensingPage = () => {
    return (
        <div className="flex justify-center items-center h-screen min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 px-4">
            <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-2xl relative z-10 border border-gray-200">
                <h2 className="text-center text-4xl font-extrabold text-blue-500 mb-6">Licensing Information</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    This project is licensed under the <span className="font-semibold">MIT License</span>. 
                    You are free to use, modify, and distribute this software, provided that proper 
                    attribution is given to the original author.
                </p>
                <h3 className="text-2xl font-bold text-blue-500 mb-4">Usage Rights</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                    <li>Personal and commercial use is allowed.</li>
                    <li>Modification and redistribution are permitted.</li>
                    <li>Attribution to the original author is required.</li>
                </ul>
                <h3 className="text-2xl font-bold text-blue-500 mb-4">Restrictions</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                    <li>Cannot hold the author liable for any damages.</li>
                    <li>No warranty is provided with this software.</li>
                </ul>
                <h3 className="text-2xl font-bold text-blue-500 mb-4">Disclaimer</h3>
                <p className="text-gray-700 leading-relaxed">
                    This software is provided "as-is" without any express or implied warranty. 
                    The author is not responsible for any issues arising from its use.
                </p>
            </div>
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute -inset-[10px] opacity-50">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px] animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default LicensingPage;
