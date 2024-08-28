import Navbar from "../component/Navbar/NavBar";
import ContactComponent from "../component/Contact/Contact"; // Changed the name to ContactComponent
import Footer from "../component/Footer/Footer";

export default function ContactPage() {
  // Renamed the function to ContactPage
  return (
    <>
      <Navbar />
      <ContactComponent />{" "}
      <Footer/>
    </>
  );
}
