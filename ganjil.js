var nomor = [2, 9, 10, 3, 7, 1, 8, 14, 18, 5, 17];

var genap = [];
var ganjil = [];
var i = 0;

for (i; i < nomor.length; i++) {
  if (nomor[i] % 2 == 0) {
    genap.push(nomor[i]);
  } else {
    ganjil.push(nomor[i]);
  }
}
console.log(genap);
console.log(ganjil);
