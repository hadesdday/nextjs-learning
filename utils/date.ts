export function getShortDate(date: number) {
    return new Date(date).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function getFullDate(date: number) {
    return new Date(date).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', weekday: "long" })
}