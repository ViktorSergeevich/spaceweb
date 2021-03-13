import React from 'react';
import SideMenu from "./Components/SideMenu";
import ContentScreen from "./Components/ContentScreen";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="wrapper">
        <div className="content">
            <SideMenu />
            <ContentScreen />
        </div>
        <Footer />
    </div>
  );
}

export default App;
