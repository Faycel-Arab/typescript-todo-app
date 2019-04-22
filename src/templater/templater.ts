export function templater(template: string, target: HTMLElement, ...args: string[]): any {
  target.append(template);
}
