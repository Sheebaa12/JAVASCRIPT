import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">

        {/* Form Card */}
        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">

          {/* Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded"
            >
              🌙 Toggle
            </button>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Signup Form
          </h2>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            />

            {/* Gender */}
            <div className="flex items-center gap-4 text-gray-700 dark:text-white">
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" /> Male
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" /> Female
              </label>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 text-gray-700 dark:text-white">
              <input type="checkbox" required />
              <span>I agree to terms</span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                Form Submitted 🎉
              </h2>

              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
