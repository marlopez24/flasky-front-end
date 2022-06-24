// import logo from "./logo.svg";
import "./App.css";
import DogList from "./components/DogList";
// import Dog from "./components/Dog";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // i dont think this one is necessary, this one was to show that the buttons couldnt be overwritten
  //it makes a hello button at the top of the page in the header that adds an extra exclamation point
  // const [placeHolder, setPlaceHolder] = useState("Hello");
  const dogData = [
    {
      id: 1,
      name: "Kiki the Dog",
      speak: "Woof",
      age: 4,
      color: "Light brown",
    },
    { id: 2, name: "Canelo", speak: "Ruuf", age: 2, color: "Brown" },
  ];
  // we use dogData as our starting state in useState
  const [dogs, setDogs] = useState(dogData);

  useEffect(() => {
    axios
      .get("The url for the API goes here/dogs")
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.log("Oh Noes Oh noes!");
      });
  }, []);

  // const handleAppClick = () => {
  //   setPlaceHolder(placeHolder + "!");
  // };

  //this is to delete one dog
  //the filter makes it so that it updates after it deletes one dog with a particular ID
  //it updates and gives back a new list or "filtered" list with all dogs except the deleted one
  const deleteDog = (id) => {
    console.log("delete", id);

    axios
      .delete("url path to delete with endpoint which is id/dogs/${id}")
      .then((response) => {
        const newDogs = dogs.filter((dog) => dog.id !== id);
        setDogs(newDogs);
      })
      .catch((error) => {
        console.log("Unable to delete dog");
      });
    // const newDogs = dogs.filter((dog) => dog.id !== id);
    // setDogs(newDogs);
  };

  //this is the function that we are going to pass down as a prop
  const setDogAge = (id) => {
    console.log("inside setDogAge", id);
    //create a copy of dogs- use the dogs from the hook above to create a copy of array
    const olderDogs = [...dogs];
    // increase the age of dog with id
    for (let dog of olderDogs) {
      if (dog.id === id) {
        dog.age += 1;
      }
    }
    //call setDogs to update dogs array
    setDogs(olderDogs);
  };

  //using with axios put request

  const setDogAge = (id) => {
    console.log("inside setDogAge", id);
    const olderDogs = [...dogs];

    let targetDog;
    for (let dog of olderDogs) {
      if (dog.id === id) {
        targetDog = dog;
      }
    }

    axios
      .put(
        "url path with the endpoints needed for put request/dogs/${targetDog.id}",
        {
          name: targetDog.name,
          age: targetDog.age + 1,
          color: targetDog.color,
          speak: targetDog.speak,
        }
      )
      .then((response) => {
        targetDog.age += 1;
        setDogs(olderDogs);
      })
      .catch((error) => {
        console.log("couldnt set dog age older");
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Otters Flasky</h1>
      </header>
      {/* <button onClick={handleAppClick}>{placeHolder}</button> */}
      <main>
        <DogList
          dogData={dogs}
          setDogAgeCallback={setDogAge}
          deleteDogCallBack={deleteDog}
        />
        {/* <DogList dogData={dogData2} /> */}
        {/*we need to use the dogs array from use state because this is the thing that is bbeing changed with state and NOT use dogData cause it will be unchanged*/}
      </main>
    </div>
  );
}

export default App;
