/** Split a project stack string into tag labels (commas, middots, bullets). */
export function stackToTags(stack: string): string[] {
  return stack
    .split(/[,·•]/g)
    .map((s) => s.trim())
    .filter(Boolean);
}
