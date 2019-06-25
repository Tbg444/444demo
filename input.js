document.documentElement.addEventListener("click", function(e) {
    console.log(e.target.className);
});


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

        var isEmail = event.target.classList.value;

        if ( isEmail.includes("triggering") === true ) 
        {
            event.target.classList.remove("sel__trigger--triggering");
            event.target.style = "transition: border-width 100ms ease-out, border-bottom-left-radius 100ms ease-out, border-bottom-right-radius 100ms ease-out, background-color 100ms ease-out;";
            document.getElementById("selectList").classList.remove("sel__list--triggered");
            document.getElementById("selectList").style = "transition: height 100ms ease-out;";
        }
        else {
        event.target.classList.add("sel__trigger--triggering");
        event.target.style = "transition: border-width 100ms ease-out, border-bottom-left-radius 100ms ease-out, border-bottom-right-radius 100ms ease-out, background-color 100ms ease-out;" ;
        document.getElementById("selectList").classList.add("sel__list--triggered");
        document.getElementById("selectList").style = "transition: height 100ms ease-out;";
    }
}

function trigList2(event) {


        event.target.parentElement.classList.toggle("sel__trigger--triggering");
        event.target.parentElement.style = "transition: border-width 100ms ease-out, border-bottom-left-radius 100ms ease-out, border-bottom-right-radius 100ms ease-out";
        document.getElementById("selectList").classList.toggle("sel__list--triggered");
        document.getElementById("selectList").style = "transition: height 100ms ease-out;";
    
}
