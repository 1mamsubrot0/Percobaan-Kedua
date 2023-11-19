//Function promis
function satu (){
    console.log('satu')
}
function dua (){
    //setTimeout adalah function bawaannya javascript atau browser yang dimana dia berjalan di balik layar(value nya akan dimunculkan sesuai waktu yang ditentukan ex 3000) berjalan secara paralel(sincronus) sudah bwaan nya😉
    console.log('function ini akan muncul ....')
    setTimeout(() => {
        console.log('dua')
    }, 3000)
}
function tiga (){
    console.log('tiga')
}

satu()
dua()
tiga()