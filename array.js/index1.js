
// cara mengetahui isi dalam array

const arraySaya = ['🚗', '🛵', '🛩', '🚇']; //length (panjang data) = 4

const plen = arraySaya.includes('🛩')
// const posisiPlen = arraySaya.indexOf('🛩')

if (plen){
    const posisiPlen = arraySaya.indexOf('🛩')

    // cara mencari posisi sebelum plen
    const indexBedore = posisiPlen - 1
    const indexAfter = posisiPlen + 1
    const before = arraySaya[indexBedore]
    const after = arraySaya[indexAfter]
    console.log(`Transportasi sebelum plen ${before}`)
    console.log(`Transportasi sesudah plen ${after}`)
    // mencari end plen

    // cara mencari posisi urutan awal (transportasi)
    const indexAwal = arraySaya.shift() // indexAwal = arraySaya[0] ( sama saja hasilnya)
    console.log(`Transportasi awal adalah ${indexAwal}`)
    //cara mencari posisi urutan akhir (transportasi)
    const indexAkhir = arraySaya.pop() // indexAkhir = arraySaya[arraySaya.lenght - 1] ( sama saja hasilnya)
    console.log(`Transportasi akhir adalah ${indexAkhir}`)

    // console.log(`is plen true ${posisiPlen}`)
} else {
    console.log('Tidak ada')
}


//apakah didalam array mengandung sesuatu