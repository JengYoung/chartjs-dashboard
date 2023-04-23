export interface IBaseInput {
  id?: string
  placeholder?: string;
  onChange?: () => void;
  value?: string;
  autoFocus?: boolean;
}
