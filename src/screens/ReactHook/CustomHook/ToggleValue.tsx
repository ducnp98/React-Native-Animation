import React, { useState } from "react";

export const useToggle = (defaultValue: any) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value: boolean) => {
    setValue((currentValue: any) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };
  return [value, toggleValue];
};
