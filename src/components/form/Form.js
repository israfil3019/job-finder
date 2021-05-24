import "./Form.css";
import { useRef } from "react";

function Form({ newQuery }) {
  // instead of onChange and useState we can reduce rendering.. with useRefs
  const description = useRef();
  const location = useRef();
  return (
    <div className="form">
      <form action="">
        <input ref={description} type="text" placeholder="Job Description" />
        <br />
        <input ref={location} type="text" placeholder="Location" />
        <br />
        <button
          type="button"
          onClick={() => {
            newQuery(description.current.value, location.current.value);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;
