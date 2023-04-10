//This is code to scrap elements from website for beginners, try this in inspect section of your website
document.getElementsByClassName("classname")
var names=document.getElementsByClassName("classname")
for(i=0;i<names.length;i++)
    {
        console.log(names[i].innerText);
    }
