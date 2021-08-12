import { api } from "../../src/api";

const BookDetailPage = () => {
  return <div>Books Page</div>;
};

export async function getServerSideProps({ params }) {
  const res = await api.get(``);
}

export default BookDetailPage;
