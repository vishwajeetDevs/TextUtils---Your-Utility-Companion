import { useState } from 'react';
import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [theme, setTheme] = useState("light");
  function Theme() {
    if (theme === "light") {
      document.body.style.backgroundColor = "#17202a"
      document.querySelector("#exampleFormControlTextarea1").style.backgroundColor = "#17202a"
      document.querySelector("#unknown1").style.backgroundColor = "#17202a"
      document.querySelector("#nameOfDarkMode").style.color = "#17202a"
      document.querySelector("#nameOfDarkMode").innerHTML = "Light Mode"
      document.querySelector("#exampleFormControlTextarea1").style.color = "white"
      document.body.style.color = "white"
      setTheme("dark");
    }
    else {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#17202a"
      document.querySelector("#exampleFormControlTextarea1").style.backgroundColor = "white"
      document.querySelector("#nameOfDarkMode").innerHTML = "Dark Mode"
      document.querySelector("#exampleFormControlTextarea1").style.color = "black"
      setTheme("light");
    }
  }
  return (
    <>
      <Navbar companyName="TextUtils" theme={Theme} />
      <div className=" container my-5 ">
        <TextForm heading="Enter your Text Here" button1="Upper Case" button2="Lower Case" button3="Clear Text" button4="Copy Text" />
      </div>
    </>
  );
}
export default App;
