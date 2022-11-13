function numMaggiore(num1, num2, num3) {
  let bigger;
  if (num1 > num2 && num1 > num3) bigger = num1;
  else if (num2 > num1 && num2 > num3) bigger = num2;
  else if (num3 > num1 && num3 > num1) bigger = num3;
  console.log(bigger);
}

numMaggiore(1, 2, 3);
