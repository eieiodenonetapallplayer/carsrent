<script setup>
import { ref } from 'vue';

const dailyRentals = ref([
  {
    id: 1,
    name: 'Toyota Alphard',
    model: '2018 30 Series',
    price: '฿2,900',
    priceUnit: 'per day',
    engine: '2.5L Hybrid',
    transmission: 'E-CVT',
    seats: '7',
    features: ['3,900บาท 5ชั่วโมง / 5,500บาท พร้อมพนักงานขับรถ ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', '6,500บาท พร้อมพนักงานขับรถ ใช้เดินทางไปต่างจังหวัด', '5,500บาท ขับเองใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', '6,500บาท ขับเอง ใช้เดินทางไปต่างจังหวัด'],
    image: 'https://img5.pic.in.th/file/secure-sv1/imagea191d50f41e982c7.png',
    available: true
  },
  {
    id: 2,
    name: 'Toyota Alphard 2024',
    model: '2024 Limited Edition',
    price: '฿3,500',
    priceUnit: 'per day',
    engine: '2.5L Hybrid',
    transmission: 'E-CVT',
    seats: '7',
    features: ['7,500บาท พร้อมพนักงานขับรถ ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', ' 8,500บาท พร้อมพนักงานขับรถ ใช้เดินทางไปต่างจังหวัด', ' 8,900บาท ขับเอง ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', '9,900บาท ขับเอง ใช้เดินทางไปต่างจังหวัด'],
    image: 'https://img5.pic.in.th/file/secure-sv1/image323cdf393d7a9fd3.png',
    available: true
  },
  {
    id: 3,
    name: 'Mercedes Benz Sprinter',
    model: 'รุ่นใหม่ล่าสุด',
    price: '฿4,900 ',
    priceUnit: 'per day',
    engine: '2.0L Inline-4 Diesel',
    transmission: '7-speed automatic',
    seats: '7',
    features: ['4,900บาท พร้อมพนักงานขับรถ รับ-ส่งสนามบิน จํานวน1เที่ยว (รวมทุกอย่างไม่มีบวกเพิ่ม)', '14,900บาท พร้อมพนักงานขับรถ ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล (รวมค่าน้ำมัน ทางด่วน)', ' 14,900บาท พร้อมพนักงานขับรถ ใช้เดินทางไปต่างจังหวัด เช่า 10 ชั่วโมง (ไม่รวมค่าน้ำมัน ทางด่วน)'],
    image: 'https://img2.pic.in.th/pic/imageb105de7a2060290e.png',
    available: true
  },
  {
    id: 4,
    name: 'Majesty',
    model: 'Majesty 2020',
    price: '฿2,500',
    priceUnit: 'per day',
    engine: '2.8L Turbocharged Diesel',
    transmission: '6-speed automatic',
    seats: '6',
    features: ['พร้อมพนักงานขับรถ รับ-ส่งสนามบิน จำนวน 1 เที่ยว ราคา 2,500 บาท ต่อเที่ยว (ราคานี้รวมทุกอย่างไม่มีบวกเพิ่ม)', 'พร้อมพนักงานขับรถ รับ-ส่งสนามบิน จำนวน 2 เที่ยวขึ้นไป ราคา 2,200 บาท ต่อเที่ยว (ราคานี้รวมทุกอย่างไม่มีบวกเพิ่ม)', '4,000บาท พร้อมพนักงานขับรถ ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', '4,500บาท พร้อมพนักงานขับรถ ใช้เดินทางไปต่างจังหวัด', ' 4,000บาท ขับเอง ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', '4,500บาท ขับเอง ใช้เดินทางไปต่างจังหวัด'],
    image: 'https://img5.pic.in.th/file/secure-sv1/majesty.png',
    available: true
  },
  {
    id: 5,
    name: 'New Hyundai H1',
    model: 'New Hyundai H1',
    price: '฿2,500',
    priceUnit: 'per day',
    engine: '2.5L Turbocharged Diesel',
    transmission: '5-speed automatic',
    seats: '11',
    features: ['พร้อมพนักงานขับรถ รับ-ส่งสนามบิน จำนวน 1 เที่ยว ราคา 2,500 บาท ต่อเที่ยว (ราคานี้รวมทุกอย่างไม่มีบวกเพิ่ม)', 'พร้อมพนักงานขับรถ รับ-ส่งสนามบิน จำนวน 2 เที่ยวขึ้นไป ราคา 2,200 บาท ต่อเที่ยว (ราคานี้รวมทุกอย่างไม่มีบวกเพิ่ม)', ' 3,000บาท พร้อมพนักงานขับรถ ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', '3,500บาท พร้อมพนักงานขับรถ ใช้เดินทางไปต่างจังหวัด', '3,000บาท ขับเอง ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', '3,500บาท ขับเอง ใช้เดินทางไปต่างจังหวัด'],
    image: 'https://img5.pic.in.th/file/secure-sv1/h11d4ef249d2b2ab95.png',
    available: true
  },
  {
    id: 6,
    name: 'New Toyota Commuter 2020',
    model: 'Super V.I.P. แบบ 8 ที่นั่ง',
    price: '฿1,800',
    priceUnit: 'per day',
    engine: '2.5L Turbocharged Diesel',
    transmission: '5-speed automatic',
    seats: '11',
    features: ['พร้อมพนักงานขับรถ รับ-ส่งสนามบิน จำนวน 1 เที่ยว ราคา 1,800 บาท ต่อเที่ยว (ราคานี้รวมทุกอย่างไม่มีบวกเพิ่ม)', 'พร้อมพนักงานขับรถ รับ-ส่งสนามบิน จำนวน 2 เที่ยวขึ้นไป ราคา 1,500 บาท ต่อเที่ยว (ราคานี้รวมทุกอย่างไม่มีบวกเพิ่ม)', ' 2,500บาท พร้อมพนักงานขับรถ ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', '3,000บาท พร้อมพนักงานขับรถ ใช้เดินทางไปต่างจังหวัด', '**หากเช่าหลายวัน หรือเช่ารายเดือน มีราคาพิเศษ สนใจสามารถติดต่อสอบถามเพิ่มเติมได้**'],
    image: 'https://img2.pic.in.th/pic/commuter-2020.png',
    available: true
  },
  {
    id: 7,
    name: 'Hyundai Staria',
    model: 'Hyundai Staria',
    price: '฿2,800',
    priceUnit: 'per day',
    engine: '2.2L CRDi Diesel',
    transmission: '8-speed automatic',
    seats: '11',
    features: ['พร้อมพนักงานขับรถ รับ-ส่งสนามบิน จำนวน 1 เที่ยว ราคา 2,800 บาท ต่อเที่ยว (ราคานี้รวมทุกอย่างไม่มีบวกเพิ่ม)', 'พร้อมพนักงานขับรถ รับ-ส่งสนามบิน จำนวน 2 เที่ยวขึ้นไป ราคา 2,500 บาท ต่อเที่ยว (ราคานี้รวมทุกอย่างไม่มีบวกเพิ่ม)', ' 4,000บาท พร้อมพนักงานขับรถ ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', '4,500บาท พร้อมพนักงานขับรถ ใช้เดินทางไปต่างจังหวัด', '4,000บาท ขับเอง ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', '4,500บาท ขับเอง ใช้เดินทางไปต่างจังหวัด'],
    image: 'https://img2.pic.in.th/pic/staria.png',
    available: true
  },
  {
    id: 8,
    name: 'New Fortuner 2024',
    model: 'New Fortuner 2024',
    price: '฿2,500',
    priceUnit: 'per day',
    engine: '2.8L Diesel',
    transmission: '6-speed automatic',
    seats: '7',
    features: ['พร้อมพนักงานขับรถ รับ-ส่งสนามบิน จำนวน 1 เที่ยว ราคา 2,500 บาท ต่อเที่ยว (ราคานี้รวมทุกอย่างไม่มีบวกเพิ่ม)', '3,000บาท พร้อมพนักงานขับรถ ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', ' 3,500บาท พร้อมพนักงานขับรถ ใช้เดินทางไปต่างจังหวัด'],
    image: 'https://img5.pic.in.th/file/secure-sv1/fortuner-2024.png',
    available: true
  },
  {
    id: 9,
    name: 'Camry',
    model: 'Camry2023',
    price: '฿2,200',
    priceUnit: 'per day',
    engine: '2.5L Petrol Hybrid"',
    transmission: 'E-CVT',
    seats: '5',
    features: ['พร้อมพนักงานขับรถ รับ-ส่งสนามบิน จำนวน 1 เที่ยว ราคา 2,200 บาท ต่อเที่ยว (ราคานี้รวมทุกอย่างไม่มีบวกเพิ่ม)', '2,900บาท พร้อมพนักงานขับรถ ใช้เดินทางในกรุงเทพ ฯ และปริมณฑล', ' 3,500บาท พร้อมพนักงานขับรถ ใช้เดินทางไปต่างจังหวัด'],
    image: 'https://img5.pic.in.th/file/secure-sv1/camry-2023.png',
    available: true
  }
]);

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
        </div>
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
  .daily-rentals {
    padding: 2rem 1rem; 
  }

  .section-header {
    margin-bottom: 2rem; 
  }

  .section-header h1 {
    font-size: 2rem; 
  }

  .subtitle {
    font-size: 1rem; 
  }

  .rental-grid {
    grid-template-columns: 1fr;
    gap: 2rem; 
    padding: 0; 
  }

  .rental-card {
    border-radius: 15px; 
  }

  .car-image {
    height: 220px; 
  }

  .car-info {
    padding: 1.5rem; 
  }

  .car-info h2 {
    font-size: 1.5rem;
  }

  .car-info h3 {
    font-size: 1rem; 
    margin-bottom: 1rem;
  }

  .price {
    font-size: 1.6rem; 
    padding: 0.8rem; 
    margin-bottom: 1rem;
  }

  .price span {
    font-size: 0.9rem;
  }

  .specs {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    margin-bottom: 1rem;
  }

  .spec-item {
    padding: 0.8rem;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .daily-rentals {
    padding: 1.5rem 0.8rem; 
  }

  .section-header h1 {
    font-size: 1.8rem;
  }

  .rental-card {
    border-radius: 12px;
  }

  .car-image {
    height: 180px; 
  }

  .specs {
    grid-template-columns: 1fr; 
  }

  .features {
    margin-bottom: 1.5rem;
  }

  .feature {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}
</style>