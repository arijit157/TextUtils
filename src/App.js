import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [switchTextColor, setSwitchTextCOlor] = useState("dark");
  const [switchText, setSwitchText] = useState("dark");
  const [alert, setAlert] = useState(null);

  let showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  let toggleDayDarkMode = () => {
    if (mode === "dark") {
      setMode("light");
      setSwitchTextCOlor("dark");
      setSwitchText("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled!", "success");
      document.title = "TextUtils | Light Mode";
    }
    else {
      setMode("dark");
      setSwitchTextCOlor("light");
      setSwitchText("light");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled!", "success");
      document.title = "TextUtils | Dark Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar logo="TextUtils" about="About Us" mode={mode} toggleMode={toggleDayDarkMode} switchTextColor={switchTextColor} switchText={switchText} />
        <Alert alert={alert} />
        {/* <Router> */}
        <Routes>
          <Route exact path='/' element={<Textarea theme={mode} showAlert={showAlert} />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
        {/* </Router> */}
      </Router>
    </>
  );
}

export default App;
