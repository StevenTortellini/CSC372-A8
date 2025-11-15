 function ComputerThrow({ choice }) {
  const img = choice ? `/images/${choice}.PNG` : "/images/question-mark.PNG";

  return (
    <div className="computer-throw">
      <h2>Computer</h2>
      <img src={img} alt="computer choice" />
    </div>
  );
}
export default ComputerThrow;
