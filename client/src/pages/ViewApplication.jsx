// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { assets, viewApplicationsPageData } from "../assets/assets";

// const ViewApplication = () => {
//     return(
//     <div>
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>User Name</th>
//                         <th>JOb Title</th>
//                         <th>Location</th>
//                         <th>Resume</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {viewApplicationsPageData.map((applicant,index) => (
//                         <tr>
//                             <td>{index + 1}</td>
//                             <td>
//                                 <img src={applicant.imgSrc} alt="" />
//                                 <span>{ applicant.name}</span>
//                             </td>
//                             <td>{applicant.jobTitle}</td>
//                             <td>{applicant.joblocation}</td>
//                             <td>
//                             <a href="" target='blank'>
//                                 Resume <img src={assets.resume_download_icon} alt="" />
//                             </a>
//                             </td>
//                             <td>
//                                 <div>
//                                     <button>...
//                                     </button>
//                                     </div>
//                                     <div>
//                                         <button>Accept</button>
//                                         <button>Reject</button>
//                                     </div>
//                                 </div>
//                             </td>
//                         </tr>
                        

//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     </div>
//     );
// }

// export default ViewApplication;







//import React from "react";
 // eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";

import { assets, viewApplicationsPageData } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";
import Loading from "../components/Loading";

const ViewApplication = () => {

  const { backendUrl, companyToken } = useContext(AppContext)
  
  const [applicants, setApplicants] = useState(false)
  
  //Function to fetch company Job Applicants data

  const fetchCompanyJobApplications = async () => {
    
    try {
      
      const { data } = await axios.get(backendUrl + '/api/company/applicants',
        {headers:{token:companyToken}})
      
      if (data.success) {
        setApplicants(data.applications.reverse())
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

  }
  //Function to Update Job Applications Status
  
  const changeJobApplicationStatus = async (id,status) => {
    try {
      
      const { data } = await axios.post(backendUrl + '/api/company/change-status',
        { id, status },
        {headers:{token:companyToken}}
      )
      if (data.success) {
        fetchCompanyJobApplications()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobApplications()
    }
  },[companyToken])






  return applicants ? applicants.length === 0 ? (
  <div className='flex items-center justify-center h-[70vh]'>
      <p className='text-xl sm:text-2xl'>No Application Available</p>
    </div>
  ):(
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Applications</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">User Name</th>
              <th className="py-3 px-4 text-left">Job Title</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Resume</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.filter(item=>item.jobId&&item.userId).map((applicant, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <img
                      src={applicant.userId.image}
                      alt={`${applicant.name}'s profile`}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="font-medium">{applicant.userId.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4">{applicant.jobId.jobTitle}</td>
                <td className="py-3 px-4">{applicant.jobId.joblocation}</td>
                <td className="py-3 px-4">
                  <a
                    href={applicant.userId.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <span>Resume</span>
                    <img
                      src={assets.resume_download_icon}
                      alt="Download"
                      className="w-5 h-5 ml-2"
                    />
                  </a>
                </td>
                <td className="py-3 px-4">
                  {applicant.status === "Pending"
                    
                    <div className="relative group">
                    <button className="px-2 py-1 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                    <div className="absolute right-0 hidden mt-2 w-48 bg-white rounded-md shadow-lg border group-hover:block z-10">
                      <div className="py-1">
                        <button onClick={()=>changeJobApplicationStatus(applicant._id,'Accepted') } className="block w-full text-left px-4 py-2 text-green-600 hover:bg-gray-100">
                          Accept
                        </button>
                        <button onClick={() => changeJobApplicationStatus(applicant._id,'Rejected')} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                          Reject
                        </button>
                      </div>
                    </div>
                </div>
                :<div>{applicant.status}</div>
                  
                    
                    
                
                  }
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : <Loading />
};

export default ViewApplication;









// import React, { useState } from "react";
// import { assets, viewApplicationsPageData } from "../assets/assets";

// const ViewApplication = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">
//           Applications Management
//         </h2>
//         <div className="flex space-x-2">
//           <select className="px-4 py-2 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
//             <option>All Applications</option>
//             <option>Pending</option>
//             <option>Accepted</option>
//             <option>Rejected</option>
//           </select>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition duration-200">
//             Export Data
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="p-4 bg-white border-b flex justify-between items-center">
//           <h3 className="font-semibold text-gray-700">Recent Applications</h3>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search applications..."
//               className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <div className="absolute left-3 top-2.5">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-gray-400"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   #
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   User Name
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Job Title
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Location
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Resume
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {viewApplicationsPageData.map((applicant, index) => (
//                 <tr
//                   key={index}
//                   className="hover:bg-gray-50 transition duration-150"
//                 >
//                   <td className="py-4 px-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {index + 1}
//                   </td>
//                   <td className="py-4 px-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="flex-shrink-0 h-10 w-10">
//                         <img
//                           src={applicant.imgSrc}
//                           alt={`${applicant.name}'s profile`}
//                           className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
//                         />
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-900">
//                           {applicant.name}
//                         </div>
//                         <div className="text-sm text-gray-500">
//                           {applicant.email || "N/A"}
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-900">
//                     {applicant.jobTitle}
//                   </td>
//                   <td className="py-4 px-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="text-gray-400 mr-1"
//                       >
//                         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//                         <circle cx="12" cy="10" r="3" />
//                       </svg>
//                       <span className="text-sm text-gray-900">
//                         {applicant.joblocation}
//                       </span>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 whitespace-nowrap">
//                     <a
//                       href={applicant.resumeUrl || "#"}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition duration-150"
//                     >
//                       <span>View Resume</span>
//                       <img
//                         src={assets.resume_download_icon}
//                         alt="Download"
//                         className="w-4 h-4 ml-2"
//                       />
//                     </a>
//                   </td>
//                   <td className="py-4 px-4 whitespace-nowrap">
//                     <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                       Pending
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="relative">
//                       <button
//                         onClick={() => toggleDropdown(index)}
//                         className="p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="text-gray-500"
//                         >
//                           <circle cx="12" cy="12" r="1" />
//                           <circle cx="19" cy="12" r="1" />
//                           <circle cx="5" cy="12" r="1" />
//                         </svg>
//                       </button>
//                       {activeDropdown === index && (
//                         <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-10">
//                           <div className="py-1">
//                             <button className="flex items-center w-full text-left px-4 py-2 text-green-600 hover:bg-gray-100">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="16"
//                                 height="16"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="mr-2"
//                               >
//                                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                                 <polyline points="22 4 12 14.01 9 11.01" />
//                               </svg>
//                               Accept
//                             </button>
//                             <button className="flex items-center w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="16"
//                                 height="16"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="mr-2"
//                               >
//                                 <line x1="18" y1="6" x2="6" y2="18" />
//                                 <line x1="6" y1="6" x2="18" y2="18" />
//                               </svg>
//                               Reject
//                             </button>
//                             <button className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="16"
//                                 height="16"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="mr-2"
//                               >
//                                 <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//                                 <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//                               </svg>
//                               View Details
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="bg-white px-4 py-3 flex items-center justify-between border-t">
//           <div className="flex-1 flex justify-between sm:hidden">
//             <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//               Previous
//             </button>
//             <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//               Next
//             </button>
//           </div>
//           <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//             <div>
//               <p className="text-sm text-gray-700">
//                 Showing <span className="font-medium">1</span> to{" "}
//                 <span className="font-medium">10</span> of{" "}
//                 <span className="font-medium">20</span> results
//               </p>
//             </div>
//             <div>
//               <nav
//                 className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
//                 aria-label="Pagination"
//               >
//                 <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                   <span className="sr-only">Previous</span>
//                   <svg
//                     className="h-5 w-5"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//                 <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//                   1
//                 </button>
//                 <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">
//                   2
//                 </button>
//                 <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//                   3
//                 </button>
//                 <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                   <span className="sr-only">Next</span>
//                   <svg
//                     className="h-5 w-5"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewApplication;
