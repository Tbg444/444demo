// clickchecker
document.documentElement.addEventListener("click", function(event) {
    console.log(event.target.className);
});

function erasePlaceholder(event) {
    event.target.placeholder = '';
    
}
function fillInput(event) {

    var isInternal = event.target.name;
    var inputValue = event.target.value;
    

    if (isInternal == 'internal') {
        return;
    }
    else if (inputValue === "") {
        event.target.className = "in";
    }
    else {
        event.target.classList.add("in--filled");
        event.target.classList.remove("in--warning");
        event.target.style = "transition: border-width 100ms ease-out, border-color 100ms ease-out";
        event.target.parentElement.className = "in__area";
    }
}

function leaveInput(event) {

    var isInternal = event.target.name;
    var inputValue = event.target.value;
    var isRequired = event.target.required;
    var isEmail = event.target.type;

    if (isInternal == 'internal') {
        return;
    }
    else if (
        isRequired === true && inputValue === "" 
        ) {
        event.target.classList.add("in--warning");
        event.target.style = "transition: border-width 100ms ease-out, border-color 100ms ease-out";
        event.target.parentElement.classList.add("in--warning");
    }
    else if (
        isRequired === false &&  inputValue === "" 
    ) {
        event.target.classList.add("in");
        event.target.style = "transition: border-width 100ms ease-out, border-color 100ms ease-out";

    }
    else if (
        isEmail.includes('email') === true && inputValue.includes('@') === false 
    ) {
        event.target.classList.add("in--warning");
        event.target.style = "transition: border-width 100ms ease-out, border-color 100ms ease-out";
        event.target.parentElement.classList.add("in--warning");
        
    }
    else {
        event.target.className = "in in--filled";
        event.target.classList.remove("in--warning");
        event.target.style = "transition: border-width 100ms ease-out, border-color 100ms ease-out";


    }
}

function trigList(event) {

    var isTriggered = event.target.classList.value;
    var isFilled = document.getElementById('selectedItem').innerHTML;
    var selTriggerTransition = "transition: border-width 100ms ease-out, border-bottom-left-radius 100ms ease-out, border-bottom-right-radius 100ms ease-out, background-color 100ms ease-out;"
    

        if ( isTriggered.includes("triggered") === true ) 
        {
            if (
                isFilled === ''
                ) {
                    event.target.classList.remove("sel--selected");
                }
            event.target.classList.remove("sel__trigger--triggered");
            event.target.style = selTriggerTransition;
            document.getElementById("selectList").classList.remove("sel__list--triggered");
            document.getElementById("selectList").style = "transition: height 100ms ease-out;";
            document.getElementById("selectArrow").classList.remove("sel__arrow--triggered");


        }
        else {
        event.target.classList.add("sel__trigger--triggered");
        event.target.style = selTriggerTransition;
        document.getElementById("selectList").classList.add("sel__list--triggered");
        document.getElementById("selectList").style = "transition: height 100ms ease-out;";
        event.target.classList.add("sel--selected");
        document.getElementById("selectArrow").classList.add("sel__arrow--triggered");
        document.getElementById("selectArrow").style = selTriggerTransition;

    }
}


function selectItem(event) {

    var selection = event.target.innerHTML;

    if (selection === 'del!') {
        selection = '';
    }
    document.getElementById('selectedItem').innerHTML = selection;
}

