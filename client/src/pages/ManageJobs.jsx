// eslint-disable-next-line no-unused-vars
import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import {useNavigate}from 'react-router-dom'

const ManageJobs = () => {

    const navigate = useNavigate()








  return (
    <div className="container p-4 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">#</th>
              <th className="py-2 px-4 border-b text-left">Job Title</th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">
                Date
              </th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">
                Location
              </th>
              <th className="py-2 px-4 border-b text-center">Applications</th>
              <th className="py-2 px-4 border-b text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index} className="text-gray-700">
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b ">{job.title}</td>
                <td className="py-2 px-4 border-b max-sm:hidden ">
                  {moment(job.date).format('ll')}
                </td>
                <td className="py-2 px-4 border-b max-sm:hidden">{job.location}</td>
                <td className="py-2 px-4 border-b text-center">{job.applicants}</td>
                <td className="py-2 px-4 border-b">
                  <input className='scale-125 ml-4' type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-4 flex justify-end'>
        <button onClick={()=>navigate('/dashboard/add-job')} className='bg-black text-white py-2 px-4 rounded'>
          ADD NEW JOB
        </button>
      </div>
    </div>
  );
}

export default ManageJobs

















// // eslint-disable-next-line no-unused-vars
// // import React, { useState } from "react";
// // eslint-disable-next-line no-unused-vars
// import React from 'react'

// import { manageJobsData } from "../assets/assets";
// import moment from "moment";
// import { useNavigate } from "react-router-dom";
// import { FaSearch, FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";

// const ManageJobs = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortConfig, setSortConfig] = useState({
//     key: null,
//     direction: "ascending",
//   });
//   const [visibilityStatus, setVisibilityStatus] = useState(
//     manageJobsData.map((job) => job.visible || false)
//   );

//   // Handle job visibility toggle
//   const handleVisibilityToggle = (index) => {
//     const newVisibilityStatus = [...visibilityStatus];
//     newVisibilityStatus[index] = !newVisibilityStatus[index];
//     setVisibilityStatus(newVisibilityStatus);
//   };

//   // Handle sorting
//   const requestSort = (key) => {
//     let direction = "ascending";
//     if (sortConfig.key === key && sortConfig.direction === "ascending") {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });
//   };

//   // Apply sorting to the data
//   const sortedJobs = [...manageJobsData].sort((a, b) => {
//     if (!sortConfig.key) return 0;

//     const aValue = a[sortConfig.key];
//     const bValue = b[sortConfig.key];

//     if (sortConfig.key === "date") {
//       return sortConfig.direction === "ascending"
//         ? new Date(aValue) - new Date(bValue)
//         : new Date(bValue) - new Date(aValue);
//     }

//     if (typeof aValue === "string") {
//       return sortConfig.direction === "ascending"
//         ? aValue.localeCompare(bValue)
//         : bValue.localeCompare(aValue);
//     }

//     return sortConfig.direction === "ascending"
//       ? aValue - bValue
//       : bValue - aValue;
//   });

//   // Filter jobs based on search term
//   const filteredJobs = sortedJobs.filter(
//     (job) =>
//       job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Get sort direction icon
//   const getSortIcon = (name) => {
//     if (sortConfig.key !== name) return null;
//     return sortConfig.direction === "ascending" ? "↑" : "↓";
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-5xl">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
//             Manage Jobs
//           </h1>

//           <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
//             <div className="relative w-full sm:w-64">
//               <input
//                 type="text"
//                 placeholder="Search jobs..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <FaSearch className="absolute left-3 top-3 text-gray-400" />
//             </div>

//             <button
//               onClick={() => navigate("/dashboard/add-job")}
//               className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
//             >
//               <FaPlus /> Add New Job
//             </button>
//           </div>
//         </div>

//         <div className="overflow-x-auto bg-white rounded-lg">
//           {filteredJobs.length > 0 ? (
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hidden sm:table-cell"
//                     onClick={() => requestSort("id")}
//                   >
//                     # {getSortIcon("id")}
//                   </th>
//                   <th
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                     onClick={() => requestSort("title")}
//                   >
//                     Job Title {getSortIcon("title")}
//                   </th>
//                   <th
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hidden md:table-cell"
//                     onClick={() => requestSort("date")}
//                   >
//                     Date Posted {getSortIcon("date")}
//                   </th>
//                   <th
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell"
//                     onClick={() => requestSort("location")}
//                   >
//                     Location {getSortIcon("location")}
//                   </th>
//                   <th
//                     className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                     onClick={() => requestSort("applicants")}
//                   >
//                     Applications {getSortIcon("applicants")}
//                   </th>
//                   <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Visibility
//                   </th>
//                   <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredJobs.map((job, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
//                       {index + 1}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm font-medium text-gray-900">
//                         {job.title}
//                       </div>
//                       <div className="text-sm text-gray-500 md:hidden">
//                         {job.location}
//                       </div>
//                       <div className="text-xs text-gray-400 md:hidden">
//                         {moment(job.date).format("ll")}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
//                       {moment(job.date).format("ll")}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
//                       {job.location}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-center">
//                       <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
//                         {job.applicants}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-center">
//                       <div className="flex justify-center">
//                         <button
//                           className={`p-2 rounded-full ${
//                             visibilityStatus[index]
//                               ? "text-green-600"
//                               : "text-gray-400"
//                           }`}
//                           onClick={() => handleVisibilityToggle(index)}
//                         >
//                           {visibilityStatus[index] ? (
//                             <FaEye size={18} />
//                           ) : (
//                             <FaEyeSlash size={18} />
//                           )}
//                         </button>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
//                       <button
//                         onClick={() =>
//                           navigate(`/dashboard/edit-job/${job.id}`)
//                         }
//                         className="text-indigo-600 hover:text-indigo-900 mr-3"
//                       >
//                         Edit
//                       </button>
//                       <button className="text-red-600 hover:text-red-900">
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <div className="text-center py-10">
//               <p className="text-gray-500">
//                 No jobs found matching your search.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="mt-4 text-sm text-gray-500">
//           Showing {filteredJobs.length} of {manageJobsData.length} jobs
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageJobs;