import { useState, useEffect } from "react";
import { BookCard } from '../book-card/book-card';
import { BookView } from '../book-view/book-view';

export const MainView = () => {
  const [books, setBooks] = useState([]);
useEffect(() => {
  fetch("https://openlibrary.org/search.json?q=star+wars")
  .then((response) => response.json())
  .then((data) => {
    const booksFromApi = data.docs.map((doc) => {
      return{
        id: doc.key,
        title: doc.title,
        image: 'https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg',
        author: DocumentType.author_name?.[0]
    
      }
    });
    setBooks(booksFromApi);
  });
}, []);


  const [selectedBook, setSelectedBook] = useState(null);

  if (selectedBook) {
    return (
      <BookView book={selectedBook} onBackClick={() => setSelectedBook(null)} />
    );
  }

  if (books.length === 0) {
    return <div>The list is empty!</div>;
  } else {
    return (
      <div>
        {books.map((book) => {
          return (
            <BookCard
              key={book.id}
              book={book}
              onBookClick={(newSelectedBook) => {
                setSelectedBook(newSelectedBook);
              }}
            />
          );
        })}
      </div>
    );
  }
};
