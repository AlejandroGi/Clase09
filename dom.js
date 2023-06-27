var allMsgError = "";

/*----------------------------FORMS-----------------------------*/
var btnSub = document.getElementById('btnSub');
btnSub.addEventListener('click',openForm);

function openForm(){
    var allForm= allForm.getElementById('form');
    allForm.style.display="flex";
}

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeForm);

function closeForm(){
    var allForm= allForm.getElementById('form');
    allForm.style.display="none";
}



/*----------------------------COLORS-----------------------------*/

var form = document.querySelector('body');
form.addEventListener('mousemove', changeColorByMove);

function changeColorByMove(e){
    var titleColor = document.getElementById('title');
    titleColor.style.color = "rgb("+e.offsetX+","+ e.offsetY+",40)";
}

/*----------------------------CLEAR INPUT-----------------------------*/

function clearInput(){

}

/*----------------------------NAME SURNAME-----------------------------*/

var nameSurname = document.getElementById('nameSurname');
nameSurname.addEventListener('keyup',namePlus);
nameSurname.addEventListener('blur',validateNameSurname);
nameSurname.addEventListener('focus',clearInput);

/*-----------------CHANGE HELLO-----------------*/
function namePlus(){
    var subTitle = document.getElementById('subTitle');
    subTitle.innerText = 'Hola, ' + nameSurname.value;
}

/*-----------------VALIDATE NAME SURNAME-----------------*/
function validateNameSurname(){
var acum=0;
var acumEspacios=0;    
var errorMsg ="";

    for (x=0; x <= nameSurname.value.length; x++){
        if(nameSurname.value.charAt(x).toLowerCase().search(/[a-z]/) >= 0){ 
            /*!! Si pongo igual a 0 y no mayor o igual tira error*/
            /*Al consultar siempre el indice 0 (por separarlos en chart) tiene que ser igual a 0*/
            acum++;
        }
        if(nameSurname.value.charAt(x).search(/[ ]/) >= 0){
            acumEspacios++;
        }
    }
    if ((acum+acumEspacios) != nameSurname.value.length){
        errorMsg= "El Nombre y Apellido no puede contener numeros o caracteres especiales. ";
    }else {
        if(nameSurname.value.length < 6){
            errorMsg=errorMsg+ "El Nombre y Apellido tiene menos de 6 caracteres alfabeticos. ";}
        if (acumEspacios != 1){
            if (acumEspacios < 1)
            errorMsg=errorMsg+ "El Nombre y Apellido no cuenta con un espacio intermedio. ";
            if (acumEspacios > 1)
            errorMsg=errorMsg+ "El Nombre y Apellido cuenta con mas de un espacio intermedio. ";
        }
    }
    document.getElementById('error-nameSurname').innerHTML = errorMsg;
    allMsgError = allMsgError + errorMsg;
}



/*----------------------------VALIDATE EMAIL-----------------------------*/

var email = document.getElementById('email');
email.addEventListener('blur',validateEmail);
email.addEventListener('focus',clearInput);

function validateEmail(){

    var errorMsg="";

    if(email.value.search(/[@]/) < 0) { 
        errorMsg = errorMsg + " El formato de email debe contener'@'. ";
    } 
    if(email.value.search(/[.]/) < 0) { 
        errorMsg = errorMsg + " El formato de email debe contener'.'. ";
    } 
    document.getElementById('error-email').innerText = errorMsg;
    allMsgError = allMsgError + errorMsg;
}


/*----------------------------VALDIATE PASSWORD-----------------------------*/

var password = document.getElementById('password');
password.addEventListener('blur', validatePassword);
password.addEventListener('focus',clearInput);

function validatePassword(){

    var errorMsg = "";

    if(password.value.length < 8) { 
        errorMsg = errorMsg + "La contraseña debe ser de 8 o mas caracteres alfanumericos. ";
        document.getElementById('error-password').innerText = errorMsg;
        return;
    } 

    if(password.value.search(/[a-z]/) < 0) { 
        errorMsg = errorMsg + " La contraseña debe contener por letras MINUSCULAS. ";
    }
    if(password.value.search(/[A-Z]/) < 0) { 
        errorMsg = errorMsg + " La contraseña debe contener letras MAYSUCULAS. ";
    }
    if(password.value.search(/[0-9]/) < 0) { 
        errorMsg = errorMsg+ " La contraseña debe contener NUMEROS. ";
    } 
    document.getElementById('error-password').innerText = errorMsg;
    allMsgError = allMsgError + errorMsg;
}


/*----------------------------VALDIATE AGE-----------------------------*/

var age = document.getElementById('age');
age.addEventListener('blur', validateAge);
age.addEventListener('focus',clearInput);

function validateAge(){

    var errorMsg="";

    if(!Number.isInteger(Number(age.value))){
        errorMsg="La edad debe ser numerica y no tener decimales. ";
    }else {
        if (age.value < 18){
            errorMsg = "La edad debe ser mayor o igual a 18. ";
        }
    }
    document.getElementById('error-age').innerText = errorMsg;
    allMsgError = allMsgError + errorMsg;
}


