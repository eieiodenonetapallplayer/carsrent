<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Showgallery from "./components/Showgallery.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";
import AboutUs from "./components/AboutUs.vue";
import Snowfall from "./components/Snowfall.vue";
import Paymentinfo from "./components/Paymentinfo.vue";
import CarShowcase from "./components/CarShowcase.vue";
import Daily from "./components/Daily.vue";
import Week from "./components/Week.vue";
import Mousecursor from "./components/CursorFollower.vue";
import Month from "./components/Month.vue";

let lastMessageTime = 0;
const messageCooldown = 500;

const isDevToolsOpen = ref(false);
const showSnowfall = ref(localStorage.getItem("showSnowfall") === "true");
const isLoading = ref(true);
const scrollProgress = ref(0);
const currentTime = ref("");

const randomMessages = [
  "✨ Hi There!",
  "🌟 Message from 4levy",
  "💫 click again eiei",
  "⭐ Premium service",
  "🌠 Your journey begins here",
  "✨ First class experience",
  "⚜️ Royal treatment awaits",
];

const showRandomMessage = (e) => {
  const currentTime = Date.now();
  if (currentTime - lastMessageTime < messageCooldown) return;

  lastMessageTime = currentTime;
  const existingMessage = document.querySelector(".floating-message");
  if (existingMessage) existingMessage.remove();

  const message = document.createElement("div");
  message.className = "floating-message";
  message.textContent =
    randomMessages[Math.floor(Math.random() * randomMessages.length)];

  message.style.left = `${e.clientX}px`;
  message.style.top = `${e.clientY}px`;

  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 2000);
};

const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString("th-TH");
};

const blockDevTools = () => {
  let lastAlertTime = 0;
  const cooldownPeriod = 3000;

  const showSecurityAlert = (message, autoClose = false) => {
    const currentTime = Date.now();
    if (currentTime - lastAlertTime < cooldownPeriod) return;

    lastAlertTime = currentTime;
    const existingAlert = document.querySelector(".security-alert");
    if (existingAlert) return;

    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";

    const isVisibilityAlert =
      message === "Page visibility changed. Security check in progress...";

    const modal = document.createElement("div");
    modal.className = "security-alert";
    modal.innerHTML = `
      <div class="alert-content animated">
        <div class="alert-icon">⚠️</div>
        <h2>Security Alert</h2>
        <p>${message}</p>
        ${!isVisibilityAlert ? "<button>Understood</button>" : ""}
      </div>
    `;
    document.body.appendChild(modal);
    const alertContent = modal.querySelector(".alert-content");
    const button = modal.querySelector("button");

    const closeAlert = () => {
      alertContent.classList.remove("animated");
      alertContent.classList.add("fade-out");

      document.body.style.overflow = "";
      document.body.style.pointerEvents = "";

      if (button) {
        button.removeEventListener("click", closeAlert);
      }

      setTimeout(() => {
        modal.remove();
      }, 400);
    };

    if (button) {
      button.focus();
      button.addEventListener("click", closeAlert);
    }

    modal.style.pointerEvents = "auto";
    alertContent.style.pointerEvents = "auto";

    if (isVisibilityAlert || autoClose) {
      setTimeout(closeAlert, 2000);
    }

    if (button) {
      button.focus();
      button.addEventListener("click", closeAlert);
    }

    modal.style.pointerEvents = "auto";

    if (isVisibilityAlert || autoClose) {
      setTimeout(closeAlert, 2000);
    }
  };

  let reloadAttempts = 0;
  const maxReloadAttempts = 3;
  let lastReloadTime = 0;
  const reloadCooldown = 5000;

  const detectDevTools = () => {
    try {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold =
        window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        const currentTime = Date.now();
        if (currentTime - lastReloadTime < reloadCooldown) return;
        if (reloadAttempts < maxReloadAttempts) {
          isDevToolsOpen.value = true;
          showSecurityAlert("Developer tools detected! Access restricted.");
          lastReloadTime = currentTime;
          reloadAttempts++;
          window.location.href = window.location.href;
        }
      }
    } catch (error) {
      console.error("Detection error:", error);
    }
  };

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.shiftKey && e.key === "J") ||
      (e.ctrlKey && e.key === "U") ||
      (e.ctrlKey && e.key === "S") ||
      (e.ctrlKey && e.key === "P")
    ) {
      e.preventDefault();
      showSecurityAlert("Warning: Developer tools access is restricted!");
    }
  });

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showSecurityAlert("Right-click is disabled for security reasons");
  });

  const interval = setInterval(detectDevTools, 1000);
  window.addEventListener("resize", detectDevTools);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      showSecurityAlert(
        "Page visibility changed. Security check in progress...",
        true
      );
    }
  });

  return () => {
    clearInterval(interval);
    window.removeEventListener("resize", detectDevTools);
  };
};

const toggleSnowfall = () => {
  showSnowfall.value = !showSnowfall.value;
  localStorage.setItem("showSnowfall", showSnowfall.value.toString());
};

const updateScrollProgress = () => {
  const winScroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (winScroll / height) * 100;
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
  const saved = localStorage.getItem("showSnowfall");
  document.addEventListener("click", showRandomMessage);
  showSnowfall.value = saved === "true";
  blockDevTools();

  setTimeout(() => {
    isLoading.value = false;
  }, 2000);

  window.addEventListener("scroll", updateScrollProgress);
});

onUnmounted(() => {
  document.removeEventListener("click", showRandomMessage);
  window.removeEventListener("scroll", updateScrollProgress);
});
</script>

