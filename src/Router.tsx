import { createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";
import NotFound from "./screens/NotFound";


const router = createBrowserRouter([
  { 
    path: "/",
    element: <Root />,
    children: [
      {
        path: "coins",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
        errorElement: <NotFound />,
        children: [
          {
            path: "price",
            element: <Price />,
          },
          {
            path: "chart",
            element: <Chart />,
          },
        ],
      },
      
    ],
    errorElement: <NotFound />,
    
  },
  
]);

export default router;
