/*

! PERULANGAN DI JAVASCRIPT
? for, for Of, for in, forEach
* while & do while

**/

const namaSiswa = ['Imam', 'Restu', 'Risky', 'Yusril']

//For of untuk mendapatkan VALUE nya tanpa perlu mempedulikan indexnya.
for(let siswa of namaSiswa){
    console.log(siswa)
}

//For in unutk mendapatkan niai INDEX nya
for (let siswa in namaSiswa){
    console.log(siswa)
}

//forEach dan map untuk mendapatkan kedua-duanya 😂
namaSiswa.forEach((siswa, index) => {
    console.log(siswa, index)
})