document.addEventListener('DOMContentLoaded', function() {
  const toggleElementIds = [
    //e1-e7
    'e1','e2','e3','e4','e5','e6','e7'
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
  localStorage.setItem("e",JSON.stringify(a));
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
    console.log(parseInt((a/7)*100));

    document.getElementById("progress").style.width = (parseInt((a/7)*100)).toString()+"%";
    document.getElementById("progress_val").innerHTML = (parseInt((a/7)*100)).toString()+"%";
    document.getElementById("ratio").innerHTML="{"+""+a.toString()+"/7"+"}";
    localStorage.setItem("e",JSON.stringify(parseInt((a/7)*100)));

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
    document.getElementById("progress").style.width = (parseInt((a/7)*100)).toString()+"%";
    document.getElementById("progress_val").innerHTML = (parseInt((a/7)*100)).toString()+"%";
    document.getElementById("ratio").innerHTML="{"+""+a.toString()+"/7"+"}";
    localStorage.setItem("e",JSON.stringify(parseInt((a/7)*100)));

  }

  const element1 = document.getElementById(toggleElementIds[0]);
  const element2 = document.getElementById(toggleElementIds[1]);
  const element3 = document.getElementById(toggleElementIds[2]);
  const element4 = document.getElementById(toggleElementIds[3]);
  const element5 = document.getElementById(toggleElementIds[4]);
  const element6 = document.getElementById(toggleElementIds[5]);
  const element7 = document.getElementById(toggleElementIds[6]);


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

});




















