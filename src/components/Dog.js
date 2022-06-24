import "./Dog.css";
import PropTypes from "prop-types";
import { useState } from "react";
import React from "react";

const Dog = (props) => {
  //to update the age by 1
  // const [dogAge, setDogAge] = useState(props.age);
  //to update the dog to be able to speak -makes a type text box
  const [dogSpeak, setDogSpeak] = useState(props.speak);
  //as we use each variable to use with a state, we take away the variables below
  const dogName = props.name;
  // const dogSpeak = props.speak;
  const dogAge = props.age;
  const dogColor = props.color;
  // you can use this function below and then pass makeDogOlder instead,
  //but can use the function for the setDogAgeCallback instead of writing it out
  // this one actually is reponsible for updating the age by 1
  // const makeDogOlder = () => {
  //   // setDogAge(dogAge + 1);
  //   props.setDogAgeCallback(props.id);
  // };
  //this one makes it so that you're able to update the text box to "speak"
  const changeDogSpeak = (event) => {
    let newSpeak = event.target.value;
    if (newSpeak === "") {
      newSpeak = "Hello!";
    }
    // this part at the start of the if statment is not necessary unless i want to have a placeholder/starting value
    setDogSpeak(newSpeak);
  };

  return (
    <div className="Dog">
      <h3> {dogName} </h3>
      <p> {dogSpeak} </p>
      <p>
        Change Speak: <input type="text" onChange={changeDogSpeak} />
      </p>

      <p>
        {dogAge}
        <button onClick={() => props.setDogAgeCallback(props.id)}>🐶</button>
        {/* <button onClick={makeDogOlder}>🐶</button> */}
        {/*this anonymous function above calls the setDogAge function*/}
        {/* so you can use the button above with the function inside or  */}
        {/* use the function created above for makeDogOlder */}

        {
          <button onClick={() => props.deleteDogCallBack(props.id)}>
            Delete
          </button>
        }
      </p>

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
  setDogAgeCallback: PropTypes.func.isRequired,
  deleteDogCallBack: PropTypes.func.isRequired,
};

export default Dog;
