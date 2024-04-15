import React from "react";
import { useEffect, useState } from "react";
import { FamilyNamesJa } from "./naming/FamilyNamesJa.ts";
import { FirstNamesMalesJa } from "./naming/FirstNamesMalesJa.ts";
import { FirstNamesFemalesJa } from "./naming/FirstNamesFemalesJa.ts";

import { Button } from "./common/Button.tsx";

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

  useEffect(() => {
    setText(names.join("\n"));
  }, [names]);

  const onGenerateButtonClick = () => {
    const _names: string[] = new Array(10).fill(undefined).map(() => {
      const idx1 = Math.floor(Math.random() * FamilyNamesJa.length);
      const family_name = FamilyNamesJa[idx1];
      let first_name = undefined;

      const rand: number = Math.floor(Math.random() * 2);

      switch (rand) {
        case 0:
          const idx2 = Math.floor(Math.random() * FirstNamesMalesJa.length);
          first_name = FirstNamesMalesJa[idx2];
          break;
        default:
          const idx3 = Math.floor(Math.random() * FirstNamesFemalesJa.length);
          first_name = FirstNamesFemalesJa[idx3];
          break;
      }

      return family_name.name + "　" + first_name.name;
    });

    setNames(_names);
  };

  return (
    <div className="">
      <p className="my-4 flex justify-center">
        <Button onClick={onGenerateButtonClick} primary>
          生成
        </Button>
      </p>
      <div className="flex justify-center">
        <textarea
          className="w-4/5 h-72 border border-black solid text-black bg-gray-300"
          value={text}
          readOnly
        />
      </div>
    </div>
  );
};
