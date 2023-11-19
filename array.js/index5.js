
const data = [
    {
        'nama': 'Imam Subroto',
        'stack': 'html css js',
        'age': 48,
    },
    {
        'nama': 'Restu Subroto',
        'stack': 'html css pyton',
        'age': 32,
    },
    {
        'nama': 'RIsky Subroto',
        'stack': 'html css java',
        'age': 17,
    },
    {
        'nama': 'Yusril Subroto',
        'stack': 'html css C++',
        'age': 7,
    }
];

// kalau kalian ingin memunculkan semuanya dengan susunan indexnya anda bisa mengunakan 
data.map((value, index) => {console.log(value)})

// cara ini hanya memunculkan namanya saja karena di console.log memanggil value.NAMA
// data.map((value, index) => { console.log(value.nama)})

// cara memunculkan sesuai urutan usia
// data.sort((a,b) => b.age - a.age).map((value) => console.log(value))

// cara memunculkan urutan mengunakan filter sesuai umur
// data.filter((x) => x.age >= 30).map((value) => console.log(value))
// cara yang kedua ini mengunakan filter tapi diurutkan umur yang besar > kecil ata sebaliknya
// data.sort((a,b) => b.age - a.age).filter((x) => x.age >= 30).map((value) => console.log(value))


