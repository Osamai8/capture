import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false);
    return <motion.div layout className='question' onClick={() => setToggle(!toggle)}>
        <motion.h4 layout style={{ cursor: 'pointer' }}>{title}</motion.h4>
        {toggle ? children : ''}
        <div className="line"></div>
    </motion.div>;
}

export default Toggle;
