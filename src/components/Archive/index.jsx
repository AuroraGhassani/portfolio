import { showProjects } from "../../hooks/showProjects";
import { useEffect } from "react";
import React from "react";
import projects from "../../api/projects";

const Archive = () => {
    const { data, getData } = showProjects();

    useEffect(() => {
        getData();
    }, []);

    return (
        <main id="archive" className="flex flex-col items-center justify-center min-h-screen gap-10 px-6 py-10 bg-gray-100 md:flex-row md:py-16 md:px-32 lg:px-56">
            
            {/* Bagian Kiri */}
            <div className="w-full max-w-2xl md:text-left md:w-1/3 ">
                <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
                    Personal Works
                </h1>
                <p className="text-sm text-gray-700 md:text-base">
                    Kumpulan proyek pribadi yang saya desain maupun saya clone selama proses pembelajaran.
                </p>

            </div>

            {/* Bagian Kanan */}
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <div key={project.id} className="p-5 transition-all bg-white shadow-lg rounded-xl ">
                        <img src={project.photo} alt={project.name} className="object-cover w-full h-40 rounded-lg md:h-48 drop-shadow-md" />
                        <h3 className="mt-4 text-lg font-bold">{project.name}</h3>
                        <p className="text-sm text-gray-600">{project.description}</p>
                        <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-500 hover:underline">
                            See Project ↗
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Archive;
