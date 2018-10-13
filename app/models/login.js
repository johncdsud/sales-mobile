var client = require('../../config/dbconnection');
var tabela = "USUARIO";

module.exports = {
    buscarLogin,
}

function buscarLogin(user, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE user_usuario = '${user.user_usuario}' AND user_senha = '${user.user_senha}'`, (err, data) => {
        if(err)
            return callback(err);

        callback(null, data);
    });
}