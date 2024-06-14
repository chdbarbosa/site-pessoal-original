const ulProfile = 'https://api.github.com/users/chdbarbosa'
let dados = {}
// function principalProfile() {

//     fetch(ulProfile)
//         .then(function () {
//             dados = {
//                 "name": "Christiano Barbosa",
//                 "company": "Puc-Minas",
//                 "location": "Contagem , MG, Brazil",
//                 "bio": "Interessado em desenvolver carreira em ambiente cloud, containers, orquestradores e ferramentas de segurança nativos de cloud.",
//                 "followers": 2

//             }
//             console.log(dados);
//             return dados;

//         }
//     )
//     console.log(dados);
//     return dados;
// }

async function principalProfile() {
   // Perform the fetch
   try {
        const response = await fetch(ulProfile);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return {};
    }
}
