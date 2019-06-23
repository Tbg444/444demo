

function fillInput(event) {

    var x = event.target.value;
    if (x === "") {
        event.target.className = "in";
    }
    else {
        event.target.className = "in in--filled";
        event.target.style = "transition: border-width 100ms ease-out, border-color 100ms ease-out";
    }
}

function leaveInput(event) {
   
    var x = event.target.value;
    var y = event.target.required;
    console.log(y,x);

    if (
        y === true &&  x === "" 
        ) {
        event.target.className = "in in--warning";
        event.target.style = "transition: border-width 100ms ease-out, border-color 100ms ease-out";
        document.getElementById("input02").className = "in in--warning";
        document.getElementById("input02Area").className =
            "in__area in--warning";
        console.log('ures',x,'de-kell',y);
    }
    else if (
        y === false &&  x === "" 
    ) {
        event.target.className = "in";
        event.target.style = "transition: border-width 100ms ease-out, border-color 100ms ease-out";
        console.log('ures',x,'nem-kell',y);
    }
    else {
        event.target.className = "in in--filled";
        event.target.style = "transition: border-width 100ms ease-out, border-color 100ms ease-out";
        document.getElementById("input02").className = "in in--filled";
        document.getElementById("input02Area").className =
            "in__area";
        console.log('nem-ures',x,'nem-kell',y);
    }
}


function emptiedInput() {
    var empt = document.getElementById("input01").value;
    if (empt == "") {
        document.getElementById("input01").className = "in";
    }
}
function requiredInput() {
    var empt = document.getElementById("input02").value;
    if (empt == "") {

    }
    else {
        document.getElementById("input02").className = "in in--filled";
        document.getElementById("input02Area").className =
            "in__area";
    }
}
function normalizeInput() {
    document.getElementById("input03").className = "in in--filled";
    document.getElementById("input03Area").className = "in__area";
    document.getElementById("input03Info").style =
        "opacity:0; transition: opacity 350ms ease-out";
    var empt = document.getElementById("input02").value;
    if (empt == "") {
        document.getElementById("input02").className = "in";
    }
}
