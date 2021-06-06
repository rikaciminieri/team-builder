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
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <label>
        First Name
        <input
          type="text"
          name="fname"
          value={member.fname}
          onChange={onChange}
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          required
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lname"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          value={member.lname}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Age
        <input
          type="number"
          name="age"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          value={member.email}
          onChange={onChange}
          required
        />
      </label>
      <input type="Submit" value="Add to Team" className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" />
    </form>
  );
}
