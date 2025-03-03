//     import { useEffect, useState } from "react";
// import Quill from 'quill'
// import "quill/dist/quill.snow.css";

//     import { JobCategories,JobLocations } from "../assets/assets";

//     const AddJob = () => {

//         const [title, setTitle] = useState('');
//         const [location, setLocation] = useState('Bangalore');
//         const [category, setCategory] = useState('Programming');
//         const [level,setLevel] = useState('Beginner level');
//         const [salary, setSalary] = useState(0);
//         const [description, setDescription] = useState('');


//         const editorRef = useRef(null);
//         const quillRef = useRef(null);
        
//         useEffect(() => {

//             if (!quillRef.current && editorRef.current) {
//                 quillRef.current = new Quill(editorRef.current, {
//                     theme:'snow',

//                 })
//             }
            
//         },[])
        





//         return (
//         <form className="container p-4 flex flex-col w-full items-start gap-3">
//             <div className="w-full">
//             <p className="mb-2">Job Title </p>
//             <input
//                 type="text"
//                 placeholder="type here"
//                 onChange={(e) => setTitle(e.target.value)}
//                 value={title}
//                 required
//                 className="w-full max-w-lg px-3 border-2 border-gray-300 rounded"
//             />
//             </div>

//             <div className="w-full max-w-lg">
//             <p className="my-2">Job Description</p>
//             <div ref={editorRef}></div>
//             </div>

//             <div className="flex flex-col sn:flex-row gap-2 w-full sm:gap-8">
//             <div>
//                 <p className="mb-2">Job Category</p>
//                 <select
//                 className="w-full px-3 py-2 border-2 border-gray-300 rounded"
//                 onChange={(e) => setCategory(e.target.value)}
//                 >
//                 {JobCategories.map((category, index) => (
//                     <option key={index} value={category}>
//                     {category}
//                     </option>
//                 ))}
//                 </select>
//             </div>

//             <div>
//                 <p className="mb-2">Job Location</p>
//                 <select
//                 className="w-full px-3 py-2 border-2 border-gray-300 rounded"
//                 onChange={(e) => setLocation(e.target.value)}
//                 >
//                 {JobLocations.map((location, index) => (
//                     <option key={index} value={location}>
//                     {location}
//                     </option>
//                 ))}
//                 </select>
//             </div>

//             <div>
//                 <p className="mb-2">Job Level</p>
//                 <select
//                 className="w-full px-3 py-2 border-2 border-gray-300 rounded"
//                     onChange={(e) => setLevel(e.target.value)}
//                 >
//                 <option value="Beginner level">Beginner level</option>
//                 <option value="Intermediate level">Intermediate level</option>
//                 <option value="Senior level">Senior level</option>
//                 </select>
//             </div>
//             </div>
//             <div>
//             <p className="mb-2">Job Salary</p>
//                     <input min={0} className="w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]"
//                 onChange={(e) => setSalary(e.target.value)}
//                 type="Number"
//                 placeholder="2500"
//             />
//             </div>
//             <button className="w-28 py-3 mt-4 bg-black text-white rounded">ADD</button>
//         </form>
//         );
//     };

//     export default AddJob;





import { useEffect, useRef, useState } from "react"; // Add useRef import
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Ensure Quill CSS is properly imported
import { JobCategories, JobLocations } from "../assets/assets"; // Ensure correct import for JobCategories and JobLocations

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner level");
  const [salary, setSalary] = useState(0);
  const [description, setDescription] = useState(""); // State for job description

  const editorRef = useRef(null); // Reference for the Quill editor
  const quillRef = useRef(null); // Reference for the Quill instance

  // Set up Quill editor on component mount
  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });

      // Capture the content of the editor when it changes
      quillRef.current.on("text-change", () => {
        setDescription(quillRef.current.root.innerHTML); // Update description state
      });
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      title,
      location,
      category,
      level,
      salary,
      description, // Include description from the Quill editor
    };

    console.log(jobData); // Log or send jobData to the backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container p-4 flex flex-col w-full items-start gap-3"
    >
      {/* Job Title */}
      <div className="w-full">
        <p className="mb-2">Job Title</p>
        <input
          type="text"
          placeholder="type here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="w-full max-w-lg px-3 border-2 border-gray-300 rounded"
        />
      </div>

      {/* Job Description (Quill editor) */}
      <div className="w-full max-w-lg">
        <p className="my-2">Job Description</p>
        <div ref={editorRef} className="h-64"></div>{" "}
        {/* Set the height of the Quill editor */}
      </div>

      {/* Job Category, Location, Level, and Salary */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        {/* Job Category */}
        <div>
          <p className="mb-2">Job Category</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Job Location */}
        <div>
          <p className="mb-2">Job Location</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          >
            {JobLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Job Level */}
        <div>
          <p className="mb-2">Job Level</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
          >
            <option value="Beginner level">Beginner level</option>
            <option value="Intermediate level">Intermediate level</option>
            <option value="Senior level">Senior level</option>
          </select>
        </div>
      </div>

      {/* Job Salary */}
      <div>
        <p className="mb-2">Job Salary</p>
        <input
          min={0}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]"
          onChange={(e) => setSalary(e.target.value)}
          type="Number"
          value={salary}
          placeholder="2500"
        />
      </div>

      {/* Submit Button */}
      <button className="w-28 py-3 mt-4 bg-black text-white rounded">
        ADD
      </button>
    </form>
  );
};

export default AddJob;

