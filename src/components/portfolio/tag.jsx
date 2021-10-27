export default function Tag({ tag }) {
  return (
    <div className="flex w-80 flex-wrap select-none">
      {tag.programming && <Item name="Programming" />}
      {tag.collaboration && <Item name="Collaboration" />}
      {tag.media && <Item name="Media" />}
      {tag.business && <Item name="Bussiness" />}
    </div>
  );
}

function Item({ name }) {
  return (
    <div className="px-3 py-1 bg-white bg-opacity-5 rounded-full text-sm duration-200 mr-2 mb-2">
      {name}
    </div>
  );
}
