// import { SEMANTIC_ATTRIBUTE_SENTRY_SOURCE } from "@sentry/node";
// import Company from "../models/Company.js";
// import bcrypt from 'bcrypt'
// import { v2 as cloudinary } from 'cloudinary'
// import generateToken from "../utils/generateToken.js";

// // Register an new company

// export const registerCompany = async (req, res) => {


//     const { name, email, password } = req.body;
    
//     const imageFile = req.file;
    
//     if (!name || !email || !password || !imageFile) {
//         return res.json({ sucess: false, message: "Missing Details" });
//     }

//     try {
//         const companyExists = await Company.findOne({ email });
        

//         if (companyExists) {
//             return res.json({ sucess: false, message: 'Company already registered' });
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashPassword = await bcrypt.hash(password, salt);
        

//         const imageupload = await cloudinary.uploader.upload(imageFile.path);
        

//         const company = await Company.create({
//             name,
//             email,
//             password: hashPassword,
//             image: imageupload.secure_url
//         });

//         res.json({
//             sucess: true,
//             company: {
//             _id: company._id,
//             name: company.name,
//             email: company.email,
//             image: company.image,
//         },

//             token: generateToken(company._id)
//         });


//     }
//     catch (error) {
//         res.json({sucess:false,message:error.message})
//     }



// }


// //Company login


// export const loginCompany = async (req, res) => {

// };




// //Get Company data

// export const getCompany = async (req, res) => {

// };



// // Post a new job


// export const postJob = async (req, res) => {
    
// };


// //Get Company Job Applications

// export const getCompanyJobApplications = async (req, res) => {

// };


// //Get Company Posted Jobs


// export const getCompanyPostedJobs = async (req, res) => {

// };


// // Change job appplications status

// export const ChangeJobApplications = async (req, res) => {

// };



// //Change job  visiblity


// export const changeVisiblity = async (req, res) => {

// };










//import { SEMANTIC_ATTRIBUTE_SENTRY_SOURCE } from "@sentry/node";
// import Company from "../models/Company.js";
// import bcrypt from "bcrypt";
// import { v2 as cloudinary } from "cloudinary";
// import generateToken from "../utils/generateToken.js";

// // Register a new company
// export const registerCompany = async (req, res) => {

//       console.log("Received Body:", req.body);
//       console.log("Received File:", req.file);




//   const { name, email, password } = req.body;
//   const imageFile = req.file;

//     if (!name || !email || !password || !imageFile) {
//           console.log("Validation Failed - Missing Details");
//     return res.status(400).json({ success: false, message: "Missing Details" });
//   }

//   try {
//     const companyExists = await Company.findOne({ email });

//     if (companyExists) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Company already registered" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//       //const imageUpload = await cloudinary.uploader.upload(imageFile.path);
//       let imageUpload;
//       try {
//         imageUpload = await cloudinary.uploader.upload(imageFile.path);
//       } catch (uploadError) {
//         return res
//           .status(500)
//           .json({
//             success: false,
//             message: "Image upload failed",
//             error: uploadError.message,
//           });
//       }



//     const company = await Company.create({
//       name,
//       email,
//       password: hashedPassword,
//       image: imageUpload.secure_url,
//     });

//     res.status(201).json({
//       success: true,
//       company: {
//         _id: company._id,
//         name: company.name,
//         email: company.email,
//         image: company.image,
//       },
//       token: generateToken(company._id),
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Company login
// export const loginCompany = async (req, res) => {

//     const { email, password } = req.body;
    
//     try {
        
//         const company = await Company.findOne({ email: email.toLowerCase() });
        
//         if (!company) {
//             return res
//               .status(400)
//               .json({ success: false, message: "Company not found" });
//         }


//     const isPasswordMatch = await bcrypt.compare(password, company.password);
//     if (isPasswordMatch) {
//       res.json({
//         success: true,
//         company: {
//           _id: company._id,
//           name: company.name,
//           email: company.email,
//           image: company.image,
//         },
//         token: generateToken(company._id),
//       });
//     }

//     //     (bcrypt.compare(password, company.password)) {

//     //     res.json({
//     //       success: true,
//     //       company: {
//     //         _id: company._id,
//     //         name: company.name,
//     //         email: company.email,
//     //         image: company.image
//     //         },
//     //       token:generateToken(company_id)
//     //     });
//     // }
//     else {
//       res.status(400).json({ success: false, message: "Invalid emailor Password" });
//     }

//     } catch(error) {
//         res.status(500).json({success:false, message:error.message})
//     }

//   // Implementation here
// };

// // Get Company data
// export const getCompany = async (req, res) => {
//   // Implementation here
// };



// // Post a new job
// export const postJob = async (req, res) => {
//   // Implementation here
// };

// // Get Company Job Applications
// export const getCompanyJobApplications = async (req, res) => {
//   // Implementation here
// };

