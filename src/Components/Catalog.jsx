function Catalog({ data, addCart, searchId }) {
  const filterdata = searchId
    ? data.filter((row) => row.id === searchId)
    : data;

  return (
    <>
      {filterdata.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterdata.map((row) => (
            <div
              key={row.id}
              className="p-4 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{row.name}</h2>
              <h3 className="text-gray-600 mb-1">Id: {row.id}</h3>
              <h4 className="text-green-600 font-bold mb-3">₹ {row.price}</h4>
              <button
                disabled={row.added}
                onClick={() => addCart(row.id)}
                className={`w-full px-4 py-2 rounded-md text-white font-medium transition ${
                  row.added
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {row.added ? "Added" : "Add To Cart"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-lg text-red-500 font-medium mt-6">
          No product with this ID
        </h2>
      )}
    </>
  );
}

export default Catalog;
