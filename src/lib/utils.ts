import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const hideEmail = (email: string) => {
    const [localPart, domainPart] = email.split('@')
    const visibleLocalPartLength = Math.min(3, localPart.length) // Keeping at least 3 characters of the local part visible
    const hiddenPart = '*'.repeat(localPart.length - visibleLocalPartLength)
    const visibleLocalPart = localPart.slice(0, visibleLocalPartLength)
    return `${visibleLocalPart}${hiddenPart}@${domainPart}`
}
