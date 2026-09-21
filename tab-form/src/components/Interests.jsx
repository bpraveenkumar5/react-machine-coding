import React from "react";
import "./Interests.css";

const Interests = ({ data, setData }) => {
  const { interests = [] } = data;

  const handleDataChange = (e) => {
  const { name, checked } = e.target;

  setData((prevState) => ({
    ...prevState,
    interests: checked
      ? [...(prevState.interests || []), name]
      : (prevState.interests || []).filter((item) => item !== name),
  }));
};

  return (
    <div className="interests-container">
      <h2>Interests</h2>

      <label>
        <input
          type="checkbox"
          name="coding"
          checked={interests.includes("coding")}
          onChange={handleDataChange}
        />
        Coding
      </label>

      <label>
        <input
          type="checkbox"
          name="reading"
          checked={interests.includes("reading")}
          onChange={handleDataChange}
        />
        Reading
      </label>

      <label>
        <input
          type="checkbox"
          name="traveling"
          checked={interests.includes("traveling")}
          onChange={handleDataChange}
        />
        Traveling
      </label>

      <label>
        <input
          type="checkbox"
          name="music"
          checked={interests.includes("music")}
          onChange={handleDataChange}
        />
        Music
      </label>

      <label>
        <input
          type="checkbox"
          name="sports"
          checked={interests.includes("sports")}
          onChange={handleDataChange}
        />
        Sports
      </label>
    </div>
  );
};

export default Interests;