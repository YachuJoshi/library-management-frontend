/* eslint-disable no-undef */
import { useState } from "react";
import Error from "next/error";
import { useRouter } from "next/router";

import { GiStack } from "react-icons/gi";
import { FaPenAlt } from "react-icons/fa";
import { ImBook, ImHome } from "react-icons/im";
import { AiOutlineNumber } from "react-icons/ai";

import { withAuth } from "../auth";
import { ROLES } from "../constants";
import { InputField } from "../form";
import { MainLayout } from "../layout";
import { createBook, updateBook } from "../services";
import { parseGenres } from "../utils";
import { useAuthContext } from "../context";
import { toast, Container, Heading, Button } from "../components";

import styles from "./AddBooks.module.scss";

export const AddBooks = withAuth(({ book }) => {
  const router = useRouter();
  const [ISBN, setISBN] = useState(book?.isbn || "");
  const [bookName, setBookName] = useState(book?.book_name || "");
  const [quantity, setQuantity] = useState(book?.quantity || "");
  const [author, setAuthor] = useState(book?.author_name || "");
  const [publication, setPublication] = useState(book?.publication || "");
  const [genre, setGenre] = useState(parseGenres(book?.genres) || "");
  const { user: loggedInUser } = useAuthContext();
  const { userDetails: _user } = loggedInUser;
  const action = !router?.query ? "ADD" : "EDIT";

  if (_user.role !== ROLES.ADMIN) {
    return (
      <div className={styles.Error}>
        <Error statusCode="403" title="Forbidden" />
      </div>
    );
  }

  const notify = (type, message) => {
    toast({ type, message });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const genres = genre.split(",").map((title) => title.trim());
    const bookDetails = {
      isbn: ISBN,
      name: bookName,
      quantity,
      author,
      publication,
      genres,
    };
    try {
      if (action === "ADD") {
        await createBook(bookDetails);
        notify("success", "Book Added Successfully!");
      }
      if (action === "EDIT") {
        await updateBook(bookDetails);
        notify("success", "Book Updated Successfully!");
      }
      router.push("/books");
    } catch (err) {
      notify("error", "Something Went Wrong!");
      console.log(err);
    }
  };

  return (
    <MainLayout title="Library Management | Add Books">
      <Container>
        <Heading>Add Or Edit Books</Heading>
        <section className={styles.AddBooksSection}>
          <form className={styles.Form} onSubmit={onSubmit}>
            <div>
              <InputField
                type="text"
                name="isbn"
                placeholder="Book ISBN Number"
                icon={AiOutlineNumber}
                input={ISBN}
                setInput={setISBN}
              />
              <InputField
                type="text"
                name="name"
                placeholder="Book Name"
                icon={ImBook}
                input={bookName}
                setInput={setBookName}
              />
              <InputField
                type="number"
                name="quantity"
                placeholder="Book Quantity"
                icon={GiStack}
                input={quantity}
                setInput={setQuantity}
              />
              <InputField
                type="text"
                name="author"
                placeholder="Book Author"
                icon={FaPenAlt}
                input={author}
                setInput={setAuthor}
              />
              <InputField
                type="text"
                name="publication"
                placeholder="Book Publication"
                icon={ImHome}
                input={publication}
                setInput={setPublication}
              />
              <InputField
                type="text"
                name="genres"
                placeholder="Book Genres"
                icon={ImHome}
                input={genre}
                setInput={setGenre}
              />
            </div>
            <Button
              type="submit"
              kind="primary"
              className={styles.SubmitButton}
            >
              {action === "ADD" ? "Add Book" : "Edit Book"}
            </Button>
          </form>
        </section>
      </Container>
    </MainLayout>
  );
});
