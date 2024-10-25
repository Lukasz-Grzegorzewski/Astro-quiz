import SocialLinks from "@components/home/SocialLinks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import GeneralStars from "./components/GeneralStars";
import Header from "./components/Header";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Quiz from "./pages/Quiz";
import Savoir from "./pages/Savoir";
import "./css/stars/GeneralStars.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<GeneralStars />
				<Header />
				<Routes>
					<Route>
						<Route path="/" element={<Home />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/savoir" element={<Savoir />} />
						<Route path="/quiz" element={<Quiz />} />
					</Route>
				</Routes>
				<Footer />
				<SocialLinks />
			</BrowserRouter>
		</div>
	);
}

export default App;
