import { Books } from "../../src/pages";
import { fetchAllUniqueBooks, fetchAvailableBooks } from "../../src/services";

const BooksPage = ({ availableBooks, allBooks }) => {
  return <Books availableBooks={availableBooks} allBooks={allBooks} />;
};

export async function getStaticProps() {
  const res = await fetchAvailableBooks();
  const allBooksRes = await fetchAllUniqueBooks();
  return {
    props: {
      availableBooks: res.data,
      allBooks: allBooksRes.data,
    },
  };
}

export default BooksPage;
