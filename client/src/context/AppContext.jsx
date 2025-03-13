import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
//import { jobsData } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth,useUser } from "@clerk/clerk-react";

export const AppContext = createContext({
  searchFilter: { title: "", location: "" },
  setSearchFilter: () => {},
  isSearched: false,
  setIsSearched: () => {},
  state: {},
  setState: () => {},
});

export const AppContextProvider = ({
  children }) => {
  
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const { user } = useUser()
  const{getToken}=useAuth()
  


  
  
  const [state, setState] = useState({});
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });
  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  const [filteredJobs, setFilteredJobs] = useState([]);

    const[companyToken,setCompanyToken]=useState(null)

    const [companyData, setCompanyData] = useState(null);

  const [userData, setUserData] = useState(null)
  
  const [userApplications, setUserApplications] = useState([])
  




  // Function to fetch initial jobs data
  const fetchJobs = async () => {
    setJobs(jobsData);
    setFilteredJobs(jobsData);
  };

  //Function to fetch company data

  const fetchCompanyData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/company/company', { headers: { token: companyToken } })
      
      if (data.success) {
        setCompanyData(data.company)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  //Function to fetch user data

  const fetchuserData=async () => {
    
    try {
      const token = await getToken();

      const { data } = await axios.get(backendUrl + '/api/users/user',
        { headers: { Authorization: `Bearer ${token}` } })
      if (data.success) {
        setUserData(data.user)
      } else (
        toast.error(data.message)
      )
    } catch (error) {
      toast.error(error.message)
    }
  }

  //Function to fetch user's applied applications data

  const fetchUserApplications = async () => {
      try {
        

        const token = await getToken()

        const { data } = await axios.get(backendUrl + '/api/users/application',
          { headers: { Authorization: `Bearer${token}` } })
        if (data.success) {
          setUserApplications(data.applications)
        } else {
          toast.error(data.message)
        }
        
      } catch (error) {
        toast.error(error.message)
      }
    }




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

    const storedCompanyToken = localStorage.getItem('companyToken')
    
    if (storedCompanyToken) {
      setCompanyToken(storedCompanyToken)
    }



  }, []);

  // Effect to filter jobs whenever search filters change
  useEffect(() => {
    filterJobs();
  }, [searchFilter, jobs]);

  useEffect(() => {
    if (companyToken) {
          fetchCompanyData()
    }
  }, [companyToken])

  useEffect(() => {
    if (user) {
      fetchuserData()
      fetchUserApplications()  
    }
  },[user])
  





  const contextValue = {
    state,
    setState,
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    companyData,
    setCompanyData,
    companyToken,
    setCompanyToken,
    backendUrl,
    userData,
    setUserData,
    userApplications,
    setUserApplications,
    showRecruiterLogin,setShowRecruiterLogin,
    filteredJobs,
    setFilteredJobs,
    fetchuserData,
    fetchUserApplications,
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
