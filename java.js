let del
let func
let answerDisp
let newNumber 
let numBox = []
let plusMinus = []

//selects button inner text to be used in calcs//

const input = document.querySelectorAll('button');
input.forEach(element => element.addEventListener('click', (e) => {
 newNumber = element.innerText;

//keeps Del from showing on screen when used to delete entries//

  if (newNumber === 'Del') {
    newNumber = ""
  }
  
//used to get operator for calc function//

  func = element.id;       
  
  let a 
  let b 

//gets entered button number in display//

let topView = document.getElementById('window1')
let bottomView = document.getElementById('window2')

bottomView.append(newNumber)


  
    if (func === 'allClear') {
    topView.innerText = ""
    bottomView.innerText = ""
      numBox.pop()
      plusMinus.shift()
     
  }
  
  if (func === 'delete') {
     del = bottomView.innerText
    bottomView.innerText = del.slice(0, -1)
  }
  
if (func === 'operator')  {
  var one = bottomView.innerText
topView.append(one)
  one = one.slice(0, -1)
  numBox.push(one)
  bottomView.innerText = ""
  
   a = numBox[0]
  b = numBox[1]

  console.log(a)
  console.log(b)
  

  let exec = element.innerText
  
  plusMinus.push(exec)
  
  switch (plusMinus[0]) {
    case "+":
    answerDisp = parseFloat(a) + parseFloat(b);
      break;
    case "-":
     answerDisp = parseFloat(a) - parseFloat(b);
      break;
      case "*":
    answerDisp = parseFloat(a) * parseFloat(b);
      break;
      case "/":
    answerDisp = parseFloat(a) / parseFloat(b);
      break;
      }
  
 
  
  
  if (!Number.isNaN(answerDisp)) {
    answerDisp = answerDisp.toFixed(2)

    numBox[0] = answerDisp
    topView.innerText = (numBox[0] + " " + element.innerText)
    bottomView.innerText = ""
    
    let equals = element.innerText
    console.log(equals)
    if (equals === "=") {
      bottomView.innerText = answerDisp
     topView.innerText = ""   
      
   }
    
    numBox.pop()
  plusMinus.shift()
 console.log(numBox[0] + 'one')
    console.log(numBox[1] + 'two')
    
  }


  
}
}))