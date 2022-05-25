
import "./portafolio.scss";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./ingredients";
import { useState } from "react";


function Portafolio() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="portafolio" id="portafolio">
            <h1>Beneficios</h1>
            <h3>Un producto integral</h3>
            <div className="container">
                <div className="window">
                    <nav>
                        <ul>
                        {tabs.map((item) => (
                            <li
                            key={item.label}
                            className={item === selectedTab ? "selected" : ""}
                            onClick={() => setSelectedTab(item)}
                            >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                            </li>
                        ))}
                        </ul>
                    </nav>
                    <main>
                        <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={selectedTab ? selectedTab.label : "empty"}
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.15 }}
                        >
                            {selectedTab ? selectedTab.body : "😋"}
                        </motion.div>
                        </AnimatePresence>
                    </main>
                    </div>
            </div>
        </div>
    )
}

export default Portafolio
