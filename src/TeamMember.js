import React from 'react'

export default function TeamMember(props) {
    const { member } = props;

    return (
        <div className="team-member" >
            <h2>{`Name: ${member.fname} ${member.lname}`}</h2>
            <p>{`Age: ${member.age}`}</p>
            <p>{`Role: ${member.role}`}</p>
            <p>{`Email: ${member.email}`}</p>
        </div>
    )
}
