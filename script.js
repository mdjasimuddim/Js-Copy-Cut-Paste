// copy section starts here
var copytext = document.getElementById("copytext");
var copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(copytext.value);
})
//copy section ends here

// cut section starts here

var cutText = document.getElementById("cuttext");
var cut = document.getElementById('cutBtn');

cutBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(cutText.value);
    cutText.value = '';
})

//cut section ends here

// paste section starts here
var paste = document.getElementById("pastetext");
var pasteBtn = document.getElementById('pasteBtn');

pasteBtn.addEventListener('click',function(){
    paste.value = '';
    navigator.clipboard.readText().then(function(text){
        paste.value = text;
    })
})
//paste section ends here

// India is the second largest country in south asia.bangladesh is a small country in south asia.
//copy section ends here
// Bangladesh is a small