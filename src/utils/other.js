/** 复制内容至剪贴板 */
export function copy(value) {
  return new Promise((resolve, reject) => {
    let copyTextArea = null;
    try {
      copyTextArea = createTextArea(value);
      copyTextArea.select();
      document.execCommand('copy');
      resolve(value);
    } catch (e) {
      reject(e);
    } finally {
      if (copyTextArea && copyTextArea.parentNode) {
        copyTextArea.parentNode.removeChild(copyTextArea);
      }
    }
  });
}

function createTextArea(value) {
  let copyTextArea = null;
  copyTextArea = document.createElement('textarea');
  copyTextArea.style.height = '0px';
  copyTextArea.style.opacity = '0';
  copyTextArea.style.width = '0px';
  document.body.appendChild(copyTextArea);
  copyTextArea.value = value;
  return copyTextArea;
}
