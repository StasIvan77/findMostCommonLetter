function findMostCommonLetter(text) {
    const toLowerCase = text.toLowerCase();
  
    const letterCount = {};
  
    for (const char of toLowerCase) {
      if (/[a-z]/.test(char)) {
        letterCount[char] = (letterCount[char] || 0) + 1;
      }
    }
  
    let mostCommonLetter = null;
    let maxCount = 0;
  
    for (const letter in letterCount) {
      if (letterCount[letter] > maxCount) {
        mostCommonLetter = letter;
        maxCount = letterCount[letter];
      }
    }
  
    return mostCommonLetter;
  } 
  const text = "Everything has an end, only the sausage has two.";
  const result = findMostCommonLetter(text);
  console.log("The most common letter is:", result);
  