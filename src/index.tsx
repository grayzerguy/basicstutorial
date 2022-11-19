//old way react------------------
// import ReactDOM from "react-dom";
//------------------------------
//new way react

import React from "react";
import ReactDOM from "react-dom/client";
import book from "./books";
import Book from "./Components/Book/Book";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//--------------------------------

function BookList(): JSX.Element {
  return (
    <section className="bookList">
      {book.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

/* <Book
        title={book.title}
        authnr={book.authnr}
        img={book.img}
      /> */

/* <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
          reiciendis!
        </p>
      </Book> */
/* <Book
        title={secondBook.title}
        authnr={secondBook.authnr}
        img={secondBook.img}
      />
    </section> */
/* );
} */
// interface BooksProps {
//   title?: string;
//   authnr?: string;
//   img?: string;
//   // children?: React.ReactNode;
// }

// const Book = (props: React.PropsWithChildren<BooksProps>) => {
// const Book = (props: BooksProps) => {
  // no destructure
  //   return (
  //     <article className="book">
  //       <img src={props.img} alt="book" />
  //       <h1>{props.title}</h1>
  //       <h4>{props.authnr}</h4>
  //     </article>
  //   );
  // };
  //destructure props
//   const { title, authnr, img } = props;
//   //attribute, eventHandler
//   //onClick, onMouseOver
//   const clickHandler = () => {
//     alert("hello world");
//   };
//   const complexExample = (author:string | undefined) => {
//     console.log(author);
//   };
//   return (
//     <article className="book">
//       <img src={img} alt="book" />
//       <h1 onMouseOver={() => console.log(title)}>{title}</h1>
//       <h4>{authnr}</h4>
//       {/* {props.children} */}
//       <button type="button" onClick={() => alert("hello world")}>
//         Referent Example 1
//       </button>
//       <button type="button" onClick={clickHandler}>
//         Referent Example 2
//       </button>
//       <button type="button" onClick={()=>
//         complexExample(authnr)
//       }>More complex example</button>
//     </article>
//   );
// };
//destructure props andreWay DID`T CHANGE A LOT FROM THE PREVIOUS WAY
// const Book = ({ title, img, children, ...props }: BooksProps) => {
//   return (
//     <article className="book">
//       <img src={img} alt="book" />
//       <h1>{title}</h1>
//       <h4>{props.authnr}</h4>
//       {children}
//     </article>
//   );
// };

//old way react

// ReactDOM.render(<BookList />, document.getElementById("root"));

//new way react
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
reportWebVitals();
