let fruit = 'kiwi' // apple, banana, oranges
switch(fruit) {
    case 'orange':
        console.log('Oranges are $0.59 a pound.')
        break;
    case 'apple':
        console.log('Apples are $0.32 a pound.')
        break;
    case 'banana':
        console.log('Bananas are $0.48 a pound.')
        break;
    default:
        console.log(`Sorry, we are out of ${fruit}.`)
}

//---------------------------------------------------------------------
let fruit = "mango"; // apple, banana, oranges
switch (fruit) {
  case "apple":
    console.log("Yummy Apples");
    break;
  case "kiwi":
    console.log("Yummy Kiwi");
    break;
  case "Oranges":
    console.log("Yummy Oranges");
    break;
  default:
    console.log(`Ain't nobody got any ${fruit}.`);
    break;
}
//-----------------------------------------------------------------------
let score = 89;
function assignGrade(score) {
  // console.log(score)
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    case score <= 59:
      console.log("F");
      break;
    default:
      console.log(`That's not a good sign`);
  }
}
assignGrade(score);