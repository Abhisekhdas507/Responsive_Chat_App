const sendBtn = document.querySelector("#sendBtn");
const messageInput = document.querySelector("#messageInput");
const chatMessages = document.querySelector("#chatMessages");
const toggleSidebar = document.querySelector("#toggleSidebar");
const sidebar = document.querySelector("#sidebar");
const darkModeToggle = document.querySelector("#darkModeToggle");
const userListContainer = document.querySelector('.user-list');
const menuIcon = document.querySelector(".menu-icon");
const rightPanel = document.querySelector(".right-panel");
const toggleRightPanelBtn = document.querySelector("#toggleRightPanel");
const closeRightPanelBtn = document.querySelector("#closeRightPanel");
const lightLogo = document.querySelector(".light-them-logo");
const darkLogo = document.querySelector(".dark-them-logo");


const botReplies = [
  "Hi there!",
  "How can I help you?",
  "That's interesting.",
  "Tell me more!",
  "Please hold on...",
  "I'm just a dummy bot 🙂",
];

const userData = [
  {
    id: 1,
    name: "Alice Johnson",
    message: "Hey! How’s it going? I was just thinking about our last conversation. It was really insightful!",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Bob Smith",
    message: "I’m good, just finished work! Thinking of grabbing coffee. Want to join?",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Clara Reynolds",
    message: "Anyone up for a quick meeting in 15 minutes to discuss tomorrow’s launch plan?",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    name: "David Chen",
    message: "Sure, give me 5 mins. Just finishing up a few edits on the report.",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 5,
    name: "Ella Martinez",
    message: "Loving the new update! The new animations and smooth scroll are really impressive.",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    id: 6,
    name: "Frank Thompson",
    message: "Thanks! Feedback is welcome. Let me know if there’s anything we should tweak before release.",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    id: 7,
    name: "Grace Liu",
    message: "Where’s the meeting link? I think I saw it earlier but I can’t find it now.",
    image: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    id: 8,
    name: "Henry Patel",
    message: "Just shared it in the thread. It should be right above Mia’s comment.",
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    id: 9,
    name: "Ivy Gomez",
    message: "Got it, joining now! Looking forward to hearing everyone’s thoughts on the proposal.",
    image: "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    id: 10,
    name: "Jack Lee",
    message: "Let’s keep it short today. Just a 10-minute sync to check progress.",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    id: 11,
    name: "Karen Baker",
    message: "No worries. Quick check-in is fine. I’ll update the team on the pending items.",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    id: 12,
    name: "Leo Kim",
    message: "I have a question on the report format. Are we using the new template or sticking to the old one?",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    id: 13,
    name: "Mia Thompson",
    message: "Shoot, Leo. What’s up? I think I used the new format but can double-check.",
    image: "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
    id: 14,
    name: "Nathan Rogers",
    message: "The numbers for Q2 look off. Should we recalculate them based on the revised inputs from finance?",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    id: 15,
    name: "Olivia Anderson",
    message: "I can take a look after the call. I think some of the input values might be outdated.",
    image: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    id: 16,
    name: "Paul Jackson",
    message: "Thanks Olivia! Appreciate you jumping in to verify it. Saves us a lot of time.",
    image: "https://randomuser.me/api/portraits/men/16.jpg"
  },
  {
    id: 17,
    name: "Queenie Brooks",
    message: "Should we plan a team lunch soon? It’s been a while since we’ve all met in person!",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    id: 18,
    name: "Ryan Adams",
    message: "Great idea, Friday works? There’s a new place downtown that looks amazing.",
    image: "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
    id: 19,
    name: "Sophia Morgan",
    message: "Count me in! I’ve been wanting to try that place ever since it opened.",
    image: "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
    id: 20,
    name: "Tom Davis",
    message: "I’ll check with the rest and confirm. Hopefully we can all block the same slot.",
    image: "https://randomuser.me/api/portraits/men/20.jpg"
  }
];



// Auto-scroll to bottom
function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add a message
function addMessage(text, sender) {
  const bubble = document.createElement("div");
  bubble.classList.add("chat-bubble", sender);
  bubble.textContent = text;
  chatMessages.appendChild(bubble);
  scrollToBottom();
}

// Simulate bot response with typing delay
function botReply() {
  const typing = document.createElement("div");
  typing.classList.add("chat-bubble", "bot");
  typing.textContent = "Bot is typing...";
  chatMessages.appendChild(typing);
  scrollToBottom();

  setTimeout(() => {
    typing.remove();
    const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
    addMessage(reply, "bot");
  }, 1000);
}

// Send message handler
function sendMessage() {
  const msg = messageInput.value.trim();
  if (msg !== "") {
    addMessage(msg, "user");
    messageInput.value = "";
    setTimeout(botReply, 500);
  }
}

sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  menuIcon.style.display = sidebar.classList.contains('collapsed') ? 'block' : 'none';
});

menuIcon.addEventListener("click", () => {
  sidebar.classList.remove("collapsed");
  menuIcon.style.display = 'none';
});

// Dark mode is active
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    console.log("dark on");
    lightLogo.style.display = 'none';
    darkLogo.style.display = 'block';

  } else {
    console.log("Dark mode is OFF");
    lightLogo.style.display = 'block';
    darkLogo.style.display = 'none';
  }
});

toggleRightPanelBtn.addEventListener('click', () => {
  rightPanel.classList.toggle('hidden');
  toggleRightPanelBtn.classList.remove('active');
});

closeRightPanelBtn.addEventListener('click', () => {
  rightPanel.classList.add('hidden');
  toggleRightPanelBtn.classList.add('active');
});

const mediaQuery = window.matchMedia('(max-width: 1280px)');

function handleMediaQueryChange(e) {
  if (e.matches) {
    // Screen is <= 1280px
    rightPanel.classList.add('hidden');
    toggleRightPanelBtn.classList.add('active');
    sidebar.classList.toggle("collapsed");
    menuIcon.style.display = sidebar.classList.contains('collapsed') ? 'block' : 'none';
  } else {
    // Screen is > 1280px
    rightPanel.classList.remove('hidden');
    toggleRightPanelBtn.classList.remove('active');
    sidebar.classList.remove("collapsed");
    menuIcon.style.display = 'none';
  }
}

// Run on load
handleMediaQueryChange(mediaQuery);

// Listen for changes
mediaQuery.addEventListener('change', handleMediaQueryChange);

// Right Side bar
userData.forEach(user => {
  const cardHTML = `
    <div class="user-card">
      <div class="user-card-img">
        <img src="${user.image}" alt="${user.name}">
      </div>
      <div class="user-card-text">
        <h3>${user.name}</h3>
        <p>${user.message}</p>
      </div>
    </div>
  `;
  userListContainer.insertAdjacentHTML('beforeend', cardHTML);
});
