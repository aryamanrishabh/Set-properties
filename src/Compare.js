import "./App.css";

const Compare = ({ A, B }) => {
  const a = A.trim().split(",");
  const b = B.trim().split(",");

  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <table className="table text-center">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Set A</th>
              </tr>
            </thead>
            <tbody>
              {a.map((v, i) => (
                <tr key={i}>{v}</tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <table className="table text-center">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Set B</th>
              </tr>
            </thead>
            <tbody>
              {b.map((v, i) => (
                <tr key={i}>{v}</tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default Compare;
