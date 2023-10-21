export default function Button({ onSubmitted }) {
  return (
    <button className="submit-button" onClick={() => onSubmitted()}>
      Create quiz
    </button>
  );
}
