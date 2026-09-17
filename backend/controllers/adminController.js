

//Api for adding doctor

const addDoctor = async (req, res) => {
    try{
        const { name, email, password, image, speciality, degree, experience, about, available, fees, address, date } = req.body;
    }
    catch(error){
        res.status(500).json({ message: "Error adding doctor", error: error.message });
    }
}
