import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Background from "./components/utils/Background";
import { useState } from "react";
import ThemedModal from "./components/utils/Modal";
import ProjectDetails from "./components/Projects/ProjectDetails";
function App() {
  const [modal, setModal] = useState({
    open: false,
    data: null,
    type: "",
  });

  const handleClose = () => {
    setModal({
      open: false,
      data: null,
      type: "",
    });
  };

  return (
    <div>
      <Navbar />
      <Home />
      <Background>
        <About />
        <Skills />
        <Projects showProjectDetails={setModal} />
      </Background>
      <Contacts />
      <Footer />

      {/* modal int */}
      {modal.open && (
        <ThemedModal
          open={modal.open}
          onClose={() => setModal({ open: false, data: null, type: "" })}
          modalTitle="Project Details"
        >
          <ProjectDetails data={modal.data} handleClose={handleClose} />
        </ThemedModal>
      )}
    </div>
  );
}

export default App;
