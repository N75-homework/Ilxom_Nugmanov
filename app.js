var $manText = document.querySelector('.text1');
var $bykeText = document.querySelector('.text2');
var $carText = document.querySelector('.text3');
var $planeText = document.querySelector('.text4');
var $btn = document.querySelector('.btn-cal');
var $number = document.querySelector('.namber-inp');


$btn.addEventListener('click', function(evn) {
    evn.preventDefault()

    var a =  Number($number.value) / 3.6 // soat
    var b =  a / 24                    // kun                                         => natija > kun
    var b1 = Math.floor(b) * 24               
    var c = a - b1                     // qolgan soatni topiw                         => natija > soat
    var d = c * 60                     // soatni minutga aylantiramz qoldiq bn
    var d1 = Math.floor(c) * 60        // soatni minutga aylantiramz qoldiqsiz     
    var d2 = d - d1                    // qoldiqlida - qoldiqsizi = qolgan minut      => natija > minut
    var e = d2 * 60                    // minutni sekundga aylantiramz 
    var e1 = Math.floor(d2 * 60 )      // minutni sekundga aylantiramz  qoldiqli
    var e2 = e - e1                     // qoldiqlida - qoldiqsizi = qolgan sekund    => natija > sekund
             
    
    var kun = Math.floor(b);
    var soat = Math.floor(c);
    var minut = Math.floor(d2);
    var sekund = Math.round(e2);

    $manText.innerHTML = `<h2> ${kun} kun </h2>
    <h2> ${soat} soat </h2>
    <h2> ${minut} minut </h2>
    <h2> ${sekund} sekund </h2> `
   

     //byke

    var a =  Number($number.value) / 20.1 // soat
    var b =  a / 24                    // kun                                         => natija > kun
    var b1 = Math.floor(b) * 24               
    var c = a - b1                     // qolgan soatni topiw                         => natija > soat
    var d = c * 60                     // soatni minutga aylantiramz qoldiq bn
    var d1 = Math.floor(c) * 60        // soatni minutga aylantiramz qoldiqsiz     
    var d2 = d - d1                    // qoldiqlida - qoldiqsizi = qolgan minut      => natija > minut
    var e = d2 * 60                    // minutni sekundga aylantiramz 
    var e1 = Math.floor(d2 * 60 )      // minutni sekundga aylantiramz  qoldiqli
    var e2 = e - e1                     // qoldiqlida - qoldiqsizi = qolgan sekund    => natija > sekund
             
    
    var kun = Math.floor(b);
    var soat = Math.floor(c);
    var minut = Math.floor(d2);
    var sekund = Math.round(e2);

    $bykeText.innerHTML = `<h2> ${kun} kun </h2>
    <h2> ${soat} soat </h2>
    <h2> ${minut} minut </h2>
    <h2> ${sekund} sekund </h2> `
   
    
      //CAR
    var a =  Number($number.value) / 70 // soat
    var b =  a / 24                    // kun                                         => natija > kun
    var b1 = Math.floor(b) * 24               
    var c = a - b1                     // qolgan soatni topiw                         => natija > soat
    var d = c * 60                     // soatni minutga aylantiramz qoldiq bn
    var d1 = Math.floor(c) * 60        // soatni minutga aylantiramz qoldiqsiz     
    var d2 = d - d1                    // qoldiqlida - qoldiqsizi = qolgan minut      => natija > minut
    var e = d2 * 60                    // minutni sekundga aylantiramz 
    var e1 = Math.floor(d2 * 60 )      // minutni sekundga aylantiramz  qoldiqli
    var e2 = e - e1                     // qoldiqlida - qoldiqsizi = qolgan sekund    => natija > sekund
             
    
    var kun = Math.floor(b);
    var soat = Math.floor(c);
    var minut = Math.floor(d2);
    var sekund = Math.round(e2);

    $carText.innerHTML = `<h2> ${kun} kun </h2>
    <h2> ${soat} soat </h2>
    <h2> ${minut} minut </h2>
    <h2> ${sekund} sekund </h2> `
 
       // plane
    var a =  Number($number.value) / 800 // soat
    var b =  a / 24                    // kun                                         => natija > kun
    var b1 = Math.floor(b) * 24               
    var c = a - b1                     // qolgan soatni topiw                         => natija > soat
    var d = c * 60                     // soatni minutga aylantiramz qoldiq bn
    var d1 = Math.floor(c) * 60        // soatni minutga aylantiramz qoldiqsiz     
    var d2 = d - d1                    // qoldiqlida - qoldiqsizi = qolgan minut      => natija > minut
    var e = d2 * 60                    // minutni sekundga aylantiramz 
    var e1 = Math.floor(d2 * 60 )      // minutni sekundga aylantiramz  qoldiqli
    var e2 = e - e1                     // qoldiqlida - qoldiqsizi = qolgan sekund    => natija > sekund
             
    
    var kun = Math.floor(b);
    var soat = Math.floor(c);
    var minut = Math.floor(d2);
    var sekund = Math.round(e2);

    $planeText.innerHTML = `<h2> ${kun} kun </h2>
    <h2> ${soat} soat </h2>
    <h2> ${minut} minut </h2>
    <h2> ${sekund} sekund </h2> `
})