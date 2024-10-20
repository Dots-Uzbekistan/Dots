import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const CursorProvider = ({ children }) => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const hoverValue = useMotionValue(1); // 1 for normal, 1.5 for hover scale

  const cursorScale = useTransform(hoverValue, [1, 1.5], [1, 2]);
  const cursorRotate = useTransform(cursorX, (x) => x / 100);

  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  const handleMouseEnter = () => {
    hoverValue.set(1.5); // Scale up on hover
  };

  const handleMouseLeave = () => {
    hoverValue.set(1); // Scale down when not hovered
  };

  return (
    <>
      {/* Global Custom Cursor */}
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
          scale: cursorScale,
          rotate: cursorRotate,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Outer glowing ring */}
        <motion.div
          className="cursor-outer"
          style={{
            scale: cursorScale,
            backgroundColor:
              hoverValue.get() === 1.5
                ? "rgba(122, 31, 224, 0.3)" // #7A1FE0
                : "rgba(169, 88, 255, 0.2)", // #A958FF
            boxShadow:
              hoverValue.get() === 1.5
                ? "0 0 30px rgba(122, 31, 224, 0.6)" // #7A1FE0
                : "0 0 15px rgba(169, 88, 255, 0.3)", // #A958FF
          }}
        />

        {/* Inner dot */}
        <motion.div
          className="cursor-inner"
          style={{
            backgroundColor:
              hoverValue.get() === 1.5
                ? "rgba(106, 8, 217, 1)" // #6A08D9
                : "rgba(255, 255, 255, 1)", // White for normal state
          }}
        />
      </motion.div>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>

      <style jsx>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
        }
        .cursor-outer {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: absolute;
          top: -20px;
          left: -20px;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
        }
        .cursor-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: background-color 0.2s ease;
        }
        * {
          cursor: none;
        }
      `}</style>
    </>
  );
};

export default CursorProvider;
