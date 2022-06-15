import "./Dog.css";

const Dog = () => {
  const DogName = "Kiki";
  const DogSpeak = "Woof";
  return (
    <div className="Dog">
      <h3> {DogName} </h3>
      <p> {DogSpeak} </p>
    </div>
  );
};

export default Dog;
