let cuaca = 'cerah';
let sepatuHitam = true;
if (cuaca == 'Hujan') {
    console.log('pergi ke toko sepatu');
    if (sepatuHitam) {
        console.log('bertanya apaka ada seaptu warna hitam');
        console.log('pulang membawa sepatu putih');
    } else {
        console.log('pulang bawa sepatu hitam')
    }
} else {
    console.log('buka online shop');
    if (sepatuHitam) {
        console.log('ada sepatu hitam');
    } else {
        console.log('gak ada sepatu hitam');
        console.log('beli baju aja');
    }
    console.log ('langsung checkout')
}