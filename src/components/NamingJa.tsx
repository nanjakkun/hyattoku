import React from "react";
import { useEffect, useState } from "react";
import { FamilyNamesJa } from "./naming/FamilyNamesJa.ts";
import { FirstNamesMalesJa } from "./naming/FirstNamesMalesJa.ts";
import { FirstNamesFemalesJa } from "./naming/FirstNamesFemalesJa.ts";

import { Button } from "./common/Button.tsx";
import { RadioButtonItems } from "@/components/common/RadioButtonGroup.tsx";

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

  useEffect(() => {
    setText(names.join("\n"));
  }, [names]);

  const onGenerateButtonClick = () => {
    // TODO: ヘッダ出力
    // TODO: 件数可変

    const _names: string[] = new Array(10).fill(undefined).map(() => {
      const idx1 = Math.floor(Math.random() * FamilyNamesJa.length);
      const family_name = FamilyNamesJa[idx1];
      let first_name = undefined;
      let gender = undefined;

      const rand: number = Math.floor(Math.random() * 2);

      switch (rand) {
        case 0:
          const idx2 = Math.floor(Math.random() * FirstNamesMalesJa.length);
          first_name = FirstNamesMalesJa[idx2];
          gender = "男";
          break;
        default:
          const idx3 = Math.floor(Math.random() * FirstNamesFemalesJa.length);
          first_name = FirstNamesFemalesJa[idx3];
          gender = "女";
          break;
      }

      if (exportTarget === "full") {
        return [
          family_name.name,
          first_name.name,
          family_name.kana,
          first_name.kana,
          gender,
        ].join(",");
      }
      return family_name.name + "　" + first_name.name;
    });

    setNames(_names);
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

  const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setExportTarget(value);
  };

  const exportTargets = [
    { value: "full", label: "全て" },
    { value: "simple", label: "漢字姓名のみ" },
  ]

  return (
    <div className="">
      <div className="my-4 flex justify-center">
        <RadioButtonItems
          items={exportTargets}
          selectedValue={exportTarget}
          onChange={onRadioChange}
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
