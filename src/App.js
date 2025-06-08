import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes.js";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <Layout>
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoutes />
    </Layout>
  );
}

export default App;
