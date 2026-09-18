import jwt from "jsonwebtoken"
//Admin auhentication middleware

const authAdmin = (req, res, next) => {
    try{
        const {atoken} = req.headers;
        if(!atoken){
            return res.json({success:false , message: "Not Authorized login again" });
        }

        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
       if(token_decode){
        req.admin = token_decode;
        next();
       }
    }
    catch(error){
       console.log(error);
       res.json({success:false , message:error.message || "Internal Server Error" });
    }
}

export default authAdmin;