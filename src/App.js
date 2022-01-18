import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useStore } from "react-redux";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          {/* widget */}
        </div>
      )}
    </div>
  );
}
export default App;
