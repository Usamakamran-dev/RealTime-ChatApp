import router from "./routes/AppRoutes";
import { RouterProvider } from "react-router-dom";
import CurrentUserProvider from "./context/CurrentUserProvider";

function App() {
  return (
    <>
    <CurrentUserProvider>
    <RouterProvider router={router}> </RouterProvider>
    </CurrentUserProvider>
    </>
  )}

export default App;
