let caps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let chars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let type = [caps, lowers, nums, chars]

let passwordLength = 16

let passwordOptionOne = document.querySelector("#p1")
let passwordOptionTwo = document.querySelector("#p2")

function randType() {
    let index = Math.floor(Math.random()*type.length)
    return type[index]
}

function generate() {
    
    let password = ""
    
    for(let i = 0; i<passwordLength; i++) {
        let thisType = randType()
        password += thisType[Math.floor(Math.random()*thisType.length)]
    }
    console.log(password)
    return password
}

function assign() {
    
    passwordOptionOne.textContent = generate()
    passwordOptionTwo.textContent = generate()
    
}

function copy() {

    let copyText = querySelector(".b2")

    // Select the text field
    copyText.select()
    copyText.setSelectionRange(0, 99999) // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value)

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}