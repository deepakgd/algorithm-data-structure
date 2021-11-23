// plaindrome using build in function

function checkPalindrome(data){
    if(!data) return "Please enter any data";

    let reverseData = data.split("");
    reverseData.reverse();
    reverseData = reverseData.join("");

    if(data === reverseData) return "It is Plaindrome";
    return "It is not Plaindrome"
}

console.log(checkPalindrome("91019"));
console.log(checkPalindrome("test"));