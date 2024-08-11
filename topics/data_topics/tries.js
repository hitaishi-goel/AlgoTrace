document.addEventListener('DOMContentLoaded', function () {
  const toggleElementIds = [
    // h1-h3
    'h1', 'h2', 'h3'
  ];
  // Define an array of toggle element IDs


  // Function to load and initialize toggle states
  function loadToggleStates() {
    toggleElementIds.forEach(elementId => {
      const toggleElement = document.getElementById(elementId);
      if (toggleElement) {
        const storedToggleState = JSON.parse(localStorage.getItem(elementId)) || false;
        toggleElement.checked = storedToggleState;

        toggleElement.addEventListener('change', function () {
          const newState = this.checked;
          localStorage.setItem(elementId, JSON.stringify(newState));
        });
      }
    });
  }

  // Call the function to load and initialize toggle states
  loadToggleStates();




  let a = 0;
  localStorage.setItem("h", JSON.stringify(a));
  function countToggleStates() {
    toggleElementIds.forEach(elementId => {
      const toggleElement = document.getElementById(elementId);
      if (toggleElement) {
        const storedToggleState = JSON.parse(localStorage.getItem(elementId)) || false;
        if (storedToggleState == true) {
          a++;
        }
      }
    });

    console.log(a);
    console.log(parseInt((a / 3) * 100));

    document.getElementById("progress").style.width = (parseInt((a / 3) * 100)).toString() + "%";
    document.getElementById("progress_val").innerHTML = (parseInt((a / 3) * 100)).toString() + "%";
    document.getElementById("ratio").innerHTML = "{" + "" + a.toString() + "/3" + "}";
    localStorage.setItem("h", JSON.stringify(parseInt((a / 3) * 100)));

  }

  // Call the function to count toggle states
  countToggleStates();


  function changestatus(i) {
    //check if i is checked if it is checked then a-- will happen if i is unchecked then a++ will happen
    if (i == true) {
      a++;
    }
    else {
      a--;
    }
    document.getElementById("progress").style.width = (parseInt((a / 3) * 100)).toString() + "%";
    document.getElementById("progress_val").innerHTML = (parseInt((a / 3) * 100)).toString() + "%";
    document.getElementById("ratio").innerHTML = "{" + "" + a.toString() + "/3" + "}";
    localStorage.setItem("h", JSON.stringify(parseInt((a / 3) * 100)));

  }

  const element1 = document.getElementById(toggleElementIds[0]);
  const element2 = document.getElementById(toggleElementIds[1]);
  const element3 = document.getElementById(toggleElementIds[2]);


  element1.addEventListener('change', function () {
    changestatus(this.checked);
  });
  element2.addEventListener('change', function () {
    changestatus(this.checked);
  });
  element3.addEventListener('change', function () {
    changestatus(this.checked);
  });

});




















