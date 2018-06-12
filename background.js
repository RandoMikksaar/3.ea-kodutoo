console.log("rgjpsdgjr");


//function for detecting highlighted text
function getHighText(){
    var Text = ""
    if (window.getSelection){
        Text = window.getSelection().toString()
    }
    return Text
}

document.addEventListener('mouseup', function(){
    var thetext = getSelectionText()
    if (thetext.length > 0){ // check there's some text selected
        console.log(thetext) // logs whatever textual content the user has selected on the page
    }
}, false)

function selectElementText(el){
    var range = document.createRange() // create new range object
    range.selectNodeContents(el) // set range to encompass desired element text
    var selection = window.getSelection() // get Selection object from currently user selected text
    selection.removeAllRanges() // unselect any user selected text (if any)
    selection.addRange(range) // add range to Selection object to select it
}

document.body.addEventListener('mouseup', function(){
    var selected = getSelectionText() // call <a href="#getselectiontext">getSelectionText()</a> to see what was selected
    if (selected.length > 0){ // if selected text length is greater than 0
        var copysuccess = copySelectionText() // copy user selected text to clipboard
    }
}, false)