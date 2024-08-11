document.addEventListener('DOMContentLoaded', function() {
  const toggleElementIds = [
    // a1-a9
    'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10', 'm11', 'm12'
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
  localStorage.setItem("m",JSON.stringify(a));
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
    console.log(parseInt((a/12)*100));

    document.getElementById("progress").style.width = (parseInt((a/12)*100)).toString()+"%";
    document.getElementById("progress_val").innerHTML = (parseInt((a/12)*100)).toString()+"%";
   document.getElementById("ratio").innerHTML="{"+""+a.toString()+"/12"+"}";
   localStorage.setItem("m",JSON.stringify(parseInt((a/12)*100)));
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
    document.getElementById("progress").style.width = (parseInt((a/12)*100)).toString()+"%";
    document.getElementById("progress_val").innerHTML = (parseInt((a/12)*100)).toString()+"%";
   document.getElementById("ratio").innerHTML="{"+""+a.toString()+"/12"+"}";
    localStorage.setItem("m",JSON.stringify(parseInt((a/12)*100)));
  }

  const element1 = document.getElementById(toggleElementIds[0]);
  const element2 = document.getElementById(toggleElementIds[1]);
  const element3 = document.getElementById(toggleElementIds[2]);
  const element4 = document.getElementById(toggleElementIds[3]);
  const element5 = document.getElementById(toggleElementIds[4]);
  const element6 = document.getElementById(toggleElementIds[5]);
  const element7 = document.getElementById(toggleElementIds[6]);
  const element8 = document.getElementById(toggleElementIds[7]);
  const element9 = document.getElementById(toggleElementIds[8]);
  const element10 = document.getElementById(toggleElementIds[9]);
  const element11 = document.getElementById(toggleElementIds[10]);
  const element12 = document.getElementById(toggleElementIds[11]);

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
  element6.addEventListener('change', function() {
    changestatus(this.checked);
  });
  element7.addEventListener('change', function() {
    changestatus(this.checked);
  });
  element8.addEventListener('change', function() {
    changestatus(this.checked);
  });
  element9.addEventListener('change', function() {
    changestatus(this.checked);
  });
  element10.addEventListener('change', function() {
    changestatus(this.checked);
  });
  element11.addEventListener('change', function() {
    changestatus(this.checked);
  });
  element12.addEventListener('change', function() {
    changestatus(this.checked);
  });
});




















