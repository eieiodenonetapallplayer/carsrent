<script setup>
import { ref } from "vue";

const cars = ref([
  {
    id: 1,
    name: "Toyota Alphard",
    model: "2018 30 Series",
    price: "฿4,639,000",
    engine: "2.5L Hybrid",
    power: "246 hp",
    transmission: "E-CVT",
    seats: "7",
    features: ["Leather Seats", "Moonroof", "Power Doors", "JBL Sound System"],
    images: [
      "https://sv1.img.in.th/iQkK6L.jpeg",
      "https://sv1.img.in.th/iQkuXY.jpeg",
      "https://sv1.img.in.th/iQkPk7.jpeg",
      "https://sv1.img.in.th/iQkLlp.jpeg",
      "https://sv1.img.in.th/iQkmd5.jpeg",
      "https://sv1.img.in.th/iQktfJ.jpeg",
      "https://sv1.img.in.th/iQkZ7y.jpeg",
    ],
  },
  {
    id: 2,
    name: "Toyota Vellfire",
    model: "2024 ZG",
    price: "฿4,739,000",
    engine: "2.5L Hybrid",
    power: "246 hp",
    transmission: "E-CVT",
    seats: "7",
    features: [
      "Twin Sunroof",
      "Digital Mirror",
      "Power Seats",
      "Premium Audio",
    ],
    images: [
      "/cars/vellfire1.jpg",
      "/cars/vellfire2.jpg",
      "/cars/vellfire3.jpg",
    ],
  },
  {
    id: 3,
    name: "Toyota Alphard Type Gold",
    model: "2024 Limited Edition",
    price: "฿5,239,000",
    engine: "2.5L Hybrid",
    power: "246 hp",
    transmission: "E-CVT",
    seats: "7",
    features: [
      "Executive Seats",
      "Panoramic View",
      "Premium Sound",
      "Gold Accents",
    ],
    images: [
      "/cars/alphard-gold1.jpg",
      "/cars/alphard-gold2.jpg",
      "/cars/alphard-gold3.jpg",
    ],
  },
  {
    id: 4,
    name: "Toyota Vellfire ZEN",
    model: "2024 Premium",
    price: "฿4,839,000",
    engine: "2.5L Hybrid",
    power: "246 hp",
    transmission: "E-CVT",
    seats: "7",
    features: [
      "Nappa Leather",
      "Digital Cockpit",
      "Massage Seats",
      "Ambient Lighting",
    ],
    images: [
      "/cars/vellfire-zen1.jpg",
      "/cars/vellfire-zen2.jpg",
      "/cars/vellfire-zen3.jpg",
    ],
  },
]);

const activeCarIndex = ref(0);
const activeImageIndex = ref(0);
const slideDirection = ref("right");
const isAnimating = ref(false);

const nextCar = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  slideDirection.value = "right";
  setTimeout(() => {
    activeCarIndex.value = (activeCarIndex.value + 1) % cars.value.length;
    activeImageIndex.value = 0;
    setTimeout(() => {
      isAnimating.value = false;
    }, 500);
  }, 500);
};

const prevCar = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  slideDirection.value = "left";
  setTimeout(() => {
    activeCarIndex.value =
      activeCarIndex.value === 0
        ? cars.value.length - 1
        : activeCarIndex.value - 1;
    activeImageIndex.value = 0;
    setTimeout(() => {
      isAnimating.value = false;
    }, 500);
  }, 500);
};
const nextImage = () => {
  activeImageIndex.value =
    (activeImageIndex.value + 1) %
    cars.value[activeCarIndex.value].images.length;
};

const prevImage = () => {
  activeImageIndex.value =
    activeImageIndex.value === 0
      ? cars.value[activeCarIndex.value].images.length - 1
      : activeImageIndex.value - 1;
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
  <div class="car-showcase">
    <div class="showcase-container">
      <button class="nav-btn prev" @click="prevCar">
        <i class="fas fa-chevron-left"></i>
      </button>

      <div
        class="car-display"
        :class="[isAnimating ? 'animating' : '', slideDirection]"
      >
        <div class="car-images">
          <img
            :src="cars[activeCarIndex].images[activeImageIndex]"
            :alt="cars[activeCarIndex].name"
          />
          <div class="image-navigation">
            <button class="image-nav-btn prev" @click="prevImage">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="image-nav-btn next" @click="nextImage">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div class="car-info">
          <h2>{{ cars[activeCarIndex].name }}</h2>
          <h3>{{ cars[activeCarIndex].model }}</h3>
          <div class="price">{{ cars[activeCarIndex].price }}</div>

          <div class="specs">
            <div class="spec-item">
              <i class="fas fa-engine"></i>
              <span>{{ cars[activeCarIndex].engine }}</span>
            </div>
            <div class="spec-item">
              <i class="fas fa-horse"></i>
              <span>{{ cars[activeCarIndex].power }}</span>
            </div>
            <div class="spec-item">
              <i class="fas fa-cogs"></i>
              <span>{{ cars[activeCarIndex].transmission }}</span>
            </div>
            <div class="spec-item">
              <i class="fas fa-chair"></i>
              <span>{{ cars[activeCarIndex].seats }} Seats</span>
            </div>
          </div>

          <div class="features">
            <h4>Key Features</h4>
            <ul>
              <li
                v-for="feature in cars[activeCarIndex].features"
                :key="feature"
              >
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button class="nav-btn next" @click="nextCar">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.car-showcase {
  padding: 4rem 2rem;
  background: rgba(20, 20, 20, 0.95);
  perspective: 1000px;
}

.showcase-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
}

