const Database = require("../db/config")
const store = require('store2')

module.exports = {
    async create(req, res){
        const db = await Database();
        const email = req.body.email;
        const password = req.body.password;
        let isRoom = true;
    
        while (isRoom) {
            //Verifica se o número já existe
            const roomsExistIDs = await db.all(`SELECT email, pass FROM users`);
            isRoom = roomsExistIDs.some(roomExistID => roomExistID === roomId);
        }
        await db.close();
    
        res.redirect(`/menu/med`);
    },

    async open(req, res) {
        const db = await Database()
        const email = req.body.userEmail
        const pass = req.body.userAuth
        const getUserAuth = await db.get(`SELECT * FROM users WHERE email = '${email}' and pass = '${pass}'`);
        //const userNameAuth = await db.get(`SELECT nome FROM users WHERE email = '${email}' and pass = '${pass}'`);
        
        if(getUserAuth == undefined){
            res.redirect(`/wrongcredentials`)
        } else{
            store.setAll(getUserAuth)
            if(getUserAuth.accessLevel == "Med"){
                res.redirect(`/menu/med`)    
            } else if(getUserAuth.accessLevel == "Sec"){
                res.redirect(`/menu/sec`)    
            } else if(getUserAuth.accessLevel == "Pac"){
                res.redirect(`/menu`)
            } else if(getUserAuth.accessLevel == "MedManager"){
                res.redirect(`/management`)    
            }
        }
    },
    async update(req, res) {
        const db = await Database()
        const email = req.body.userEmail
        const pass = req.body.userNewPassword
        await db.run(`UPDATE users SET pass = '${pass}' WHERE email = "${email}"`);
        //const userNameAuth = await db.get(`SELECT nome FROM users WHERE email = '${email}' and pass = '${pass}'`);
        
        res.redirect(`/login`)
        
    },

    enter(req, res) {
        const auth = req.body.auth;
        res.redirect(`/menu/${auth}`)
    }
}