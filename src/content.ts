document.addEventListener("DOMContentLoaded", (event) => {
  let title = document.title;
  let metaDescription = (
    document.querySelector('meta[name="description"]') as HTMLMetaElement
  )?.content;

  chrome.runtime.sendMessage({
    action: "extractedData",
    data: { title, metaDescription },
  });
});
