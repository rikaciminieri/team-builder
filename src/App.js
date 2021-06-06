import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import TeamMember from "./TeamMember";

function App() {
  const initialTeamMember = {
    fname: "Rika",
    lname: "Ciminieri",
    age: "23",
    role: "CEO",
    email: "rciminieri@rika.com",
  };

  const [teamList, setTeamList] = useState([initialTeamMember]);

  const addTeamMember = (teamMember) => {
    const newTeamList = [...teamList, teamMember];
    setTeamList(newTeamList);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <ul>
        {teamList.map((member) => {
          return (
            <li key={member.fname}>
              <TeamMember member={member} />
            </li>
          );
        })}
      </ul>
      <Form addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
