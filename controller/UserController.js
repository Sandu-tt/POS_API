const userSchema = require('../model/UserSchema');
const  bcrypt = require('bcrypt');
 const  salt = 10;


const register = (req, resp) => {
bcrypt.hash(req.body.password,salt,function(err,hash){
    if(err){
        resp.status(500).json(err);
    }
    const user =new userSchema({
        fullname:req.body.fullname,
        password:hash,
        email:req.body.email,
        activeState:req.body.activeState


    });
    user.save().then(saveResponse=>{
        resp.status(201).json({'message':'saved'});

    }).catch(error=>{
        resp.status(500).json(error);
    });
})
}



const login = (req, res) => {

}


module.exports={
    register,login
}