import "../styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { previewSource: 'open' }
};
window.addEventListener('load', () => {
  let loc = window.location.href
  showCodeSamples()

  window.setInterval(() => {
    let newLoc = window.location.href

    if (newLoc !== loc) {
      loc = newLoc
      showCodeSamples()
    }
  }, 300)
})

function showCodeSamples() {
  try {
    const docs = document.querySelectorAll('.sbdocs')

      ;[].forEach.call(docs, (el) => {
        const buttons = el.querySelectorAll('button')
        const codeButton = [].find.call(buttons, (el) => el.textContent === 'Show code')
        if (codeButton) {
          codeButton.click()
        }
      })
  } catch (e) {
    console.warn(e)
  }
}