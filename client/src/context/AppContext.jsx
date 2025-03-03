import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { jobsData } from "../assets/assets";

export const AppContext = createContext({
  searchFilter: { title: "", location: "" },
  setSearchFilter: () => {},
  isSearched: false,
  setIsSearched: () => {},
  state: {},
  setState: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });
  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  const [filteredJobs, setFilteredJobs] = useState([]);

  // Function to fetch initial jobs data
  const fetchJobs = async () => {
    setJobs(jobsData);
    setFilteredJobs(jobsData);
  };

  // Filter jobs based on search criteria
  const filterJobs = () => {
    // If both filters are empty, show all jobs
    if (!searchFilter.title.trim() && !searchFilter.location.trim()) {
      setFilteredJobs(jobs);
      setIsSearched(false);
      return;
    }

    const filtered = jobs.filter((job) => {
      const titleMatch = job.title
        .toLowerCase()
        .includes(searchFilter.title.trim().toLowerCase());
      const locationMatch = job.location
        .toLowerCase()
        .includes(searchFilter.location.trim().toLowerCase());

      // If only title is provided
      if (searchFilter.title.trim() && !searchFilter.location.trim())
        return titleMatch;

      // If only location is provided
      if (!searchFilter.title.trim() && searchFilter.location.trim())
        return locationMatch;

      // If both filters are provided
      return titleMatch && locationMatch;
    });

    setFilteredJobs(filtered);
    setIsSearched(true);
  };

  // Effect to fetch initial data
  useEffect(() => {
    fetchJobs();
  }, []);

  // Effect to filter jobs whenever search filters change
  useEffect(() => {
    filterJobs();
  }, [searchFilter, jobs]);

  const contextValue = {
    state,
    setState,
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    showRecruiterLogin,setShowRecruiterLogin,
    filteredJobs,
    setFilteredJobs,
    updateSearchFilter: (name, value) => {
      setSearchFilter((prev) => {
        const newFilters = { ...prev, [name]: value };
        return newFilters;
      });
    },
    resetFilters: () => {
      setSearchFilter({ title: "", location: "" });
      setFilteredJobs(jobs); // Reset filtered jobs
      setIsSearched(false);
    },
  };

    return (
  <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  
    // return (
    //   <AppContext.Provider
    //     value={{ showRecruiterLogin, setShowRecruiterLogin }}
    //   >
    //     {children}
    //   </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
