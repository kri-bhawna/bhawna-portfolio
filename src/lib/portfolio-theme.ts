export const PORTFOLIO_THEME_KEY = "bhawna-portfolio-theme";

export type PortfolioTheme = "light" | "dark";

export function isPortfolioTheme(value: unknown): value is PortfolioTheme {
  return value === "light" || value === "dark";
}
