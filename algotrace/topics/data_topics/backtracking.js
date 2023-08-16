document.addEventListener('DOMContentLoaded', function() {
  const toggleElementIds = [
    //j1-j9
    'j1','j2','j3','j4','j5','j6','j7','j8','j9'
  ];
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
  localStorage.setItem("j",JSON.stringify(a));
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
    console.log(parseInt((a/9)*100));

    document.getElementById("progress").style.width = (parseInt((a/9)*100)).toString()+"%";
    document.getElementById("progress_val").innerHTML = (parseInt((a/9)*100)).toString()+"%";
    document.getElementById("ratio").innerHTML="{"+""+a.toString()+"/9"+"}";
    localStorage.setItem("j",JSON.stringify(parseInt((a/9)*100)));
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
    document.getElementById("progress").style.width = (parseInt((a/9)*100)).toString()+"%";
    document.getElementById("progress_val").innerHTML = (parseInt((a/9)*100)).toString()+"%";
    document.getElementById("ratio").innerHTML="{"+a.toString()+"/9}";
    localStorage.setItem("j",JSON.stringify(parseInt((a/9)*100)));
    
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

  element1.addEventListener('click', function() {
    changestatus(this.checked);
  });
  element2.addEventListener('click', function() {
    changestatus(this.checked);
  });
  element3.addEventListener('click', function() {
    changestatus(this.checked);
  });
  element4.addEventListener('click', function() {
    changestatus(this.checked);
  });
  element5.addEventListener('click', function() {
    changestatus(this.checked);
  });
  element6.addEventListener('click', function() {
    changestatus(this.checked);
  });
  element7.addEventListener('click', function() {
    changestatus(this.checked);
  });
  element8.addEventListener('click', function() {
    changestatus(this.checked);
  });
  element9.addEventListener('click', function() {
    changestatus(this.checked);
  });
});




















