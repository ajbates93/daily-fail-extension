const redirectRule: chrome.declarativeNetRequest.Rule = {
  id: 1,
  priority: 1,
  action: {
    type: chrome.declarativeNetRequest.RuleActionType.REDIRECT,
    redirect: {
      url: "https://www.theguardian.com",
    },
  },
  condition: {
    urlFilter: "||dailymail.co.uk",
    resourceTypes: [chrome.declarativeNetRequest.ResourceType.MAIN_FRAME],
  },
};

async function updateRedirectRules() {
  try {
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [redirectRule.id],
    });

    await chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [redirectRule],
    });

    console.log("Redirect rule updated successfully");
  } catch (error) {
    console.error("Error updating redirect rules", error);
  }
}

chrome.runtime.onInstalled.addListener(() => updateRedirectRules());

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "updateRedirectUrl") {
    redirectRule.action.redirect!.url = message.newUrl;
    updateRedirectRules();
    sendResponse({ success: true });
  }
});