// // Get Company Posted Jobs
// export const getCompanyPostedJobs = async (req, res) => {
//   // Implementation here
// };

// // Change job applications status
// export const ChangeJobApplications = async (req, res) => {
//   // Implementation here
// };

// // Change job visibility
// export const changeVisibility = async (req, res) => {
//   // Implementation here
// };






import Company from "../models/Company.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import generateToken from "../utils/generateToken.js";
import Job from "../models/Job.js";
import JobApplication from "../models/jobApplication.js";

// Register a new company
export const registerCompany = async (req, res) => {
  console.log("Received Body:", req.body);
  console.log("Received File:", req.file);

  const { name, email, password } = req.body;
  const imageFile = req.file;

  // Validation for missing fields
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Name is required" });
  }

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ success: false, message: "Password is required" });
  }

  if (!imageFile) {
    return res
      .status(400)
      .json({ success: false, message: "Image file is required" });
  }

  try {
    // Check if company already exists
    const companyExists = await Company.findOne({ email });

    if (companyExists) {
      return res
        .status(400)
        .json({ success: false, message: "Company already registered" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Upload image to Cloudinary
    let imageUpload;
    try {
      imageUpload = await cloudinary.uploader.upload(imageFile.path);
    } catch (uploadError) {
      return res.status(500).json({
        success: false,
        message: "Image upload failed",
        error: uploadError.message,
      });
    }

    // Create new company
    const company = await Company.create({
      name,
      email,
      password: hashedPassword,
      image: imageUpload.secure_url,
    });

    res.status(201).json({
      success: true,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image,
      },
      token: generateToken(company._id),
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Company login
export const loginCompany = async (req, res) => {
  const { email, password } = req.body;

  try {
    const company = await Company.findOne({ email: email.toLowerCase() });

    if (!company) {
      return res
        .status(400)
        .json({ success: false, message: "Company not found" });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, company.password);
    if (isPasswordMatch) {
      res.json({
        success: true,
        company: {
          _id: company._id,
          name: company.name,
          email: company.email,
          image: company.image,
        },
        token: generateToken(company._id),
      });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Company data (implementation pending)
export const getCompany = async (req, res) => {
     
    try {
            const company = req.company;

        res.json({sucess:true,company})
    } catch (error) {
        res.json({
            sucess:false,message:error.message
        })
    }



  // You can implement this based on your needs
};

// Post a new job (implementation pending)
export const postJob = async (req, res) => {

    const { title, description, location, salary ,level,category} = req.body  
    
    const companyId = req.company._id
    
    try {
        
        const newJob = new Job({
            title,
            description,
            location,
            salary,
            companyId,
            date: Date.now(),
            level,
            category
        })

        await newJob.save()

        res.json({success:true,newJob})


    }
    catch(error)
    {
        res.json({success:false,message:error.message})
}




  // You can implement this based on your needs
};

// Get Company Job Applications (implementation pending)
export const getCompanyJobApplications = async (req, res) => {
    // You can implement this based on your needs
    try {
        const companyId = req.company._id
        
        //Find job applications for the user and populate related data
        const applications = await JobApplication.find({ companyId })
            .populate('userId', 'name image resume',)
            .populate('jobId', 'title location category level salary')
            .exec()
        
            return res.json({success:true,applications})
        

    } catch (error) {
        res.json({success:false,message:error.message})
    }




};

// Get Company Posted Jobs (implementation pending)
export const getCompanyPostedJobs = async (req, res) => {
    
    try {

        const companyId = req.company._id
        
        const jobs = await Job.find({ companyId })
        
        //Adding No of applications info in data

        const jobsData = await Promise.all(jobs.map(async (job) => {
            const applicants = await JobApplication.find({ jobId: job._id });
            return{...job.toObject(),applicants:applicants.length}
        }))

        res.json=({sucess:true,jobsData:jobs})
        
    } catch (error) {
        res.json({success:false, message:error.message})
    }


  // You can implement this based on your needs
};




// Change job applications status (implementation pending)
export const ChangeJobApplicationsstatus = async (req, res) => {

    try {
      // You can implement this based on your needs
      const { id, status } = req.body;

      //Find Job application and update status

      await JobApplication.findOneAndUpdate({ _id: id }, { status });

      res.json({ success: true, message: "Status Changed" });
    } catch (error) {
        res.json({success:false,message:error.message})
    }








};





// Change job visibility (implementation pending)
export const changeVisibility = async (req, res) => {

    try {
        const { id } = req.body
        
        const companyId = req.company._id
        
        const job = await Job.findById(id)
        
        if (companyId.toString() === job.companyId.toString()) {
            job.visible=!job.visible
        }

        await job.save()


        res.json({success:true,job})

    } catch (error) {
        res.json({success:false,message:error.message})
    }
  // You can implement this based on your needs
};
