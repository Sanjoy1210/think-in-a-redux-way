export default function FormInputSelect({
  id,
  label,
  name,
  children,
  ...props
}) {
  return (
    <div className="fieldContainer">
      <label htmlFor={id} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      <select id={id} name={name} required {...props}>
        {children}
      </select>
    </div>
  );
}
