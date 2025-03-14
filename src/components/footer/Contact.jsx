import React from "react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
    };

    return (
        <div className="flex justify-center items-center h-screen min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-center text-2xl font-bold mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name:</label>
                        <input type="text" {...register("name", { required: "Name is required" })} className="w-full p-2 border border-gray-300 rounded" />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email:</label>
                        <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })} className="w-full p-2 border border-gray-300 rounded" />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Message:</label>
                        <textarea {...register("message", { required: "Message is required" })} rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>
                    <button type="submit" className="w-full p-2 bg-green-600 text-white text-lg font-semibold rounded hover:bg-green-700">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