<template>
  <div class="clock">{{ currentTime }}</div>
  <Transition name="fade">
    <div v-if="isLoading" class="preloader">
      <div class="loader">
        <Mousecursor />
        <div class="loader-content">ALPHARD</div>
      </div>
    </div>
  </Transition>

  <div class="scroll-progress" :style="{ width: `${scrollProgress}%` }"></div>
  <Mousecursor />
  <router-view>
    <template #default>
      <div class="app-wrapper" :class="{ loaded: !isLoading }">
        <Header />

        <main class="main-content">
          <Body />
          <AboutUs />
          <Showgallery />
          <CarShowcase />
          <Daily />
          <Week />
          <Month />
          <Paymentinfo />
          <Contact />
        </main>

        <Footer />

        <button
          class="snowfall-toggle"
          @click="toggleSnowfall"
          :title="showSnowfall ? 'Disable snowfall' : 'Enable snowfall'"
        >
          <i class="fas" :class="showSnowfall ? 'fa-snowflake' : 'fa-sun'"></i>
        </button>

        <Transition name="fade">
          <Snowfall v-if="showSnowfall" />
        </Transition>

        <a
          href="#top"
          class="scroll-top"
          :class="{ visible: scrollProgress > 20 }"
        >
          <i class="fas fa-arrow-up"></i>
        </a>
      </div>
    </template>
  </router-view>
</template>

<style>
* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #141414;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  position: relative;
  width: 120px;
  height: 120px;
}

.loader-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  letter-spacing: 3px;
  color: #d4af37;
  white-space: nowrap;
  text-transform: uppercase;
  animation: pulse 1.5s ease-in-out infinite;
}

.loader::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid rgba(212, 175, 55, 0.2);
  border-radius: 50%;
  border-top-color: #d4af37;
  animation: spin 1s ease-in-out infinite;
}

.loader::after {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 3px solid rgba(212, 175, 55, 0.1);
  border-radius: 50%;
  animation: spin 2s ease-in-out infinite reverse;
}

@keyframes pulse {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(to right, #bf953f, #d4af37);
  z-index: 1000;
  transition: width 0.3s ease;
}

.content-loaded {
  animation: fadeIn 1s ease-out;
}

.app-wrapper {
  background: radial-gradient(
    circle at center,
    rgba(30, 30, 30, 0.95),
    rgba(20, 20, 20, 0.98)
  );
  perspective: 1000px;
}

.main-content {
  transform-style: preserve-3d;
  will-change: transform;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

::-webkit-scrollbar {
  width: 8px;
  background: rgba(20, 20, 20, 0.8);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #bf953f, #d4af37);
  border-radius: 4px;
}

.snowfall-toggle {
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 60px;
  }

  .snowfall-toggle {
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px;
}

body {
  margin: 0;
  padding: 0;
  color: #fff;
  overflow-y: scroll;
}

html {
  scroll-behavior: smooth;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.security-alert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  animation: fadeIn 0.4s ease;
}

.alert-content {
  background: #141414;
  border: 1px solid #d4af37;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s ease;
}

.alert-content.animated {
  animation: popIn 0.4s ease;
}

.alert-content.fade-out {
  opacity: 0;
  transform: scale(0.7);
}

.clock {
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 4px;
  color: #d4af37;
  font-size: 1.1rem;
  backdrop-filter: blur(5px);
  z-index: 1000;
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;
}

.clock:hover {
  border-color: #d4af37;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
}

@media (max-width: 768px) {
  .clock {
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes popIn {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.alert-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: shake 0.5s ease;
}

.alert-content h2 {
  color: #d4af37;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.alert-content p {
  color: #fff;
  margin-bottom: 1.5rem;
}

.alert-content button {
  background: #d4af37;
  border: none;
  color: #141414;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.alert-content button:hover {
  background: #bf953f;
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  75% {
    transform: translateX(10px);
  }
}

.snowfall-toggle {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(212, 175, 55, 0.3);
  background: rgba(20, 20, 20, 0.8);
  color: #d4af37;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
}

.snowfall-toggle:hover {
  transform: scale(1.1);
  border-color: #d4af37;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
}

.snowfall-toggle i {
  font-size: 1.5rem;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
  }
  to {
    text-shadow: 0 0 15px rgba(212, 175, 55, 0.8);
  }
}

.floating-message {
  position: fixed;
  transform: translate(-50%, -50%);
  background: linear-gradient(45deg, #ffd700, #bf953f, #d4af37, #fbf5b7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  pointer-events: none;
  z-index: 9999;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5),
    0 0 20px rgba(212, 175, 55, 0.3), 0 0 30px rgba(212, 175, 55, 0.2);
  animation: floatUp 2s ease-out forwards, glowPulse 2s ease-in-out infinite;
  white-space: nowrap;
}

@keyframes glowPulse {
  0% {
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5),
      0 0 20px rgba(212, 175, 55, 0.3), 0 0 30px rgba(212, 175, 55, 0.2);
  }
  50% {
    text-shadow: 0 0 15px rgba(212, 175, 55, 0.7),
      0 0 25px rgba(212, 175, 55, 0.5), 0 0 35px rgba(212, 175, 55, 0.3);
  }
  100% {
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5),
      0 0 20px rgba(212, 175, 55, 0.3), 0 0 30px rgba(212, 175, 55, 0.2);
  }
}

@keyframes floatUp {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }
  10% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
  20% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -100%) scale(0.8);
  }
}
</style>
