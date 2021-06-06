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
      <h1 className="text-3xl font-bold">Team Members</h1>
      <ul className="flex flex-col items-center p-6">
        {teamList.map((member) => {
          return (
            <li key={member.fname}>
              <TeamMember member={member} />
            </li>
          );
        })}
      </ul>
      <h2 className="text-2xl p-6">Add a Team Member</h2>
      <Form addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
