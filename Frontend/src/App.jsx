import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
  // Link,
} from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
// import TransitionOverlay from "./components/TransitionOverlay";
// import { useState, useEffect } from "react";

// const AnimatedRoutes = () => {
//   const location = useLocation();
//   const [triggerTransition, setTriggerTransition] = useState(false);

//   useEffect(() => {
//     // Trigger overlay when route changes
//     setTriggerTransition(true);
//   }, [location.pathname]);

//   return (
//     <>
//       <AnimatePresence mode="wait">
//         <TransitionOverlay trigger={triggerTransition} />
//       </AnimatePresence>
//     </>
//   );
// };

const App = () => (
  <div className="w-full min-h-screen overflow-x-hidden bg-black">
    <Router>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </div>
);

export default App;
