var familyName = prompt("Enter Your Full Name:")
// if you want to show alert box but condition is false so how you can do that simple you have need to do is you simple declear a another var but remember one thing not change first variable acording to your need..  

if (familyName === "Shafqat Hussain") {
    document.write("<center>" + "<h1>" + "You Are In Our Family List ", familyName + "</h1>" + "</center>");
    familyMember = familyName
}
else if (familyName === "Shahzad Hussain") {
    document.write("<center>" + "<h1>" + "You Are In Our Family List ", familyName + "</h1>" + "</center>");
    familyMember = familyName
}
else if (familyName === "Sajida Batool") {
    document.write("<center>" + "<h1>" + "You Are In Our Family List ", familyName + "</h1>" + "</center>");
    familyMember = familyName
}
else if (familyName === "Saira Batool") {
    document.write("<center>" + "<h1>" + "You Are In Our Family List ", familyName + "</h1>" + "</center>");
    familyMember = familyName
}
else if (familyName === "Bilquis Fatima") {
    document.write("<center>" + "<h1>" + "You Are In Our Family List " + familyName + "</h1>" + "</center>");
    familyMember = familyName
}
else{
    document.write("<center>" + "<h1>" + "You Are Not In Our Family List " , familyName , " Go Ahead " + "</h1>" + "</center>");
}
