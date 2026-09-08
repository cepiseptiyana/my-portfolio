import { createRoot } from "react-dom/client";
import gsap from "gsap";
import "./style.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
