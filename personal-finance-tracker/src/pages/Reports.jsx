import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useState } from "react";

export default function Reports() {
  // Dummy data (replace with actual values if needed)
  const [totalIncome] = useState(80000);
  const [totalExpense] = useState(30000);
  const savings = totalIncome - totalExpense;

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("📊 Finance Report", 14, 20);
    doc.setFontSize(12);

    doc.autoTable({
      head: [["Type", "Amount (₹)"]],
      body: [
        ["Income", totalIncome],
        ["Expense", totalExpense],
        ["Savings", savings],
      ],
      startY: 30,
    });

    doc.save("Finance_Report.pdf");
  };

  const exportExcel = () => {
    const data = [
      { Type: "Income", Amount: totalIncome },
      { Type: "Expense", Amount: totalExpense },
      { Type: "Savings", Amount: savings },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(file, "Finance_Report.xlsx");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col">
      
      {/* ✅ Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">💰 My Finance</h1>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-700 font-semibold hover:text-blue-800 transition">🏠 Home</Link>
          <Link to="/add" className="text-gray-700 font-semibold hover:text-blue-800 transition">➕ Add</Link>
          <Link to="/reports" className="text-gray-700 font-semibold hover:text-blue-800 transition">📊 Reports</Link>
          <Link to="/settings" className="text-gray-700 font-semibold hover:text-blue-800 transition">⚙️ Settings</Link>
        </div>
      </nav>

      {/* ✅ Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">📊 Financial Reports</h2>
        <p className="text-lg text-gray-700 mb-6">Here's a summary of your finances:</p>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4 text-center">
          <div className="text-xl">
            <strong>💰 Total Income:</strong> ₹{totalIncome}
          </div>
          <div className="text-xl">
            <strong>💸 Total Expense:</strong> ₹{totalExpense}
          </div>
          <div className="text-xl">
            <strong>💼 Savings:</strong> ₹{savings}
          </div>
        </div>

        {/* Export Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={exportPDF}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow"
          >
            📄 Export as PDF
          </button>
          <button
            onClick={exportExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow"
          >
            📊 Export as Excel
          </button>
        </div>

        <Link
          to="/home"
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow"
        >
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
}
