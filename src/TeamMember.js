import React from 'react'

export default function TeamMember(props) {
    const { member } = props;

    return (
        <div className="rounded-lg shadow-lg max-w-lg p-7">
            <h2 className="text-lg text-black font-semibold">{`Name: ${member.fname} ${member.lname}`}</h2>
            <p className="text-gray-500 font-medium">{`Age: ${member.age}`}</p>
            <p className="text-gray-500 font-medium">{`Role: ${member.role}`}</p>
            <p className="text-gray-500 font-medium">{`Email: ${member.email}`}</p>
        </div>
    )
}
