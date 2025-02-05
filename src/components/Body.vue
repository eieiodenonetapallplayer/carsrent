<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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

const images = [
  'https://sv1.img.in.th/iQQSsr.jpeg',  
  'https://sv1.img.in.th/iQQnEk.jpeg',
  'https://sv1.img.in.th/iQQuWl.jpeg',
  'https://sv1.img.in.th/iQQKrt.jpeg'
]

const currentImageIndex = ref(0)
const nextImageIndex = ref(0)
const isTransitioning = ref(false)
const intervalId = ref(null)

const changeImage = (index) => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  nextImageIndex.value = index
  
  setTimeout(() => {
    currentImageIndex.value = nextImageIndex.value
    isTransitioning.value = false
  }, 1000)
}

const nextImage = () => {
  const nextIndex = (currentImageIndex.value + 1) % images.length
  changeImage(nextIndex)
}

const prevImage = () => {
  const prevIndex = (currentImageIndex.value - 1 + images.length) % images.length
  changeImage(prevIndex)
}

const goToImage = (index) => {
  changeImage(index)
}

onMounted(() => {
  images.forEach(src => {
    const img = new Image()
    img.src = src
  })
  intervalId.value = setInterval(nextImage, 5000)
})

onUnmounted(() => {
  if (intervalId.value) clearInterval(intervalId.value)
})
</script>

<template>
  <div 
    class="body-container" 
    :style="{ backgroundImage: `url(${images[currentImageIndex]})` }"
    :class="{ 'transitioning': isTransitioning }"
  >
    <button class="nav-btn prev" @click="prevImage">❮</button>
    <button class="nav-btn next" @click="nextImage">❯</button>
    
    <div class="content-wrapper">
      <div class="hero-content">
        <h1 class="main-title">Premium Car Rental</h1>
        <p class="subtitle">เราผู้ให้บริการรเราผู้ให้บริการเช่ารถพรีเมี่ยมอันดับหนึ่งในประเทศไทย
        </p>
        <button class="cta-button" @click="scrollToAbout">
          เกี่ยวกับเรา
        <span class="button-glow"></span>
      </button>
      </div>

      <div class="scroll-indicator">
        <span class="scroll-text">Scroll Down</span>
        <span class="scroll-arrow">↓</span>
      </div>
    </div>

    <div class="dots">
      <span 
        v-for="(_, index) in images" 
        :key="index" 
        class="dot"
        :class="{ active: index === currentImageIndex }"
        @click="goToImage(index)"
      ></span>
    </div>
  </div>
</template>

<style scoped>

.body-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: background-image 1s cubic-bezier(0.4, 0, 0.2, 1);
}


.body-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
  opacity: 0.6;
  transition: opacity 1s ease;
}

.body-container.transitioning::before {
  opacity: 0.8;
}

.hero-content {
  position: relative;
  text-align: center;
  z-index: 1;
  padding: 2rem;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  box-shadow: 
    0 0 20px rgba(212, 175, 55, 0.1),
    0 0 40px rgba(212, 175, 55, 0.1);
  animation: floatEffect 6s ease-in-out infinite;
}

.main-title {
  font-size: 6rem;
  font-weight: 700;
  position: relative;
  color: transparent;
  background: linear-gradient(
    135deg,
    #ffd700 0%,
    #D4AF37 25%,
    #C5A028 50%,
    #D4AF37 75%,
    #ffd700 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 1rem;
  letter-spacing: 8px;
  animation: shine 3s linear infinite, glow 2s ease-in-out infinite alternate;
  text-shadow: 
    0 0 10px rgba(212, 175, 55, 0.3),
    0 0 20px rgba(212, 175, 55, 0.3),
    0 0 30px rgba(212, 175, 55, 0.3);
  transform-style: preserve-3d;
  transform: perspective(1000px);
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 2;
}

.scroll-indicator {
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #D4AF37;
  opacity: 0.8;
  transition: all 0.3s ease;
  z-index: 3;
}

.scroll-text {
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.scroll-arrow {
  font-size: 1.5rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.subtitle {
  font-size: 1.5rem;
  color: transparent;
  letter-spacing: 4px;
  animation: fadeInUp 1s ease-out 0.3s backwards, shimmer 3s infinite;
  text-shadow: 
    0 0 5px rgba(192, 178, 131, 0.5),
    0 0 10px rgba(192, 178, 131, 0.3);
  background: linear-gradient(
    90deg,
    #C0B283 0%,
    #D4AF37 50%,
    #C0B283 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
}

.cta-button {
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  letter-spacing: 2px;
  color: #D4AF37;
  background: transparent;
  border: 2px solid #D4AF37;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  z-index: 1;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 175, 55, 0.2),
    transparent
  );
  transition: 0.5s;
}

.cta-button:hover {
  color: #ffffff;
  background: #D4AF37;
  border-color: #D4AF37;
  box-shadow: 
    0 0 10px rgba(212, 175, 55, 0.5),
    0 0 20px rgba(212, 175, 55, 0.3);
  transform: translateY(-2px);
}

.cta-button:hover::before {
  left: 100%;
}

.button-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(212, 175, 55, 0.1) 0%,
    transparent 70%
  );
  animation: rotate 4s linear infinite;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #D4AF37;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 2;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.nav-btn:hover {
  background: rgba(212, 175, 55, 0.3);
  color: white;
  opacity: 1;
  transform: translateY(-50%) scale(1.1);
}

.prev { left: 1rem; }
.next { right: 1rem; }

.dots {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dot.active {
  background: #D4AF37;
  transform: scale(1.3);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
}

@keyframes shine {
  to { background-position: 200% center; }
}

@keyframes glow {
  from {
    text-shadow: 
      0 0 10px rgba(212, 175, 55, 0.3),
      0 0 20px rgba(212, 175, 55, 0.3),
      0 0 30px rgba(212, 175, 55, 0.3);
  }
  to {
    text-shadow: 
      0 0 20px rgba(212, 175, 55, 0.5),
      0 0 40px rgba(212, 175, 55, 0.5),
      0 0 60px rgba(212, 175, 55, 0.5);
  }
}

@keyframes shimmer {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes floatEffect {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .nav-btn {
    padding: 0.8rem;
    font-size: 1.2rem;
  }

  .main-title {
    font-size: 4rem;
    letter-spacing: 4px;
  }

  .subtitle {
    font-size: 1.2rem;
    letter-spacing: 2px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>