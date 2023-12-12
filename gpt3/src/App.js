import logo from "./logo.svg";
import "./App.css";
import {
  Header,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Footer,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
