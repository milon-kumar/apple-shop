import JWT from "jsonwebtoken"

export const EncodeToken = (email) =>{
    return JWT.sign({email:email},'ABC123',{expiresIn:"1h"});
}

export const DecodToken = (token) =>{
    return JWT.verify(token, 'ABC123')
}