import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-100 to-emerald-100 flex flex-col">
      {/* ✅ Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
          💰 My Finance
        </h1>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-700 font-semibold hover:text-emerald-600 transition">🏠 Home</Link>
          <Link to="/add" className="text-gray-700 font-semibold hover:text-emerald-600 transition">➕ Add</Link>
          <Link to="/reports" className="text-gray-700 font-semibold hover:text-emerald-600 transition">📊 Reports</Link>
          <Link to="/settings" className="text-gray-700 font-semibold hover:text-emerald-600 transition">⚙️ Settings</Link>
        </div>
      </nav>

      {/* ✅ Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
          <h1 className="text-5xl font-extrabold text-emerald-600 mb-4 drop-shadow-sm">
            🏦 Finance Overview
          </h1>
          <p className="text-2xl text-gray-700 font-medium mb-8">
            💸 Balance: <span className="font-bold text-emerald-500">₹50,000</span>
          </p>

          <Link
            to="/add"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
          >
            ➕ Add Transaction
          </Link>
        </div>
      </div>

      {/* ✅ Footer */}
      <footer className="text-sm text-gray-500 py-4 text-center">
        Track your expenses and grow smarter with every rupee. 🚀
      </footer>
    </div>
  );
}
