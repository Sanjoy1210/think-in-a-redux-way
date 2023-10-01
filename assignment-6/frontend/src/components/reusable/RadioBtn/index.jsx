import PropTypes from 'prop-types';

export default function RadioBtn({ name, id, title, ...props }) {
  return (
    <div>
      <input type="radio" name={name} id={id} className="radio" {...props} />
      <label htmlFor={id}>{title}</label>
    </div>
  );
}

RadioBtn.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
