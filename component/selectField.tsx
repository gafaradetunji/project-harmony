interface SelectFieldProps {
  label?: string;
  error?: string;
  value?: string;
  style?: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  error,
  value,
  onChange,
  style,
}) => (
  <div className="mb-4" style={style}>
    <label htmlFor={label} className="text-base mb-0">
      {label}
    </label>
    <select id={label} name={label} value={value} onChange={onChange}>
      <option value="">--select {String(label).toLowerCase()}</option>
      <option value="Education">Education</option>
      <option value="Tech">Tech</option>
      <option value="Comedy">Comedy</option>
    </select>
    {error && <p className="text-red-500 mt-9 text-sm">{error}</p>}
  </div>
);

export default SelectField;
