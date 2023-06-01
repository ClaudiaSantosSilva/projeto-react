type TextFieldProps = {
  placeholder: string;
  value: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  row:number
};

export function TextArea({
  placeholder,
  value,
  onChange,
  className,
  row,
}: TextFieldProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      rows={row}
    />
  );
}
