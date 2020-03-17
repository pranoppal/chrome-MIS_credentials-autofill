document.addEventListener('DOMContentLoaded', function() {
			chrome.tabs.executeScript(null,{code:"document.getElementById('username').value = 'pranoppal'"});
			chrome.tabs.executeScript(null,{code:"document.getElementById('password').value = 'changepassword'"});
});
// document.getElementById('username').value = 'pranoppal';
// document.getElementById('password').value = 'changepassword';