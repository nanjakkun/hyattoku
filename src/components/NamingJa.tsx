import React from "react";
import { useEffect, useState } from "react";

import { Button } from "./common/Button.tsx";
import { RadioButtonItems } from "@/components/common/RadioButtonGroup.tsx";

import { generateJpNames } from "@/functions/naming/generateJpNames.ts";

/**
 * Random Japanese name generator
 *
 * @returns JSX.Element
 */
export const NamingJa = () => {
  const [names, setNames] = useState<Array<string>>([
    "ここに結果が出力されます",
  ]);

  const [text, setText] = useState<string>("");

  const [exportTarget, setExportTarget] = useState<string>("full");

  const [num, setNum] = useState(10);

  useEffect(() => {
    setText(names.join("\n"));
  }, [names]);

  const onGenerateButtonClick = () => {
    const params = {
      num,
      exportTarget,
    };

    setNames(generateJpNames(params));
  };

  const onDownloadButtonClick = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "names.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const onExportTargerRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setExportTarget(value);
  };

  const onNumRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setNum(Number(value));
  };

  const exportTargets = [
    { value: "full", label: "全て" },
    { value: "simple", label: "漢字姓名のみ" },
  ];

  const nums = [
    { value: "1", label: "1件" },
    { value: "10", label: "10件" },
    { value: "100", label: "100件" },
    { value: "1000", label: "1000件" },
  ];

  return (
    <div className="">
      <div className="my-4 flex justify-center">
        <RadioButtonItems
          items={exportTargets}
          selectedValue={exportTarget}
          onChange={onExportTargerRadioChange}
        />
      </div>
      <div className="my-4 flex justify-center">
        <RadioButtonItems
          items={nums}
          selectedValue={String(num)}
          onChange={onNumRadioChange}
        />
      </div>
      <p className="my-4 flex justify-center">
        <Button onClick={onGenerateButtonClick} primary>
          生成
        </Button>
      </p>
      <div className="my-4 flex justify-center">
        <textarea
          className="w-4/5 h-72 border border-black solid text-black bg-gray-300"
          value={text}
          readOnly
        />
      </div>
      <div className="flex justify-center">
        <Button onClick={onDownloadButtonClick}>ダウンロード</Button>
      </div>
    </div>
  );
};
