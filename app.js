var $fullName = document.querySelector('.full-name');
var $userName = document.querySelector('.first-name');
var $userSurName = document.querySelector('.last-name');

var $userEmail = document.querySelector('.email-address');
var $fullUserEmail = document.querySelector('.full-email');

var $userProfesia = document.querySelector('.fullprofesia');
var $fullUserProfesia = document.querySelector('.profesia');

var $userAdress = document.querySelector('#country');
var $userCity = document.querySelector('.city');
var $userStreet = document.querySelector('.street');
var $userState = document.querySelector('.state');
var $userZip = document.querySelector('.zip');
var $fullAddress = document.querySelector('.full-address');

var $fullAbout = document.querySelector('.full-about');
var $userAbout = document.querySelector('#about');




var $btn = document.querySelector('.btn');
var $Form = document.querySelector('.form');
var $aboutSection = document.querySelector('.about-section');


function downlod(){
   html2pdf()
   .from($aboutSection)
   .save();
}


$Form.addEventListener("submit", function(evt) {
    evt.preventDefault()
    
    $fullName.textContent = ($userName.value + " " + $userSurName.value);
    $userProfesia.textContent = ($fullUserProfesia.value);
    $fullUserEmail.textContent = ($userEmail.value);
    // $fullUser.textContent = ($userEmail.value);
    $fullAddress.textContent = ($userAdress.value + " " + $userStreet.value + " " + $userCity.value + " " + $userState.value  + " " + $userZip.value );
    $fullAbout.textContent = ($userAbout.value);
    


    
    $userName.value = null;
    $userSurName.value = null;
    $fullUserProfesia.value  = null;
    $userEmail.value  = null;
    $userAdress.value = null;
    $userStreet.value = null;
    $userCity.value = null;
    $userState.value = null;
    $userZip.value = null;
    $userAbout.value  = null;



})

