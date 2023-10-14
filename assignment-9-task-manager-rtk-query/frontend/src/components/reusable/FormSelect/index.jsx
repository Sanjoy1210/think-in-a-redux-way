export default function FormSelect({ label, id, name, children, ...props }) {
  return (
    <div className="fieldContainer">
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} required {...props}>
        {children}
      </select>
    </div>
  );
}
