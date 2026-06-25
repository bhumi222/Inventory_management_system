const validation = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    const action = req.body.action;

    if(action === 'register'){
        if(!email || !email.includes("@")){
            res.send(400).send("email must include @");
        }

        if(!password || password.length < 8){
            res.send(400).send("password must contain 8 characters")
        }
    }
   
        next();
};

module.exports = {validation};