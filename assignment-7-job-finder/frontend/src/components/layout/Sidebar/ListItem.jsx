export default function ListItem({ text, color, id, ...props }) {
  return (
    <li className="sub-menu space-x-1 cursor-pointer" id={id} {...props}>
      <i className={`fa-solid fa-stop !text-[${color}]`}></i>
      <span>{text}</span>
    </li>
  );
}
