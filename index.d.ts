type Plugin = "js" | "react" | "prettier" | "ts";

export function configure(...plugins: Plugin[]): Record<string, any>;
