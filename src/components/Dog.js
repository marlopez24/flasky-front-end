import "./Dog.css";
import PropTypes from "prop-types";

const Dog = (props) => {
  const dogName = props.name;
  const dogSpeak = props.speak;
  const dogAge = props.age;
  const dogColor = props.color;
  return (
    <div className="Dog">
      <h3> {dogName} </h3>
      <p> {dogSpeak} </p>
      <p> {dogAge} </p>
      <p> {dogColor} </p>
    </div>
  );
};

Dog.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  speak: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Dog;
