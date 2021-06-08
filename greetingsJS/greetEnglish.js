var nameString = document.querySelector(".enterName");
var helloPlusName = document.querySelector(".greetingAndName");
var buttonForGreetMe = document.querySelector(".greetMeBtn");
var counterRef = document.querySelector(".counter1")
var emptyStringRef = document.querySelector(".greetingAndName1");
var resetBtnRef = document.querySelector(".resetBtn");
var succesGreetingRef = document.querySelector(".succesGreeting");

var count = 0;

var dataFromLocal
if (localStorage['names']) {
    dataFromLocal = JSON.parse(localStorage.getItem('names'));
} else {
    dataFromLocal = {}
}
var namesGreeted = dataFromLocal;

var retrievedCount;
var greetingsInstance = greetings(dataFromLocal);
var retrievedNames;

myVar;
counterRef.innerHTML = greetingsInstance.getCount();

function clearTextArea() {

    nameString.value = null;

}

function clearEmptyStringArea() {
    emptyStringRef.innerHTML = " ";
}

function clearGreetingArea() {
    helloPlusName.innerHTML = " ";
}

function clearCounterArea() {
    counterRef.innerHTML = " ";
}


function clearSuccessGreeting() {
    succesGreetingRef.innerHTML = " ";
}


 var myVar;
 var myVar1;

function myFunction() {
    myVar = setTimeout(function () {
        emptyStringRef.innerHTML = null;
    }
        , 2000);
}

function myFunction1() {
    myVar1 = setTimeout(function () {
        succesGreetingRef.innerHTML = null;
    }
        , 2000);
}

function greet() {
    var name = nameString.value;
    myFunction();
    myFunction1();
    
    var radioBtnEng = document.querySelector("input[name='langRadioBtn']:checked");

    nameString.value = null;    
   
    if (!radioBtnEng){
        
        emptyStringRef.classList.add('danger');
        emptyStringRef.innerHTML = greetingsInstance.errors(name,langValue);
        clearGreetingArea();
       
    }

    if (radioBtnEng) {
       
        var langValue = radioBtnEng.value;

        radioBtnEng.checked = false;
        emptyStringRef.classList.add('danger');  
        emptyStringRef.innerHTML = greetingsInstance.errors(name,langValue);

     
        helloPlusName.innerHTML = greetingsInstance.greetings1(name,langValue)

        localStorage['names'] = JSON.stringify(namesGreeted);
        var list = Object.keys(dataFromLocal).length;
        counterRef.innerHTML = list;
        succesGreetingRef.classList.add('success')
        succesGreetingRef.innerHTML = greetingsInstance.successGreeting(name);
        
    }
}

function reset() {
    count1 = 0;
    counterRef.innerHTML = 0;


    localStorage.clear();
    location.reload();

    clearGreetingArea();
    clearEmptyStringArea();
}

buttonForGreetMe.addEventListener('click', greet);
resetBtnRef.addEventListener('click', reset);