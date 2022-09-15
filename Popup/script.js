function init({document, popupTitle, verifyTitle, cancelTitle, onVerify, onCancel, router, docId, targetUid, approval}) {
    if (!document) return;
    const popupEl = document.querySelector("#popup")
    popupEl.style.width = 'fit-content'
    popupEl.style.left = '0px'
    popupEl.style.left = '0px'
    popupEl.querySelector(".popTitle").innerHTML = popupTitle
    
    cancelTitle
      ? (
        popupEl.querySelector(".popCancel").innerHTML = cancelTitle,
        popupEl.querySelector(".popCancel").style.display = "block"
    ) : popupEl.querySelector(".popCancel").style.display = "none"
  
    verifyTitle
      ? (
        popupEl.querySelector(".popVerify").innerHTML = verifyTitle,
        popupEl.querySelector(".popVerify").style.display = "block"
    ) : popupEl.querySelector(".popVerify").style.display = "none"
  
    onVerify && popupEl.querySelector(".popVerify").addEventListener("click", () => {onVerify({document, router, targetUid, docId, approval})})
    onCancel
      ? popupEl.querySelector(".popCancel").addEventListener("click", () => {onCancel(document, router, docId)})
      : popupEl.querySelector(".popCancel").addEventListener("click", () => {shutdown(document)})
  
    !onVerify && autoShutdown(document)
  
  }
  
  function shutdown(document) {
    if (!document) return;
    const popupEl = document.querySelector("#popup")
    popupEl.style.width = '0px'
    popupEl.style.left = '-200px'
    popupEl.style.left = '-200px'
  }
  
  function autoShutdown(document) {
    setTimeout(() => {shutdown(document)}, 3000)
  }
  
  
  export default {
    init,
    shutdown
  };
  