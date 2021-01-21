import { useCallback } from "react";
import ToggleList from "../functions/ToggleList";

const RecursiveNode = ({ id, children, type, additional }) => {
  const handleClick = useCallback(() => {
    ToggleList(id);
  }, [id]);

  const addPadding = (condition) => {
    return condition ? "padding" : "";
  };

  return (
    <>
      <h4
        data-type={type}
        id={id}
        className="container__list-item"
        data-has_children={children && children.length > 0}
        onClick={handleClick}
      >
        <div className="container__list-text">
          {children && <div data-button={id}>+</div>}
          <p className={addPadding(!children)}>{id}</p>
        </div>
        {additional && <p className={addPadding(children)}>{additional}</p>}
      </h4>
      {children && (
        <div className="container__toggle-list --closed" data-list={id}>
          {(children ?? []).map((node) => (
            <RecursiveNode key={node.id} {...node} />
          ))}
        </div>
      )}
    </>
  );
};

export default RecursiveNode;
