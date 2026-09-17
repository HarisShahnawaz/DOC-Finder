import validator from "validator"
import bcrypt from  "bcrypt"
import {v2 as cloudinary} from "cloudinary" 
//Api for adding doctor

const addDoctor = async (req, res) => {
    try{
        const { name, email, password,  speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

     //checking for all data to add doctors

        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success:false , message: "Missing Details" });
        }

   // validating email format

   if(!validator.isEmail(email)){
    return res.json({success:false , message: "Invalid Email, Please Enter a valid email" });    
   }

   // validating strong password 

   if(password.length <8){
    return res.json({success:false , message: "Please enter a strong password (at least 8 characters)" });    
   }
  
   //hashing doctor password

   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)

   // upload image int cloudinary


   const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
   resource_type: "image",
   });
   const imageUrl = imageUpload.secure_url;
    const doctorData = {
        name,
        email,
        password: hashedPassword,
        speciality,
        degree,
        experience,
        about,
        fees,
        address:JSON.parse(address),
        image: imageUrl,
        date: Date.now(),

    }
    }

   

    catch(error){
        res.status(500).json({ message: "Error adding doctor", error: error.message });
    }
}


export { addDoctor };