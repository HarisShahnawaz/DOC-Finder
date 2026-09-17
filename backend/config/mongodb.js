import mongoose from "mongoose";
import dns from "dns";

// Force Node to use Google DNS instead of the router's DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Database connected'));
    await mongoose.connect(`${process.env.MONGODB_URI}/docfinder`);
}

export default connectDB;