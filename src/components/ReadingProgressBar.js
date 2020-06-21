import React from 'react'

import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"
 
// class ReadingProgressBar extends React.Component {
const ReadingProgressBar = () => {
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const scale = useSpring(yRange, { stiffness: 400, damping: 90 });
  
    return (
        <motion.div 
            className="fixed top-0 left-0 z-1 w-100"
            style={{
                background: `linear-gradient(to right, var(--orange) 100%, transparent 0)`,
                backgroundRepeat: 'no-repeat',
                height: '4px',
                transformOrigin: 'left',
                scaleX: scale
            }}
        />
    )
}

export default ReadingProgressBar;