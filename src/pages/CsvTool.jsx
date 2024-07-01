import React, { useState } from 'react';
import CsvUpload from '../components/CsvUpload';
import EditableTable from '../components/EditableTable';
import CsvDownload from '../components/CsvDownload';

function CsvTool() {
  const [data, setData] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CSV Upload, Edit, and Download Tool</h1>
      <CsvUpload setData={setData} />
      {data.length > 0 && (
        <>
          <EditableTable data={data} setData={setData} />
          <CsvDownload data={data} />
        </>
      )}
    </div>
  );
}

export default CsvTool;