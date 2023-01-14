import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/userContext";
import "react-toastify/dist/ReactToastify.css";
import { SchedulesProvider } from "./contexts/schedulesContext";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <UserProvider>
        <SchedulesProvider>
          <RoutesMain />
        </SchedulesProvider>
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
