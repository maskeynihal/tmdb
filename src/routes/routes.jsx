import App from "../App";
import endpoints from "./endpoints";
import Home from "../pages/Home/Home";
import SearchPage from "../pages/Home/SearchPage/SearchPage";

const Router = (props) => {
  return [
    {
      path: endpoints.root,
      element: <App />,
      children: [
        {
          path: endpoints.home,
          element: <Home />,
        },
        {
          path: endpoints.search,
          element: <SearchPage />,
        },
      ],
    },
  ];
};

export default Router;
