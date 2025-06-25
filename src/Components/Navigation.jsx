import { Link } from "react-router-dom";

function Navigation({ setSearch, searchId }) {
  return (
    <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white shadow-md rounded-lg mb-6">
      <form className="w-full sm:w-auto">
        <input
          type="number"
          value={searchId}
          placeholder="Search by Id"
          onChange={(e) => setSearch(parseInt(e.target.value))}
          className="p-2 border border-gray-300 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      <Link
        to="/cart"
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        GO TO CART
      </Link>
    </div>
  );
}

export default Navigation;
