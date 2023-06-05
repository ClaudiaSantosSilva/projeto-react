type TextAreaProps = {
  placeholder: string;
  name: string;
  //value: string;
  className?: string;
  //onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  row?:number
};

export function TextArea({
  placeholder,
  name,
  //value,
  //onChange,
  className,
  row,
}: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      //value={value}
      //onChange={onChange}
      className={className}
      rows={row}
    />
  );
}
