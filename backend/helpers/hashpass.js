import bcrypt from "bcrypt";




export const HashPassword = async (password)=>{
    try {
        
      const   saltRounds = 10 ; 

   const pass = await  bcrypt.hash(password, saltRounds);
   return pass ; 

    } catch (error) {
        console.log("error in the hashfunction "  ,error)
        
    }
    
}



//compare this password during the login so i can match this 

export const comaparepassword =async (password , hashedPassword )=>{
    return bcrypt.compare(password , hashedPassword )
}