.car-display {
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  padding: 2rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  align-items: start;
}

.car-display.animating {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.car-display.animating.right {
  transform: translateX(50px) scale(0.95) rotateY(-5deg);
}

.car-display.animating.left {
  transform: translateX(-50px) scale(0.95) rotateY(5deg);
}

.car-images {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
  width: 100%;
  z-index: 2;
}

.image-navigation {
  position: relative;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 3;
  padding: 1rem;
}

.image-nav-btn {
  background: rgba(20, 20, 20, 0.8);
  border: 2px solid rgba(212, 175, 55, 0.3);
  color: #D4AF37;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.image-nav-btn:hover {
  background: rgba(212, 175, 55, 0.2);
  border-color: #D4AF37;
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
}

.image-nav-btn:active {
  transform: scale(0.95);
}

.image-nav-btn i {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.image-navigation .prev:hover i {
  transform: translateX(-2px);
}

.image-navigation .next:hover i {
  transform: translateX(2px);
}


.car-images::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
}

.car-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  cursor: default;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center;
  display: block;
  pointer-events: none;
}

.car-images img:hover {
  transform: scale(1.05) translateZ(20px);
}

.image-dots {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.8rem;
  z-index: 2;
}

.image-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid rgba(212, 175, 55, 0.3);
}

.image-dots span.active {
  background: #d4af37;
  transform: scale(1.2);
  border-color: #d4af37;
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
}

.car-info {
  color: #fff;
  padding: 2.5rem;
  cursor: default;
  background: rgba(30, 30, 30, 0.95);
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.car-info:hover {
  transform: translateZ(10px);
  border-color: #d4af37;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.car-info h2 {
  font-size: 2.5rem;
  color: #d4af37;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.car-info h3 {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-weight: 300;
}

.price {
  font-size: 2rem;
  color: #d4af37;
  font-weight: bold;
  margin-bottom: 2.5rem;
  padding: 1.2rem;
  border: 2px solid #d4af37;
  border-radius: 12px;
  text-align: center;
  background: rgba(212, 175, 55, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.price:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
}

.specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.8rem;
  margin-bottom: 2.5rem;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.spec-item:hover {
  background: rgba(212, 175, 55, 0.1);
  transform: translateY(-2px);
}

.spec-item i {
  color: #d4af37;
  font-size: 1.3rem;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

.features {
  padding-top: 2rem;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
}

.features h4 {
  color: #d4af37;
  margin-bottom: 1.2rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 0.8rem 0;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.features li::before {
  content: "✦";
  color: #d4af37;
  margin-right: 0.8rem;
  font-size: 0.8rem;
}

.features li:hover {
  transform: translateX(5px);
  color: #d4af37;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(20, 20, 20, 0.9);
  border: 2px solid rgba(212, 175, 55, 0.3);
  color: #d4af37;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  background: rgba(212, 175, 55, 0.2);
  border-color: #d4af37;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

.nav-btn:active {
  transform: translateY(-50%) scale(0.95);
}

.nav-btn i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.prev {
  left: -25px;
}
.next {
  right: -25px;
}

.prev:hover i {
  transform: translateX(-3px);
}
.next:hover i {
  transform: translateX(3px);
}

@media (max-width: 1200px) {
  .car-display {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .car-images {
    aspect-ratio: 16/10;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
    
  .car-showcase {
    padding: 2rem 1rem;
  }

  .car-info h2 {
    font-size: 2rem;
  }

  .price {
    font-size: 1.5rem;
  }

  .car-images {
    aspect-ratio: 16/11;
  }

  .car-images img {
    height: 100%;
  }

  .nav-btn {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .specs {
    grid-template-columns: 1fr;
  }

  .car-info {
    padding: 1.5rem;
  }

  .car-images {
    aspect-ratio: 4/3;
  }

  .nav-btn {
    width: 35px;
    height: 35px;
    background: rgba(20, 20, 20, 0.95);
    border: 1px solid rgba(212, 175, 55, 0.5);
    }

.prev {
    left: 5px;
  }
  

  .next {
    right: 5px;
  }

  .nav-btn i {
    font-size: 1rem;
  }

  .car-images {
    aspect-ratio: 4/3;
  }
}
</style>