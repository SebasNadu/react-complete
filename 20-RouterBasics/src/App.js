import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

// Old way to create routes, you have to import Route and createRoutesFromElements from react-router-dom

/* const routedefinitions = createroutesfromelements(
  <route>
    <route path="/" element={<homepage />} />
    <route path="/products" element={<productspage />} />
  </route>
); 
const router = createbrowserrouter(routedefinitions);
*/

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
