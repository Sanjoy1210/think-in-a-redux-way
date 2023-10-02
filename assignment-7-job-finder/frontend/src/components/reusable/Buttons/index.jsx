export default function Button({ type = 'button', text, id }) {
  return (
    <button
      type={type}
      id={id}
      className="cursor-pointer btn btn-primary w-fit"
    >
      {text}
    </button>
  );
}
