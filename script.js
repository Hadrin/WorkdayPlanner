//Create variables for handling elements
var input9 = document.querySelector("#todo9");
var input10 = document.querySelector("#todo10");
var input11 = document.querySelector("#todo11");
var input12 = document.querySelector("#todo12");
var input1 = document.querySelector("#todo1");
var input2 = document.querySelector("#todo2");
var input3 = document.querySelector("#todo3");
var input4 = document.querySelector("#todo4");
var input5 = document.querySelector("#todo5");

var but9 = document.querySelector("#button9");
var but10 = document.querySelector("#button10");
var but11 = document.querySelector("#button11");
var but12 = document.querySelector("#button12");
var but1 = document.querySelector("#button1");
var but2 = document.querySelector("#button2");
var but3 = document.querySelector("#button3");
var but4 = document.querySelector("#button4");
var but5 = document.querySelector("#button5");

var currentDay = document.querySelector("#currentDay");

//Adds click handlers to all save buttons
but9.addEventListener("click", function(){clickHandler("9")}, false);
but10.addEventListener("click", function(){clickHandler("10")}, false);
but11.addEventListener("click", function(){clickHandler("11")}, false);
but12.addEventListener("click", function(){clickHandler("12")}, false);
but1.addEventListener("click", function(){clickHandler("1")}, false);
but2.addEventListener("click", function(){clickHandler("2")}, false);
but3.addEventListener("click", function(){clickHandler("3")}, false);
but4.addEventListener("click", function(){clickHandler("4")}, false);
but5.addEventListener("click", function(){clickHandler("5")}, false);

//Attempts to load saved data, and if successful populates loaded data into fields
try{input9.value = window.localStorage.getItem(9);} catch {}
try{input10.value = window.localStorage.getItem(10);} catch{}
try{input11.value = window.localStorage.getItem(11);} catch{}
try{input12.value = window.localStorage.getItem(12);} catch{}
try{input1.value = window.localStorage.getItem(1);} catch{}
try{input2.value = window.localStorage.getItem(2);} catch{}
try{input3.value = window.localStorage.getItem(3);} catch{}
try{input4.value = window.localStorage.getItem(4);} catch{}
try{input5.value = window.localStorage.getItem(5);} catch{}

//Writes the current date to the header
let daysOfWeekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = daysOfWeekArray[moment().day()];
var month = (moment().month() + 1);
var dateOfMonth = moment().date();

currentDay.textContent = ("Today is " + dayOfWeek + ", " + month + "-" + dateOfMonth);

//Color textarea according to whether it is present, in the past, or in the future
let hourArray = [input9, input10, input11, input12, input1, input2, input3, input4, input5];
var now = moment().hour();
now = (now - 9);
for(var i = 0; i < 9; i++){
    if(i < now){
        hourArray[i].setAttribute("style", "background-color:#FF0000");
    } else if(i == now){
        hourArray[i].setAttribute("style", "background-color:#FFFF00");
    } else {
        hourArray[i].setAttribute("style", "background-color:#00FFFF");
    }
}



//Function directs and loads data based on which button was clicked, which is determined
//by the value of n passed to it
//The try/catch blocks are necessary to read empty fields, which is used to erase data
function clickHandler(n) {
    switch (n) {
        case "9":
            try{saveHandler(n, input9.value);} catch {saveHandler(n, "");}
            break;

        case "10":
            try{saveHandler(n, input10.value);} catch {saveHandler(n, "");}
            break;

        case "11":
            try{saveHandler(n, input11.value);} catch {saveHandler(n, "");}
            break;

        case "12":
            try{saveHandler(n, input12.value);} catch {saveHandler(n, "");}
            break;

        case "1":
            try{saveHandler(n, input1.value);} catch {saveHandler(n, "");}
            break;

        case "2":
            try{saveHandler(n, input2.value);} catch {saveHandler(n, "");}
            break;

        case "3":
            try{saveHandler(n, input3.value);} catch {saveHandler(n, "");}
            break;

        case "4":
            try{saveHandler(n, input4.value);} catch {saveHandler(n, "");}
            break;

        case "5":
            try{saveHandler(n, input5.value);} catch {saveHandler(n, "");}
            break;

        default:
            //Runs if an n value outside of 9-5 is used. Should not show up.
            alert("An Error Has Occurred. Please Reload Your Page And Try Again." + n);


    }
}

//Writes the value of data to a key-value localStorage pair, with a key of n
function saveHandler(n, data) { 
    console.log("Saving data: " + data + " to key: " + n);
    window.localStorage.setItem(n, data);
}