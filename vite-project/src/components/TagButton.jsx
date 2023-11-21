const TagButton = ({ tagName, selectTag }) => (
  <button
    type="button"
    onClick={() => selectTag(tagName)}
    className="bg-slate-100 hover:mx-1  cursor-pointer uppercase rounded-sm border px-2 py-1 text-center"
  >
    {tagName}
  </button>
);
export default TagButton;
