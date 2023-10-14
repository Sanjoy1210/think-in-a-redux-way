export default function FormSubmitBtn({ text, ...props }) {
  return (
    <div className="text-right">
      <button
        type="submit"
        className="lws-submit border-gray-400/50 rounded-md border-[1.5px]"
        {...props}
      >
        {text}
      </button>
    </div>
  );
}
