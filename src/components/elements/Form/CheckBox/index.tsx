import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";
import { Container, Input } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}

export const CheckboxInput: React.FC<Props> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = [] } = useField(name);
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {        
        return refs.filter(ref => ref?.checked)?.map(ref => ref?.value);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach(ref => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      }
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container className="checkbox-container">
      {options.map(option => (
        <label htmlFor={option.id} key={option.id}>
          <Input
            defaultChecked={defaultValue.includes(option.id)}
            ref={ref => {
              inputRefs.current.push(ref as HTMLInputElement);
            }}
            value={option.value}
            type="checkbox"
            id={option.id}
            {...rest}
          />
          {option.label}
        </label>
      ))}
    </Container>
  );
};