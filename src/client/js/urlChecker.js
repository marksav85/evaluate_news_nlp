const validUrl = require('valid-url');

function checkForUrl(inputText) {
    console.log("::: Running URL check :::", inputText);
    if (validUrl.isUri(inputText)){
        console.log('Looks like an URI');
    }
    else {
        alert("Invalid URL");
    }
}

export { checkForUrl }
