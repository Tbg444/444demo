/* clickchecker
document.documentElement.addEventListener("click", function(event) {
    console.log(event.target.className);
});
*/

document.querySelectorAll('.chk').forEach((checkChecker) => {
    checkChecker.addEventListener('click', (checker) => {
        checker.stopPropagation();
        var checkerState = checker.currentTarget.getAttribute('data-state');
        var svgUchk = document.getElementById('svg-uchk');
        var svgChk = document.getElementById('svg-chk');
        var svgIchk = document.getElementById('svg-ichk');

        switch (checkerState) {
            case  'unchecked': {
                checker.currentTarget.classList.remove('chk--unchecked');
                checker.currentTarget.classList.toggle('chk--checked');
                checker.currentTarget.setAttribute('data-state', 'checked');
                svgUchk.innerHTML = "<use xlink:href=\"#icon__checkbox--checked\" id=\"svg--unchecked\"></use>"
                console.log(checkerState);
                break; }
            case  'checked': {
                console.log(checkerState);
                checker.currentTarget.classList.remove('chk--checked');
                checker.currentTarget.classList.toggle('chk--unchecked');
                checker.currentTarget.setAttribute('data-state', 'unchecked');
                svgChk.innerHTML = "<use xlink:href=\"#icon__checkbox--unchecked\" id=\"svg--unchecked\"></use>"
                break; }
            
    /*        case  'indeterminate': {
                checker.currentTarget.classList.toggle('chk--unchecked');
            break;}*/
        }
    })
})


document.querySelector('.btn--internal').addEventListener('click', (e) => {
    console.log(e.currentTarget, e.target)
    e.stopPropagation();
    trigList(e)
    })
/*
document.querySelectorAll('.in').forEach(function (el) {
    //console.log("el",el);
    el.addEventListener('click', function (ev) {
    ev.stopPropagation();
    ev.currentTarget.style.background = 'red';
    })
    });
*/
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

