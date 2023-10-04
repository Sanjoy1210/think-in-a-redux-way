export default function FormCheckbox({ label, name, id, ...props }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        name={name}
        className="w-4 h-4"
        {...props}
      />
      <label htmlFor={id} className="ml-2 text-sm">
        {' '}
        {label}
      </label>
    </div>
  );
}
