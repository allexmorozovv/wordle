export const coloredKeyboard = (sol, arr) => {
 
  // const alphabet = {
  //   "A":"DEFAULT", "B":"DEFAULT", "C":"DEFAULT", "D":"DEFAULT", "E":"DEFAULT", "F":"DEFAULT", "G":"DEFAULT", "H":"DEFAULT", "I":"DEFAULT", "J":"DEFAULT","K":"DEFAULT", "L":"DEFAULT", "M":"DEFAULT", "N":"DEFAULT", "O":"DEFAULT", "P":"DEFAULT", "Q":"DEFAULT", "R":"DEFAULT", "S":"DEFAULT","T":"DEFAULT", "U":"DEFAULT", "V":"DEFAULT", "W":"DEFAULT", "X":"DEFAULT", "Y":"DEFAULT", "Z":"DEFAULT"
  // }
  const alphabet = {
    "a":"DEFAULT", "b":"DEFAULT", "c":"DEFAULT", "d":"DEFAULT", "e":"DEFAULT", "f":"DEFAULT", "g":"DEFAULT", "h":"DEFAULT", "i":"DEFAULT", "j":"DEFAULT","k":"DEFAULT", "l":"DEFAULT", "m":"DEFAULT", "n":"DEFAULT", "o":"DEFAULT", "p":"DEFAULT", "q":"DEFAULT", "r":"DEFAULT", "s":"DEFAULT","t":"DEFAULT", "u":"DEFAULT", "v":"DEFAULT", "w":"DEFAULT", "x":"DEFAULT", "y":"DEFAULT", "z":"DEFAULT"
  }

  // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

  let solution = sol.toLowerCase()
  let array = arr.map(el => el.toLowerCase())
 
  for(const el of array) {
    for(let i = 0; i < solution.length; i++) {
      if(solution[i] === el[i]) {
        alphabet[el[i]] = "CORRECT"
      } 
    }
    for(let i = 0; i < solution.length; i++) {
      if(solution.includes(el[i]) && alphabet[el[i]]!== "CORRECT") {
        alphabet[el[i]] = "PRESENT"
      } else if(alphabet[el[i]]!== "CORRECT" && alphabet[el[i]]!== "PRESENT" ) {
        alphabet[el[i]] = "ABSENT"
      }
    }
   }
 return alphabet
} 