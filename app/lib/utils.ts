/**
 * Formats a file size in bytes to a human-readable string.
 * @param bytes - The size in bytes
 * @returns A formatted string (e.g., "1.5 MB", "500 KB", "2.3 GB")
 */
export function formatSize(bytes: number): string {
    if (bytes < 0) return "0 B";

    const units = ["B", "KB", "MB", "GB", "TB"];
    let unitIndex = 0;
    let size = bytes;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    // Use 2 decimal places for KB and above, no decimals for bytes
    const decimals = unitIndex === 0 ? 0 : 2;
    return `${size.toFixed(decimals)} ${units[unitIndex]}`;
}
