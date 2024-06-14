
const ulProfile = 'https://api.github.com/users/chdbarbosa'
let profiles = {}

function carregaGitProfile(func){

    fetch(ulProfile)
      .then (function (response) {return response.json()})
      .then (function (dados){
          profiles = dados
          console.log('Dados Carregados')
          func()
      })
}


const ulemail = 'https://api.github.com/user/emails'
let emails = {};

function carregaEmail(func){
    fetch(ulemail,{
        headers: {
            Authorization: "Bearer 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"
        },
    })
      .then (function (response) {return response.json()})
      .then (function (email){
          emails = email
          console.log('Dados Carregados')
          func()
      })
}
