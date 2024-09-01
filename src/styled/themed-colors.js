const themedColors = {
  "primary-color": ["#2c5c97", "#1a2c42"],
  "app-contrast-color": ["#f7f7f7", "#e8e8e8"],
  "link-color": ["#d23669", "#ffa7c4"],

  "content-color-0": ["rgba(0, 0, 0, 100%)", "rgba(255, 255, 255, 100%)"],
  "content-color-1": ["rgba(0, 0, 0, 87%)", "rgba(255, 255, 255, 87%)"],
  "content-color-2": ["rgba(0, 0, 0, 60%)", "rgba(255, 255, 255, 60%)"],
  "content-color-3": ["rgba(0, 0, 0, 38%)", "rgba(255, 255, 255, 38%)"],

  "inline-code-color": ["var(--purple-600)", "var(--purple-200)"],
  "inline-code-bg": ["var(--purple-50)", "var(--wa-100)"],

  "content-title-color": ["#344f71", "#b3b3b3"],

  "content-bg": ["#fdfdfd", "#232323"],
  "content-box-shadow": ["var(--ba-100)", "transparent"],

  "bg-0": ["#e5e5e5", "#191919"],
  "bg-1": ["#f7f7f7", "#1e1e1e"],

  "svg-icon-bg": ["var(--ba-200)", "var(--wa-100)"],
  "svg-icon-bg-hover": ["var(--ba-300)", "var(--wa-300)"],
  "svg-icon-bg-active": ["var(--ba-400)", "var(--wa-400)"],
  // only for in-site route style
  "svg-icon-color-current": ["#f7f7f7", "#0e0e0e"],
  "svg-icon-bg-current": ["#585858", "#7d7d7d"],

  "ui-tag-color": ["var(--blue-600)", "var(--blue-200)"],
  "ui-tag-bg-hover": ["var(--blue-100)", "rgba(129, 230, 217, 0.12)"],
  "ui-tag-bg-active": ["var(--blue-200)", "rgba(129, 230, 217, 0.24);"],

  "ui-selected-tag-color": ["white", "black"],
  "ui-selected-tag-bg": ["var(--blue-500)", "var(--blue-200)"],
  "ui-selected-tag-bg-hover": ["var(--blue-600)", "var(--blue-300)"],
  "ui-selected-tag-bg-active": ["var(--blue-700)", "var(--blue-400)"],

  "ui-input-focus-border-color": ["rgb(49, 130, 206)", "rgb(99, 179, 237)"],

  "oreilly-link-color": ["rgb(153, 0, 0)", "rgba(210, 20, 20, 80%)"],

  "atdsr-name": ["light", "dark"],
}

export default themedColors

export const saperateTheme = (themedColors) => {
  const lightTheme = {}
  const darkTheme = {}
  Object.entries(themedColors).forEach(([key, [light, dark]]) => {
    lightTheme[key] = light
    darkTheme[key] = dark
  })
  return [lightTheme, darkTheme]
}

export const insertTheme = (theme) =>
  Object.entries(theme)
    .map(([key, value]) => `--${key}: ${value};`)
    .join("")
