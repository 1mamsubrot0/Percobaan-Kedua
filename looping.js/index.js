/*

! PERULANGAN DI JAVASCRIPT
? for, for Of, for in, forEach
* while & do while

**/

//statemen for itu harus di ikuti statemen1 (initializations(let x = 1;)), statemen2 (condition(x <=/=> 5;)), statemen3 (efectes atau aksi yang akan dilakukan (x++))

//contoh Looping mengunakan FOR
for (let x =1; x <= 10; x++) {
    if (x % 2 !== 0) console.log('Angka ke -', x)
}

//conoth Looping mengunakan WHILE
let z = 1
while (z <= 10) {
    if (z % 2 !== 1 )
    console.log('Data ke -', z) 
    z++
}

//conoth Looping mengunakan DO WHILE
let i = 1
do {
    console.log('Nomor ke -', i)
    i++
} while (i <= 10)

    // console.log('Data ke-', x)
    //Data ke - 1 ------- x = 2
    //Data ke - 2 ------- x = 3
    //Data ke - 3 ------- x = 4
    //Data ke - 4 ------- x = 5
    //Data ke - 5 ------- x = 6 

  