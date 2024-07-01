import React from 'react';

function EditableTable({ data, setData }) {
  const handleCellChange = (rowIndex, columnId, value) => {
    const updatedData = [...data];
    updatedData[rowIndex][columnId] = value;
    setData(updatedData);
  };

  const handleAddRow = () => {
    const newRow = Object.keys(data[0]).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    setData([...data, newRow]);
  };

  const handleRemoveRow = (rowIndex) => {
    const updatedData = data.filter((_, index) => index !== rowIndex);
    setData(updatedData);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {Object.keys(data[0]).map((columnId) => (
              <th key={columnId} className="px-4 py-2 border-b">
                {columnId}
              </th>
            ))}
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((columnId) => (
                <td key={columnId} className="px-4 py-2 border-b">
                  <input
                    type="text"
                    value={row[columnId]}
                    onChange={(e) => handleCellChange(rowIndex, columnId, e.target.value)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
              ))}
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => handleRemoveRow(rowIndex)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleAddRow}
        className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
      >
        Add Row
      </button>
    </div>
  );
}

export default EditableTable;