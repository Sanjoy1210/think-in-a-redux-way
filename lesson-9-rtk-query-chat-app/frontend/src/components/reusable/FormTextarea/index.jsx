export default function FormTextarea({ label, id, name, className, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        required
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${className} focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm`}
        {...props}
      />
    </div>
  );
}
