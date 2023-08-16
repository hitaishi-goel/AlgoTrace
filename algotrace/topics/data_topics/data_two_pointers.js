document.addEventListener('DOMContentLoaded', function() {
  const toggleElementIds = [
    // b1-b5
    'b1','b2','b3','b4','b5'
  ];
// Define an array of toggle element IDs

  
  // Function to load and initialize toggle states
  function loadToggleStates() {
    toggleElementIds.forEach(elementId => {
      const toggleElement = document.getElementById(elementId);
      if (toggleElement) {
        const storedToggleState = JSON.parse(localStorage.getItem(elementId)) || false;
        toggleElement.checked = storedToggleState;
  
        toggleElement.addEventListener('change', function() {
          const newState = this.checked;
          localStorage.setItem(elementId, JSON.stringify(newState));
        });
      }
    });
  }
  
  // Call the function to load and initialize toggle states
  loadToggleStates();
  


  
  let a=0;
  localStorage.setItem("b",JSON.stringify(a));
  function countToggleStates() {
    toggleElementIds.forEach(elementId => {
      const toggleElement = document.getElementById(elementId);
      if (toggleElement) {
        const storedToggleState = JSON.parse(localStorage.getItem(elementId)) || false;
        if(storedToggleState==true){
            a++;
        }
      }
    });

    console.log(a);
    console.log(parseInt((a/5)*100));

    document.getElementById("progress").style.width = (parseInt((a/5)*100)).toString()+"%";
    document.getElementById("progress_val").innerHTML = (parseInt((a/5)*100)).toString()+"%";
   document.getElementById("ratio").innerHTML="{"+""+a.toString()+"/5"+"}";
   localStorage.setItem("b",JSON.stringify(parseInt((a/5)*100)));

  }
  
  // Call the function to count toggle states
  countToggleStates();


  function changestatus(i){
    //check if i is checked if it is checked then a-- will happen if i is unchecked then a++ will happen
    if(i==true){
        a++;
    }
    else{
        a--;
    }
    document.getElementById("progress").style.width = (parseInt((a/5)*100)).toString()+"%";
    document.getElementById("progress_val").innerHTML = (parseInt((a/5)*100)).toString()+"%";
   document.getElementById("ratio").innerHTML="{"+""+a.toString()+"/5"+"}";
   localStorage.setItem("b",JSON.stringify(parseInt((a/5)*100)));

  }

  const element1 = document.getElementById(toggleElementIds[0]);
  const element2 = document.getElementById(toggleElementIds[1]);
  const element3 = document.getElementById(toggleElementIds[2]);
  const element4 = document.getElementById(toggleElementIds[3]);
  const element5 = document.getElementById(toggleElementIds[4]);


  element1.addEventListener('change', function() {
    changestatus(this.checked);
  });
  element2.addEventListener('change', function() {
    changestatus(this.checked);
  });
  element3.addEventListener('change', function() {
    changestatus(this.checked);
  });
  element4.addEventListener('change', function() {
    changestatus(this.checked);
  });
  element5.addEventListener('change', function() {
    changestatus(this.checked);
  });

});




















