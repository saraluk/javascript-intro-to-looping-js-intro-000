function forLoop(array){
  for(let i=0; i<25; i++){
    if(i === 1){
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array
}

function whileLoop(countdown){
  while(countdown > 0){
    console.log(--countdown);
  }
  return 'done'
}

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){
  do {
    array = array.length - 1;
  } while (array.length > 0 && incrementVariable())
  return array
}
