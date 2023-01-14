class list {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}
 
arr = []
let count = 101;
 
function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birth = document.getElementById("birth").value 
    let depature = document.getElementById("depature").value 
    let arrival = document.getElementById("arrival").value 
    let leave = document.getElementById("leave").value
    let returning = document.getElementById("returning").value  
    let bags = document.getElementById("bags").value   
    let chicken = document.getElementById("chicken").checked
    let fish = document.getElementById("fish").checked    
    let vegan = document.getElementById("vegan").checked  
    let legRoom = document.getElementById("legRoom").checked  
    let window = document.getElementById("window").checked  
    let headphones = document.getElementById("headphones").checked  
    let seconds = document.getElementById("seconds").checked
    if (firstName != "" && lastName != "" && birth != "" && depature != "" && arrival != "" && leave != "" && returning != "" && bags != "") {
        let temp = new list(firstName, lastName, count);
        count++;
        arr.push(temp);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("birth").value = ""; 
        document.getElementById("depature").value = ""; 
        document.getElementById("arrival").value = ""; 
        document.getElementById("leave").value = "";
        document.getElementById("returning").value = "";  
        document.getElementById("bags").value = "";   
        document.getElementById("chicken").checked = false;
        document.getElementById("fish").checked = false;    
        document.getElementById("vegan").checked = false;  
        document.getElementById("legRoom").checked = false;  
        document.getElementById("window").checked = false;  
        document.getElementById("headphones").checked = false;  
        document.getElementById("seconds").checked = false;
    }
}

function display(){
    console.log("Hello")
    document.getElementById("firstNameInfo").value = 
    document.getElementById("lastNameInfo").value = 
    document.getElementById("birthInfo").value = 
    document.getElementById("bagInfo").value = 
    document.getElementById("leaveInfo").value = 
    document.getElementById("returnInfo").value = 
    document.getElementById("departInfo").value = 
    document.getElementById("arriveInfo").value = 
    document.getElementById("returnInfo").value = 
    document.getElementById("durationInfo").value = 
    document.getElementById("mealInfo").value = 
    document.getElementById("ageInfo").value = 
    document.getElementById("costInfo").value = 
    document.getElementById("extraInfo").innerHTML = 
}
 
function print() {
    space = "";
    for (let i = 0; i < arr.length; i++) {
        space += `<button onclick="display()"><span>${arr[i].id}</span>${arr[i].firstName} ${arr[i].lastName}</button>`
    }
    document.getElementById("printSpace").innerHTML = space;
}

// work in progress
// function populate() {
//     var select = document.getElementById("selectNumber");
//     select.innerHTML = `<option>Choose a number</option>`
//     for (var i = 0; i < arr.length; i++) {
//         select.innerHTML += `<option value = "${arr[i].firstName}">${arr[i].firstName}</option>`
//     }
// }