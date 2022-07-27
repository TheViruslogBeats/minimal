import "./MainDraggablePage.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";

interface Props {}

const MainDraggablePage = (props: Props) => {
  const [position, setPosition] = useState(0);
  const [opened, setOpened] = useState(true);
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (position - 50 >= -50 && opened) {
        setPosition(position - 50);
      }
    },
    onSwipedRight: () => {
      if (position + 50 <= 0 && opened) {
        setPosition(position + 50);
      }
    },
    onSwipedUp: () => {
      setOpened(true);
    },
    onSwipedDown: () => {
      setOpened(false);
    },
  });
  return (
    <motion.div
      {...handlers}
      className="MainDraggablePage"
      initial={{ height: "390px" }}
      animate={{ height: opened ? "390px" : "48px" }}
      transition={{
        duration: 0.1,
        type: "spring",
        stiffness: 350,
        damping: 40,
      }}
    >
      <div className="MainDraggablePage__Stick"></div>
      <div className="MainDraggablePage__Window">
        <AnimatePresence initial={false}>
          {opened && (
            <motion.div
              initial={{
                transform: `translateX(-0%)`,
                height: 0,
                width: "200%",
              }}
              animate={{
                transform: `translateX(${position}%)`,
                height: "100%",
              }}
              style={{ overflow: "hidden" }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 350,
                damping: 40,
              }}
              className="MainDraggablePage__Container"
            >
              <div className="MainDraggablePage__Element">
                <div className="MainDraggablePage__ElementContainer">
                  <h2>Построить маршрут</h2>
                  <p>Откуда</p>
                  <input type="text" />
                  <p>Куда</p>
                  <input type="text" />
                </div>
                <button>Построить</button>
              </div>
              <div className="MainDraggablePage__Element">
                <h2>Добавить Объект</h2>
                <p>Ваш комментарий</p>
                <input type="text" />
                <p>Категория</p>
                <div className="MainDraggablePage__Category">
                  <button>
                    <div className="MainDraggablePage__SVG"></div>
                    <p>Есть пандус</p>
                  </button>
                  <button>
                    <div className="MainDraggablePage__SVG"></div>
                    <p>Есть пандус</p>
                  </button>
                  <button>
                    <div className="MainDraggablePage__SVG"></div>
                    <p>Есть пандус</p>
                  </button>
                  <button>
                    <div className="MainDraggablePage__SVG"></div>
                    <p>Есть пандус</p>
                  </button>
                </div>
                <button>Поделиться</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="MainDraggablePage__Pages"
      style={{ display: opened ? "flex" : "none"}}>
        <div
          className={
            position === 0
              ? "MainDraggablePage__CurrentPage"
              : "MainDraggablePage__Page"
          }
        ></div>
        <div
          className={
            position === -50
              ? "MainDraggablePage__CurrentPage"
              : "MainDraggablePage__Page"
          }
        ></div>
      </div>
    </motion.div>
  );
};

export default MainDraggablePage;
