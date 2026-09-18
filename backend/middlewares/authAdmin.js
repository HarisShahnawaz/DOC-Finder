import jwt from "jsonwebtoken"
//Admin auhentication middleware

const authAdmin = (req, res, next) => {
    try{

    }
    catch(error){
       console.log(error);
       res.json({success:false , message:error.message || "Internal Server Error" });
    }
}

export default authAdmin;