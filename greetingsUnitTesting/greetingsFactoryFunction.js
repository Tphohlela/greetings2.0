function greetings(names) {

    var namesGreeted = names || {};
   var namesGreeted2 = {};


function errors(name,langValue){
    if (!name && !langValue) {
        return 'Please enter name and choose language'
    }
    else if (!langValue ) {
        return 'Please choose language'
    }

    else if (name === "" || name == Number(name)) {
        return 'Please enter name'

    }

    else return null;
}

    function greetings1(name,langValue) {
        var name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

        addNames(name,langValue)
        errors(name,langValue)
         successGreeting(name)
    

        if (name === "" || name == Number(name)|| name.includes()) {
            return null;
    
        }

      
        if (langValue === "English") {
            return 'Hello, ' + name;

        } else if (langValue === "Afrikaans") {
            return 'Hallo, ' + name ;
            
        } else if (langValue === "isiXhosa") {
            return 'Molo, ' + name  ;
        }
       
    }

    function addNames(name,langValue) {
        if (name === "" || name == Number(name)){
            namesGreeted2[name];
            return null;
        }
        else if (langValue && namesGreeted[name] === undefined) {
            namesGreeted[name] = 0;
            return null;
        }
    }

    function getNames() {
        return namesGreeted;
    }

    function successGreeting(name){
        if(name == null || name == Number(name)){
            return null;
        }
        else {

            return  "You have been succesfully greeted"; 
       
        }
    }

    function getCount() {
        return Object.keys(namesGreeted).length;
    }

    return {
        addNames,
        greetings1,
        errors,
        getNames,
        getCount,
        successGreeting,    
    }
}