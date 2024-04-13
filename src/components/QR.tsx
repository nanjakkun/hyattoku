import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

/**
 * QR code generator using qrcode.react
 * https://github.com/zpao/qrcode.react
 *
 * @returns JSX.Element
 */
export const QR = () => {
  const [text, setText] = useState("change text!");

  return (
    <div className="">
      <p className="my-4 flex justify-center">
        <input
          className="border border-black text-black"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </p>
      <div className="flex justify-center">
        <QRCodeSVG
          value={text}
          size={256}
          level={"L"}
          includeMargin={false}
          imageSettings={{
            src: "",
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
      </div>
    </div>
  );
};
