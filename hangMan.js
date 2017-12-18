let list = ['ashishm','ashishj','ankur','anjum','arvind','asha','aditi','bhanu','divya',
'dhanashri','dhanusha','debu','gayatri','harshad','harvar','ishu','ketan','kaski',
'manish','madhuri','manindra','neeraj','nitesh','omkar','pallabi','pavani','pavankalyan',
'pragya','pranav','pranoy','praveen','prudhvi','raghunath','rahul','ravinder','sachin',
'salman','sayima','shubhams','shubhamj','sreenadh','sridev','sudhin','sulagna','suyog',
'teja','veera','viraj','vivek','yogiraj'];
let countOfExcueses = 6;

const getString = function(list) {
  let index = Math.floor(Math.random()*list.length);
  return list[index];
}

const getDashes = function(number) {
  //alert(numberOfLetters);
  let dash = document.getElementById("dashes").innerHTML='-'.repeat(number);
  return dash;
}

const isInWord = function(id) {
  let word = getString(list);
  return word.includes(id);
}

// const isValidLetter = function(event){
//   let key = event.target.id;
//   if(word.includes(key)){
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// }

const getAllIndices = function(word,key){
  let wordList = word.split("");
  return wordList.reduce(function(indexList,letter,index){
    if(letter==key){
      indexList.push(index);
    }
    return indexList;
  },[]);
}

const insertLetter = function(indices,dashList,key){
  for (var index = 0; index < dashList.length; index++) {
    if(indices.includes(index)){
      dashList[index]=key;
    }
  }
  return dashList;
};

const updateDash = function(word,key){
  let dashes = document.getElementById("dashes").innerText;
  let indices = getAllIndices(word,key);
  let dashList = dashes.split("");
  let updatedDashList = insertLetter(indices,dashList,key);
  document.getElementById("dashes").innerText = updatedDashList.join("");
  if(!dashList.includes('-')){
    alert('WoW! you win the game.......\n'+'Correct Answer :'+word);
    loadGame();
  }
}

const startGame = function(word){
  let countOfExcuses=3;
  document.getElementById('chances').innerText=countOfExcuses;
  let looses = '';
  document.getElementById('looses').innerText=looses;
  let keyboard = document.getElementById("keyboard");
  keyboard.onclick = function(event){
    let key = event.target.id;
    if(word.includes(key)){
      updateDash(word,key);
      return;
    }
    countOfExcuses--;
    document.getElementById('chances').innerText=countOfExcuses;
    document.getElementById('looses').innerText=looses+=key+',';
    if(countOfExcuses==0) {
      loadGame();
      alert(" oops! you lossed\n correct answer : "+word);
    }
  };
}


const loadGame = function() {
  let word = getString(list);
  let dashes = getDashes(word.length);
  startGame(word);
  // isValidLetter(id);-------------------->
  //let index = word.indexOf(id);
  // console.log(index);
  console.log(dashes.split(''));
  console.log(word.split(''));
}
