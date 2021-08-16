/* eslint-disable react/no-array-index-key */
import { filter, capitalize } from "../utils";
import styles from "./StudentBookRecord.module.scss";

export const StudentBookRecord = ({ studentBooksRecord }) => {
  return (
    <>
      <p className={styles.Text}>Student&apos;s Book Record</p>
      <table className={styles.StudentBookRecordsTable}>
        <thead>
          <tr>
            {filter(Object.keys(studentBooksRecord[0])).map((key) => (
              <th key={key}>
                {key !== "isbn" ? capitalize(key) : key.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentBooksRecord.map((record, index) => (
            <tr key={index}>
              <td>{record.student_name}</td>
              <td>{record.isbn}</td>
              <td>{record.book_name}</td>
              <td>{record.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
