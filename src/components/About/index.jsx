import React, { useState, useEffect } from "react";
import useLocation from "../../hooks/useLocation";
import logo from "../../assets/logo.png";
import projects from "../../api/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const About = () => {
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

    const handleShowArchive = () => {
        document.getElementById("archive")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 pt-4 sm:px-12 md:px-24 lg:px-56 bg-customGray">
                <div className="flex flex-col text-sm sm:text-left">
                    {error ? (
                        <p className="text-red-400">{error}</p>
                    ) : (
                        <p className="italic text-black">
                            {location}, Indonesia <br />
                            {temperature ? `${temperature}°C` : "Loading..."}
                        </p>
                    )}
                    {/* Waktu */}
                    <p className="mt-1 text-gray-600">{currentTime}</p>
                </div>
                <img src={logo} alt="Logo" className="w-14 sm:w-16 md:w-20" />
            </nav>

            {/* About Section */}
            <section id="about" className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 pb-10 text-gray-900 md:flex-row sm:px-12 md:px-24 lg:px-56 bg-customGray">
                
                {/* Carousel */}
                <div className="w-full md:w-1/2 md:pr-8">
                    <Swiper
                        modules={[EffectCoverflow, Pagination]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: "auto" },
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 300,
                            modifier: 1.5,
                            slideShadows: false,
                        }}
                        pagination={{ clickable: true }}
                        className="max-w-lg mx-auto"
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id} className="w-64 overflow-hidden rounded-lg">
                                <img
                                    src={project.photo}
                                    alt={project.name}
                                    className="object-cover w-full h-64"
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
                
                {/* Description */}
                <div className="w-full max-w-2xl text-center md:w-1/2 md:text-left">
                    <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
                        Helping you transform your ideas into interactive digital experiences.
                    </h1>
                    <p className="mt-4 text-lg text-gray-700">
                        Explore some of my projects below
                    </p>
                    
                    {/* Button Projects */}
                    <div className="flex justify-center gap-5 md:justify-start ">
                        <button 
                            onClick={handleShowArchive} 
                            className="flex items-center justify-center px-4 py-2 mt-5 text-sm text-white transition-transform duration-300 bg-black rounded-full shadow-md sm:w-auto sm:px-6 sm:py-3 sm:text-lg md:mt-8 hover:scale-105 hover:shadow-lg"
                        >
                            See Projects
                        </button>
                        <a href="/AboutMe" 
                    className="flex items-center justify-center px-4 py-2 mt-5 text-sm transition-transform duration-300 border border-black rounded-full sm:w-auto sm:px-6 sm:py-3 sm:text-lg md:mt-8 hover:scale-105 hover:shadow-lg">
                    About Me
                </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
