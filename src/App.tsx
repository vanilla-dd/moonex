// Todo: mobile responsive eclipse
// Todo: seprate button component

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="container mx-auto min-h-dvh pt-4 font-raleway text-white">
      <Navbar />
      <div className="flex h-full min-h-[calc(100dvh-100px)] items-center">
        <Hero />
      </div>
      {/* <div className="aspect-square w-80 rounded-[40%] bg-gradient-to-r from-[#edd955] to-[#ded1a0] blur-[150px]"></div> */}
    </main>
  );
}

export default App;
