import React, { useState } from "react";

const initialTeamMember = {
  fname: "",
  lname: "",
  age: "",
  role: "",
  email: "",
};

export default function Form({ addTeamMember }) {
  const [member, setMember] = useState(initialTeamMember);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTeamMember(member);
    setMember(initialTeamMember);
  };

  const onChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input
          type="text"
          name="fname"
          value={member.fname}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lname"
          value={member.lname}
          onChange={onChange}
          required
        />
      </label>
      <label>
        {" "}
        Age
        <input
          type="number"
          name="age"
          value={member.age}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Role
        <input
          type="text"
          name="role"
          value={member.role}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={member.email}
          onChange={onChange}
          required
        />
      </label>
      <input type="Submit" value="Add to Team" />
    </form>
  );
}
