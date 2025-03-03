import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const { setshowRecruiterLogin } = useContext(AppContext);

// const App = () => {
//   const { showRecruiterLogin, setShowRecruiterLogin } = useContext(AppContext);



  return (
    <div className="shadow-md bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container px-4 2xl:px-20 mx-auto py-4">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              onClick={() => navigate("/")}
              className="cursor-pointer h-8 w-auto"
              src={assets.logo}
              alt="Insider Jobs Logo"
            />
          </Link>

          {/* Navigation section */}
          {user ? (
            <div className="flex items-center gap-6">
              <Link
                to="/application"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Applied Jobs
              </Link>
              <div className="h-5 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <p className="text-gray-700">
                  Hi,{" "}
                  <span className="font-medium">
                    {user.firstName} {user.lastName}
                  </span>
                </p>
                <div className="ml-2">
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox:
                          "w-9 h-9 rounded-full hover:ring-2 hover:ring-blue-500 transition-all duration-200",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button
                // onClick={() => setShowRecruiterLogin(true)}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Recruiter Login
              </button>
              {/* {showRecruiterLogin && <RecruiterLogin />} */}
              <button
                onClick={openSignIn}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg active:scale-95"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
