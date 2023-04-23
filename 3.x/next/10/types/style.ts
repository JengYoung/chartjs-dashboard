export enum EBorder {
  'top' = 'top',
  'right' = 'right',
  'bottom' = 'bottom',
  'left' = 'left',
}

export type IBorder = Record<keyof typeof EBorder, string | undefined>
