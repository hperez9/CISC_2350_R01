function changeTextAndColor() {
  var replacementText = document.getElementById("textMod").value;
  var originalText = document.getElementById("example2div");
  var innerHTML = originalText.innerHTML;
  innerHTML = replacementText;
  originalText.innerHTML = innerHTML;
  document.getElementById("example2div").style.border= "3px solid hotpink";
  document.getElementById("example2div").style.width= "25%";
  document.getElementById("example2div").style.marginLeft= "380px";
  
  if(document.getElementById("example2div").style.backgroundColor == "blue"){
     document.getElementById("example2div").style.backgroundColor = "LightGray";
  }
  else if(document.getElementById("example2div").style.backgroundColor == "LightGray"){
     document.getElementById("example2div").style.backgroundColor = "blue";
  }
  else{
    document.getElementById("example2div").style.backgroundColor= "blue";
  }
}