/*----------------------------VALDIATE CELLPHONENUMBER-----------------------------*/

var cellPhoneNumber = document.getElementById('cellPhoneNumber');
cellPhoneNumber.addEventListener('blur',validatecellPhoneNumber);
cellPhoneNumber.addEventListener('focus',clearInput);

function validatecellPhoneNumber(){

    var errorMsg = "";
    
    if(!Number.isInteger(Number(cellPhoneNumber.value))){
        errorMsg="El telefono debe ser numerico. ";
        return;
    }else{
        if (cellPhoneNumber.value.length < 7){
        errorMsg= errorMsg+ "El numero de telefono debe tener al menos 7 digitos. ";
        }
    }

  /*  if (cellPhoneNumber.value.search(/[\s\s()-_]/) >= 0){
        errorMsg= errorMsg+ "El numero de telefono no puede contener espacios, guiones y/o parentesis. ";
    }*/

    document.getElementById('error-cellPhoneNumber').innerText = errorMsg;
    allMsgError = allMsgError + errorMsg;
    /*Por si algun dia necesito filtrar otras cosas  \!\@\#\$\%\^\&\*\)\(+\=\._-    ||    /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/  */

}


/*----------------------------VALIDATE ADDRESS-----------------------------*/

var address = document.getElementById('address');
address.addEventListener('blur',validateAddress);
address.addEventListener('focus',clearInput);

function validateAddress(){
    var acumChar=0;
    var acumNum =0;
    var acumEsp = 0;
    /* Porque no me deja var acumChar, acumNum, acumESP = 0; ? */
    var errorMsg = "";

    if (address.value.length < 5){
        errorMsg= errorMsg+ "La direccion debe tener al menos 5 caracteres. ";
    }

    for (x=0; x <= address.value.length; x++){
        if(address.value.charAt(x).toLowerCase().search(/[a-z]/) >= 0){
            acumChar++;
            console.log(acumChar)
        }
        if(address.value.charAt(x).search(/[0-9]/) >= 0){
            acumNum++;
        }
        if(address.value.charAt(x).search(' ') >= 0){
            acumEsp++;
        }
    }
    

    if (acumChar === 0){
        errorMsg= errorMsg+ "La direccion debe contar con letras. ";
    }
    if (acumNum === 0){
        errorMsg= errorMsg+ "La direccion debe contar con numeros. ";
    }
    if (acumEsp != 1){
        errorMsg= errorMsg+ "La direccion debe contar con un espacio. ";
    }

    if ((acumChar+acumNum+acumEsp) != address.value.length){
        errorMsg= errorMsg+ "La direccion no puede contener caracteres especiales. ";
    }
    document.getElementById('error-address').innerText = errorMsg;
    
    /* Si llego con el tiempo lo mejoro*/
    allMsgError = allMsgError + errorMsg;
}


/*----------------------------VALIDATE CITY-----------------------------*/

var city = document.getElementById('city');
city.addEventListener('blur',validateCity);
city.addEventListener('focus',clearInput);

function validateCity(){
    if (city.value.length < 3){
        var errorMsg= "La ciudad debe contar con 3 o mas caracteres. ";
        document.getElementById('error-city').innerText = errorMsg;
    }
    allMsgError = allMsgError + errorMsg;
}


/*----------------------------VALIDATE POSTAL CODE-----------------------------*/

var postalCode = document.getElementById('postalCode');
postalCode.addEventListener('blur',validatePostalCode);
postalCode.addEventListener('focus',clearInput);

function validatePostalCode(){
    if (postalCode.value.length < 3){
        var errorMsg= "El codigo postla debe contar con 3 o mas caracteres. ";
        document.getElementById('error-postalCode').innerText = errorMsg;
    }
    allMsgError = allMsgError + errorMsg;
}


/*----------------------------VALIDATE PASSPORT CARD-----------------------------*/

var passportCard = document.getElementById('passportCard');
passportCard.addEventListener('blur',validatePassportCard);
passportCard.addEventListener('focus',clearInput);

function validatePassportCard(){

    var errorMsg = "";

    if(!Number.isInteger(Number(passportCard.value))){
        errorMsg="El DNI debe ser numerico y no tener decimales. ";
    }else if(passportCard.value.length < 7 || passportCard.value.length > 8){
        errorMsg= "El DNI debe contener 7 u 8 digitios.";
    }
    allMsgError = allMsgError + errorMsg;
    document.getElementById('error-passportCard').innerText = errorMsg;
}


/*----------------------------BTN SEND-----------------------------*/

var btnSend = document.getElementById('btnSend');
btnSend.addEventListener('click', checkInputs)

console.log(nameSurname.value);
console.log(allMsgError)
console.log(allMsgError.value)
console.log(allMsgError)

var allMsgError = document.getElementsByClassName('error');

console.log(allMsgError.value)
console.log(allMsgError)

function checkInputs(){
    if (allMsgError === ""){
        alert(nameSurname.value + email.value + password.value + age.value + cellPhoneNumber.value +address.value + city.value + postalCode.value + passportCard.value);
    }else{
        alert(allMsgError.value);
    }
}