import React from 'react';
import Papa from 'papaparse';

function CsvDownload({ data }) {
  const handleDownload = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'edited_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 mt-4 text-white bg-green-500 rounded"
    >
      Download CSV
    </button>
  );
}

export default CsvDownload;