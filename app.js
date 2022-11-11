// ~~~ 1 smni metrga almashtirish ~~~

// var sm = prompt();
// var metr = 100;
// var natija ;
// var log;
// natija = sm / metr;
// log = 'Berilgan ' + sm + ' soni ' + natija + ' metr  boladi. '
// console.log(log);




// ~~~ 2 kg ga 0girish~~~

// var kg = prompt();
// var t = 1000;
// var natija ;
// var log;
// natija = kg / t;
// log = kg + ' kg ' + natija + ' tonna  boladi. '
// console.log(log);


// ~~~ 3 kesma ~~~

// var a = 6;
// var b = 4;
// var natija;
// var log ;
// natija = a / b;
// log = 'a kesmani ichida b kesmani ' + natija + ' marta joylashtirish mumkin.' ;

// console.log(log);


// ~~~ 4  ~~~

// var son = prompt('Ikki honali son kiriting :');
// var natija ;
// var onlik ;
// var birlik; 
// onlik = Math.trunc(son / 10);
// birlik = son % 10;

// console.log('Onliklar xonasidagi  raqam : ' + onlik);
// console.log('Birliklar xonasidagi raqam : ' + birlik);



// ~~~ 5 yigindi ~~~

// var a = 10;
// var b = 3;
// var natija ;
// natija = a + b;

// console.log('Sonlar yigindisi : ' + natija);




// ~~~ 6 kopaytma ~~~

// var a = 5;
// var b = 5;
// var natija ;
// natija = a * b;

// console.log('Sonlar kopaytmasi : ' + natija);


// ~~~ 7 ~~~


// var son = 655;
// var soat = 360;1
// var minut = 60;
// var secund;
// var soatNatija;
// var minutNatija;
// var minutfull;

// soatNatija = Math.trunc(son / soat);
// console.log(soatNatija);
// minutNatija = son % minut;
// minutfull = Math.trunc(minutNatija / minut);
// console.log(minutfull);

// if () {
    
// } else {
    
// }





// ~~~ mantiqiy ammalar (if else)


// ~~~1~~~

// var a = prompt();

// if (a >= 1) {
//     console.log('Bu son musbat');
// } else {
//     console.log('BU son manfiy');
// }


// ~~~2~~~

// var a = prompt();
// var b = 2;


// if (a % b == 0) {
//     console.log('Bu juft son');
// } else {
//     console.log('BU toq son');
// }


// ~~~ 4 ~~~

// var a = prompt();
// var b = prompt();

// if (a > 0 && b >0) {
//     console.log('true');
// } else {
//     console.log('false');
// }


// ~~~ 5 ~~~

// var a = prompt();
// var b = prompt();
// var c = prompt();

// if (a > b && b > c) {
//     console.log('true');
// } else {
//     console.log('false');
// }



// ~~~ 6 ~~~

// var a = prompt();
// var b = prompt();
// var c = prompt();

// if (a > b && b < c) {
//     console.log('true');
// } else {
//     console.log('false');
// }


// ~~~ 7 ~~~

// var a = prompt();
// var b = prompt();

// if ( a % 2 == 0 && b % 2 == 0) {
//     console.log('True');
// } else {
//     console.log('false');
// }

// ~~~ 8 ~~~

// var a = prompt();
// var b = prompt();
// var c = prompt();
// var d = prompt();

// if ( a >= 1 && b >= 0 && c >= 0 && d >= 0) {
//     console.log('sonlar musbat');
// } else {
//     console.log('sonlar manfiy');
// }


// ~~~ 9 ~~~


// var a = prompt();
// var b = prompt();
// var c = prompt();

// if (a > 0  b > 0 c > 0) {
    
// } else {
    
// }


// ~~~ 10 ~~~

var son = prompt();

if (son == 1) {
    console.log('Dushanba');
} else if ( son == 2 ) {
    console.log('Seshanba');
}
else if( son == 3){
    console.log('Chorshanba');
} 
else if( son == 4){
    console.log('Payshanba');
} 
else if( son == 5){
    console.log('Juma');
} 
else if( son == 6){
    console.log('Shanba');
} 
else if( son == 7){
    console.log('Yakshanba');
}
else  if (son > 7) {
    console.log('Siz juda katta son kiritingiz ');
}else {
    console.log('Siz kichik son kiritingiz');
}




