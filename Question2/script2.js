function search(currentElement){
  // get the contents of the search box dynamically
  var searchText = document.getElementById("searchtext").value;
  var innerHTML = currentElement.innerHTML;
  var index = 0;
  var searchOffset = 0;
  index = innerHTML.indexOf(searchText, searchOffset);
  var currentCounter = 0;
  while (index >= 0) {
    currentCounter++;    
    
    var replacement = "<span class='highlight'>" + innerHTML.substring(index, index + searchText.length) + "</span>";    
    
    searchOffset = index + replacement.length;        
    
    innerHTML = innerHTML.substring(0, index) + replacement + innerHTML.substring(index + searchText.length);   
    
    currentElement.innerHTML = innerHTML;   
    
    index = innerHTML.indexOf(searchText, searchOffset);
  }
  return currentCounter;
}

function searchElement(){
  var pCounter = 0;
  var outerCounter = 0;
  var innerCounter = 0;
  
  var x = document.querySelectorAll("p");
  for(var i = 0; i < (x.length); i++){
    pCounter+=search(x[i]);
  }
  
  
  var y = document.querySelectorAll("ul");
  for(var j = 0; j < (y.length); j++){
    outerCounter+=search(y[j]);
  }
        
  var z = document.querySelectorAll("li");
  for(var k = 0; k < (z.length); k++){
    innerCounter+=search(z[k]);
  }
  
  console.log();

  document.getElementById("paraAmount").innerHTML = pCounter;
  document.getElementById("outerListAmount").innerHTML = outerCounter;
  document.getElementById("innerListAmount").innerHTML = innerCounter;}