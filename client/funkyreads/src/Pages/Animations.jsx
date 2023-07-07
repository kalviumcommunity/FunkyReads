import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage1 from './LandingPage1';
import LandingPage2 from './LandingPage2';

const Animations = () => {
    const [showComponent2, setShowComponent2] = React.useState(false);
  return (
    <div>
        <AnimatePresence>
        {showComponent2 ? (
          <LandingPage2 setShowComponent2={setShowComponent2} />
        ) : (
          <LandingPage1 setShowComponent2={setShowComponent2} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Animations