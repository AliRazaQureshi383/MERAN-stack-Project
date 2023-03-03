import user from "../Schema/userSchema.js";
import User from "../Schema/userSchema.js";
export const addUser = async (req , res) =>{
console.log(req.body)
    const user = req.body;
    const newUser = new User (user);

    try {
      await  newUser.save();
      res.status(201).json(newUser);
    } catch (error) {

        res.status(409).json({message : error.message})

        
    }
}

export const getUser = async (req , res) =>{

 try {
  
const usersData =   await User.find({}); 
 res.status(200).json(usersData);
 

 } catch (error) {

  res.status(404).json({message : error.message})
  
 }

}
export const getOneUser = async (req , res) =>{
  try {
   
 const user =   await User.findById(req.params.id); 
  res.status(200).json(user);
  
 
  } catch (error) {
 
   res.status(404).json({message : error.message})
   
  }
 
 }
 

 export const editOneUser = async (req , res) =>{
  console.log(req.body)
      const user = req.body;
      const editUser = new User (user);
  
      try {
        await  User.updateOne({_id :req.params.id} , editUser);
        res.status(201).json(editUser);
      } catch (error) {
  
          res.status(409).json({message : error.message})
  
          
      }
  }
  
  export const deleteOneUser = async (req , res) =>{
 
        try {
          await  User.deleteOne({_id :req.params.id} );
          res.status(201).json({message : 'user deleted'});
        } catch (error) {
    
            res.status(409).json({message : error.message})
    
            
        }
    }