$(document).ready(function() {
  const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  //Est-ce que tous les livres ont été au moins empruntés une fois ?
  let read = true;
  for (let i=0; i < books.lengh; i++){
    if(books[i].rented == 0){
      read = false;
      break;
    }
  }
  if (read){
    console.log("Tous les livres ont été au moins empruntés une fois ?");
    $('#result1').text("Tous les livres ont été au moins empruntés une fois.");
  }else{
    console.log("Pas tous les livres ont été au moins empruntés une fois.");
    $('#result1').text("Pas tous les livres ont été au moins empruntés une fois.");
  }

  //Quel est livre le plus emprunté ?
  let mostRented = books.reduce((max, book) => max.rented > book.rented ? max : book);
  console.log(`Le livre le plus emprunté est ${mostRented.title}, ${mostRented.rented} fois)`);
  $('#result2').text(`Le livre le plus emprunté était le ${mostRented.title}, ${mostRented.rented} fois.`);
  
  let lessRented = books.reduce((min, book) => min.rented < book.rented ? min : book);
  console.log(`Le livre le moins emprunté  ${lessRented.title}, ${lessRented.rented} fois`);
  $('#result3').text(`Le livre le moins emprunté était le ${lessRented.title}, ${lessRented.rented} fois.`);

  //Trouve le livre avec l'ID: 873495
  function idCheck(book) {
    return book.id == 873495;
  }
  let idQuery = books.find(idCheck)
  console.log(`Le livre avec l'ID: 873495 est ${idQuery.title}`);
  $('#result4').text(`Le livre avec l'ID: 873495 est ${idQuery.title}.`);

  //Supprime le livre avec l'ID: 133712 ;
  let removed;
  for (let i = 0; i < books.length; i++){
    if (books[i].id == 133712){
      removed = books.splice(i,1);
    }
  }
  console.log(`Le livre avec lid ${removed[0].id}, named ${removed[0].title} a été supprimé`);
  console.log(removed)
  $('#result5').text(`Le livre  ${removed[0].title} id ${removed[0].id} a été supprimé`);
  //Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).*
  function compareTitles( a, b ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }
  books.sort(compareTitles)
  console.log(`Les livres par ordre alphabétique`);
  console.log(books)
  let output = "<h5> Les livres par ordre alphabétique </h5> <br />";
  for (let i =0; i < books.length; i++){
    output += books[i].title + ", id:  " + books[i].id + " <br />";
  }
  $('#result6').html(output);

});
















