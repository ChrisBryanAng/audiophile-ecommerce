interface IFormInput {
  label?: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: () => void;
}

const FormInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}: IFormInput) => {
  return (
    <>
      <label className="text-sm font-semibold tracking-wider flex flex-col gap-2">
        {label}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="h-10 w-full text-sm rounded-lg py-7 px-6 border-[1px] border-solid border-gray3 outline-primary-1"
        />
      </label>
    </>
  );
};

export default FormInput;
