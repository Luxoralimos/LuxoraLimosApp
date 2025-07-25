import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const heroImage = "./hero-bg.webp";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80 z-10"></div>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      ></div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-[#c8a97e] z-20"></div>

      <div className="container mx-auto px-4 relative z-20 text-white">
        <div
          className="max-w-3xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? "0" : "30px"})`,
            transition: "all 1.2s ease-out",
          }}
        >
          <div className="inline-block mb-4 bg-[#c8a97e] px-3 py-1 text-xs uppercase tracking-wider font-semibold text-white">
            Luxury Transportation Since 2010
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience <span className="text-[#c8a97e]">Luxury</span> <br />
            <span className="italic">Beyond Compare</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-100 leading-relaxed">
            Premium limousine services for all your travel needs. With a fleet
            of over 200 luxury vehicles, we provide unparalleled comfort and
            elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#book"
              className="bg-[#c8a97e] text-white px-8 py-4 text-lg font-semibold rounded-md hover:bg-[#a38147] transition-all duration-300 text-center shadow-lg flex items-center justify-center"
            >
              <span>Book Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#fleet"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-md hover:bg-white hover:text-[#1c2331] transition-all duration-300 text-center"
            >
              Explore Fleet
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2 z-20">
        <div className="text-white/70 uppercase tracking-widest text-xs transform -rotate-90 origin-center whitespace-nowrap">
          Luxury • Comfort • Reliability
        </div>
      </div>

      <div className="hidden md:flex absolute left-10 bottom-10 z-20 space-x-4">
        <a
          href="https://www.facebook.com/share/1FKZuDLxca/"
          target="_blank"
          className="text-white hover:text-[#c8a97e] transition-colors"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/luxoralimos"
          target="_blank"
          className="text-white hover:text-[#c8a97e] transition-colors"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        {/* <a
          href="#"
          className="text-white hover:text-[#c8a97e] transition-colors"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a> */}
      </div>
    </div>
  );
};

export default HeroSection;
