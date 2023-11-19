var nama = 'Imam subroto';
var usia = 23
var alamat = 'Dompu'
var tinggiBadan = 162.0
let pacar = null

if (pacar == null){
    pacar = 'belum punya'
} else {
    pacar = 'udah punya'
}

let saldoAwal = 1000000
let saldoTambah = 100000
const hutang = 300000
const saldoAkhir = saldoAwal + saldoTambah - hutang

var x = 12
var y = 2
var z = x * y

alert(`Nilai x = ${x} dan nilai y = ${y} maka hasilnya adalah ${z}`)

alert(`Nama saya ${nama} dan saya berusia ${usia}thn saya berasal dari ${alamat} dan saya memiliki tinggi badan ${tinggiBadan}cm dan untuk pacar ${pacar} sekian dan terimakasih.`)

alert(`Saya mempunyai saldo awal Rp${saldoAwal} dan saya mempunyai tambahan saldo sebesar Rp${saldoTambah} di kurangi hutang saya ${hutang} jadi kesuluruhan saldo saya adalah Rp${saldoAkhir}`)