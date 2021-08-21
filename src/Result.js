import { useHistory, useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const history = useHistory();

  const a = location.state.a;
  const b = location.state.b;

  const A = new Set(a);
  const B = new Set(b);
  console.log(A);
  let union = Array.from([...new Set([...A, ...B])]);
  let intersection = Array.from(new Set([...A].filter((x) => B.has(x))));
  let onlyA = Array.from(new Set([...A].filter((x) => !B.has(x))));
  let onlyB = Array.from(new Set([...B].filter((x) => !A.has(x))));

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <div className="container mt-5">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Only in A</th>
            <td>{onlyA.join(", ")}</td>
          </tr>
          <tr>
            <th scope="row">Only in B</th>
            <td>{onlyB.join(", ")}</td>
          </tr>
          <tr>
            <th scope="row">Present in both A & B</th>
            <td>{intersection.join(", ")}</td>
          </tr>
          <tr>
            <th scope="row">Combining A & B</th>
            <td>{union.join(", ")}</td>
          </tr>
        </tbody>
      </table>
      {/* <div>
        <span>
          <strong>Only present in A:</strong>
          {` ${onlyA.join(", ")}`}
        </span>
        <span>
          <strong>Only present in B:</strong>
          {` ${onlyB.join(", ")}`}
        </span>
        <span>
          <strong>Present in both A & B (intersection):</strong>
          {` ${intersection.join(", ")}`}
        </span>
        <span>
          <strong>Combining A & B (union):</strong>
          {` ${union.join(", ")}`}
        </span>
      </div> */}
      <div className="text-center">
        <button onClick={goBackHandler} className="btn btn-success">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Result;
