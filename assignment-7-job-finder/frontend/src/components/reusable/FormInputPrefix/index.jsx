export default function FormInputPrefix({
  id,
  name,
  label,
  prefix = 'BDT',
  ...props
}) {
  return (
    <div className="fieldContainer">
      <label htmlFor={id}>{label}</label>
      <div className="flex border rounded-md shadow-sm border-slate-600">
        <span className="input-tag">{prefix}</span>
        <input
          type="number"
          name={name}
          id={id}
          required
          className="!rounded-l-none !border-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="20,00,000"
          min={0}
          {...props}
        />
      </div>
    </div>
  );
}
