// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJob from "./pages/Applyjob";
import Application from "./pages/Application";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import ManageJobs from "./pages/ManageJobs";
import ViewApplication from "./pages/Viewapplication";
import "quill/dist/quill.snow.css";




const App = () => {
  const { showRecruiterLogin} = useContext(AppContext);

  return (
    <div>
      {/* <button onClick={() => setShowRecruiterLogin(true)}>Recruiter Login</button> */}
    {showRecruiterLogin && <RecruiterLogin />}
    {showRecruiterLogin && <RecruiterLogin />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/application" element={<Application />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/apply-job" element={<AddJob />} />
          <Route path="add-job" element={<AddJob />} />

          <Route path="manage-jobs" element={<ManageJobs />} />

          <Route path="view-applications" element={<ViewApplication />} />

          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
