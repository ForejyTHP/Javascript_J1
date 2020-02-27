const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Les entrepreneurs qui sont nés dans les années 70 ;");
entrepreneurs.forEach(entrepreneur =>{
  if (entrepreneur.year >= 1970 && entrepreneur.year <= 1979)
  {
    console.log(entrepreneur.first, entrepreneur.last)
  }
})

console.log("\nArray content le prénom et le nom des entrepreneurs ");
entrepreneur_just_names = entrepreneurs.map(v => ({first: v.first, last: v.last}));
entrepreneur_just_names.forEach(entrepreneur =>{
  console.log(entrepreneur.first, entrepreneur.last)
})

console.log("\nL'age qu'aurait chaque inventeur aujourd'hui ?");
var current_year = new Date().getFullYear();
entrepreneurs.forEach(entrepreneur =>{
  age = current_year - entrepreneur.year;
  console.log(entrepreneur.first, entrepreneur.last,":", age);
})


console.log("Tri par ordre alphabetique du nom de famille");
function compare(a, b)
{
  return (a.last > b.last) ? 1 : ((a.last < b.last) ? -1 : 0) 
}
function print_content_last_first(ary)
{
  ary.forEach(entrepreneur =>{
    console.log(entrepreneur.last, entrepreneur.first);
  })
}
entrepreneurs.sort(compare);
print_content_last_first(entrepreneurs);

