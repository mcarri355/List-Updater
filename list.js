class list {
    constructor(firstName, lastName, id, birth, depature, arrival, leave, returning, bags, chicken, fish, vegan, legRoom, window, headphones, seconds) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.birth = birth;
        this.depature = depature;
        this.arrival = arrival;
        this.leave = leave;
        this.returning = returning;
        this.bags = bags;
        this.chickem = chicken;
        this.fish = fish;
        this.vegan = vegan;
        this.legRoom = legRoom;
        this.window = window;
        this.window = headphones;
        this.window = seconds;

    }
}
 
arr = []
let count = 101;
 
function addToList() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var birth = document.getElementById("birth").value 
    var depature = document.getElementById("depature").value 
    var arrival = document.getElementById("arrival").value 
    var leave = document.getElementById("leave").value
    var returning = document.getElementById("returning").value  
    var bags = document.getElementById("bags").value   
    var chicken = document.getElementById("chicken").checked
    var fish = document.getElementById("fish").checked    
    var vegan = document.getElementById("vegan").checked  
    var legRoom = document.getElementById("legRoom").checked  
    var window = document.getElementById("window").checked  
    var headphones = document.getElementById("headphones").checked  
    var seconds = document.getElementById("seconds").checked
    if (firstName != "" && lastName != "" && birth != "" && depature != "" && arrival != "" && leave != "" && returning != "" && bags != "") {
        let temp = new list(firstName, lastName, count, birth, depature, arrival, leave, returning, bags, chicken, fish, vegan, legRoom, window, headphones, seconds);
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
    document.getElementById("birthInfo").value = ''
    document.getElementById("bagInfo").value = ''
    document.getElementById("leaveInfo").value = ''
    document.getElementById("returnInfo").value = ''
    document.getElementById("departInfo").value = ''
    document.getElementById("arriveInfo").value = ''
    document.getElementById("returnInfo").value = ''
    document.getElementById("durationInfo").value = ''
    document.getElementById("mealInfo").value = ''
    document.getElementById("ageInfo").value = ''
    document.getElementById("costInfo").value = ''
    document.getElementById("extraInfo").innerHTML = ''
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