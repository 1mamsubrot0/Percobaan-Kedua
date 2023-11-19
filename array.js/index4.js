
//Margin/menggabung sebauh array menjadi satu
const arraySaya = ['🚗', '🛵', '🛩', '🚇']; // data original (length (panjang data) = 5)
const arrayAku = ['🍕', '🍔', '🍟', '🌭']
//mencombain function array yang diatas
const margeArray = arraySaya.concat(arrayAku)

//untuk memeping/memecah data array atau tepatnya mebuat urutan kebawah array
// for(list of margeArray) //untuk mencari urutan indexnya anda bisa mengganti of=>in
// console.log(list)

//cara untuk menampilkan keduanya yaitu data array dan nilai indexnya anda bisa mengunakan .map()
margeArray.map((value, index) => console.log(value, index)) 
