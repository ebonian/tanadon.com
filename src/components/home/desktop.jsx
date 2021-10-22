import Draggable from "react-draggable";

export default function Desktop() {
  return (
    <div className="flex flex-grow pl-16 pt-8">
      {/* windows */}
      
      {/* applications icon */}
      <Draggable bounds="parent" grid={[100, 100]}>
        <div className="bg-white w-10 h-10">

        </div>
      </Draggable>
    </div>
  )
}
