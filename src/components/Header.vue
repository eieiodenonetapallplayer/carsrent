<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToGallery = () => {
  router.push({ path: '/', hash: '#gallery' })
  setTimeout(() => {
    const gallerySection = document.querySelector('.gallery-section')
    if (gallerySection) {
      gallerySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }, 100)
}

const scrollToContact = () => {
  router.push({ path: '/', hash: '#contact' })
  setTimeout(() => {
    const contactSection = document.querySelector('.contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }, 100)
}

const scrollToAbout = () => {
  router.push({ path: '/', hash: '#about' })
  setTimeout(() => {
    const aboutSection = document.querySelector('.about-section')
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }, 100)
}

const scrollToPayment = () => {
  router.push({ path: '/', hash: '#payment' })
  setTimeout(() => {
    const paymentSection = document.querySelector('.payment-section')
    if (paymentSection) {
      paymentSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }, 100)
}

const scrollToDaily = () => {
  router.push({ path: '/daily' })
  setTimeout(() => {
    const dailySection = document.querySelector('.daily-rentals')
    if (dailySection) {
      dailySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }, 100)
}

const scrollToWeekly = () => {
  router.push({ path: '/Week' })
  setTimeout(() => {
    const dailySection = document.querySelector('.weekly-rentals')
    if (dailySection) {
      dailySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }, 100)
}

const scrollToMonthly = () => {
  router.push({ path: '/Month' })
  setTimeout(() => {
    const dailySection = document.querySelector('.Monthly-rentals')
    if (dailySection) {
      dailySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }, 100)
}

const currentLang = ref('TH');
const isLangDropdownOpen = ref(false);
const isMenuOpen = ref(false);
const isLangOpen = ref(true);
const isScrolled = ref(false);
const isDropdownOpen = ref(false);
const prevScrollPos = ref(window.pageYOffset);
const isHeaderVisible = ref(true);

const toggleLang = (lang) => {
  currentLang.value = lang;
  document.documentElement.lang = lang;
  isLangOpen.value = false;
  
  if (lang === 'en') {
    window.location.reload();
  }
};

const isDarkTheme = ref(true);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  document.documentElement.classList.toggle("light-theme");
  localStorage.setItem("theme", isDarkTheme.value ? "dark" : "light");
};

const handleClickOutside = (event) => {
  const langSelect = event.target.closest('.lang-select');
  if (!langSelect) {
    isLangDropdownOpen.value = false;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};


const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;
  isScrolled.value = currentScrollPos > 50;
  isHeaderVisible.value =
    prevScrollPos.value > currentScrollPos || currentScrollPos < 50;
  prevScrollPos.value = currentScrollPos;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener('click', handleClickOutside);

  const savedLang = localStorage.getItem('selectedLang');
  if (savedLang) {
    currentLang.value = savedLang;
  }

  const savedTheme = localStorage.getItem("theme") || "dark";
  isDarkTheme.value = savedTheme === "dark";
  if (!isDarkTheme.value) {
    document.documentElement.classList.add("light-theme");
  }
});

onUnmounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header
    class="header"
    :class="{
      scrolled: isScrolled,
      'header-hidden': !isHeaderVisible,
    }"
  >
    <nav class="nav">
      <div class="brand">
        <img src="../assets/Logo/Logo3.png" alt="Logo" class="logo-img" />
        <div class="logo-container">
          <span class="logo-text">Logo!</span>
          <div class="logo-line"></div>
          <span class="logo-subtitle">Hello there message from Ceo</span>
        </div>
      </div>

      <ul class="nav-links" :class="{ active: isMenuOpen }">
        <li>
          <a href="/" class="nav-link"><span>หน้าแรก</span></a>
        </li>
        <li>
          <a @click="scrollToGallery" class="nav-link"><span>แกลลอรี่</span></a>
        </li>
        <li class="dropdown">
          <a
            href="/#"
            class="nav-link dropdown-trigger"
            @click.prevent="toggleDropdown"
          >
            <span>อัตราค่าเช่า</span>
            <svg
              class="dropdown-arrow"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              :class="{ rotate: isDropdownOpen }"
            >
              <path fill="currentColor" d="M7 10l5 5 5-5z" />
            </svg>
          </a>
          <ul class="dropdown-menu" :class="{ active: isDropdownOpen }">
            <li><a @click="scrollToDaily" style="cursor: pointer;">รายวัน</a></li>
            <li><a @click="scrollToWeekly">รายสัปดาห์</a></li>
            <li><a @click="scrollToMonthly">รายเดือน</a></li>
          </ul>
        </li>
        <li>
          <a @click="scrollToAbout" class="nav-link"><span>เกี่ยวกับเรา</span></a>
        </li>
        <li>
          <a @click="scrollToPayment" class="nav-link"><span>วิธีชำระเงิน</span></a>
        </li>
        <li>
          <a @click="scrollToContact" class="nav-link"><span>ติดต่อเรา</span></a>
        </li>
      </ul>
      <span class="divider-icon">✦</span>
      <div class="right-section">
        <div class="lang-select" @click.stop="isLangOpen = !isLangOpen">
    <span>{{ currentLang.toUpperCase() }}</span>
    <svg class="lang-arrow" viewBox="0 0 24 24" width="18" height="18">
      <path fill="currentColor" d="M7 10l5 5 5-5z" />
    </svg>
    <ul class="lang-dropdown" v-show="isLangOpen">
      <li><a href="#" @click.prevent="toggleLang('en')">EN</a></li>
      <li><a href="#" @click.prevent="toggleLang('th')">TH</a></li>
    </ul>
  </div>

        <button
          class="theme-toggle"
          @click="toggleTheme"
          aria-label="Toggle theme"
        >
          <svg
            v-if="isDarkTheme"
            class="moon-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              fill="currentColor"
              d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"
            />
          </svg>
          <svg
            v-else
            class="sun-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              fill="currentColor"
              d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"
            />
          </svg>
        </button>
      </div>

      <button
        class="menu-toggle"
        @click="toggleMenu"
        :class="{ active: isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
    <div class="divider-container">
    <div class="luxury-divider">
      <span class="divider-line"></span>
      <span class="divider-icon">✦</span>
      <span class="divider-line"></span>
    </div>
  </div>
  </header>

</template>

<style>
:root {
  --bg-color: #242424;
  --text-color: #ffffff;
}

:root.light-theme {
  --bg-color: #ffffff;
  --text-color: #242424;
}
</style>

<style scoped>

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  padding: 1rem;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header.scrolled {
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 20px rgba(212, 175, 55, 0.1);
}

.header.header-hidden {
  transform: translateY(-100%);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  transition: transform 0.3s ease;
}

.brand:hover {
  transform: translateY(-2px);
}

.brand:hover .logo-line {
  width: 100%;
}

.brand:hover .logo-subtitle {
  opacity: 1;
  transform: translateY(0);
}

.logo-img {
  width: 45px;
  height: 45px;
  transition: transform 0.3s ease;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(45deg, #D4AF37, #C5A028);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
}

.logo-line {
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #D4AF37, #C5A028);
  transition: width 0.3s ease;
}

.logo-subtitle {
  font-size: 0.8rem;
  color: #C0B283;
  opacity: 0;
  transform: translateY(-5px);
  transition: all 0.3s ease;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  height: 100%;
}

.nav-link {
  color: #C0B283;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  line-height: 1.5;
  display: flex;
  align-items: center;
}

.nav-link span {
  position: relative;
  display: inline-block;
  padding: 0.25rem 0;
}

.nav-link span::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #D4AF37;
  transition: width 0.3s ease;
}

.nav-link:hover span::after {
  width: 100%;
}

.nav-link:hover {
  color: #D4AF37;
}

.dropdown {
  position: relative;
  padding: 0.5rem 0;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 8px;
  padding: 0.8rem;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.1);
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-menu a {
  color: #C0B283;
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  display: block;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.dropdown-menu a:hover {
  color: #D4AF37;
  background: rgba(212, 175, 55, 0.05);
  transform: translateX(5px);
}

.right-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.lang-select {
  position: relative;
  color: #C0B283;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.3s ease;
}

.lang-select:hover {
  color: #D4AF37;
  background: rgba(212, 175, 55, 0.05);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 8px;
  padding: 0.8rem;
  min-width: 120px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.1);
}

.lang-select:hover .lang-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.theme-toggle {
  background: none;
  border: none;
  color: #C0B283;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: rgba(212, 175, 55, 0.05);
  color: #D4AF37;
  transform: rotate(30deg);
}

.menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(18, 18, 18, 0.98);
    flex-direction: column;
    padding: 6rem 2rem;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  .nav-links.active {
    transform: translateX(0);
  }

  .menu-toggle {
    display: block;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }

  .menu-toggle span {
    display: block;
    width: 25px;
    height: 2px;
    background: #D4AF37;
    margin: 5px 0;
    transition: 0.3s;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}
</style>