// Hello Java Script program
var whoAreYou = function(name) {
    var element = document.querySelector('#greeting');
    var text = document.createTextNode('Hello, ' + name + 'in JavaScript!!!');
    element.appendChild(text);
}



console.log("Hello, Java Script!");
