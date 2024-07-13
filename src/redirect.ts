chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "metaInfo") {
    // let's come back to this for the AI service. for now we just redirect to the guardian
    console.log("Received meta info: ", message.data);
    window.location.href = "https://www.theguardian.com";
  }
});
