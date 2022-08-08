import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import ProfillePage from "./pages/ProfillePage/ProfillePage"
import BackgroundWeatherPage from "./pages/WeatherPage/WeatherPage";
import "./App.css"
import TodoApp from "./pages/TodoApplication/TodoApp";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
    return (
      <Router>
        <nav className="navbar">
          <Link to="/" className="HomeNav"> Home</Link>
          <Link to="/ProfillePage" className="profile">Profile Page</Link>
          <Link to="/WeatherPage" className="weather">Weather</Link>
          <Link to="/TodoApp" className="todoApp">To Do Application</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProfillePage" element={<ProfillePage />} />
          <Route path="/WeatherPage" element={<BackgroundWeatherPage />} />
          <Route path="/TodoApp" element={<TodoApp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );
}

export default App