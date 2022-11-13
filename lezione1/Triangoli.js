function tipoTriangolo(lato1, lato2, lato3) {
  if (lato1 === lato2 && lato1 === lato3) console.log("Equilatero");
  else if (lato1 === lato2 || lato1 === lato3 || lato2 === lato3)
    console.log("Isocele");
  else console.log("Scaleno");
}

tipoTriangolo(10, 10, 10);
//tipoTriangolo(10,10,20);
//tipoTriangolo(10,20,30);
