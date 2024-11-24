import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./subcomponent/Loader/Loader";
import Main from "./components/Main/Main";
import CursorProvider from "./components/CursorProvider/CursorProvider";
import { ScrollProvider } from "./components/ScrollContext";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <ScrollProvider>
        <CursorProvider>
          {loading && <Loader onLoadingComplete={handleLoadingComplete} />}
          {!loading && <Navbar />}
          {!loading && <Main />}
        </CursorProvider>
      </ScrollProvider>
    </>
  );
}

export default App;
