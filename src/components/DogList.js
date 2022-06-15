import React from "react";
import "./DogList.css";
import Dog from "./Dog";
import PropTypes from "prop-types";

const DogList = (props) => {
  const dogData = props.dogData;
  const dogComponents = [];

  for (const dog of dogData) {
    dogComponents.push(
      <Dog
        key={dog.id}
        id={dog.id}
        name={dog.name}
        speak={dog.speak}
        age={dog.age}
        color={dog.color}
      />
    );
  }
  return (
    <div>
      <h2 className="dogList">This is my super amazing list of cute dogs</h2>
      {dogComponents}
    </div>
  );
};

DogList.propTypes = {
  dogData: PropTypes.array.isRequired,
};
export default DogList;
