import { Webhook } from "svix";
import User from "../models/User.js";

//API Controller Function to Manage Clerk User With Database

export const clerkWebhooks = async (req, res) => {
    try {

        // create a Svix instance with clerk webhook secret.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // verifying Headers

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });


        // Geeting data req body

        const { data, type } = req.body
        

        //switch  case for different events

        switch (type) {
            case "user.created": {
                
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + "" + data.last_name,
                    image: data.image_url,
                    resume:''
                }
                await User.create(userData)
                res.JSON({})
                break;

        }

            case "user.updated": {
                const userData = {
                   email: data.email_addresses[0].email_address,
                  name: data.first_name + "" + data.last_name,
                  image: data.image_url,
                };
                
                await User.findByIdAndUpdate(data.id, userData)
                res.JSON({})
                break;




          }

            case "user.deleted": {
                await User.findByIdAndDelete(data.id)
                res.JSON({})
                break;
            }
            default:
                break;
        }


        
    } catch (error) {
        console.log(error.message);
        res.JSON({sucess:false,message:'Webhooks Error'})
        
    }
}