import { useState } from "react";
import "./styles.css"

const SearchBar = ({ getUserData }) => {
  const [userInput, setUserInput] = useState("");   //Where the input the user types is saved

    // send this data to parent component
    function handleClick() {
      getUserData(userInput);
    }
  
    // sets the user input to current search value and sets the error to false.
    function updateInput(e) {
      setUserInput(e.target.value);
    }
  
    return (
      <div className="searchbar-container">
        <div className="search-container">
          <input
            type="text"
            value={userInput}
            onChange={(e) => updateInput(e)}
            placeholder="Search a GitHub username..."
            className="user-input"
          />
        <button className="search-btn" onClick={handleClick}>
          Search
        </button>
        </div>
      </div>
    );
  };

  export default SearchBar