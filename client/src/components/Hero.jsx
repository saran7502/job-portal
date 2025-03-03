import { useContext, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched, searchFilter } =
    useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  // Update input values when searchFilter changes (for filter resets)
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.value = searchFilter.title;
    }
    if (locationRef.current) {
      locationRef.current.value = searchFilter.location;
    }
  }, [searchFilter]);

  const onSearch = () => {
    const titleValue = titleRef.current?.value.trim() || "";
    const locationValue = locationRef.current?.value.trim() || "";

    setSearchFilter({
      title: titleValue,
      location: locationValue,
    });

    setIsSearched(true);

    // Scroll to job listings if there's a search
    if (titleValue || locationValue) {
      const jobList = document.getElementById("job-list");
      if (jobList) {
        jobList.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handle Enter key press in either input
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  // Clear individual input
  const clearInput = (inputRef) => {
    if (inputRef.current) {
      inputRef.current.value = "";
      onSearch();
    }
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-16">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-20 px-6 text-center mx-4 rounded-2xl shadow-lg transform transition-transform duration-300">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Over 10,000+ Jobs To Apply
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base md:text-lg font-normal text-purple-100 leading-relaxed">
          Your Next Big Career Move Starts Right Here - Explore the Best Job
          Opportunities and Take the First Step Toward Your Future
        </p>

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between bg-white/95 backdrop-blur rounded-lg text-gray-600 max-w-2xl mx-auto p-2 gap-2 shadow-xl">
          <div className="flex items-center flex-1 bg-gray-50 rounded-md p-2">
            <img
              className="h-5 w-5 mr-2 opacity-70"
              src={assets.search_icon}
              alt=""
            />
            <input
              type="text"
              placeholder="Search for Jobs"
              className="w-full p-2 bg-transparent outline-none focus:ring-2 focus:ring-purple-500 rounded"
              ref={titleRef}
              onKeyPress={handleKeyPress}
            />
            {searchFilter.title && (
              <img
                onClick={() => clearInput(titleRef)}
                className="h-5 w-5 ml-2 opacity-70 cursor-pointer hover:opacity-100"
                src={assets.cross_icon}
                alt="Clear"
              />
            )}
          </div>

          <div className="flex items-center flex-1 bg-gray-50 rounded-md p-2">
            <img
              className="h-5 w-5 mr-2 opacity-70"
              src={assets.location_icon}
              alt=""
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 bg-transparent outline-none focus:ring-2 focus:ring-purple-500 rounded"
              ref={locationRef}
              onKeyPress={handleKeyPress}
            />
            {searchFilter.location && (
              <img
                onClick={() => clearInput(locationRef)}
                className="h-5 w-5 ml-2 opacity-70 cursor-pointer hover:opacity-100"
                src={assets.cross_icon}
                alt="Clear"
              />
            )}
          </div>

          <button
            onClick={onSearch}
            className="bg-blue-600 px-8 py-4 rounded-md text-white font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search Jobs
          </button>
        </div>
      </div>

      <div className="border border-gray-200 bg-white shadow-lg mx-4 mt-8 p-8 rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          <p className="font-semibold text-gray-600">
            Trusted by Leading Companies
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 items-center">
            {[
              { src: assets.microsoft_logo, alt: "Microsoft" },
              { src: assets.walmart_logo, alt: "Walmart" },
              { src: assets.accenture_logo, alt: "Accenture" },
              { src: assets.samsung_logo, alt: "Samsung" },
              { src: assets.amazon_logo, alt: "Amazon" },
              { src: assets.adobe_logo, alt: "Adobe" },
            ].map((logo, index) => (
              <img
                key={index}
                className="h-6 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
