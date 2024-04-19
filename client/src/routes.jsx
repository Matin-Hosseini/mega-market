import AdminDashboard from "./pages/AdminDashboard";
import Article from "./pages/Articles";
import ArticleDetail from "./pages/Articles/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserPanel from "./pages/UserPanel";
import WishList from "./pages/WishList";
import Cart from "./pages/cart";
import ProductList from "./pages/products";
import ProductDetail from "./pages/products/Detail";

const routes = [
  { path: "/", element: <Home /> },
  {path: "/login", element: <Login/>},
  { path: "/articles", element: <Article /> },
  { path: "/articles/:articleId", element: <ArticleDetail /> },
  { path: "/products", element: <ProductList /> },
  { path: "/products/:productId", element: <ProductDetail /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishList", element: <WishList /> },
  { path: "/user", element: <UserPanel /> },
  { path: "/admin", element: <AdminDashboard /> },
];

export default routes;
