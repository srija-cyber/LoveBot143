// Toggle Chatbot Display
function toggleChat() {
    var chatContainer = document.querySelector('.chat-container');
    chatContainer.style.display = chatContainer.style.display === "none" || chatContainer.style.display === "" ? "block" : "none";
}