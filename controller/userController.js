import userModel from '../model/userModel.js'

export const addUsercontroller= async (req,res)=>{
    const user = req.body

    const newUser = new userModel(user)
    try {
        newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(404).json({message:error});
        
    }
    console.log(user);
}

export const getUsercontroller= async (req,res)=>{
    try {
     console.log("hello from get  all user api");
    const users = await userModel.find({});
    res.status(201).json(users);
    
 } catch (error) {
    res.status(404).json({message:error});
 }

}

export const getSingleUserController = async(req,res)=>{
    try {
        console.log("hello from get single user api");
        const  user = await userModel.findById(req.params.id);
         res.status(201).json(user);
        
    } catch (error) {
        res.status(404).json({message:error});
    }
}

export const edituserController = async (req,res)=>{
    let user =req.body;
    const editUser = new userModel(user);
    try {

        await userModel.updateOne({_id: req.params.id},editUser);
        res.status(201).json(editUser);
    } catch (error) {
        res.status(404).json({messagel:error});
    }
} 

export const deleteuserController= async(req,res)=>{
    try {
        await userModel.deleteOne({_id: req.params.id});
        res.status(201).json("user deleted successful");
    } catch (error) {
        res.status(404).json({message: error})
    }
}