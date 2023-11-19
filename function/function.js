
// const arraySaya = [1, 2, 3, 4, 5,]
// console.log(arraySaya)

//return -> console.log()
//cara 1 penangkapan data/pasing data, passing parameter dll.
function namaSaya(firstName, lastName) {
    console.log(firstName, lastName)
    console.log('Nama depan saya:', firstName)
    console.log('Nama belakan saya:', lastName)
}
namaSaya('Imam', 'Subroto')


//Cara 2 menggunakan argumen tanpa kita harus tangkap datanya di parameter function nya
// function namaSaya(){
//     console.log('Nama depan saya:',arguments[0])
//     console.log('Nama belakan saya:', arguments[1])
// }
// namaSaya('Imam', 'Subroto')


//cara 3 mengunakan variabel ( menggabungkan variabel didalam function)
// const fullName = function namaSaya(firstName, lastName){
//     console.log(firstName, lastName)
//     console.log('Nama depan saya:', firstName)
//     console.log('Nama belakang saya:', lastName)
// }
// fullName('Imam', 'Subroto')


// cara 4 menggunakan keyword NEW fuction
// function namaSaya(firstName, lastName){
//     console.log(firstName, lastName)
// }

// const fullName = new Function('firstName', 'lastName', 'console.log(firstName, lastName)'
// )
// fullName('Imam', 'Subroto')

// // // SUM(penjumlahan) cara 1 menggunakan keyword NEW
// const sum1 = new Function('x', 'z', 'console.log(x + z)')
// // //cara 2 standar function
// function sum2 (x, z) {
//     console.log(x + z)
// }
// //cara 2"
// function sum2(x, z){
//     if(x + z == 14){
//         console.log('Pnejumlahan benar')
//     }
// };
// // //cara 3 arrow function
// const sum3 = (x, z) => {
//     console.log(x + z)
// }


// cara 4 random function
// function randomize() {
//     const randomNomor = ~~(Math.random() * 1000)
//     if (randomNomor > 150){
//         console.log('Angka lebih dari 150', randomNomor)
//     } else {
//         console.log(randomNomor)
//     }
// }

// sum1(5, 5);
// sum2(8, 6);
// sum3(10,8)
// randomize()
// //end SUM



// end......
