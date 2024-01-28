import {
  ItemBox,
  ItemText,
  ItemTitle,
  ItemTitleBox,
} from "../../styles/PostItem/Item.styles";
import { IItemData } from "../../types";

const Item = ({ title, body }: IItemData) => {
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
