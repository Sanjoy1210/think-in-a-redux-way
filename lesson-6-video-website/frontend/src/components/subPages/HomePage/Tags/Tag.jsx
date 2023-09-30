import { tagRemoved, tagSelected } from "@rtk/features/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Tag({ title }) {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);

  const isSelected = selectedTags?.includes(title);

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <div
      className={`${
        isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
      } px-4 py-1 rounded-full cursor-pointer`}
      onClick={handleSelect}
    >
      {title}
    </div>
  );
}
