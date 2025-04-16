import React, { useMemo } from "react";
import mockData from "../../data/mock_data.json";
import Header from "../components/Header";
import Hero from "../components/Hero";
import DataTable from "../components/Table/DataTable";

const Home = () => {
  const data = useMemo(() => mockData, []);

  const columns = [
    {
      accessorKey: "id",
      footer: "ID",
      header: ({ column }) => {
        return (
          <button
            className="flex items-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Id
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
              />
            </svg>
          </button>
        );
      },
      meta: { filterKey: "id", filterVariant: "number" },
    },
    {
      header: "Name",
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
      meta: { filterKey: "name" },
    },
    {
      accessorKey: "first_name",
      header: "First name",
      footer: "First name",
      meta: { filterKey: "first_name" },
    },
    {
      accessorKey: "last_name",
      header: "Last name",
      footer: "Last name",
      meta: { filterKey: "last_name" },
    },
    {
      accessorKey: "email",
      header: "Email",
      footer: "Email",
      meta: { filterKey: "email" },
    },
    {
      accessorKey: "gender",
      header: "Gender",
      footer: "Gender",
    },
    {
      accessorKey: "age",
      header: "Age",
      footer: "Age",
      meta: { filterKey: "age", filterVariant: "number" },
    },
  ];
  return (
    <>
      <Header />
      <Hero />
      <DataTable data={data} columns={columns} />
    </>
  );
};

export default Home;
