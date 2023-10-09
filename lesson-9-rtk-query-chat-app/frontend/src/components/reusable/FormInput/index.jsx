export default function FormInput({
  label,
  id,
  name,
  className = 'rounded-none',
  ...props
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={props.type || 'text'}
        required
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 ${className} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm`}
        {...props}
      />
    </div>
  );
}
