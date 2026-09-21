import { useState } from "react";
import "./TabForm.css";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabForm = () => {
    const [data, setData] = useState({
        name:"praveen",
        age: "10",
        email:"praveen@example.com",
        interests :[],
        theme: "dark"
    });

    const [errors, setError] = useState({
        name: "Name is required",
        age: "Age is required ",
        email: "Email is required",
    });
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Profile", component: Profile },
    { name: "Interests", component: Interests },
    { name: "Settings", component: Settings },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () =>{
    setActiveTab((prev) => prev+1);
  }

  const handlePrevClick = () =>{
    setActiveTab((prev) => prev-1);
  }

  const handleSubmitClick = () =>{
  console.log("Form submitted with data:", data);
}

  return (
    <>
      <div className="heading-container">
        {tabs.map((t, index) => (
  <div
    key={t.name}
    className={`heading ${activeTab === index ? "active" : ""}`}
    onClick={() => setActiveTab(index)}
  >
    {t.name}
  </div>
))}
      </div>

      <div className="tab-content">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>

      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length -1 && <button onClick={handleNextClick}>Next</button>}
        {activeTab === tabs.length -1 && <button onClick={handleSubmitClick}>Submit</button>}
      </div>
    </>
  );
};

export default TabForm;