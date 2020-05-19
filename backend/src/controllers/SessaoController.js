const connection = require('../database/connection');
const crypto = require('crypto');
const alg = 'aes-256-ctr';
const pwd = 'administracaoprocarsystem2020';

module.exports = {
    async create(request, response) {
        const { login, senhaDigitada } = request.body;

        const usuario = await connection('usuario')
        .where('login', login)
        .select('idUsuario')
        .first();

        const valor = await connection('usuario')
        .where('login', login)
        .select('senha')
        .first();

        if(!usuario) {
            return response.status(400).json({ error: 'Usuario ou senha incorreto!'});
        }else{
            const cipher = crypto.createCipher(alg, pwd)
            const senha = cipher.update(senhaDigitada, 'utf8', 'hex')
                if(senha == valor.senha) {
                    return response.json(usuario.idUsuario);
                }else{
                    return response.status(400).json({ error: 'Usuario ou senha incorreto!'});
          }
        }
    }
}