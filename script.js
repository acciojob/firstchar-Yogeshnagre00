function firstChar(text) {
  // your code here
	if (!text.trim()) {
    return "";
  } else {
    return str.trim().charAt(0);
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));