const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: "Autre livre avec le max d'emprunt", id: 0, rented: 67},
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function print_books_title(books){
  books.forEach(elem => {
    console.log("\"", elem.title, "\"")
  })
}

function print_book_title(book){
  console.log("\"", book.title, "\"")
}

function is_all_rented(ary){
  ary.forEach(elem => {
    if (elem.rented < 1)
    {
       console.log("Non, ce livre n'a jamais été emprunté :", ary.title)
    }
  })
  console.log("Oui")
}

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
is_all_rented(books);

max_rented = Math.max.apply(Math, books.map(v => v.rented))
books_max_rented = books.filter(book => book.rented == max_rented)
console.log("\nLe ou les livres le(s) plus emprunté(s), avec pour nombre d'emprunt :", max_rented)
print_books_title(books_max_rented);

console.log("\nQuel est le livre le moins emprunté ?")
min_rented = Math.min.apply(Math, books.map(v => v.rented))
books_min_rented = books.filter(book => book.rented == min_rented)
console.log("\nLe ou les livres le(s) plus emprunté(s), avec pour nombre d'emprunt :", min_rented)
print_books_title(books_min_rented)

console.log("\nTrouve le livre avec l'ID: 873495 ;")
book_id_873495 = books.find(v => v.id == 873495)
print_book_title(book_id_873495)

console.log("\nSupprime le livre avec l'ID: 133712 ;")

for (var i = 0; i < books.length; i++){
  if (books[i].id == 133712){
    console.log("Livre supprimé :", books[i])
    books.splice(i, 1)
  }
}

console.log("\nTrie les livres par ordre alphabétique (\"sans celui avec l'ID 133712 car il est supprimé)\".")


books.sort((a,b) => a.title > b.title ? 1 : ((a.title < b.title) ? -1 : 0))
print_books_title(books)
