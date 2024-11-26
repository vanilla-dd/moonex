import About from "./components/About";
import BackgroundSystem from "./components/BackgroundSystem";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BackgroundSystem />
      <main className="container mx-auto min-h-dvh px-2 pt-4 font-raleway text-white">
        <Navbar />

        <Hero />
        <div className="my-10 md:m-14 lg:m-20"></div>
        <About />
        <div className="my-10 md:m-14 lg:m-20"></div>
        <Features />
        <div className="my-10 md:m-14 lg:m-20"></div>
        <Faq />
        <div className="my-10 md:m-14 lg:m-20"></div>
      </main>
    </>
  );
}

export default App;
