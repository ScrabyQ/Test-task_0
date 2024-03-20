export function getReadableDateString(date) {
    return date.toISOString().split('T')[0];
}