import { Link } from "react-router-dom";
import { useState } from "react";

export default function Settings() {
  const [categories, setCategories] = useState(["Food", "Transport", "Shopping"]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  const handleDelete = (index) => {
    const updated = categories.filter((_, i) => i !== index);
    setCategories(updated);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">⚙️ Settings</h2>
      <p className="text-lg text-gray-700 mb-6">Manage your categories and preferences</p>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📁 Categories</h3>
        
        <ul className="mb-4 space-y-2">
          {categories.map((cat, index) => (
            <li key={index} className="flex justify-between items-center border px-3 py-2 rounded text-gray-700 bg-gray-50">
              {cat}
              <button
                className="text-red-500 hover:text-red-700 font-semibold"
                onClick={() => handleDelete(index)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <input
            className="flex-1 border rounded px-3 py-2"
            type="text"
            placeholder="Add new category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button
            onClick={handleAddCategory}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            ➕ Add
          </button>
        </div>
      </div>

      <Link
        to="/home"
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow"
      >
        ⬅️ Back to Home
      </Link>
    </div>
  );
}
