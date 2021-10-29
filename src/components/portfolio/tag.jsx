export default function Tag({ tag }) {
  var collection = JSON.stringify(tag);

  return (
    <div className="flex w-80 flex-wrap select-none">
      {collection.includes("Programming") && <Item name="Programming" />}
      {collection.includes("Collaboration") && <Item name="Collaboration" />}
      {collection.includes("Media") && <Item name="Media" />}
      {collection.includes("Bussiness") && <Item name="Bussiness" />}
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
