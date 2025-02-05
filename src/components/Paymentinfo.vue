<script setup>
import { ref } from 'vue'

const banks = ref([
  {
    name: 'Kasikorn Bank',
    accountName: 'Your Name',
    accountNumber: 'XXX-X-XXXXX-X',
    qrCode: '/path/to/qr.png'
  },
  {
    name: 'SCB Bank',
    accountName: 'Your Name',
    accountNumber: 'XXX-XXX-XXXX',
    qrCode: '/path/to/qr.png'
  }
])

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    showCopyAlert()
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const showCopyAlert = () => {
  const alert = document.createElement('div')
  alert.className = 'copy-alert'
  alert.textContent = 'Copied to clipboard!'
  document.body.appendChild(alert)
  setTimeout(() => alert.remove(), 2000)
}
</script>

<template>
      <div class="divider-container">
    <div class="luxury-divider">
      <span class="divider-line"></span>
      <span class="divider-icon">✦</span>
      <span class="divider-line"></span>
    </div>
  </div>
  <div id="payment" class="payment-section payment-container">
    <h2 class="luxury-title">Payment Information</h2>

    <div class="bank-cards">
      <div v-for="bank in banks" :key="bank.name" class="bank-card">
        <div class="bank-header">
          <h3>{{ bank.name }}</h3>
          <div class="bank-logo"></div>
        </div>
        
        <div class="bank-details">
          <div class="detail-row">
            <span>Account Name</span>
            <p>{{ bank.accountName }}</p>
          </div>
          
          <div class="detail-row">
            <span>Account Number</span>
            <div class="copy-wrapper">
              <p>{{ bank.accountNumber }}</p>
              <button @click="copyToClipboard(bank.accountNumber)" class="copy-btn">
                <i class="fas fa-copy"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div class="qr-section">
          <img :src="bank.qrCode" alt="QR Code" class="qr-code">
          <button class="download-btn">
            <i class="fas fa-download"></i>
            Save QR
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.luxury-title {
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
  text-align: center;
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

@media (max-width: 768px) {
  .luxury-title {
    font-size: 2rem;
  }
}



.payment-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.payment-title {
  text-align: center;
  color: #D4AF37;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
}

.bank-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.bank-card {
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.bank-card:hover {
  transform: translateY(-5px);
  border-color: #D4AF37;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
}

.bank-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.bank-header h3 {
  color: #D4AF37;
  font-size: 1.5rem;
}

.detail-row {
  margin-bottom: 1.5rem;
}

.detail-row span {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.detail-row p {
  color: #fff;
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.copy-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.copy-btn {
  background: none;
  border: none;
  color: #D4AF37;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  color: #FBF5B7;
  transform: scale(1.1);
}

.qr-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.qr-code {
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 10px;
}

.download-btn {
  background: linear-gradient(45deg, #D4AF37, #BF953F);
  border: none;
  color: #141414;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
}

.copy-alert {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: rgba(212, 175, 55, 0.9);
  color: #141414;
  padding: 1rem 2rem;
  border-radius: 5px;
  animation: slideIn 0.3s ease, fadeOut 0.3s ease 1.7s;
}

@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

@media (max-width: 768px) {
  .payment-container {
    padding: 1rem;
  }
  
  .bank-card {
    padding: 1.5rem;
  }
  
  .payment-title {
    font-size: 2rem;
  }
}
</style>