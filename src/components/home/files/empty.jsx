import { BsFolder2Open } from "react-icons/bs";

export default function Empty() {
  return (
    <div className="flex flex-col min-w-75 mb-12 justify-center items-center text-center text-white space-y-3">
      <BsFolder2Open className="text-8xl opacity-30" />
      <h1 className="font-medium text-2xl opacity-40">Folder is Empty</h1>
    </div>
  )
}
