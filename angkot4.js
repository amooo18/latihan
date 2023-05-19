var jumlah = 10;
var normal = 5;

for( var angkot = 1; angkot <= jumlah; angkot++) {

	if(angkot <= 5 && angkot !== 5) {
		console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');
	} else if (angkot === 5 || angkot === 8 || angkot === 10) {
		console.log('Angkot No. ' + angkot + ' sedang lembur')
	} else {
		console.log('Angkot No. ' + angkot + ' tidak beroperasi dengan baik');
	}

}