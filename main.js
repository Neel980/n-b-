var images = 
["Akshay Kumar.jpg",
"",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F4043254%2Favatar_elderly_grandma_nanny_icon&psig=AOvVaw3Eo-AFn2KfmipYCVTMsM-i&ust=1621421439652000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiu5NqH0_ACFQAAAAAdAAAAABAD",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreepngimg.com%2Fpng%2F57222-grandfather-png-file-hd%2Ficon&psig=AOvVaw1yAevug_mxAfV4Va33hnxJ&ust=1621421481517000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCXg_WH0_ACFQAAAAAdAAAAABAD"];
var names = ["Sneha Chhatani","Rakesh Chhatani","Rajni Chhatani","Shyam Chhatani"];
var i = 0;
function update(){
i++;
var number_of_family_member_array = 4;
if(i>number_of_family_member_array){
i=0;    
}    

var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}
var i = 0;
function update(){
i++;
var number_of_family_member_array = 5;
if(i > number_of_family_member_array){
i = 0;    
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").src = updatedName;   
}