interface IFormRadio {
  id: string;
  label?: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: () => void;
}

const FormRadio = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}: IFormRadio) => {
  return (
    <div className="flex w-full items-center gap-4 px-6 py-4 rounded-lg border-[1px] border-solid border-gray3 outline-primary-1">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-4 w-4 text-sm rounded-lg  outline-primary-1"
      />
      <label
        htmlFor={id}
        className="text-sm font-semibold tracking-wider flex flex-col gap-2"
      >
        {label}
      </label>
    </div>
  );
};

export default FormRadio;
