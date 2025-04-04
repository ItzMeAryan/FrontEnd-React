import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AddTransaction() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Transaction added:\n₹${amount} as ${type}\n📝 Note: ${note}\n📅 Date: ${date}`);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-cyan-100 flex flex-col">
      {/* ✅ Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
          💰 My Finance
        </h1>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-700 font-semibold hover:text-indigo-700 transition">🏠 Home</Link>
          <Link to="/add" className="text-gray-700 font-semibold hover:text-indigo-700 transition">➕ Add</Link>
          <Link to="/reports" className="text-gray-700 font-semibold hover:text-indigo-700 transition">📊 Reports</Link>
          <Link to="/settings" className="text-gray-700 font-semibold hover:text-indigo-700 transition">⚙️ Settings</Link>
        </div>
      </nav>

      {/* ✅ Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="bg-white bg-opacity-70 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">
            ➕ Add Transaction
          </h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Amount */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">💰 Amount (₹)</label>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none text-lg"
              />
            </div>

            {/* Type */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">📊 Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none text-lg"
              >
                <option value="expense">💸 Expense</option>
                <option value="income">💵 Income</option>
              </select>
            </div>

            {/* Note */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">📝 Note</label>
              <input
                type="text"
                placeholder="E.g. Grocery, Salary, etc."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none text-lg"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">📅 Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none text-lg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
            >
              ✅ Save Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
