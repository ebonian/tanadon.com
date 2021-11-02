export default function Tag({ tag }) {
  var collection = JSON.stringify(tag);

  return (
    <div className="flex w-80 flex-wrap select-none">
      {collection.includes("Programming") && <Item name="Programming" />}
      {collection.includes("Collaboration") && <Item name="Collaboration" />}
      {collection.includes("Media") && <Item name="Media" />}
      {collection.includes("Business") && <Item name="Business" />}
      {collection.includes("Camp") && <Item name="Camp" />}
      {collection.includes("โปรแกรมมิ่ง") && <Item name="โปรแกรมมิ่ง" />}
      {collection.includes("โปรเจกต์ทีม") && <Item name="โปรเจกต์ทีม" />}
      {collection.includes("มีเดีย") && <Item name="มีเดีย" />}
      {collection.includes("ธุรกิจ") && <Item name="ธุรกิจ" />}
      {collection.includes("แคมป์") && <Item name="แคมป์" />}
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
