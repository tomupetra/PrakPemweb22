let a1 = 0,
  a2 = 1,
  nextTerm,
  num,
  jumlah = 1,
  str = [];

function Bil(num) {
  num = document.getElementById("angka").value;

  if (num <= 0 || num >= 21) {
    document.getElementById("demo").innerHTML = "Error";
  } 
  else if (num % 2 == 1) {
    for (let i = 1; a2 <= num * 10; i++) {
      str.push(a2);
      nextTerm = a1 + a2;
      a1 = a2;
      a2 = nextTerm;
    }
    document.getElementById("demo").innerHTML = str.join(" ");
    str = [];
    a1 = 0;
    a2 = 1;
  } 
  else if (num % 2 == 0) {
    for (let j = 1; j <= num / 2; j++) {
      jumlah = j * jumlah;
      str.push(j);
      if (j == num / 2) {
        str.push("=" + jumlah);
      } else if (j != num / 2) {
        str.push("x");
      }
    }
    document.getElementById("demo").innerHTML = str.join("");
    str = [];
    jumlah = 1;
  } else {
    document.getElementById("demo").innerHTML = "Error";
  }
}
