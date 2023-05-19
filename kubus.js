function tambah(a, b) {
  return a + b;
}

var a = parseInt(prompt('Masukan nilai 1 : '));
var b = parseInt(prompt('Masukan nilai 2 : '));

var hasil = tambah(a, b);

console.log(hasil);

/*function hitungVolumeKubus(a, b) {
  var total, volumeA, volumeB;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;

  return total;

}

console.log(hitungVolumeKubus(8, 3));*/

/*function hitungVolumeKubus(sisi) {
  var volume = Math.pow(sisi, 3);
  return volume;
}

var sisiKubus = 5;
var volumeKubus = hitungVolumeKubus(sisiKubus);
console.log("Volume kubus dengan sisi", sisiKubus, "adalah", volumeKubus);*/