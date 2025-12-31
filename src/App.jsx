import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventSection from "./components/EventSection";
import CountdownSection from "./components/CountdownSection";
import EventSchedule from "./components/EventSchedule";
import PricingSection from "./components/PricingSection";
import RegisterSection from "./components/RegisterSection";
import ClientReviews from "./components/ClientReviews";
import Footer from "./components/Footer";
  






import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <EventSection />
      <CountdownSection />
      <EventSchedule/>
            <PricingSection />
                  <RegisterSection />
                      <ClientReviews />
                        <Footer />



    </>
  );
}

export default App;
