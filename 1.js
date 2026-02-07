function login(){
   
  const username="mahir";
  const userpass="132580";

  const value1=document.getElementById("name").value;
  const value2=document.getElementById("password").value;

  if(value1 ==="" && value2 ===""){
    alert("Give Me Password")
  }
  else if(value1 === username && value2 ===userpass){
    window.location.href="index.html"
  }else{
    alert("Username And Password is Incorrect")
  }


}




