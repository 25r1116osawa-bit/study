import './storybook-selectbox.css';

export interface SelectBoxOption {
  label: string;
  value: string;
}

export interface SelectBoxProps {
  label?: string;
  options: SelectBoxOption[];
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  
}

export const SelectBox = ({
  label,
  options,
  value,
  disabled = false,
  onChange,
}: SelectBoxProps) => {
  return (
    <div className="storybook-selectbox">
      {label && (
        <span className="storybook-selectbox__label">{label}</span>
      )}

      <select
        className="storybook-selectbox__select"
        
        disabled={disabled}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
