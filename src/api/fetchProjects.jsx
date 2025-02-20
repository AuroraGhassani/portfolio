export const getProjects = async () => {
    try {
        const selectedWorks = [
            {
                id: 1,
                title: "Mini Project 1",
                link: "https://minpro1.vercel.app/",
                description: "Proyek dummy website untuk restoran masakan Padang, dirancang menggunakan HTML dan Tailwind CSS untuk menciptakan tampilan responsif dan modern. Website ini menampilkan struktur yang rapi dengan berbagai elemen seperti hero section yang menarik, menu favorit, testimoni pelanggan, dan informasi kontak yang mudah diakses. Menggunakan palet warna hangat khas masakan Padang, tipografi yang elegan, dan animasi sederhana, landing page ini mencerminkan profesionalisme sekaligus keunikan budaya kuliner Indonesia. Proyek ini bertujuan untuk melatih keterampilan dalam membangun website dengan desain yang konsisten dan pengalaman pengguna yang optimal.",
                // sepatu grid react 3
            },
            {
                id: 2,
                title: "Mini Project 2",
                link: "https://minpro2.vercel.app/",
                description: "Proyek dummy yang dirancang menggunakan HTML, CSS, Tailwind CSS, dan React, sekaligus mengintegrasikan penggunaan API untuk menampilkan data pengguna secara dinamis. Website ini memiliki fitur interaktif seperti Login, Register, dan Protected Page, di mana hanya pengguna yang telah login dapat mengakses halaman tertentu, memberikan pengalaman yang lebih realistis dan aman. Dengan memanfaatkan React, komponen-komponen website dikelola secara efisien, sedangkan Tailwind CSS digunakan untuk menciptakan desain responsif dan estetis. Proyek ini tidak hanya menampilkan desain yang menarik, tetapi juga menjadi latihan dalam mengimplementasikan autentikasi pengguna, pengelolaan state, dan pengintegrasian API, menjadikannya langkah penting dalam membangun aplikasi web modern yang fungsional dan profesional.",
                // 
            },
            // cook recipe react 6
            {
                id: 3,
                title: "React Excersices",
                link: "https://hands-on-react-6.vercel.app/",
                description: "proyek latihan yang dirancang untuk mengasah kemampuan penerapan React dalam membangun aplikasi web modern. Dibangun menggunakan HTML, CSS, Tailwind CSS, dan React, website ini mengintegrasikan komponen-komponen yang dikelola secara efisien dengan desain yang responsif dan estetis. Proyek ini berfokus pada penguasaan dasar-dasar React, seperti pengelolaan state, props, dan rendering dinamis, sambil memanfaatkan Tailwind CSS untuk mempercepat proses styling. Sebagai salah satu latihan hands-on, website ini bertujuan untuk mengembangkan pemahaman yang lebih mendalam tentang React sekaligus menciptakan pengalaman pengguna yang optimal di berbagai perangkat.",
                // 
            },
            // mini project 1 tailwind resto padang
        ];
        return selectedWorks;
    } catch (error) {
        throw new Error(error);
    }
};