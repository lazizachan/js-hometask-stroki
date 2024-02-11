/* task1 */
// let date = "2025-12-31";
// let newDate = date.split("-").join("/");
// console.log(newDate);

/* task2 */
// let user = prompt("Vvedite tekst");
// alert(user.split("").reverse().join(""));

/* task3 */
// function findSymbol(tekst, find) {
//   if (tekst.includes(find)) return find;
//   else {
//     return "nichego ne naideno";
//   }
// }
// console.log(findSymbol("aefjgj&*%4", "@"));

/* task4 */
function deleteTab(tekst) {
  //   return tekst.split(" ").join("");
  return tekst.replaceAll(" ", "");
}
console.log(deleteTab(prompt("Vvedite tekst")));
