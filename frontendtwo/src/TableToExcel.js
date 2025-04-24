import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const TableToExcel = () => {
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 25 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 30 },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 22 },
  ];

  const exportToExcel = () => {
    // Step 1: Convert JSON to worksheet
    const worksheet = XLSX.utils.json_to_sheet(tableData);

    // Step 2: Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

    // Step 3: Write the workbook to a binary array
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    // Step 4: Save the file using file-saver
    const data = new Blob([excelBuffer], {
      type: 'application/octet-stream',
    });
    saveAs(data, 'UsersData.xlsx');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Table</h2>

      <table className="border w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={exportToExcel}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Export to Excel
      </button>
    </div>
  );
};

export default TableToExcel;
