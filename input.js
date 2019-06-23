function fillInput(event) {

    var inputValue = event.target.value;
    var isRequired = event.target.required;
    var isEmail = event.target.email;

    if (inputValue === "") {
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

    var inputValue = event.target.value;
    var isRequired = event.target.required;
    var isEmail = event.target.name;

    if (
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
        isEmail.includes('inputEmail') === true && inputValue.includes('@') === false 
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
