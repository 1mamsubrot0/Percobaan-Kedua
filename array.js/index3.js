
// Cara mengKOMBAIN array dalam array, string dalam array, object dalam array, nilai(velue) dalam array dall
const arraySaya = ['🚗', 17, {mobil: function(){
    console.log('ini Mobil')
}}, ['Transportasi', 'Umum']]; // data original (length (panjang data) = 5)

console.log({ arraySaya })

// console.log(arraySaya[0]) // cara memamngil nilai 🚗

// console.log(arraySaya[1]) // memangil nilai 17

// console.log(arraySaya[2].mobil) // memangil nilai {mobil: true}
// arraySaya[2].mobil() // memangil di loar console.log(funtion)

// console.log(arraySaya[3]) // memangil nilai ['Tranportasi', 'Umum']
// console.log(arraySaya[3][1]) // memangil nilai ['Umum']
// console.log(arraySaya[3][0]) // memangil nilai ['Transportasi]
