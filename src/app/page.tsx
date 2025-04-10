"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_CHARACTERS = gql`
  query ($page: Int, $status: String, $species: String) {
    characters(page: $page, filter: { status: $status, species: $species }) {
      info {
        pages
      }
      results {
        id
        name
        image
        status
        species
        gender
        origin {
          name
        }
      }
    }
  }
`;
export default function Home() {
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      status: status || null,
      species: species || null,
    },
  });

  if (loading)
    return (
      <div className="bg-gray-400">
        <p className="text-center text-7xl text-pink-600">Loading...</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
          <path
            fill="none"
            stroke="#FF156D"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="300 385"
            stroke-dashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          >
            <animate
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="2"
              values="685;-685"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animate>
          </path>
        </svg>
      </div>
    );
  if (error)
    return (
      <div className="bg-gray-600 pt-96 pb-96">
        <p className="text-center text-5xl text-red-600">Something happens!</p>
        <p className="text-center text-5xl text-red-600">
          Error fetching characters!
        </p>
      </div>
    );

  return (
    <div className="wrapper90">
      <h2 className="text-center text-6xl">Rick And Morty Characters</h2>
      <label htmlFor="status">Filter by Status</label>
      <select
        onChange={(e) => setStatus(e.target.value)}
        className="my-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <label htmlFor="status">Filter by Species</label>
      <select
        onChange={(e) => setSpecies(e.target.value)}
        className="my-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
      >
        <option value="">All Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
      <label htmlFor="sort">Sort By</label>
      <select
        onChange={(e) => setSortField(e.target.value)}
        className="my-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
      >
        <option value="">No Sorting</option>
        <option value="name">Name</option>
        <option value="origin">Origin</option>
      </select>
      <label htmlFor="sortOrder">Sort Order</label>
      <select
        onChange={(e) => setSortOrder(e.target.value)}
        className="my-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap justify-center">
          {[...data.characters.results]
            .sort((a, b) => {
              if (!sortField) return 0;
              const aValue =
                sortField === "origin"
                  ? a.origin?.name || ""
                  : a[sortField] || "";
              const bValue =
                sortField === "origin"
                  ? b.origin?.name || ""
                  : b[sortField] || "";

              return sortOrder === "asc"
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
            })
            .map((char: any) => (
              <div key={char.id} className="basis-1/4 p-4">
                <div className="rounded-3xl bg-gray-300 text-center">
                  <img
                    src={char.image}
                    alt={char.name}
                    width={350}
                    className="rounded-t-3xl"
                  />
                  <h1 className="text-2xl">{char.name}</h1>
                  <div className="pt-2 pb-4 pl-4">
                    <div className="flex">
                      <p className="items-center justify-center pr-1">
                        Specie:
                      </p>
                      <p
                        className={
                          char.species === "Human"
                            ? "text-orange-600"
                            : "text-green-600"
                        }
                      >
                        {char.species}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="items-center justify-center pr-1">
                        Gender:
                      </p>
                      <p
                        className={
                          char.gender === "Male"
                            ? "text-blue-500"
                            : char.gender === "Female"
                              ? "text-red-500"
                              : "text-gray-400"
                        }
                      >
                        {char.gender}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="items-center justify-center pr-1">
                        Status:
                      </p>
                      <h3
                        className={
                          char.status === "Alive"
                            ? "text-cyan-500"
                            : char.status === "Dead"
                              ? "text-zinc-950"
                              : "text-gray-400"
                        }
                      >
                        {char.status}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {Array.from({ length: data?.characters.info.pages || 1 }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={`rounded px-4 py-2 ${page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
