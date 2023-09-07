import JWT from "jsonwebtoken"

export const EncodeToken = (email,userId) =>{
    return JWT.sign({email:email,id:userId},'ABC123',{expiresIn:"1h"});
}

export const DecodToken = (token) =>{
    return JWT.verify(token, 'ABC123')
}