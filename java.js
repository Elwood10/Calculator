let func
let answerDisp
let newNumber 
let calcString
let numBox = []
let plusMinus = []

// gets the value of the buttons into js to work with//

const input = document.querySelectorAll('button');
input.forEach(element => element.addEventListener('click', (e) => {
let newNumber = element.innerText;
calcString = document.createTextNode(newNumber)


// gets the input numbers from buttons to show in display and makes them items to perform calcs on //

func = element.id;
 
let a 
let b 
let topView = document.getElementById('window1')
let bottomView = document.getElementById('window2')


//calcString = document.createTextNode(newNumber)
bottomView.appendChild(newNumber)


if (func === 'operator')  {
    let one = bottomView.innerText
  topView.append(one)
    one = one.slice(0, -1)
    numBox.push(one)
    bottomView.innerText = ""

     a = numBox[0]
    b = numBox[1]

    let exec = element.innerText
  
  plusMinus.push(exec)
  
  switch (plusMinus[0]) {
    case "+":
    answerDisp = parseFloat(a) + parseFloat(b);
      break;
    case "-":
     answerDisp = parseFloat(a) - parseFloat(b);
      break;
  }
  if (!Number.isNaN(answerDisp)) {
    answerDisp = answerDisp.toFixed(2)

    numBox[0] = answerDisp
    topView.innerText = (numBox[0] + " " + element.innerText)
    bottomView.innerText = ""
    numBox.pop()
  plusMinus.shift()
}
}
}))



