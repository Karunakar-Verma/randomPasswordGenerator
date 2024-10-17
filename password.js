let getId = document.getElementById('passwordOutput');
let getBTN = document.getElementById('btn');
let getAns = document.getElementById('ans');

const charSet =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

getBTN.addEventListener("click", ()=>
{
    let passLength = parseInt(getId.value);
    let pass = "";

    
    if (!isNaN(passLength) && passLength > 0)
    {
        for(let i = 0 ; i<passLength; i++){
            let iter = Math.floor(Math.random()*charSet.length);
            pass += charSet[iter];
        }

        getAns.textContent = "Your desired password is : " + pass;
        // console.log("Generated password:", pass);
    }
    else {
        getAns.textContent = "Sorry, Something is wrong ! " 
    }

    // getAns.value = pass;
})
