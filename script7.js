str = prompt("Wesh, tu dis quoi ?")

if (str && "?" == str.slice(-1)){
  console.log("Ouais Ouais...")
}
else if (str && str.toUpperCase() == str){
  console.log("Pwa, calme-toi...")
}
else if (str && (-1 != str.indexOf("Fortnite") || -1 != str.indexOf("fortnite"))){
  console.log("on s' fait une partie soum-soum ?")
}
else if ("" === str){
  console.log("t'es en PLS ?")
}
else{
  console.log("balek.")
}