const express = require('express');
const server = express();

server.get('/api', (req, res) => {
    return res.json({mensagem: 'Fazendo teste!'})
})

server.listen(3000, () => {
    console.log('servidor está funcionando...')
})