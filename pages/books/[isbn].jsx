import { BooksDetail } from "../../src/pages";
import { fetchBookByISBN, fetchAllUniqueBooks } from "../../src/services";

const BookDetailPage = ({ book, allBooks }) => {
  return <BooksDetail book={book} allBooks={allBooks} />;
};

export async function getServerSideProps({ params, query }) {
  const { isbn } = params;
  const { bookId } = query;
  const apiParams = new URLSearchParams([["bookId", bookId]]);
  const bookRes = await fetchBookByISBN(isbn, apiParams);
  const allBooksRes = await fetchAllUniqueBooks();

  return {
    props: {
      book: bookRes.data,
      allBooks: allBooksRes.data.slice(0, 6),
    },
  };
}

export default BookDetailPage;
