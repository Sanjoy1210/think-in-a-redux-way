export default function FormInput({ label, name, id, ...props }) {
  return (
    <div className="fieldContainer">
      <label htmlFor={id}>{label}</label>
      <input type="date" name={name} id={id} required {...props} />
    </div>
  );
}
