export default function Member({ name, src }) {
  return (
    <div className="checkbox-container">
      <img src={src} className="team-avater" alt={name} />
      <p className="label">{name}</p>
    </div>
  );
}
