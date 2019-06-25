/*document.documentElement.addEventListener("click", function(e) {
    console.log(e.target.className);
});*/
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
    console.log(isFilled);

        if ( isTriggered.includes("triggering") === true ) 
        {
            if (
                isFilled === ''
                ) {
                    event.target.classList.remove("sel--selected");
                }
            event.target.classList.remove("sel__trigger--triggering");
            event.target.style = selTriggerTransition;
            document.getElementById("selectList").classList.remove("sel__list--triggered");
            document.getElementById("selectList").style = "transition: height 100ms ease-out;";

        }
        else {
        event.target.classList.add("sel__trigger--triggering");
        event.target.style = selTriggerTransition;
        document.getElementById("selectList").classList.add("sel__list--triggered");
        document.getElementById("selectList").style = "transition: height 100ms ease-out;";
        event.target.classList.add("sel--selected");
    }
}

/*function trigList2(event) {

        var selTriggerTransition = "transition: border-width 100ms ease-out, border-bottom-left-radius 100ms ease-out, border-bottom-right-radius 100ms ease-out, background-color 100ms ease-out;"

        event.target.parentElement.classList.toggle("sel__trigger--triggering");
        event.target.parentElement.style = selTriggerTransition;
        document.getElementById("selectList").classList.toggle("sel__list--triggered");
        document.getElementById("selectList").style = "transition: height 100ms ease-out;";
    
}*/

function selectItem(event) {

    var selection = event.target.innerHTML;

    if (selection === 'del!') {
        selection = '';
    }
    document.getElementById('selectedItem').innerHTML = selection;
}