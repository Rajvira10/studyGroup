import type { NextPage } from "next";
import Navbar from "../Components/Navbar";
import Style from "../styles/StudyGroups.module.css";
import { Typography } from "@mui/material";
import BasicCard from "../Components/BasicCard";
import PaginationGroup from "../Components/Pagination";
import { useState } from "react";

let StudyGroupsList: Array<any> = [
  {
    id: 1,
    name: "Study Group 1",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
      {
        name: "Jane Doe",
        email: "janedoe@email.com",
        role: "Member",
      },
    ],
  },
  {
    id: 2,
    name: "Study Group 2",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
    ],
  },
  {
    id: 3,
    name: "Study Group 1",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
      {
        name: "Jane Doe",
        email: "janedoe@email.com",
        role: "Member",
      },
    ],
  },
  {
    id: 4,
    name: "Study Group 2",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
    ],
  },
  {
    id: 5,
    name: "Study Group 1",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
      {
        name: "Jane Doe",
        email: "janedoe@email.com",
        role: "Member",
      },
    ],
  },
  {
    id: 6,
    name: "Study Group 2",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
    ],
  },
  {
    id: 7,
    name: "Study Group 1",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
      {
        name: "Jane Doe",
        email: "janedoe@email.com",
        role: "Member",
      },
    ],
  },
  {
    id: 8,
    name: "Study Group 2",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
    ],
  },
  {
    id: 9,
    name: "Study Group 1",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
      {
        name: "Jane Doe",
        email: "janedoe@email.com",
        role: "Member",
      },
    ],
  },
  {
    id: 10,
    name: "Study Group 2",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
    ],
  },
  {
    id: 11,
    name: "Study Group 1",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
      {
        name: "Jane Doe",
        email: "janedoe@email.com",
        role: "Member",
      },
    ],
  },
  {
    id: 12,
    name: "Study Group 2",
    description: "This is a study group",
    members: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        role: "Member",
      },
    ],
  },
];

export const data = {
  getData: ({ from, to }: any) => {
    return new Promise((resolve, reject) => {
      const data = StudyGroupsList.slice(from, to);
      resolve({
        count: StudyGroupsList.length,
        data: data,
      });
    });
  },
};

const StudyGroups: NextPage = () => {
  const [groups, setGroups] = useState([]);

  return (
    <>
      <Navbar />
      <div className={Style.container}>
        <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
          Study Groups
        </Typography>
        <div className={Style.cards}>
          {groups.map((studygroup: any) => (
            <BasicCard key={studygroup.id} studygroup={studygroup} />
          ))}
        </div>
        <PaginationGroup setGroups={(p) => setGroups(p)} />
      </div>
    </>
  );
};

export default StudyGroups;
