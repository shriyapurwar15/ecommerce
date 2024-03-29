import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));

// Admin Routes Importing
const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const Products = lazy(() => import("./pages/admin/products"));
const Customers = lazy(() => import("./pages/admin/customers"));
const Transaction = lazy(() => import("./pages/admin/transaction"));
const Barcharts = lazy(() => import("./pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("./pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("./pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/admin/apps/toss"));
const NewProduct = lazy(() => import("./pages/admin/management/newproduct"));
const ProductManagement = lazy(() =>
  import("./pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(() =>
  import("./pages/admin/management/transactionmanagement")
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

const AdminRoutes = () => {
  return (
    <>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="product" element={<Products />} />
      <Route path="customer" element={<Customers />} />
      <Route path="transaction" element={<Transaction />} />
      {/* Charts */}
      <Route path="chart/bar" element={<Barcharts />} />
      <Route path="chart/pie" element={<Piecharts />} />
      <Route path="chart/line" element={<Linecharts />} />
      {/* Apps */}
      <Route path="app/coupon" element={<Coupon />} />
      <Route path="app/stopwatch" element={<Stopwatch />} />
      <Route path="app/toss" element={<Toss />} />
      {/* Management */}
      <Route path="product/new" element={<NewProduct />} />
      <Route path="product/:id" element={<ProductManagement />} />
      <Route
        path="transaction/:id"
        element={<TransactionManagement />}
      />
    </>
  );
};

export default App;
