import "./App.css";
import "./Login.css"
import Navbar from "./components/Navbar";
import Inventory from "./components/Inventory";
import Item from "./components/Item";
import StateContext from "./Shopcontext/stateContext";
import Additem from "./components/Additem";
import Saleshistory from "./components/Saleshistory";
import Graph from "./components/Graph";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsPakistanPoliticsTopHeadlines from "./components/NewsPakistanPoliticsTopHeadlines";
import Newscard from "./components/Newscard";
import News_Nav from "./components/News_Nav"
import Forcast from "./components/Forcast";
function App() {
  return (
    <div>
      <StateContext>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/history"
              element={
                <>
                  <Saleshistory />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/grap"
              element={
                <center>
                  <div style={{ height: "90vh" }}>
                    <Graph />
                  </div>
                </center>
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <>
                  <Signup />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/invent"
              element={
                <div>
                  <Inventory />
                  <Item />
                  <Footer />
                </div>
              }
            />
              <Route
              exact
              path="/News"
              element={
                <>
                <NewsPakistanPoliticsTopHeadlines/>
                <Footer/>
                </>
              }
            />
            <Route
              exact
              path="/home"
              element={
                <>
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route exact path="/Login" element={<><Login /><Footer /></>} />
            <Route
              exact
              path="/additem"
              element={
                <>
                  <Additem />
                  <Inventory />
                  <Footer />
                </>
              }
            />
              <Route
              exact
              path="/Weather"
              element={
                <div >
                  <News_Nav/>
                  <Newscard />
                </div>
              }
            />
             <Route
              exact
              path="/ForcastFivedays"
              element={
                <div >
                  <News_Nav/>
                  <Forcast />
                </div>
              }
            />
          </Routes>
        </Router>
      </StateContext>
    </div>
  );
}

export default App;
