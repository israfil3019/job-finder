import { useRef } from "react";

function Form({ newQuery }) {
  // instead of onChange and useState we can reduce rendering.. with useRefs
  const description = useRef();
  const location = useRef();
  return (
    <div className="form">
      <form action="">
        <input
          className="form-control"
          ref={description}
          type="text"
          placeholder="Job Description"
        />
        <br />
        <input
          className="form-control"
          ref={location}
          type="text"
          placeholder="Location"
        />
        <br />
        <button
          className="btn btn-primary w-100"
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
