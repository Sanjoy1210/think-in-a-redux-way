export default function CheckboxWithLabel({ id, name, label, ...props }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center cursor-pointer">
        <input
          id={id}
          name={name}
          type="checkbox"
          required
          className="h-4 w-4 text-violet-600 cursor-pointer focus:ring-violet-500 border-gray-300 rounded"
          {...props}
        />
        <label
          htmlFor="agree"
          className="ml-2 block text-sm text-gray-900 cursor-pointer"
        >
          {label}
        </label>
      </div>
    </div>
  );
}
