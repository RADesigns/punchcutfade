import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

//TODO: Remove this function or the @/lib/utils/utils.ts function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}