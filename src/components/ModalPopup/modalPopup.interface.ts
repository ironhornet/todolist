import { ReactNode } from "react";

export interface IModalProps {
  open: boolean;
  onChange: (val: boolean) => void;
  title: string;
  children: ReactNode
}
