import type { CSSProperties } from "react";
import type { ThemeConfig } from "antd";
import { theme as antdTheme } from "antd";

const brandTheme = {
    light: {
        primary: "#4F46E5",
        primaryHover: "#4338CA",
        primaryText: "#ffffff",
        menuBg: "rgba(79, 70, 229, 0.08)",
        menuText: "#4F46E5",
        selectActiveBg: "rgba(79, 70, 229, 0.06)",
        selectSelectedBg: "rgba(79, 70, 229, 0.12)",
        selectText: "#4F46E5",
        tableSelectedBg: "rgba(79, 70, 229, 0.05)",
        tableSelectedHoverBg: "rgba(79, 70, 229, 0.08)",
    },
    dark: {
        primary: "#6366F1",
        primaryHover: "#818CF8",
        primaryText: "#ffffff",
        menuBg: "rgba(99, 102, 241, 0.16)",
        menuText: "#A5B4FC",
        selectActiveBg: "rgba(99, 102, 241, 0.14)",
        selectSelectedBg: "rgba(99, 102, 241, 0.22)",
        selectText: "#E0E7FF",
        tableSelectedBg: "rgba(99, 102, 241, 0.10)",
        tableSelectedHoverBg: "rgba(99, 102, 241, 0.15)",
    },
};

export const adminLayoutStyle = {
    siderWidth: 232,
    headerHeight: 56,
    brandHeight: 56,
    menu: { borderInlineEnd: 0, padding: "18px 12px", fontSize: 15 } satisfies CSSProperties,
    menuItem: { height: 44, lineHeight: "44px", marginBlock: 4, borderRadius: 8 } satisfies CSSProperties,
};

export function getAntThemeConfig(dark: boolean): ThemeConfig {
    const color = dark ? brandTheme.dark : brandTheme.light;

    return {
        algorithm: dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        cssVar: { key: dark ? "mofox-dark" : "mofox-light" },
        token: {
            colorPrimary: color.primary,
            colorInfo: color.primary,
            colorLink: color.primary,
            colorLinkHover: color.primaryHover,
            colorLinkActive: color.primary,
            colorTextLightSolid: color.primaryText,
        },
        components: {
            Button: {
                primaryShadow: dark ? "0 2px 8px rgba(99, 102, 241, 0.25)" : "0 2px 8px rgba(79, 70, 229, 0.2)",
            },
            Menu: {
                itemActiveBg: color.menuBg,
                itemHoverBg: color.menuBg,
                itemSelectedBg: color.menuBg,
                itemSelectedColor: color.menuText,
                darkItemHoverBg: brandTheme.dark.menuBg,
                darkItemSelectedBg: brandTheme.dark.menuBg,
                darkItemSelectedColor: brandTheme.dark.menuText,
            },
            Select: {
                optionActiveBg: color.selectActiveBg,
                optionSelectedBg: color.selectSelectedBg,
                optionSelectedColor: color.selectText,
            },
            Table: {
                rowSelectedBg: color.tableSelectedBg,
                rowSelectedHoverBg: color.tableSelectedHoverBg,
            },
        },
    };
}
