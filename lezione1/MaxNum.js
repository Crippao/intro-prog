const maximumNumber = (...params) => {
  let bigger;
  console.log(params);
  for (let i = 1; i < params.length; i++) {
    const first = params[i];
    const second = params[i - 1];

    console.log(first); // 3
    console.log(second); // 1

    if (first > second) {
      bigger = first;
      console.log(bigger + "  a");
    } else {
      bigger = second;
      console.log(bigger + "  b");
    }
  }

  //console.log(bigger); //
};

maximumNumber(1, 3, 21, 5);

//prendere 1 elemento
//confrontare con 2 elemento
//se 1>2 allora fissare 1 elemento
//se 2>1 allora fissare 2 elemento
//prendere 3 elemento
//confrontare con elemento maggiore
//se 3>bigger allora fissare 3 elemento
//se se bigger>3 allora tenere bigger
//ecc
