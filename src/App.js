import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        {/* feeds */}
        {/* widget */}
      </div>
    </div>
  );
}
export default App;
