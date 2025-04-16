import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const DataTable = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
  });

  return (
    <div className="mx-auto max-w-md md:max-w-11/12 border-1 border-teal-700">
      <div className="p-2">
        <div className="flex justify-end py-4 relative">
          <span className="absolute inset-y-0 right-1/6 flex items-center">
            <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <input
            placeholder="Filter emails..."
            value={table.getColumn("email")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="w-auto border-b-1 border-[#ddd] px-2 py-1 hover:border-[#abc]  focus-visible:outline-none focus-visible:outline-stone-500 pl-7 pr-1"
          />
          {table.getColumn("email")?.getFilterValue() ? (
            <span
              className="cursor-pointer absolute inset-y-0 right-2 flex items-center"
              onClick={() => {
                table.getColumn("email")?.setFilterValue("");
              }}
            >
              x
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="w-full overflow-auto">
          <table className="w-full border border-[#ddd] rounded-sm">
            <thead className="bg-[#4f5252] text-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr className="border-b-1 border-b-[#ddd]" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <>
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className="px-2 py-2 font-light"
                      >
                        {header.isPlaceholder ? null : (
                          <div className="flex items-center ">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {
                              {
                                asc: (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="bi bi-arrow-up"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M8 2 3 7h3v7h4V7h3z" />
                                  </svg>
                                ),
                                desc: (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="bi bi-arrow-down"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M8 14 3 9h3V2h4v7h3z" />
                                  </svg>
                                ),
                              }[header.column.getIsSorted() ?? null]
                            }
                          </div>
                        )}
                      </th>
                    </>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b-1 border-b-[#ddd] align-middle odd:bg-white even:bg-gray-100"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-2 align-middle">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="block md:flex lg:flex xl:flex items-center my-3 justify-between">
          <div className="flex items-center order-2 md:order-1">
            <p className="mb-0 me-2 font-bold">Rows per page</p>
            <select
              className="px-2 py-1 border-stone-400 border rounded-sm w-auto focus:border focus:border-stone-500 hover:border-stone-500 hover:border focus-visible:outline-1 focus-visible:outline-stone-500"
              aria-label="Default select example"
              value={table.getState().pagination.pageSize}
              onChange={(event) => {
                table.setPageSize(Number(event.target.value));
              }}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center order-1 md:order-2">
            <strong className="mx-2">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount().toLocaleString()}
            </strong>
            <button
              className="mx-1 px-3 py-2 border-stone-400 border rounded-sm w-auto focus:border focus:border-stone-500 hover:border-stone-500 hover:border focus-visible:outline-1 focus-visible:outline-stone-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none cursor-pointer"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-double-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
                <path
                  fillRule="evenodd"
                  d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
            </button>
            <button
              className="mx-1 px-3 py-2 border-stone-400 border rounded-sm w-auto focus:border focus:border-stone-500 hover:border-stone-500 hover:border focus-visible:outline-1 focus-visible:outline-stone-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none cursor-pointer"
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
            </button>
            <button
              className="mx-1 px-3 py-2 border-stone-400 border rounded-sm w-auto focus:border focus:border-stone-500 hover:border-stone-500 hover:border focus-visible:outline-1 focus-visible:outline-stone-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none cursor-pointer"
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
            <button
              className="mx-1 px-3 py-2 border-stone-400 border rounded-sm w-auto focus:border focus:border-stone-500 hover:border-stone-500 hover:border focus-visible:outline-1 focus-visible:outline-stone-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none cursor-pointer"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-double-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
