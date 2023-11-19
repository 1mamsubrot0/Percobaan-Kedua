
// //cara mngubah model / atau memberi ciri  di KEY 
// const arraySaya = []

// arraySaya['mobil'] = '🚗'
// arraySaya['pesawat'] = '🛩'
// console.log(arraySaya['pesawat'])



//Cara menduplikasikan data awal tanpa merubah data awal
const arraySaya = ['🚗', '🛵', '🛩', '🚇', '🛥']; // data original (length (panjang data) = 5)
// const newArraySaya = arraySaya // Cara yang salah tidak disarankan

// Beberapa cara agar data/isi awal tidak ikut berubah
const newArraySaya = [...arraySaya] // cara no 1
// const newArraySaya = arraySaya.slice() // cara no 2
// const newArraySaya = Array.from(arraySaya) // cara no 3
// const newArraySaya = JSON.parse(JSON.stringify(arraySaya)) //cara no 4

newArraySaya[0] = '🏠'

console.log(arraySaya)
console.log(newArraySaya)

//cara menduplikasikan data awal end