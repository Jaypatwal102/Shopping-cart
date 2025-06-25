import { Link } from "react-router-dom";
function Cart({ cart, handleQuantity, handleDelete }) {
  return (
    <>
      {cart.length > 0 ? (
        <div className="space-y-6">
          {cart.map((r) => (
            <div
              key={r.id}
              className="p-4 bg-white rounded-xl shadow-md border flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
            >
              <div>
                <h2 className="text-xl font-semibold">{r.name}</h2>
                <h3 className="text-gray-600">ID: {r.id}</h3>
                <h4 className="text-green-600 font-bold">₹ {r.price}</h4>
              </div>

              <div className="flex items-center gap-4">
                <button
                  disabled={r.quantity === 1}
                  onClick={() => handleQuantity(r.id, r.quantity - 1)}
                  className={`px-3 py-1 text-white rounded-md text-lg ${
                    r.quantity === 1
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  -
                </button>
                <h3 className="text-lg font-medium">{`Qty: ${r.quantity}`}</h3>
                <button
                  onClick={() => handleQuantity(r.id, r.quantity + 1)}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg"
                >
                  +
                </button>
                <button
                  onClick={() => handleDelete(r.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-blue-700 text-white rounded-md text-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <Link
            to="/checkout"
            className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-md text-center font-semibold hover:bg-green-700 transition"
          >
            CheckOut
          </Link>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-xl text-gray-600">Add some products to cart</h2>
        </div>
      )}
    </>
  );
}
export default Cart;
