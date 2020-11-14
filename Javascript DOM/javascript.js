var img ="https://personal.psu.edu/xqz5228/jpg.jpg";
var image = document.querySelector(".image");
console.log(image);

image.setAttribute("src",img);
image.setAttribute("alt","This is my image");
image.setAttribute("width","500px");

temp = "";
var eldata = Array.from(document.querySelectorAll("[data-title]"));
for (var index = 0; index < eldata.length; index++){
    temp = temp + eldata[index].getAttribute("data-title") + " ";
   
}
document.getElementById("demo").setAttribute("data-title",temp.trim());
console.log("tem = ",temp);
