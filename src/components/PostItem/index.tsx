import {
  ItemBox,
  ItemText,
  ItemTitle,
  ItemTitleBox,
} from "../../styles/PostItem/Item.styles";
import { ItemData } from "../../types";

const Item = ({ title, body }: ItemData) => {
  return (
    <>
      <ItemBox>
        <ItemTitleBox>
          <ItemTitle>{title}</ItemTitle>
        </ItemTitleBox>
        <ItemText>{body}</ItemText>
      </ItemBox>
    </>
  );
};

export default Item;
