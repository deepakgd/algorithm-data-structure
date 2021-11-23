// plaindrome without build in function

function checkPalindrome(data){

    if(!data) return "Please enter any data";

    let len = data.length;

    for(let i =0; i < len; i++){

        if(data[i] != data[len - 1 - i]) return "It is not plaindrome";

    }

    return "It is plaindrome";
}


console.log(checkPalindrome("91019"));
console.log(checkPalindrome("test"));
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("welcome"));