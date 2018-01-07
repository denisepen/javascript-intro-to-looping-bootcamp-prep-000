function forLoop(array) {
  
  for(var index = 0; index < 25; index++) {
    if(index === 1) {
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${index} strange loops.`);
    }
  }
  
  return array;
}

function whileLoop(num) {
  
  while(num > 0) {
    console.log(num);
    num--;
  }
  
  return 'done';
}


function doWhileLoop(array) {
  
}

















