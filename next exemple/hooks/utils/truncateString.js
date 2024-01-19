export const truncateString = (str, maxLength) => {

    if (str.length <= maxLength) {
        return str
    }

    const truncatedString = str.slice(0, maxLength - 3) + '...'
    return truncatedString
}
