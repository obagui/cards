/******************************************
 * submitInfo
 * (called by the register button)
 ******************************************/
function submitInfo() {
  if (validate()) {
    console.log("validation passed.")
  } else {
    console.log("validation failed.");
    return;
  }

  var student
  storeInfo();
}

/******************************************
 * store info
 ******************************************/
function storeInfo() {
  var url = "assign13.php?";
  url += "first_name=" + document.getElementById("first_name").value;
  url += "&last_name=" + document.getElementById("last_name").value;
  url += "&student_id=" + document.getElementById("student_id").value;
  url += "&performance=" + document.getElementById("performance").value;
  url += "&skill=" + document.getElementById("skill").value;
  url += "&instrument=" + document.getElementById("instrument").value;
  url += "&location=" + document.getElementById("location").value;
  url += "&room=" + document.getElementById("room").value;
  url += "&time_slot=" + document.getElementById("time_slot").value;

  if (document.getElementById("performance").value == "Duet") {
    // create second student's info and partner them
    url += "&first_name_2=" + document.getElementById("first_name_2").value;
    url += "&last_name_2=" + document.getElementById("last_name_2").value;
    url += "&student_id_2=" + document.getElementById("student_id_2").value;
  }

  // send to file
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(xhr.responseText);
    } else if (this.readyState == 4 && this.status >= 400) {
      var contentDiv = document.getElementById("content");
      var errorPara = document.createElement("p");
      errorPara.id = "ajaxError";
      var errorText = "Sorry, something wrong happened.";
      errorPara.appendChild(document.createTextNode(errorText));
      contentDiv.appendChild(errorPara);
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

/******************************************
* callback from xmlHTTPrequest
******************************************/
function callback(response) {
  console.log("was written to file: " + response);
}

/******************************************
 * validate 
 * (all fields must be filled)
 ******************************************/
function validate() {
  // clear all possible previous errors
  clearErrors();
  var errorFound = false;

  // check for new errors for 2nd student, if necessary
  if (document.getElementById("performance").value == "Duet") {
    var fields_2 = document.getElementsByClassName("mustFill_2");
    len = fields_2.length;
    for (i = len - 1; i >= 0; i--) {
      if (fields_2[i].value == "") {
        errorFound = true;
        fields_2[i].style.borderColor = "red";
        fields_2[i].focus();
      }
    }
  }

  // check for new errors in general
  var fields = document.getElementsByClassName("mustFill");
  var len = fields.length;
  var i;
  for (i = len - 1; i >= 0; i--) {
    if (fields[i].value == "-" || fields[i].value == "") {
      if (fields[i]) {
        errorFound = true;
        fields[i].style.borderColor = "red";
        fields[i].focus();
      }
    }
  }

  // return validation result
  if (errorFound) {
    var errorPara = document.createElement("p");
    errorPara.appendChild(document.createTextNode("Please fill the required fields."))
    errorPara.id = "error";
    var form = document.getElementById("registrationForm");
    form.appendChild(errorPara);
    return false;
  } else {
    return true;
  }
}

/******************************************
 * clear all errors
 ******************************************/
function clearErrors() {
  var error;
  if (error = document.getElementById("error")) { error.remove() }
  if (error = document.getElementById("ajaxError")) { error.remove() }

  var fields = document.getElementsByClassName("mustFill");
  var len = fields.length;
  var i;
  for (i = 0; i < len; i++) { fields[i].style.borderColor = "rgb(190, 190, 190)"; }

  fields = document.getElementsByClassName("mustFill_2");
  len = fields.length;
  for (i = 0; i < len; i++) { fields[i].style.borderColor = "rgb(190, 190, 190)"; }
}

/******************************************
* re-focus when reset
******************************************/
function refocus() {
  clearErrors();
  document.getElementById("student_2").style.display = "none";
  document.getElementById("first_name").focus();
}

/******************************************
* get 2nd student's info if duet
******************************************/
function checkDuet() {
  // display hidden div
  var student_2 = document.getElementById("student_2");
  if (document.getElementById("performance").value == "Duet") {
    student_2.style.display = "block";
  }
  else { student_2.style.display = "none"; }
}

/******************************************
* display registered students
******************************************/
function displayList() {
  var xhr2 = new XMLHttpRequest();
  xhr2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback_2(xhr2.responseText);
    } else if (this.readyState == 4 && this.status >= 400) { }
  };

  xhr2.open("GET", "assign13_2.php", true);
  xhr2.send();
}

function callback_2(jsonData) {
  data = JSON.parse(jsonData);
  var len = data.length;
  var table = document.getElementById("registeredTable");
  for (i = 0; i <= len; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);

    var td_name = document.createElement("td");
    tr.appendChild(td_name);
    var name = data[i].first_name + " " + data[i].last_name;
    var nameNode = document.createTextNode(name);
    td_name.appendChild(nameNode);

    var td_location = document.createElement("td");
    tr.appendChild(td_location);
    var location = data[i].location + ", Room" + data[i].room;
    var locationNode = document.createTextNode(location);
    td_location.appendChild(locationNode);

    var td_time = document.createElement("td");
    tr.appendChild(td_time);
    var time = data[i].time_slot;
    var timeNode = document.createTextNode(time);
    td_time.appendChild(timeNode);

    var td_performance = document.createElement("td");
    tr.appendChild(td_performance);
    var performance = data[i].performance + " for " + data[i].skill;
    performance += " " + data[i].instrument;
    var performanceNode = document.createTextNode(performance);
    td_performance.appendChild(performanceNode);
  }
}

/******************************************
* code to be run onload
******************************************/
displayList();