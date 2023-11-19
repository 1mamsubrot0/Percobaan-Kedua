//INI setTimeout() mengunakan parameter "callback"

const token = ~~[Math.random() * 1234567]
const picture = ['Imam', 'restu', 'Risky', 'Yusril']

function login(username, callback){
    console.log('Processing...memvalidasi data login!')
    setTimeout(() => {
    callback({token, username})
    },1000)
}

function getUser(picture, callback){
    console.log('Processing...memvalidasi data getUser!')
    setTimeout(() => {
        callback({apiKey: 'is12345'})
    }, 1500)
    // if(token) return{apiKey: 'ex12345'}
}

function getPicture(apiKey, callback){
    setTimeout(() => {
        callback({pic: picture})
    }, 2000) 
}

//cara memvalidasi dengan cara mengabungkan function di atas mengunakan setTimeout(callback)!
//Urutan dibawah ini disebut neistet callback
login('Imam Subroto', function(response){
    const {token}= response
    getUser (picture, function(response){
        const {apiKey} = response
        getPicture (apiKey, function(response) {
            const {pic} = response 
            console.log(pic)
        })
    })
})

//cara menvalidasi login mengunakan callback parameter (token, username)
// login('Imam subroto', function(response) {
//     console.log('login =>', response)
// })
//cara memvalidasi getUser mengunakan callback parameter (picture, getUser)
// getUser('Imam', function(response){
//     console.log('getUser berhasil di =>', response)
// })
//cara memvalidasi getPicture mengunakan callback parameter (token, getPicture)
// getPicture('Imam_subroto', function(response){
//     console.log('Token picture berhasil :', response)
// })



//Ini contoh pemangilan parameter tanpa mengunakan callback
// const user = login('Imam Subroto')
// console.log(user.token)

// const {apiKey} = getUser(user.token);
// console.log(apiKey)

// const getUserPicture = getPicture(apiKey);
// console.log(getUserPicture)
