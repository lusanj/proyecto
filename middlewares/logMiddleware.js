const fs = require('fs');

function logMiddleware(req,res,next){
    let users = fs.readFileSync('data/usersLog.json', {enconding: 'utf-8'})
    users = JSON.parse(users)
 
    for(let i = 0; i < users.length; i++){
        if (req.body.email == users[i].email){
            next();
        }
    } return res.render('login')
}

module.exports = logMiddleware;