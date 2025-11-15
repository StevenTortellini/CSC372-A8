 function ResultDisplay({ result }) {
  return (
    <div className="result-display">
      {result && <h2>{result}</h2>}
    </div>
  );
}
export default ResultDisplay;
