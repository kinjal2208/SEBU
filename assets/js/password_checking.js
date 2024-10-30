function checkpassword(){
    let password= document.getElementById("password").value
let cpassword = document.getElementById("cpassword").value

    if (password!=cpassword){
        alert("Password did not match")
    }
}

function change(){
    let change= document.getElementById("image-number").value
    if(change==1){
        document.getElementById("image2").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image4").style.display="none";
        document.getElementById("image5").style.display="none";
    }
    if(change==2){
        document.getElementById("image2").style.display="block";
        document.getElementById("image3").style.display="none";
        document.getElementById("image4").style.display="none";
        document.getElementById("image5").style.display="none";
    }
    if(change==3){
        document.getElementById("image2").style.display="block";
        document.getElementById("image3").style.display="block";
        document.getElementById("image4").style.display="none";
        document.getElementById("image5").style.display="none";
    }
    if(change==4){
        document.getElementById("image2").style.display="block";
        document.getElementById("image3").style.display="block";
        document.getElementById("image4").style.display="block";
        document.getElementById("image5").style.display="none";
    }
    if(change==5){
        document.getElementById("image2").style.display="block";
        document.getElementById("image3").style.display="block";
        document.getElementById("image4").style.display="block";
        document.getElementById("image5").style.display="block";
    }
}

function add_item(){
        if(confirm("Do you want to add more items ? press Ok")){
         window.open("add_item.html");
        }
 else{
     alert("Item added successfully !")
 }
     }