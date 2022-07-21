import "./MainDraggablePage.scss";

interface Props {}

const MainDraggablePage = (props: Props) => {
  return (
    <div className="MainDraggablePage">
      <div className="MainDraggablePage__First">
        <h2>Добавить объект</h2>

        <h4>Ваш комментарий</h4>
        <input type="text" />
        <h4>Категория</h4>
        <div className="MainDraggablePage__First__FlexContainer">
          <div className="MainDraggablePage__First__Element">
            <div className="MainDraggablePage__First__Element__SVG"></div>
            <p>Есть пандус</p>
          </div>
          <div className="MainDraggablePage__First__Element">
            <div className="MainDraggablePage__First__Element__SVG"></div>
            <p>Есть пандус</p>
          </div>
          <div className="MainDraggablePage__First__Element">
            <div className="MainDraggablePage__First__Element__SVG"></div>
            <p>Есть пандус</p>
          </div>
          <div className="MainDraggablePage__First__Element">
            <div className="MainDraggablePage__First__Element__SVG"></div>
            <p>Есть пандус</p>
          </div>
        </div>
        <button className="MainDraggablePage__Button">Поделиться</button>
      </div>
      <div className="MainDraggablePage__Second">
        <h2>Добавить объект</h2>
        <div className="MainDraggablePage__Second__Container">
          <h4>Откуда</h4>
          <input type="text" />
          <h4>Куда</h4>
          <input type="text" />
        </div>
        <button className="MainDraggablePage__Button2">Построить</button>
      </div>
    </div>
  );
};

export default MainDraggablePage;
