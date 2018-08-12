function loopyLighthouse(start, end, num1, num2) {
  for (var i = start;i <= end; i++){
    if (i % num1 == 0 && i % num2 == 0) {
      //could be i % (num1 * num2) == 0
      console.log("LoopyLighthouse");
    } else if (i % num1 == 0) {
      console.log("Loopy");
    } else if (i % num2 == 0) {
      console.log("Lighthouse");
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse(100, 200, 3, 4);