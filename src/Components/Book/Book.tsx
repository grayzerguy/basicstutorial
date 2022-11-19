import "./Book.css";


interface BooksProps {
    title?: string;
    authnr?: string;
    img?: string;
    // children?: React.ReactNode;
  }
function Book(props: BooksProps): JSX.Element {

    const { title, authnr, img } = props;
    //attribute, eventHandler
    //onClick, onMouseOver
    const clickHandler = () => {
      alert("hello world");
    };
    const complexExample = (author:string | undefined) => {
      console.log(author);
    };
    return (
      <article className="book">
        <img src={img} alt="book" />
        <h1 onMouseOver={() => console.log(title)}>{title}</h1>
        <h4>{authnr}</h4>
        {/* {props.children} */}
        <button type="button" onClick={() => alert("hello world")}>
          Referent Example 1
        </button>
        <button type="button" onClick={clickHandler}>
          Referent Example 2
        </button>
        <button type="button" onClick={()=>
          complexExample(authnr)
        }>More complex example</button>
      </article>
    );
  };

export default Book;
