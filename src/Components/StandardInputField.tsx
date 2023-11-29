import React from "react";

interface StandardInputFieldProps {
  field: string;
  setField: any;
  placeholder: string;
  type: string;
}

const StandardInputField: React.FC<StandardInputFieldProps> = ({
  field,
  setField,
  placeholder,
  type,
}) => {
  return (
    <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
      <input
        type={type}
        className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-full"
        placeholder={placeholder}
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
    </div>
  );
};

export default StandardInputField;
