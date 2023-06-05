"use strict"

function wordCount()
{
    let textId=document.getElementById("textId").value;
    
    let word=1;
    for (let i = 0; i < textId.trimEnd().length; i++) {
        if(textId[i]==" ")
        {
            word++;
        }
    }
    console.log(word);
}