const books = [
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", rating: "9.5", file: "Crime and Punishment (Fyodo_ (Z-Library).epub" },
  { title: "Notes From the Underground", author: "Fyodor Dostoevsky", rating: "8.5", file: "link_to_book_file_2.pdf" },
  { title: "And Then There Were None", author: "Agatha Christie", rating: "8", file: "And Then There Were None (Agatha Christie) (z-lib.org).epub" },
  { title: "A Silent Patient", author: " Alex Michaelides", rating: "7", file: "/The Silent Patient (Alex Mi_ (Z-Library).epub" },
  { title: "No Longer Human", author: "Osamu Dazai", rating: "8", file: "No Longer Human (Osamu Dazai) (z-lib.org) (1).epub" },
  { title: "A Game of Thrones", author: "George R.R. Martin", rating: "8", file: "got_got.epub" },
  
  { title: "A Clash Of Kings", author: "George R.R. Martin", rating: "8", file: "(A Song of Ice and Fire'', 02) George R.R. Martin - A Clash of Kings-Bantam (2002).epub" },
  { title: "The Plague", author: "Albert Camus", rating: "8.5", file: "(Penguin Modern Classics) Albert Camus, Robin Buss, Tony Judt - The Plague (Penguin Modern Classics).epub" },
  
  { title: "To Kill A Mockingbird", author: "Harper Lee", rating: "8.5", file: "(To Kill a Mockingbird) Lee, Harper.epub" },
  
  { title: "A Storm Of Swords", author: "George R.R. Martin", rating: "8.5", file: "A Storm of Sword.epub" },
  
  { title: "Never Let Me Go", author: "Kazuo Ishi", rating: "9", file: "Never Let Me Go (Kazuo Ishi_ (Z-Library).epub" },
  
  { title: "Atonement", author: "Ian McEwan", rating: "9.5", file: "McEwan, Ian - Atonement.epub" },
  
  { title: "Into Thin Air", author: "Jon Krakauer", rating: "8.5", file: "Into Thin Air (Jon Krakauer) (Z-Library).epub" },
  
  
  { title: "Man's Searching for Meaning", author: "Viktor Frankl", rating: "7.5", file: "Mans Search For Meaning (Viktor Emil Frankl) (z-lib.org).epub" },
  
  
  { title: "A Moveable Feast", author: "Ernest Hemingway", rating: "7.5", file: "Hemingway, Ernest - A Moveable Feast_ The Restored Edition.epub" },
  
  
  { title: "The Trial", author: "Franz Kafka", rating: "9", file: "Franz Kafka - The Trial (Breon Mitchell 1998 Translation).epub" },
  
  
  { title: "Fight Club", author: "Chuck Plahankick", rating: "8", file: "Fight Club (Palahniuk, Chuck) (z-lib.org).epub" },
  
  
  { title: "Death Of A Salesman", author: "Arthur", rating: "7.5", file: "Death of a Salesman (Arthur_ (Z-Library).epub" },
  
  
  { title: "No Country for Old Men", author: "Cormac McCarthy", rating: "8", file: "Cormac McCarthy - No Country for Old Men.epub" },
  
  
  { title: "Blood Meridian", author: "Cormac McCarthy", rating: "9.5", file: "Blood Meridian or The Eveni_ (Z-Library).epub" },
  
  
  { title: "Don Quixote", author: "Miguel De Cervantes", rating: "8.5", file: "don quixote.epub" },
  
  { title: "A Dance With Dragons", author: "George R.R. Martin", rating: "7.5", file: "dance_with_dragons.epub" },
  
  { title: "The Complete Byomkesh Bokshi ", author: "Shorodindu Bondopadhya", rating: "8", file: "bomkesh.epub" },
  
  { title: "White Nights", author: "Fyodor Dostoevsky", rating: "8", file: "White Nights (Fyodor Dostoyevsky) (Z-Library).epub" },
  
  { title: "The Stranger", author: "Albert Camus", rating: "8.5", file: "The Stranger (Albert Camus) (Z-Library).epub" },
  
  { title: "The Road", author: "Cormac McCarthy", rating: "7.5", file: "The Road (Cormac McCarthy) (z-lib.org).epub" },
  
  { title: "The Only Good Indians", author: "Stephen Graham Jones", rating: "7.5", file: "The Only Good Indians A Nov_ (Z-Library).epub" },
  
  { title: "The Nichomachean Ethics", author: "Aristotle", rating: "8", file: "The Nicomachean Ethics (Ari_ (Z-Library).epub" },
  
  { title: "The Metamorphosis", author: "Franz Kafka", rating: "8.5", file: "The Metamorphosis.epub" },
  
  { title: "The House Of The Dead", author: "Fyodor Dostoevsky", rating: "8.5", file: "The House of the Dead (Dost_ (Z-Library).epub" },
  
  { title: "The Godfather", author: "Mario Puzo", rating: "8", file: "The Godfather (Mario Puzo) (z-lib.org).epub" },
  
  { title: "The Girl On The Train", author: "Agatha Christie", rating: "7", file: "The Girl on the Train (Paula Hawkins) (z-lib.org).epub" },
  
  { title: "A Feast Of Crows", author: "George R.R. Martin", rating: "7.5", file: "feastofcrows_got.epub" },
  
  { title: "The Complete Feluda", author: "Satyajit Ray", rating: "7.5", file: "feluda.epub" },
  
  { title: "The Complete Kakababu", author: "Sunil Gangopadhyay", rating: "7", file: "kakababu.epub" },
  
  { title: "A Hitchhicker's Guide To Galaxy", author: "Douglas Adams", rating: "8", file: "hitchhikers_guide_to_galaxy.epub" },
  
  { title: "A Man Called Ove", author: "Fredrik Beckman", rating: "8", file: "man called ove.epub" },
  
  { title: "Meditations", author: "Marcus Aurelius", rating: "6.5", file: "meditations.epub" },
  
  { title: "The Complete Shorot Chandra Chattopadhyay", author: "Shorot Chandra Chattopadhyay", rating: "8.5", file: "shorot.epub" },
  
  { title: "One Of Us Is Lying", author: "Karen M. McManus", rating: "6.5", file: "one of us is lying.epub" },
  
  { title: "The Hunger Games", author: "Suzanne Collins", rating: "7", file: "the hunger games trilogy.epub" },
  
  { title: "Golpoguccho", author: "Rabindranath Tagore", rating: "9", file: "গল্পগুচ্ছ.epub" },
  
  { title: "Stoner", author: "John Williams", rating: "8.5", file: "Stoner (John Williams) (Z-Library).epub" },
  
  { title: "1984", author: "George Orwell", rating: "7", file: "Orwell, George - 1984.epub" },
  
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", rating: "10", file: "The Brothers Karamazov (Pen_ (Z-Library).epub" },
  
  
  { title: "The Day of The Jackal", author: "Frederick Forsyth", rating: "7.5", file: "The Day of the Jackal (Fred_ (Z-Library).epub" },
  
  
  
    // Add more books as needed
];

function displayBooks(bookArray) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = ''; // Clear existing books
  bookArray.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `
           
            <h3>${book.title}</h3>
            <p class="fx">${book.author}</p>
            <p class="ex">Rating: ${book.rating}</p>
            <a class="buttondl" href="${book.file}" download>Download</a>
        `;
    bookList.appendChild(bookDiv);
  });
}

function sortBooks() {
  const sortValue = document.getElementById("sort").value;
  let sortedBooks;

  if (sortValue === "title") {
    sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "author") {
    sortedBooks = books.sort((a, b) => a.author.localeCompare(b.author));
  } else {
    sortedBooks = books.sort((a, b) => b.rating - a.rating);
  }

  displayBooks(sortedBooks);
}

// Initial display
displayBooks(books);