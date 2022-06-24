import React from "react";
import "./DogList.css";
import Dog from "./Dog";
import PropTypes from "prop-types";

const DogList = ({ dogData, setDogAgeCallback, deleteDogCallBack }) => {
  // const dogData = props.dogData;
  // const dogComponents = [];

  // for (const dog of dogData) {
  //   dogComponents.push(
  //     <Dog
  //       key={dog.id}
  //       id={dog.id}
  //       name={dog.name}
  //       speak={dog.speak}
  //       age={dog.age}
  //       color={dog.color}
  //     />
  //   );
  const dogComponents = dogData.map((dog) => (
    <Dog
      key={dog.id}
      id={dog.id}
      name={dog.name}
      speak={dog.speak}
      age={dog.age}
      color={dog.color}
      setDogAgeCallback={setDogAgeCallback}
      deleteDogCallBack={deleteDogCallBack}
      //this above is a prop that is passed down but it is not passed from the dog object
      //therefore we do not need to use dog.setDogAgeCallBack
    />
  ));

  return (
    <div>
      <h2 className="dogList">This is my super amazing list of cute dogs</h2>
      {dogComponents}
    </div>
  );
};

DogList.propTypes = {
  dogData: PropTypes.array.isRequired,
  setDogAgeCallback: PropTypes.func.isRequired,
  deleteDogCallBack: PropTypes.func.isRequired,
};
export default DogList;
