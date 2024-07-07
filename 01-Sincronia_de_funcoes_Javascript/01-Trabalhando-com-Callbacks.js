/*
    0 - Obter um usuario
    1 - Obter um numero de telefone de um usuario a parti de seu Id
    2 - Obter o endereco do usuario pelo Id
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Pipico',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '1234567890',
            ddd: 81
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 9
        })
    }, 2000)
}

obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 === false
    if (error) {
        console.error('DEU RUIM em USUARIO', error)
        return
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('DEU RUIM em TELEFONE', error)
            return
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('DEU RUIM em TELEFONE', error)
                return
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua}, ${endereco.numero},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})
