alert('Iltimos malumotni kiritayotganda etiborli boling. (OTM larni namunadagidek kiriting)');
var lastName = prompt('Iltimos ismingizni kiriting.');
var otm = prompt( lastName + ' qaysi OTM ni tanlaysiz. 1.TDIU  2.TDMI  3.MU');
var bal = prompt( lastName + ' ballingizni kiriting .');

if (otm === 'TDIU') {
    if (bal <= 120) {
        alert('Afsuski siz yiqilgansiz.');
    } else if (bal > 120 && bal <= 150) {
        alert('Siz kantrakt asosida oqishga qabul qilindingiz.');
    } else{
        alert('Siz grantga qabul qilindingiz.');
    }
} else if (otm === 'TDMI') {
    if (bal <= 100) {
        alert('Afsuski siz yiqilgansiz.');
    } else if (bal > 100 && bal <= 160) {
        alert('Siz kantrakt asosida oqishga qabul qilindingiz.');
    } else{
        alert('Siz grantga qabul qilindingiz.');
    }
} else if (otm === 'MU') {
    if (bal <= 160) {
        alert('Afsuski siz yiqilgansiz.');
    } else if (bal > 168 && bal <= 180) {
        alert('Siz kantrakt asosida oqishga qabul qilindingiz.');
    } else{
        alert('Siz grantga qabul qilindingiz.');
    }
}
else{
    alert('Siz OTM yoki boshqa malumotlarni notogri kirittingiz.');
}