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

const selectedCar = ref(null);
const showBookingForm = ref(false);

const bookingForm = ref({
  startDate: '',
  endDate: '',
  withDriver: false,
  customerName: '',
  phone: '',
  email: ''
});

const selectCar = (car) => {
  selectedCar.value = car;
  showBookingForm.value = true;
};

const submitBooking = () => {
  // Handle booking submission
  console.log('Booking submitted:', {
    car: selectedCar.value,
    ...bookingForm.value
  });
  // Reset form
  showBookingForm.value = false;
  bookingForm.value = {
    startDate: '',
    endDate: '',
    withDriver: false,
    customerName: '',
    phone: '',
    email: ''
  };
};

const closeBookingForm = () => {
  showBookingForm.value = false;
  selectedCar.value = null;
};
</script>

<template>
  <div class="daily-rentals">
    <div class="section-header">
      <div class="luxury-divider">
        <span class="divider-line"></span>
        <span class="divider-icon">✦</span>
        <span class="divider-line"></span>
      </div>
      <h1>Daily Rental Services</h1>
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

          <button 
            class="book-btn"
            @click="selectCar(car)"
            :disabled="!car.available">
            {{ car.available ? 'Book Now' : 'Not Available' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Booking Modal -->
    <div v-if="showBookingForm" class="booking-modal">
      <div class="modal-content">
        <button class="close-btn" @click="closeBookingForm">×</button>
        <h2>Book {{ selectedCar?.name }}</h2>
        
        <form @submit.prevent="submitBooking" class="booking-form">
          <div class="form-group">
            <label>Start Date</label>
            <input type="date" v-model="bookingForm.startDate" required>
          </div>
          
          <div class="form-group">
            <label>End Date</label>
            <input type="date" v-model="bookingForm.endDate" required>
          </div>
          
          <div class="form-group checkbox">
            <label>
              <input type="checkbox" v-model="bookingForm.withDriver">
              Include Driver
            </label>
          </div>
          
          <div class="form-group">
            <label>Name</label>
            <input type="text" v-model="bookingForm.customerName" required>
          </div>
          
          <div class="form-group">
            <label>Phone</label>
            <input type="tel" v-model="bookingForm.phone" required>
          </div>
          
          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="bookingForm.email" required>
          </div>
          
          <button type="submit" class="submit-btn">Confirm Booking</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.daily-rentals {
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.rental-card {
  background: rgba(30, 30, 30, 0.95);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;
}

.rental-card:hover {
  transform: translateY(-5px);
  border-color: #D4AF37;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.car-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.rental-card:hover .car-image img {
  transform: scale(1.05);
}

.car-info {
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
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
}

.spec-item i {
  color: #D4AF37;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
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

.book-btn {
  width: 100%;
  padding: 1rem;
  background: #D4AF37;
  border: none;
  border-radius: 8px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.book-btn:hover {
  background: #BF9B30;
  transform: translateY(-2px);
}

.book-btn:disabled {
  background: #666;
  cursor: not-allowed;
}

/* Modal Styles */
.booking-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: rgba(30, 30, 30, 0.95);
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  position: relative;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #D4AF37;
  font-size: 1.5rem;
  cursor: pointer;
}

.booking-form {
  display: grid;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: rgba(255, 255, 255, 0.8);
}

.form-group input {
  padding: 0.8rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 4px;
  background: rgba(20, 20, 20, 0.8);
  color: #fff;
}

.checkbox {
  flex-direction: row;
  align-items: center;
}

.submit-btn {
  background: #D4AF37;
  color: #000;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: #BF9B30;
}

@media (max-width: 768px) {
  .section-header h1 {
    font-size: 2rem;
  }
  
  .rental-card {
    margin: 0 1rem;
  }
  
  .modal-content {
    width: 95%;
    margin: 1rem;
    padding: 1.5rem;
  }
}
</style>