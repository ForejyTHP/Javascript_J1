nb = prompt("De quel nombre veux-tu calculer la factorielle ?")
rslt = 1
if (nb == 0 || nb == 1)
{
  rslt = 1
}
else 
{
  while (nb > 0)
  {
    rslt *= nb
    nb--
  }
}
console.log(rslt)
