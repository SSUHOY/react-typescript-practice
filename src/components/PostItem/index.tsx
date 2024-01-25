import { ItemData } from "../../types";

const Item = ({ title, body }: ItemData) => {
  return (
    <>
      <div className="item-box">
        <h1 className="item__title">{title}</h1>
        <p className="item__text">{body}</p>;
      </div>
    </>
  );
};

export default Item;
