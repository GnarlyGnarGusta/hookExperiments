import React, { useState, useEffect } from "react";
import "./styles.css";
import { useComponentDidMount } from "./hooks";

const Component = () => {
  const componentDidMount = useComponentDidMount();

  useEffect(() => {
    componentDidMount(state => {
      console.log("created", state);
    });
  }, [componentDidMount]);

  return <span>Hey!</span>;
};

export default function App() {
  const [kill, setKill] = useState(true);
  const toggleKill = () => setKill(!kill);

  return (
    <div className="App">
      <h1>Status</h1>
      <h2>{kill ? <Component /> : null}</h2>
      <button onClick={toggleKill} type="button">
        {kill ? "Kill" : "Create"}
      </button>
    </div>
  );
}
