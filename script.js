const checkPalindrome = () => {

    const inputText = document.getElementById("text-input").value;
    const resultElement = document.getElementById("result");
  
    if(!inputText) {
      alert("Please input a value");
      return;
    }
  
    const processedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = processedText.split('').reverse().join('');
  
  
    processedText === reversedText
    ? resultElement.textContent = `${inputText} is a palindrome`
    : resultElement.textContent = `${inputText} is not a palindrome`
  
  };
  
  document.getElementById("check-btn").addEventListener("click", () => checkPalindrome());
  
  document.getElementById("text-input").addEventListener("input", () => {
    const inputText = document.getElementById("text-input").value;
    const resultElement = document.getElementById("result");
  
  if(!inputText) {
    resultElement.textContent = "";
  }
  
  });