var objPeople = [
    {
        password: "day1test"
    }
]






function getInfo() {
var password = document.getElementById("password").value
console.log("you're password is" + password)
}


for(i =0; i < objPeople.length; i++) {
    if(password == objPeople[i].password) {
        console.log("hello bitch")
    }
}
