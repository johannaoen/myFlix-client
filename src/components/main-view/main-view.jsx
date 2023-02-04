import { useState } from "react";
import { BookCard } from '../book-card/book-card';
import { BookView } from '../book-view/book-view';

export const MainView = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Lightning Thief",
      image:
        "https://m.media-amazon.com/images/I/51Xh1SIrwLL._AC_.jpg",
      author: "Rick Riordan",
      description: "Twelve year old Percy Jackson is on th emost dangerous quest of his life. He learns that his true father is Poseidon, the Greek god of the sea."
    },
    {
      id: 2,
      title: "Harry Potter 1",
      image:
        "https://m.media-amazon.com/images/I/71-++hbbERL.jpg",
      author: "JK Rowling",
      description: "An eleven year old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry."
    },
    {
      id: 3,
      title: "Harry Potter 2",
      image:
        "https://m.media-amazon.com/images/I/61aBiYTtSJL._AC_.jpg",
      author: "JK Rowling",
      description: "An eleven year old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry."
    },
    {
      id: 4,
      title: "Life As We Knew It",
      image:
        "https://m.media-amazon.com/images/I/51yjhpz1V-L.jpg",
      author: "Susan Pfeffer",
      description: "Sixteen year old MIranda finds her world thrown into chaos when an asteroid hits the moon and shifts it out of orbit, closer to Earth."
    },
    {
      id: 5,
      title: "Lord of the Flies",
      image:
        "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/lord-of-the-flies-by-william-golding-greatest-books-ever-art-print-series-066-design-turnpike.jpg",
      author: "William Golding",
      description: "A group of young boys who find themselves alone on a deserted island."
    }
  ]);

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
