type Plugin = "js" | "react" | "prettier" | "ts" | "node";

export function configure(
  ...plugins: Plugin[]
): Record<string, any> | Array<Record<string, any>>;
