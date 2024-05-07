function checkForPopupBlocker() {
  var testPop = window.open('https://codehs.com/uploads/b3c3e734edf95fa4e2f6429933d95a58');
  if(testPop === null || typeof(testPop) === "undefined") {
    alert("Please disable your popup blocker.");
  }
}
