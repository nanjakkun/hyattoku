import { FamilyNamesJa } from "./FamilyNamesJa.ts";
import { FirstNamesMalesJa } from "./FirstNamesMalesJa.ts";
import { FirstNamesFemalesJa } from "./FirstNamesFemalesJa.ts";

type Props = {
  num: number;
  exportTarget: string;
};

export const generateJpNames = ({ num, exportTarget }: Props): string[] => {
  // TODO: ヘッダ出力

  const names: string[] = new Array(num).fill(undefined).map(() => {
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

  return names;
};
