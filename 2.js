  
  const bb=document.getElementById("outputBox");
  
  
  function save(){
    const value=document.getElementById("inputtext").value;
    localStorage.setItem("text",value);

    bb.innerText=localStorage.getItem("text");
}

