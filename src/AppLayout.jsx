import Cart from "./Components/Cart";
import Catalog from "./Components/Catalog";
import Navigation from "./Components/Navigation";

function AppLayout({ setSearch, searchId, data, addCart }) {
  return (
    <div>
      <Navigation setSearch={setSearch} searchId={searchId} />
      <Catalog data={data} addCart={addCart} searchId={searchId} />
    </div>
  );
}

export default AppLayout;
