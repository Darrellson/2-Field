// function calc()
// {
//     const n1 = parseFloat (document.getElementById("n1").value);
//     const n2 = parseFloat (document.getElementById("n2").value);
//     const oper = document.getElementById("operators").value;


//     if (isNaN(n1) || isNaN(n2)) {
//         window.alert("You can't do it. ");
//     } else {
//         let result;

//         switch (oper) {
//             case "+": {
//                 result = n1 + n2;
//                 break;
//             }
//             case "-": {
//                 result = n1 - n2;
//                 break;
//             }
//             case "/": {
//                 result = n1 / n2;
//                 break;
//             }
//             case "X": {
//                 result = n1 * n2;
//                 break;
//             }
//             case "%": {
//                 result = n1 % n2;
//                 break;
//             }
//             case "**": {
//                 result = n1 ** n2;
//                 break;
//             }
//         }
        
//         document.getElementById("result").value = result;
//       }   
// }

  
  function calc(uuid) {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const oper = document.getElementById("operators").value;
  
    if (isNaN(n1) || isNaN(n2)) {
      window.alert("You can't do it. ");
    } else {
      let result;
  
      switch (oper) {
        case "+":
          result = n1 + n2;
          break;
        case "-":
          result = n1 - n2;
          break;
        case "/":
          result = n1 / n2;
          break;
        case "X":
          result = n1 * n2;
          break;
        case "%":
          result = n1 % n2;
          break;
        case "**":
          result = n1 ** n2;
          break;
      }
  
      document.getElementById("result").value = `${result} (UUID: ${uuid})`;
    }
  }
  
  const uuid = generateUUID();
  
  calc(uuid);
  