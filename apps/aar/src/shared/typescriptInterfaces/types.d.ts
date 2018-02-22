import "react";

export interface InputFormEvent<T> extends React.FormEvent<T> {
  target: InputEventTarget;
}

export interface InputEventTarget extends EventTarget {
  value: string;
}
