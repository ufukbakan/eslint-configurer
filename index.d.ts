type Plugin = "js" | "react" | "prettier";

export function configure(...plugins: Plugin[]): Record<string, any>;
