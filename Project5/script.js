//Replacing all the span elements with your data
let details=[900023,"Shruthi",24,"shruthisridhar96@gmail.com","Chennai","HCL",90000000]
let spanElements=document.getElementsByTagName('span');
for(var i=0;i<spanElements.length;i++){
    spanElements[i].innerHTML=details[i];
}
//Iterate through each list item and change class to list item
let listItems=document.getElementsByTagName('li');
for(var i=0;i<listItems.length;i++){
    listItems[i].className="listitem";
}
//Add an image
let image=document.createElement('img');
image.src="desktop.jpg";
image.width="250";
image.height="250";
document.body.appendChild(image);