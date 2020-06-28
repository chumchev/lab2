var matrixInputs = []

function createMatrixInputs(node) {
  try {
    matrixInputs = []
    
    var size = document.getElementsByClassName("matrix-size")[0].value
    size = document.getElementsByClassName("matrix-size")[0].value 

    if(node.rows.length != 0) {
      for (var i = node.rows.length -1; i >= 0; i -= 1) {
        var row = node.deleteRow(i)
      }
    }


    for (var i = 0; i < size; i += 1) {
      var row = node.insertRow()
      var inputsRow = []
      matrixInputs.push(inputsRow)
      for (var j = 0; j < size; j += 1) {
        var cell = row.insertCell()
        var input = document.createElement('input')
        inputsRow.push(input)
        input.type = 'text'
        input.style.width = '1em'
        cell.appendChild(input)
      }
    }
    return matrixInputs
  }
  catch(e) {
    alert("hello")
  }
}

function getMatrixValues(matrixInputs) {
    var res = []
    for (var i = 0; i < matrixInputs.length; i += 1) {
      var inputsRow = matrixInputs[i]
      var valuesRow = []
      for (var j = 0; j < inputsRow.length; j += 1) {
        var input = inputsRow[j]
        var valueNum = parseFloat(input.value)
        if (isNaN(valueNum)) {
          valueNum = 0
        }
        valuesRow.push(valueNum)
      }
      res.push(valuesRow)
    }
    return res
}

function outConsole() {
  var matrix = getMatrixValues(matrixInputs)
  console.log('matrix', matrix)
}


function AtoLeftInc(node) {
  const dataEntry = document.querySelector('.dataEntry')
  const lInc = document.querySelector('.leftInc')
  var mas = getMatrixValues(matrixInputs)

  var valueOfInput = document.getElementsByClassName("matrix-size")[0].value

  for(let i = 0; i < valueOfInput; i++) {
    for(let j = 0; j < valueOfInput; j++) {
        if (mas[i][j] != 1) {
            mas[i][j] = '*';
        }
    }
}

for(let i = 0; i < valueOfInput; i++) {
    for(let j = 0; j < valueOfInput; j++) {
        if (mas[i][j] == 1) {
            mas[i][j] = i + 1;
        }
    }
}

let tmp = [];
let newMasForA = [];
for(let i = 0; i < valueOfInput; i++) {
    for(let j = 0; j < valueOfInput; j++) {
        if (mas[j][i] != '*') {
            tmp.push(mas[j][i]);
        }
    }
    newMasForA.push(tmp);
    tmp = [];
}

//////////////
let a = newMasForA.slice(0)

for(let i = 0; i < a.length; i++){
  for(let j = 0; j < a[i].length; j++){
      a[i][j] -= 1;
  }
}
// console.log(a)
let b = [];
let c = [];
t = 0;
let newArray = a.map(item =>{
  if(item.length == 0){
      c.push(a.indexOf(item));
  }
  
})
b.push(c);
c = []

for(x = 0; x < 20; x++){
for(let i = 0; i < a.length; i++){
t = 0;
if(b.flat().length != a.length){
for(let k = 0; k < a[i].length; k++){
  for(let j = 0; j < b.flat().length; j++){
      if(b.flat().indexOf(i) == -1){
      if(a[i][k] == b.flat()[j]){
          t++;
          if(t == a[i].length){
              c.push(i)
          }
  }
}

      }

  }
}
else{
  x = 20;
}
}
b.push(c);
c = [];
}
b.pop();
tmp = 0;
let per;
dataEntry.innerHTML = ''
for(let i = 0; i < b.length; i++){
dataEntry.innerHTML += 'Уровень ' + i + ' [';
for(let j = 0; j < b[i].length; j++){
  per = b[i][j]+1
  tmp1 = tmp +1
  dataEntry.innerHTML +=  ' '+tmp1+ ` <sup>(${per})</sup> `
  tmp++;
}
dataEntry.innerHTML += ']<br>'
}
tmp = 0;
for(let i = 0; i < b.length; i++){
for(let j = 0; j < b[i].length; j++){
  b[i][j] += `|${tmp}`;
  tmp++;
}
}
tmp = 0;
for(let i = 0; i < a.length; i++){
for(let j = 0; j < a[i].length; j++){
  for(let k = 0; k < b.length; k++){
      for(let t = 0; t < b[k].length; t++){
          if(b[k][t].slice(0,1) == a[i][j]){
              a[i][j] = b[k][t];
          }

      }
  }
}
}
for(let i = 0; i < a.length; i++){
for(let j = 0; j < a[i].length; j++){
  a[i][j] = a[i][j].slice(-1)
  }
}
for (let el in a) {
  a[el] = a[el].map(parseFloat);
}
arr = []
for(let i = 0; i < a.length; i++){
  arr.push([])
}
for(let i = 0; i < a.length; i++){
      for(let k = 0; k < b.length; k++){
          for(let t = 0; t < b[k].length; t++){
              if(b[k][t].slice(0,1) == i){
                  arr[b[k][t].slice(-1)] = a[i]
              }

          }
      }
  }
  for(let i = 0; i < arr.length; i++){
      for(let k = 0; k < arr[i].length; k++){
              arr[i][k]  = arr[i][k] +1;
          }
  }
console.log(arr)
for(let i = 0; i < arr.length; i++){
  var i1 = i+1
  dataEntry.innerHTML += `G<sup>-</sup>`+'('+i1+')'+'[ '+ arr[i]+' ]' + '<br>'
}
}


