 function PlayerThrow({ selected, onSelect }) {
  const choices = ["rock", "paper", "scissors"];

  return (
    <div className="player-throw">
      <h2>Your Throw</h2>
      <div className="throw-options">
        {choices.map((choice) => (
          <img
            key={choice}
            src={`/images/${choice}.PNG`} // file extension is case sensitive
            className={selected === choice ? "selected" : ""}
            alt={choice}
            onClick={() => onSelect(choice)}
          />
        ))}
      </div>
    </div>
  );
}
export default PlayerThrow;
