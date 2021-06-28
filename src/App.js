import React,{ useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from "./pages/Profile/Profile";
import MyNotes from "./pages/MyNotes/MyNotes";
import SingleNote from "./pages/SingleNote/SingleNote";
import CreateNote from "./pages/SingleNote/CreateNote";
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
    <Header setSearch={(s) => setSearch(s)} />
    <main className="App">
      <Route path="/" component={Landing} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route
        path="/mynotes"
        component={({ history }) => (
          <MyNotes search={search} history={history} />
        )}
      />
      <Route path="/note/:id" component={SingleNote} />
      <Route path="/createnote" component={CreateNote} />;
      <Route path="/profile" component={Profile} />
    </main>
    <Footer />
  </Router>
  );
}

export default App;
