import React, { useEffect } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const DownloadExcel = () => {
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('membersExcel')) || [];

    if (savedData.length === 0) {
      alert('No members found to download.');
      return;
    }

    // Generate Excel file
    const worksheet = XLSX.utils.json_to_sheet(savedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Members');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'members.xlsx');

    // Optional: redirect back after download
    setTimeout(() => {
      window.history.back(); // or navigate to dashboard
    }, 1000);
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>⏳ Preparing Excel file...</p>
    </div>
  );
};

export default DownloadExcel;
