var options = ["snake", "gun", "water"]
var Random_Guess = Math.round(Math.random() * 2)
var Computer_guess = options[Random_Guess]
console.log(Computer_guess);

    var User_guess = prompt("Guess the Option Like snake water and gun")
    if(Computer_guess == "snake" && User_guess == "gun"){
        alert(`You Win Computer Choice ${Computer_guess} and you Choice ${User_guess}`)
    }
    else if(Computer_guess == "gun" && User_guess == "snake"){
        alert(`Computer Win You Choice ${User_guess} and Computer Choice ${Computer_guess}`)
    }
    else if(Computer_guess == "snake" && User_guess == "water"){
        alert(`Computer Win You Choice ${User_guess} and Computer Choice ${Computer_guess}`)
    }
    else if(Computer_guess == "water" && User_guess == "snake"){
        alert(`You Win Computer Choice ${Computer_guess} and you Choice ${User_guess}`)
    }
    else if(Computer_guess == "water" && User_guess == "gun"){
        alert(`Computer Win You Choice ${User_guess} and Computer Choice ${Computer_guess}`)
    }
    else if(Computer_guess == "gun" && User_guess == "water"){
        alert(`You Win Computer Choice ${Computer_guess} and you Choice ${User_guess}`)
    }
    else if(Computer_guess == User_guess){
        alert(`Its a tie Computer Choice ${Computer_guess} and you Choice ${User_guess}`)
    }

