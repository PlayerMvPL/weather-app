import CITIES from "@/shared/const/cities";

type SelectPropsType = {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectCity = (props: SelectPropsType) => {
  const { id, value, onChange } = props;
  return (
    <select id={id} name="" value={value} onChange={onChange}>
      {CITIES.map((city) => {
        return (
          <option key={city.id} value={city.id}>
            {city.title}
          </option>
        );
      })}
    </select>
  );
};

export default SelectCity;
