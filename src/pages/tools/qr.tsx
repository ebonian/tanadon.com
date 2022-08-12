import { NextPage } from "next";
import QRCode from "qrcode";
import { useState } from "react";

const QR: NextPage = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 500,
        margin: 2,
        color: {
          dark: "#121212",
          light: "#ffffff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        setQr(url);
      }
    );
  };

  return (
    <div className="grid place-content-center min-h-screen bg-[#121212] text-white font-code py-20 px-10">
      <span className="sm:hidden text-6xl mb-3 -ml-2">🔗</span>
      <h1 className="font-semibold text-4xl md:text-5xl">
        <span className="hidden sm:inline">🔗</span>
        {" QR Code Generator"}
      </h1>
      <div className="sm:ml-[4.5rem] md:ml-24 mt-3 sm:mt-1.5">
        <p>Just type in the url and hit generate button ✨</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            GenerateQRCode();
          }}
          className="my-10 flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-6"
        >
          <input
            type="text"
            placeholder="e.g. https://google.com"
            className="bg-transparent outline-none py-2 px-4 border rounded-xl border-gray-600 text-white w-full focus:border-gray-400"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button
            type="submit"
            className="py-2 px-4 border rounded-xl border-gray-600 text-white hover:bg-gray-600 hover:bg-opacity-40 duration-300"
            onClick={GenerateQRCode}
          >
            Generate
          </button>
        </form>
        {qr && (
          <div>
            <img src={qr} />
            <div className="mt-8 flex w-full justify-end">
              <a
                href={qr}
                download="qrcode.png"
                className="py-2 px-4 border rounded-xl border-gray-600 text-white w-full text-center hover:bg-gray-600 hover:bg-opacity-40 duration-300"
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QR;
