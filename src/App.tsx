import { useRoutes } from "react-router";
import routes from "./routes/routes";
import Layout from "./components/Layout/layout";


function App() {
  const router = useRoutes(routes);

  return (
    <Layout>
          {router}
    </Layout>
  );
}

export default App;
