import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  style?: React.CSSProperties;
  name?: string;
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, style, placeholder, error = "",  ...props }, ref) => {
    return (
      <div className="relative h-14">
        <input
          className=" peer h-8 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-400"
          type="text"
          style={style}
          ref={ref}
          name={name}
          placeholder={placeholder}
          {...props}
        />
        <label
          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-1 peer-focus:-top-3.5 peer-focus:text-slate-600 peer-focus:text-sm">
          {placeholder}
        </label>

        {error && <p className="text-xs text-red-500 font-medium ">{error}</p>}
      </div>
    );
  }
);

export default Input;

// border-gray-500
// text-gray-900
// focus:outline-none
// focus:border-rose-600
