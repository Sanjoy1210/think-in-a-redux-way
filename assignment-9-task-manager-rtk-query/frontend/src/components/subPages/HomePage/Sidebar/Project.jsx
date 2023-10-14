export default function Project({ label, color, ...props }) {
  return (
    <div className="checkbox-container">
      <input type="checkbox" className={`${color}`} {...props} />
      <p className="label">{label}</p>
    </div>
  );
}
