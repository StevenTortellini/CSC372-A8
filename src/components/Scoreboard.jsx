 function ScoreBoard({ score }) {
  return (
    <div className="scoreboard">
      <p>Player: {score.player}</p>
      <p>Computer: {score.computer}</p>
    </div>
  );
}
export default ScoreBoard;
