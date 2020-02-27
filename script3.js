stage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
array = []
current_stage = "#"
for(let i = 1; i <= stage; i++)
{
  array.push(current_stage);
  current_stage += "#"
}
len = array.length
for(var i = 0; i < len; i++)
{
  console.log(array[i])
}
