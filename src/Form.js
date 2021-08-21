import { useState } from "react";
import Compare from "./Compare";
import { Link } from "react-router-dom";
import "./style.css";

const Form = () => {
  const [A, setA] = useState("");
  const [B, setB] = useState("");

  return (
    <div className="container">
      <form
        className="form-group"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="setA">Set A</label>
        <textarea
          value={A}
          onChange={(e) => {
            setA(e.target.value);
          }}
          className="form-control"
          id="setA"
        ></textarea>
        <label htmlFor="setB" className="mt-2">
          Set B
        </label>
        <textarea
          value={B}
          onChange={(e) => {
            setB(e.target.value);
          }}
          className="form-control"
          id="setB"
        ></textarea>
      </form>
      <Compare A={A} B={B} />
      <Link
        to={{
          pathname: "/results",
          state: {
            a: A.split(",").map((item) => item.trim()),
            b: B.split(",").map((item) => item.trim()),
          },
        }}
      >
        <div
          id={A.length && B.length ? "display-block" : "display-none"}
          className="text-center mt-5"
        >
          <button className="btn btn-success">Compare</button>
        </div>
      </Link>
    </div>
  );
};

export default Form;
