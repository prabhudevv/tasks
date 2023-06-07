import React, { useState } from "react";

const Machine = () => {
  const [machine1, setMachine1] = useState("");
  const [machine2, setMachine2] = useState("");
  const [details, setDetails] = useState(false);
  const [sortedData, setSortedData] = useState("");

  const changeMachine1 = (val1) => {
    setMachine1(val1);
  };

  const changeMachine2 = (val2) => {
    setMachine2(val2);
  };

  const showDetails = (val) => {
    setDetails(val);
  };

  const sortByRam = () => {
    let machine1Data = machine1.split(",")[0].split(" ")[0];
    let machine2Data = machine2.split(",")[0].split(" ")[0];
    if (parseInt(machine1Data) > parseInt(machine2Data)) {
      setSortedData(machine1 + " " + machine2);
    } else {
      setSortedData(machine2 + " " + machine1);
    }
  };

  const sortByDisk = () => {
    let machine1Data = machine1.split(",")[0].split(" ")[1];
    let machine2Data = machine2.split(",")[0].split(" ")[1];
    if (parseInt(machine1Data) > parseInt(machine2Data)) {
      setSortedData(machine1 + " " + machine2);
    } else {
      setSortedData(machine2 + " " + machine1);
    }
  };

  return (
    <>
      <div>
        {details ? (
          <>
            <h5>machine1: {machine1}</h5>
            <h5>machine2: {machine2}</h5>
          </>
        ) : (
          null
        )}
        <h3>Sorted Data: {sortedData}</h3>
        <input
          type="text"
          name="machine1"
          onChange={(e) => changeMachine1(e.target.value)}
        />
        <input
          type="text"
          name="machine2"
          onChange={(e) => changeMachine2(e.target.value)}
        />
        <button onClick={(e) => showDetails(!details)}>Details</button>
        <button onClick={(e) => sortByRam()}>Sort by RAM</button>
        <button onClick={(e) => sortByDisk()}>Sort by Harddisk</button>
      </div>
    </>
  )
}

export default Machine;