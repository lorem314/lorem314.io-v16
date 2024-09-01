const transitions = {
  animation: {
    duration: 200,
    "timing-function": "ease-in-out",
  },
  theme: {
    duration: 200,
    "timing-function": "ease-in-out",
  },
}

export default transitions

export const insertTransitions = (transitions) => {
  return Object.entries(transitions)
    .map(([name, props]) => {
      return Object.entries(props)
        .map(([prop, value]) => {
          switch (prop) {
            case "duration":
              return `--transition-${name}-${prop}: ${value}ms;`
            default:
              return `--transition-${name}-${prop}: ${value};`
          }
        })
        .join("")
    })
    .join("")
}

const transition = () => {}
const animation = () => {}
