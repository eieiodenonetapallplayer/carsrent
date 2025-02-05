<script setup>
import { ref } from 'vue';

const dailyRentals = ref([
  {
    id: 1,
    name: 'Toyota Alphard',
    model: '2024 Executive Lounge',
    price: '฿15,000',
    priceUnit: 'per day',
    engine: '2.5L Hybrid',
    transmission: 'E-CVT',
    seats: '7',
    features: ['Chauffeur Available', 'Insurance Included', 'Free Delivery', 'Unlimited Mileage'],
    image: '../src/assets/cars/alphard1.jpg',
    available: true
  },
  {
    id: 2,
    name: 'Toyota Vellfire',
    model: '2024 ZG',
    price: '฿14,000',
    priceUnit: 'per day',
    engine: '2.5L Hybrid',
    transmission: 'E-CVT',
    seats: '7',
    features: ['Chauffeur Available', 'Insurance Included', 'Free Delivery', 'Unlimited Mileage'],
    image: '/cars/vellfire1.jpg',
    available: true
  }
]);

</script>

<template>
  <div class="weekly-rentals">
    <div class="section-header">
      <div class="luxury-divider">
        <span class="divider-line"></span>
        <span class="divider-icon">✦</span>
        <span class="divider-line"></span>
      </div>
      <h1>Weekly Rental Services</h1>
      <p class="subtitle">Luxury Vehicle Rentals - Available 24/7</p>
    </div>

    <div class="rental-grid">
      <div v-for="car in dailyRentals" 
           :key="car.id" 
           class="rental-card">
        <div class="car-image">
          <img :src="car.image" :alt="car.name">
        </div>
        <div class="car-info">
          <h2>{{ car.name }}</h2>
          <h3>{{ car.model }}</h3>
          <div class="price">{{ car.price }} <span>{{ car.priceUnit }}</span></div>
          
          <div class="specs">
            <div class="spec-item">
              <i class="fas fa-car"></i>
              <span>{{ car.engine }}</span>
            </div>
            <div class="spec-item">
              <i class="fas fa-cog"></i>
              <span>{{ car.transmission }}</span>
            </div>
            <div class="spec-item">
              <i class="fas fa-users"></i>
              <span>{{ car.seats }} Seats</span>
            </div>
          </div>

          <div class="features">
            <div v-for="feature in car.features" 
                 :key="feature" 
                 class="feature">
              <i class="fas fa-check"></i>
              <span>{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped>
.weekly-rentals {
  padding: 4rem 2rem;
  background: rgba(20, 20, 20, 0.95);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h1 {
  font-size: 3rem;
  color: #D4AF37;
  margin: 1rem 0;
}

.subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
}

.rental-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.rental-card {
  background: linear-gradient(145deg, rgba(35, 35, 35, 0.95), rgba(25, 25, 25, 0.95));
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  backdrop-filter: blur(10px);
}

.rental-card:hover {
  transform: translateY(-10px);
  border-color: #D4AF37;
  box-shadow: 0 20px 40px rgba(212, 175, 55, 0.15);
}

.car-image {
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
}

.car-image::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  pointer-events: none;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}


.rental-card:hover .car-image img {
  transform: scale(1.05);
}

.car-info {
  flex: 1;
  padding: 2rem;
}

.car-info h2 {
  color: #D4AF37;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.car-info h3 {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.price {
  font-size: 2rem;
  color: #D4AF37;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 2px solid #D4AF37;
  border-radius: 8px;
  text-align: center;
}

.price span {
  font-size: 1rem;
  opacity: 0.8;
}

.specs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: all 0.3s ease;
}


.spec-item i {
  color: #D4AF37;
  font-size: 1.2rem;
  width: 24px; 
  text-align: center;
  margin-right: 0.5rem; 
}

.spec-item span {
  flex: 1;
}

.features {
  margin-bottom: 2rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
}

.feature i {
  color: #D4AF37;
}

@media (max-width: 768px) {
  .spec-item {
    padding: 1rem;
    gap: 0.8rem;
    justify-content: flex-start;
  }

  .spec-item i {
    font-size: 1.1rem;
    width: 20px;
    margin-right: 0.3rem;
  }

  .spec-item span {
    font-size: 0.9rem;
  }

  .specs {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    padding: 0.5rem;
  }

  .feature {
    padding: 0.8rem;
    margin-bottom: 0.3rem;
  }

  .feature i {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .specs {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .spec-item {
    padding: 0.8rem;
  }
}
</style>