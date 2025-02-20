import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import profilePic from "../../assets/images/profile_picture.jpg"; // Ganti dengan path foto profil Anda
import logo from "../../assets/logo.png"; // Tambahkan path logo
import projects from "../../api/projects";
import useLocation from "../../hooks/useLocation";

const AboutMe = () => {
    const navigate = useNavigate();
    const { temperature, location, error } = useLocation();
    const [currentTime, setCurrentTime] = useState("");

    // Fungsi untuk update waktu secara real-time
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const date = now.toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
            const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }); // Format: HH:MM AM/PM
            setCurrentTime(`${date}, ${time}`);
        };

        updateClock(); // Set waktu awal
        const interval = setInterval(updateClock, 60000); // Update tiap menit
        return () => clearInterval(interval); // Cleanup saat komponen unmount
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 bg-customGray sm:px-12 md:px-24 lg:px-56">
                {/* Info Lokasi & Waktu */}
                <div className="flex flex-col text-sm sm:text-left">
                    {error ? (
                        <p className="text-red-400">{error}</p>
                    ) : (
                        <p className="italic">
                            {location}, Indonesia <br />
                            {temperature ? `${temperature}°C` : "Loading..."}
                        </p>
                    )}
                    {/* Waktu */}
                    <p className="mt-1">{currentTime}</p>
                </div>

                {/* Logo */}
                <img src={logo} alt="Logo" className="w-14 sm:w-16 md:w-20" />
            </nav>

            <div className="flex w-full">
                {/* Main Content */}
                <div className="flex-1 bg-customGray">
                    <div className="relative max-w-5xl p-6 mx-auto my-10 md:p-10">
                        {/* Back Button */}
                        <button 
                            onClick={() => navigate("/")} 
                            className="absolute top-0 right-0 text-sm px-14 hover:underline"
                        >
                            ← Back to Home
                        </button>
                        
                        {/* Header */}
                        <div className="flex flex-col items-center gap-6 md:flex-row">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="object-cover w-40 h-40 rounded-full shadow-md md:w-48 md:h-48"
                            />
                            <div className="text-center md:text-left">
                                <h1 className="text-3xl font-bold">Aurora Ghassani</h1>
                                <h2 className="text-lg text-gray-600">Frontend Developer | Freelance Architect</h2>
                                <p className="mt-2 text-base text-gray-700">
                                Holding a bachelor's degree in architecture and having 6+ years of experience handling various architectural projects has equipped me with substantial industry knowledge, skills, and a strong foundation in design thinking. Currently, I am expanding my expertise in front-end development to enhance my career opportunities and stay ahead in the evolving field of technology.
                                </p>

                                {/* Action Buttons */}
                                <div className="flex justify-center gap-4 mt-4 md:justify-start">
                                <a
                                    href={`${window.location.origin}/mnt/data/cv-aurora-frontend.pdf`} 
                                    download="cv-aurora-frontend.pdf"
                                    className="flex items-center justify-center px-4 py-2 text-sm text-white transition-transform duration-300 bg-black rounded-full shadow-md sm:w-auto sm:text-lg hover:scale-105 hover:shadow-lg"
                                >
                                    Download Resume
                                </a>

                                </div>
                            </div>
                        </div>

                        {/* Skills & Experience */}
                        <div className="mt-10">
                            <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
                            <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3">
                                {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "UI/UX Design"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-base text-gray-700 bg-gray-100 rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div className="mt-10">
                            <h2 className="text-2xl font-semibold">Work Experience</h2>
                            <div className="mt-4 space-y-4">
                                <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                    <h3 className="text-lg font-semibold">Architect - PT.Waga Indojaya</h3>
                                    <p className="text-base text-gray-600">Sep 2023 - Present</p>
                                    <p className="mt-2 text-base text-gray-700">
                                    I run a business specializing in contracting, architecture, and interior design services. I am open to collaboration on various projects and would be happy to discuss opportunities further. Feel free to contact me for more details.
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                    <h3 className="text-lg font-semibold">Interior Designer - Hyde Living</h3>
                                    <p className="text-base text-gray-600">Jun 2022 - Jan 2024</p>
                                    <p className="mt-2 text-base text-gray-700">
                                    I was responsible for handling housing interior projects, working closely with other divisions such as marketing and contractors. I made key decisions in selecting the right materials to suit each project, managed the budget, and produced detailed 3D and construction drawings.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default AboutMe;
