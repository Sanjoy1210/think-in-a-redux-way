export default function FormInput({ label, name, id, ...props }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id}>{label}</label>
      <input
        required
        className="text-input"
        type={props?.type || 'text'}
        id={id}
        name={name}
        {...props}
      />
    </div>
  );
}
