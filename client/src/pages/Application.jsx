    // /* eslint-disable no-undef */
    //         import { useState } from "react";
    //         import Navbar from "../components/Navbar";
    //         import Footer from "../components/Footer"
    //         import { assets } from "../assets/assets";
    //         import moment from "moment"

    //             const Application = () => {
    //             const [isEdit, setIsEdit] = useState(false);
    //             // eslint-disable-next-line no-unused-vars
    //             const [resume, setResume] = useState(null);

    //             return (
    //             <>
    //                 <Navbar />
    //                 <div className="container px-4 min-h[65vh] 2xl:px-20 mx-auto my-10">
    //                 <h2 className="text-xl font-semibold">Your Resume</h2>
    //                 <div className="flex gap-2 mb-6 mt-3">
    //                     {isEdit ? (
    //                     <>
    //                         <label
    //                         className="flex items-center"
    //                         htmlFor="resumeUpload"
    //                         >
    //                         <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">
    //                             Select Resume
    //                         </p>
    //                         <input
    //                             id="resumeUpload"
    //                             onChange={(e) => setResume(e.target.files[0])} // Fixed the onChange event
    //                             accept="application/pdf"
    //                             type="file"
    //                             hidden // Changed type to file for uploading a file
    //                         />
    //                         <img src={assets.profile_upload_icon} alt="" />
    //                         </label>
    //                         <button
    //                         onClick={() => setIsEdit(false)}
    //                         className="bg-green-100 border border-green-400 rounded-lg px-4 py-2"
    //                         >
    //                         {" "}
    //                         Save
    //                         </button>
    //                     </>
    //                     ) : (
    //                     <div className="flex gap-2">
    //                         <a
    //                         className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
    //                         href="#"
    //                         >
    //                         Resume
    //                         </a>
    //                         <button
    //                         onClick={() => setIsEdit(true)} // Fixed the onClick handler
    //                         className="text-gray-500 border-gray-300 rounded-lg px-4 py-2"
    //                         >
    //                         Edit
    //                         </button>
    //                     </div>
    //                     )}
    //                 </div>

    //                         <h2 className="text-xl font-semibold mb-4">Job Applied</h2>
    //                         <div className="overflow-x-auto"> 
    //                 <table className="min-w-full bg-white border rounded-lg">
    //                     <thead>
    //                     <tr>
    //                         <th className="py-3 px-4 border-b text-left">
    //                         Company
    //                         </th>
    //                         <th className="py-3 px-4 border-b text-left">
    //                         Job Title
    //                         </th>
    //                         <th className="py-3 px-4 border-b text-left max-sm:hidden">
    //                         Location
    //                         </th>
    //                         <th className="py-3 px-4 border-b text-left max-sm:hidden">
    //                         Date
    //                         </th>
    //                         <th className="py-3 px-4 border-b text-left">Status</th>
    //                     </tr>
    //                     </thead>
    //                     <tbody>
                        
                
    //                     {jobsApplied.map((job, index) =>  
    //                         (
    //                         <tr key={index}>
    //                             <td className="py-3 px-4 flex items-center gap-2 border-b ">
    //                             <img className="w-8 h-8" src={job.logo} alt="" />
    //                             {job.company}
    //                             </td>
    //                             <td className="py-2 px-4 border-b">{job.title}</td>
    //                             <td className="py-2 px-4 border-b max-sm:hidden">
    //                             {job.location}
    //                             </td>
    //                             <td className="py-2 px-4 border-b max-sm:hidden">
    //                             {moment(job.date).format("ll")}
    //                             </td>
    //                             <td className="py-2 px-4 border-b">
    //                             <span
    //                                 className={`${job.status === 'Accepted' ? 'bg-green-100' : job.status ==='Rejected' ? 'bg-red-100' :'bg-blue-100'}px-4 py-1.5 rounded`}
    //                             >
    //                                 {job.status}
    //                             </span>
    //                             </td>
    //                         </tr>
    //                         ) 
    //                     )}
    //                     </tbody>
    //                 </table>
    //                 </div>
    //                 <Footer />
    //             </>
    //             );
    //                 };

    //                 export default Application;
    
    
    
    
    
    

    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";
import moment from "moment";
import { AppContext } from "../context/AppContext";
import { useUser,useAuth} from "@clerk/clerk-react";

const Application = () => {

  const { user } = useUser()
  const { getToken } = useAuth()
  


  const [isEdit, setIsEdit] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [resume, setResume] = useState(null);

  const { backendUrl, userData, userApplications, fetchUserData } = useContext(AppContext)


  const updateResume = async () => {
    

    try {
      
      const formData = new FormData()
      formData.append('resume', resume)
      
      const token = await getToken

      const { data } = await axios.post(backendUrl + '/api/users/update/update-resume',
        {headers:{Authorization :`Bearer ${token}` }}
      )

      if (data.success) {
        toast.success(data.message)
        await fetchUserData()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

    setIsEdit(false)
    setResume(null)
  }


  useEffect(() => {
    if (user) {
      fetchUserApplications()
    }
    
  },[user])
  
  
  // Define jobsApplied array which was missing
  const jobsApplied = [
    {
      company: "Google",
      title: "Frontend Developer",
      location: "Mountain View, CA",
      date: "2025-01-15",
      status: "Pending",
      logo: assets.profile_upload_icon
    },
    {
      company: "Microsoft",
      title: "React Engineer",
      location: "Remote",
      date: "2025-01-20",
      status: "Accepted",
      logo: assets.profile_upload_icon
    },
    {
      company: "Amazon",
      title: "UI Developer",
      location: "Seattle, WA",
      date: "2025-01-25",
      status: "Rejected",
      logo: assets.profile_upload_icon
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit || userData && userData.resume ===""
            ? (
            <>
              <label
                className="flex items-center"
                htmlFor="resumeUpload"
              >
                <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">
                  {resume ? resume.name:"Select Resume"}
                </p>
                <input
                  id="resumeUpload"
                  onChange={(e) => setResume(e.target.files[0])} // Fixed missing 'e' parameter
                  accept="application/pdf"
                  type="file"
                  hidden
                />
                <img src={assets.profile_upload_icon} alt="" />
              </label>
              <button
                onClick={updateResume}
                className="bg-green-100 border border-green-400 rounded-lg px-4 py-2"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a target='_blank' href={userData.resume}
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
                
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="border text-gray-500 border-gray-300 rounded-lg px-4 py-2"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4">Job Applied</h2>
        <div className="overflow-x-auto"> {/* Added for horizontal scrolling on small screens */}
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b text-left">
                  Company
                </th>
                <th className="py-3 px-4 border-b text-left">
                  Job Title
                </th>
                <th className="py-3 px-4 border-b text-left max-sm:hidden">
                  Location
                </th>
                <th className="py-3 px-4 border-b text-left max-sm:hidden">
                  Date
                </th>
                <th className="py-3 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {userApplications.map((job, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 flex items-center gap-2 border-b">
                    <img className="w-8 h-8" src={job.companyId.image} alt="" />
                    {job.company}
                    </td>
                    
                  <td className="py-2 px-4 border-b">{job.jobId.title}</td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {job.jobId.location}
                  </td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`${
                        job.status === 'Accepted' 
                          ? 'bg-green-100' 
                          : job.status === 'Rejected' 
                            ? 'bg-red-100' 
                            : 'bg-blue-100'
                      } px-4 py-1.5 rounded`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Application;
