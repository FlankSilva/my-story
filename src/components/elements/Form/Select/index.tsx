import { FC, SelectHTMLAttributes, useEffect, useRef } from "react"
import { useField } from "@unform/core";

import { Container, SelectStyled } from './styles'
import { FeedbackError } from "../../../../utils/feedbackError";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  isMulti?: boolean;
  options: any;
}

export const Select: FC<SelectProps> = ({ name, options, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
      setValue: (ref, value) => {
        return ref.select.setValue(value);
      },
      clearValue: (ref) => {
        ref.select.clearValue();
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <SelectStyled 
        ref={selectRef}
        className="react-select-container"
        classNamePrefix="react-select"
        options={options}
        {...rest}
      />
      <FeedbackError>
        {error}
      </FeedbackError>
    </Container>
  )
}