import { useEffect, useState } from "react";
import {
  FamilyNamesJa,
  FirstNamesMalesJa,
} from "../components/naming/names_ja.ts";

/**
 * Random Japanese name generator
 *
 * @returns JSX.Element
 */
export const NamingJa = () => {
  const [names, setNames] = useState<Array<string>>(['ここに結果が出力されます']);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setText(names.join('\n'));
  }, [names]);

  const onGenerateButtonClick = () => {
    const _names: string[] = new Array(10).fill(undefined).map(() => {
      const idx1 = Math.floor(Math.random() * FamilyNamesJa.length);
      const family_name = FamilyNamesJa[idx1];

      const idx2 = Math.floor(Math.random() * FirstNamesMalesJa.length);
      const first_name = FirstNamesMalesJa[idx2];

      return family_name.name  + "　" + first_name.name;
    });

    console.log(_names)

    setNames(_names)
  }

  return (
    <div className="">
      <p className="my-4 flex justify-center">
        <button className="border p-2" onClick={onGenerateButtonClick}>
          生成
        </button>
      </p>
      <div className="flex justify-center">
        <textarea
          className="w-4/5 h-52 border border-black solid text-black bg-gray-300"
          value={text}
          readOnly
        />
      </div>
    </div>
  );
};
