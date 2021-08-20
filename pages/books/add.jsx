import { AddBooks } from "../../src/pages";
import { fetchBookDetailByISBN } from "../../src/services";

const AddBooksPage = ({ book }) => {
  return <AddBooks book={book} />;
};

export async function getServerSideProps({ query }) {
  if (!query.isbn) {
    return {
      props: {
        book: {},
      },
    };
  }
  const bookRes = await fetchBookDetailByISBN(query.isbn);
  return {
    props: {
      book: bookRes.data,
    },
  };
}

export default AddBooksPage;
