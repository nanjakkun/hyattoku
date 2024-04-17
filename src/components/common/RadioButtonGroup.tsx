/**
 * Radio Button Group
 *
 * @returns JSX.Element
 */

type Props = {
  items: { value: any; label: string }[];
  selectedValue: any;
  onChange: (e: any) => void;
};

export const RadioButtonItems = ({ items, selectedValue, onChange }: Props) => {
  return (
    <>
      {items.map((item) => {
        return (
          <label key={item.value}>
            <input
              type="radio"
              onChange={onChange}
              value={item.value}
              checked={selectedValue === item.value}
            />
            {item.label}
          </label>
        );
      })}
    </>
  );
};
