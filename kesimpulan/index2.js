//INI setTimeout mengunakan parameter "promise"

const token = ~~[Math.random() * 54321]
const picture = ['1-Imam', '2-Restu', '3-Risky', '4-Yusril']

function login(username) {
    console.log('Procesing..memvalidasi login!')
    return new Promise((suecces, wrong) => {
        setTimeout(() => {
            // return ({token, username})
            //ini adalah validasi if else
            if (username !=='Imam_Subroto') wrong('sorry wrong userName')
            suecces({ token })
        }, 3000) 
    })
}

function getUser (user) {
    console.log('Procesing..Memvalidasi user!')
    return new Promise((suecces, wrong) => {
        if (!token) wrong('sorry no token, cannot acces')
        setTimeout(() => {
            suecces({data: 'Token12345'})
    }, 2000)
    })
}

function getPicture (pictures) {
    console.log('Procesing..memvalidasi pictures!')
    return new Promise((suecces, wrong) => {
        if (!picture) wrong('no picture, cannot acces')
        setTimeout(() => {
            suecces({pic: picture})
        }, 1500)
    })
}

//async function
async function UserDisplay() {
    //untuk mengecek mengecek validasi error nya kita gunakan ( try { isi dari Display} catch(err){console.log(err)})
    const { token } = await login('Imam_Subroto')
    const { data } = await getUser(token)
    const { pic } = await getPicture(picture)

    console.log(`
    token anda adalah: ${token}
    data anda adalah: ${data}
    request gambar anda berikut ini: ${pic}
    `)
}

UserDisplay()




//ini cara memvalidasikan dengan cara mengabungkan function yang diatas
// const user = login('Imam_Subroto')
// user.then(function (response) {
//     const { token } = response
//     getUser(token).then(function (response){
//         // console.log({ response })
//         const { data } = response
//         console.log(data)
//     }).catch(err => console.log(err))
// }).catch(err => console.log(err)) 
//apanila terjadi ada error ( }).catch(err => console.log(err)) )


//Cara memangil (retrun ne promise) masing-masing function
// const user = login('Imam_Subroto')
// user.then(function(respone) {
//     console.log(respone)
// })
