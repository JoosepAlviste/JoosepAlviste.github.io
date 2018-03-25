/**
 * Copy given text to the clipboard. Returns `true` when the copying was
 * successful and `false` when something went wrong and the copying was
 * unsuccessful.
 *
 * @param {string} text
 * @returns {boolean}
 */
export const copyToClipboard = text => {
  const textArea = document.createElement('textarea')

  // Make the text area as invisible as possible, avoiding flash rendering
  textArea.style.position = 'fixed'
  textArea.style.top = '0'
  textArea.style.left = '0'
  textArea.style.width = '2em'
  textArea.style.height = '2em'
  textArea.style.padding = '0'
  textArea.style.border = 'none'
  textArea.style.outline = 'none'
  textArea.style.boxShadow = 'none'
  textArea.style.background = 'transparent'

  textArea.value = text
  document.body.appendChild(textArea)
  textArea.select()

  try {
    return document.execCommand('copy')
  } catch (err) {
    return false
  } finally {
    document.body.removeChild(textArea)
  }
}
