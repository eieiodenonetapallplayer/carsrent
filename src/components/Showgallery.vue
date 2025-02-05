<script setup>
import { ref } from 'vue';

const selectedImageIndex = ref(null);
const modalImage = ref(null);

const portfolioItems = [
  {
    id: 1,
    title: 'ผลงาน 1',
    images: [
      'https://img5.pic.in.th/file/secure-sv1/120520d64761c535a.jpg',
      'https://img2.pic.in.th/pic/20d045bad6ab9d64d.jpg',
      'https://img5.pic.in.th/file/secure-sv1/3269055d07360bb42.jpg',
      'https://img5.pic.in.th/file/secure-sv1/488a6124330ce034e.jpg',
    ]
  },
  {
    id: 2,
    title: 'ผลงาน 2',
    images: [
      'https://img5.pic.in.th/file/secure-sv1/147477f83b1304a81.jpg',
      'https://img2.pic.in.th/pic/2cd93fd493d108d8a.jpg',
      'https://img2.pic.in.th/pic/378f317c93d0afb6c.jpg',
      'https://img2.pic.in.th/pic/49a27256e3b179563.jpg',
    ]
  },
  {
    id: 3,
    title: 'ผลงาน 3',
    images: [
      'https://img2.pic.in.th/pic/1ff28f3733f08de56.jpg',
      'https://img5.pic.in.th/file/secure-sv1/2ea0d92cba4367c94.jpg',
      'https://img2.pic.in.th/pic/3c5829654b9956ed0.jpg',
      'https://img5.pic.in.th/file/secure-sv1/4720aed3940bcaf3d.jpg',
    ]
  },
  {
    id: 4,
    title: 'ผลงาน 4',
    images: [
      'https://img5.pic.in.th/file/secure-sv1/120520d64761c535a.jpg',
      'https://img2.pic.in.th/pic/20d045bad6ab9d64d.jpg',
      'https://img5.pic.in.th/file/secure-sv1/3269055d07360bb42.jpg',
      'https://img5.pic.in.th/file/secure-sv1/488a6124330ce034e.jpg',
    ]
  },
  {
    id: 5,
    title: 'ผลงาน 5',
    images: [
      'https://img5.pic.in.th/file/secure-sv1/147477f83b1304a81.jpg',
      'https://img2.pic.in.th/pic/2cd93fd493d108d8a.jpg',
      'https://img2.pic.in.th/pic/378f317c93d0afb6c.jpg',
      'https://img2.pic.in.th/pic/49a27256e3b179563.jpg',
    ]
  },
  {
    id: 6,
    title: 'ผลงาน 6',
    images: [
      'https://img2.pic.in.th/pic/1ff28f3733f08de56.jpg',
      'https://img5.pic.in.th/file/secure-sv1/2ea0d92cba4367c94.jpg',
      'https://img2.pic.in.th/pic/3c5829654b9956ed0.jpg',
      'https://img5.pic.in.th/file/secure-sv1/4720aed3940bcaf3d.jpg',
    ]
  },


  // Add more if needed 
];

const showModal = (image) => {
  modalImage.value = image;
};

const hideModal = () => {
  modalImage.value = null;
};

const toggleImage = (index) => {
  selectedImageIndex.value = selectedImageIndex.value === index ? null : index;
};
</script>

<template>
  <div class="divider-container">
    <div class="luxury-divider">
      <span class="divider-line"></span>
      <span class="divider-icon">✦</span>
      <span class="divider-line"></span>
    </div>
  </div>
    <section id="gallery" class="gallery-section">
      <h2 class="portfolio-title">Our Portfolio</h2>
      
      <div class="portfolio-container">
        <div v-for="(item, index) in portfolioItems" :key="item.id" class="portfolio-item">
          <button 
            class="portfolio-btn"
            :class="{ active: selectedImageIndex === index }"
            @click="toggleImage(index)"
          >
            {{ item.title }}
            <span class="btn-line"></span>
          </button>
  
          <transition name="slide">
            <div v-if="selectedImageIndex === index" class="images-grid">
              <div v-for="(image, imageIndex) in item.images" 
                   :key="imageIndex" 
                   class="grid-item"
                   @click="showModal(image)">
                <img :src="image" :alt="`${item.title} - ${imageIndex + 1}`">
              </div>
            </div>
          </transition>
        </div>
      </div>
  
      <!-- Full Screen Modal -->
      <transition name="fade">
        <div v-if="modalImage" class="modal" @click="hideModal">
          <div class="modal-content">
            <img :src="modalImage" alt="Full size image">
            <button class="modal-close" @click="hideModal">&times;</button>
          </div>
        </div>
      </transition>
    </section>
  </template>


<style scoped>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
}

.modal-content img {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
  object-fit: contain;
}

.modal-close {
  position: absolute;
  top: -40px;
  right: -40px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.modal-close:hover {
  color: #D4AF37;
  transform: scale(1.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.grid-item {
  cursor: pointer;
}

.gallery-section {
  padding: 6rem 2rem;
  text-align: center;
  background: rgba(20, 20, 20, 0.98);
}

.portfolio-title {
  font-size: 3rem;
  background: linear-gradient(to right, #BF953F, #FCF6BA, #D4AF37, #FBF5B7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 3rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: 
    0 0 10px rgba(212, 175, 55, 0.3),
    0 0 20px rgba(212, 175, 55, 0.3),
    0 0 30px rgba(212, 175, 55, 0.3);
  animation: glow 2s ease-in-out infinite alternate;
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
      0 0 30px rgba(212, 175, 55, 0.5),
      0 0 40px rgba(212, 175, 55, 0.5);
  }
}

.portfolio-text {
  font-size: 1.2rem;
  color: #C0B283;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: inline-block;
}

.portfolio-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}



.portfolio-text:hover {
  color: #D4AF37;
  background: rgba(212, 175, 55, 0.1);
}

.portfolio-text.active {
  color: #D4AF37;
  background: rgba(212, 175, 55, 0.15);
}

.portfolio-btn {
  background: none;
  border: none;
  font-size: 1.4rem;
  color: #C0B283;
  cursor: pointer;
  padding: 1rem 2rem;
  position: relative;
  transition: all 0.3s ease;
  width: 200px;
  margin-bottom: 1rem;
}


.portfolio-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #D4AF37;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.portfolio-btn:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  width: 50px;
  height: 1px;
  background: rgba(212, 175, 55, 0.2);
  transform: translateX(-50%);
}


.portfolio-btn:hover,
.portfolio-btn.active {
  color: #D4AF37;
  transform: translateY(-2px);
}


.portfolio-btn:hover::after,
.portfolio-btn.active::after {
  width: 80%;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Changed to 1 column */
  gap: 1.5rem;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(20, 20, 20, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  max-width: 1200px;
}


.grid-item {
  position: relative;
  width: 100%;
  padding-bottom: 40%; 
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;
}

.grid-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-5px);
  border-color: #D4AF37;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.15);
}



.grid-item:hover {
  transform: scale(1.02);
  border-color: #D4AF37;
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
}

.grid-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.grid-item:hover img {
  transform: scale(1.1);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.grid-item:hover img {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .grid-item {
    padding-bottom: 56.25%; 
  }

  .portfolio-nav {
    gap: 1rem;
  }

  .portfolio-btn {
    font-size: 1.2rem;
    width: 180px;
    margin-bottom: 0.8rem;
  }
}

@media (max-width: 480px) {
  .portfolio-title {
    font-size: 2rem;
  }

  .portfolio-btn {
    font-size: 1rem;
  }
}
</style>
