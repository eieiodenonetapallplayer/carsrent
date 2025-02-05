<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="error-page">
    <div class="error-content">
      <div class="error-code">404</div>
      <h1>Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button class="home-button" @click="goHome">
        Return Home
      </button>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  height: 100vh;
  background: radial-gradient(circle at center, 
    rgba(30, 30, 30, 0.95),
    rgba(20, 20, 20, 0.98)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.error-content {
  padding: 2rem;
  animation: fadeIn 0.5s ease-out;
}

.error-code {
  font-size: 10rem;
  font-weight: bold;
  background: linear-gradient(to right, #BF953F, #FCF6BA, #D4AF37, #FBF5B7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
  animation: glow 2s ease-in-out infinite alternate;
}

h1 {
  color: #D4AF37;
  font-size: 2.5rem;
  margin: 1rem 0;
}

p {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.home-button {
  background: #D4AF37;
  color: #141414;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.home-button:hover {
  background: #BF953F;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(191, 149, 63, 0.4);
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

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>