import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setVisible(false);

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setLinkHovered(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleLinkHover);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      animate={{
        scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        opacity: visible ? 1 : 0,
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 300,
        mass: 0.5
      }}
      style={{
        width: '16px',
        height: '16px',
        backgroundColor: 'white',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CustomCursor;