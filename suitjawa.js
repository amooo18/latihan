var tanya = true;
while ( tanya ) {
// menangkap pilihan player
var p = prompt('pilih : semut, gajah, orang');

// menangkap pilihan computer
// memebangkitkan bilangan random
var comp = Math.random();

if( comp < 0.34 ) {
	comp = 'semut';
}else if( comp >= 0.34 && comp < 0.67 ) {
	comp = 'gajah';
}else {
	comp = 'orang';
}

var hasil = '';
//console.log(comp);

// menentukan rules
if ( p == comp ) {
	hasil = 'SERI';
} else if ( p == 'gajah') {
	/*if( comp == 'orang') {
		hasil = 'MENANG';
	} else {
		hasil = 'KALAH';
	}*/
	hasil = ( comp == 'orang' ) ? 'MENANG' : 'KALAH';
} else if ( p == 'semut') {
	/*if( comp == 'gajah') {
		hasil = 'MENANG'
	} else {
		hasil = 'KALAH';
	}*/
	hasil = ( comp == 'gajah' ) ? 'MENANG' : 'KALAH';
} else if ( p == 'orang') {
	/*if( comp == 'orang') {
		hasil = 'KALAH';
	} else {
		hasil = 'MENANG';
	}*/
	hasil = ( comp == 'semut' ) ? 'MENANG' : 'KALAH';
/*} else if ( p == 'orang') {
	if( comp == 'semut') {
		hasil = 'MENANG'
	} else {
		hasil = 'KALAH';
	}
} else if ( p == 'gajah') {
	if( comp == 'semut') {
		hasil = 'KALAH';
	} else {
		hasil = 'MENANG';
	}
} else if ( p == 'semut') {
	if( comp == 'gajah') {
		hasil = 'MENANG'
	} else {
		hasil = 'KALAH';
	}*/
}
// tampilkan hasilnya
alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + ' \nMaka hasilnya : Kamu ' + hasil);

tanya = confirm('mau coba lagi?');

}
alert('terima kasih')