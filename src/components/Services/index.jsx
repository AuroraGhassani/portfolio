import React from "react";
import { MdComputer, MdPhoneIphone, MdBrush, MdCode } from "react-icons/md";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-10 px-6 pt-10 pb-10 bg-gray-300 md:px-16 lg:px-32">
      
      {/* Services Grid Section */}
      <div className="w-full max-w-4xl px-4 text-center md:pt-14">
        {/* Heading */}
        <h2 className="pb-6 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
          Happy to collaborate with <strong>you</strong> to <strong>create impactful results.</strong>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10 md:mt-6">
          {/* UX & UI */}
          <div className="flex flex-col items-center w-full p-6 bg-white shadow-lg rounded-xl">
            <MdComputer size={48} className="text-black" />
            <h3 className="mt-4 text-lg font-semibold">UX & UI</h3>
            <p className="mt-2 text-sm text-gray-600">
              Designing interfaces that are intuitive, efficient, and enjoyable to use.
            </p>
          </div>

          {/* Web & Mobile App */}
          <div className="flex flex-col items-center w-full p-6 bg-white shadow-lg rounded-xl">
            <MdPhoneIphone size={48} className="text-black" />
            <h3 className="mt-4 text-lg font-semibold">Web & Mobile App</h3>
            <p className="mt-2 text-sm text-gray-600">
              Transforming ideas into exceptional web and mobile app experiences.
            </p>
          </div>

          {/* Design & Creative */}
          <div className="flex flex-col items-center w-full p-6 bg-white shadow-lg rounded-xl">
            <MdBrush size={48} className="text-black" />
            <h3 className="mt-4 text-lg font-semibold">Design & Creative</h3>
            <p className="mt-2 text-sm text-gray-600">
              Crafting visually stunning designs that connect with your audience.
            </p>
          </div>

          {/* Development */}
          <div className="flex flex-col items-center w-full p-6 bg-white shadow-lg rounded-xl">
            <MdCode size={48} className="text-black" />
            <h3 className="mt-4 text-lg font-semibold">Development</h3>
            <p className="mt-2 text-sm text-gray-600">
              Bringing your vision to life with the latest technology and design trends.
            </p>
          </div>
        </div>
      </div>

      {/* Swiper Section */}
      <div className="w-full max-w-lg px-4 pt-20 pb-10 text-center">
        <h2 className="pb-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
          Testimonials
        </h2>

        {/* Swiper Carousel */}
        <Swiper 
          modules={[Pagination, Autoplay]} 
          spaceBetween={10} 
          slidesPerView={1} 
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="mt-4"
        >
          <SwiperSlide>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-800">"Her creativity knows no bounds. Great Work!"</p>
              <p className="mb-2 text-sm text-gray-500">- Mr. Nizam</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-800">"Very professional and easy to work with!"</p>
              <p className="mb-2 text-sm text-gray-500">- Ms. Lia</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-800">"Highly recommended for UI/UX projects."</p>
              <p className="mb-2 text-sm text-gray-500">- Mr. Adam</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
