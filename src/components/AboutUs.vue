<script setup>
const teamMembers = [
  {
    name: 'Mr.Pond',
    position: 'Leader, Ceo Business',
    image: 'https://sv1.img.in.th/iQkAQO.jpeg',
    description: 'Management'
  },
  {
    name: 'Anonymous',
    position: '---',
    image: 'https://sv1.img.in.th/iQk558.png',
    description: '---'
  }
]

const companyValues = [
  {
    icon: '🌟',
    title: 'Excellence',
    description: 'Committed to providing top-tier luxury vehicle services'
  },
  {
    icon: '🤝',
    title: 'Trust',
    description: 'Building lasting relationships with our valued clients'
  },
  {
    icon: '💎',
    title: 'Quality',
    description: 'Only the finest vehicles in our premium fleet'
  }
]
</script>

<template>
      <div class="divider-container">
    <div class="luxury-divider">
      <span class="divider-line"></span>
      <span class="divider-icon">✦</span>
      <span class="divider-line"></span>
    </div>
  </div>
  <section id="about" class="about-section">
    <div class="about-container">
        <h2 class="luxury-title">About Website</h2>
      
      <div class="company-intro">
        <div class="intro-text">
          <h3>Premium Car Rental Service</h3>
          <p>Alphard/Vellfire Luxury Car Rental – Premium VIP Vans & Executive Chauffeur Service, Available for Monthly & Annual Leasing. "Exceptional Service | Uncompromising Safety | Impeccable Cleanliness | Cost-Effective Luxury"</p>
        </div>
      </div>

      <div class="values-grid">
        <div v-for="value in companyValues" :key="value.title" class="value-card">
          <div class="value-icon">{{ value.icon }}</div>
          <h4>{{ value.title }}</h4>
          <p>{{ value.description }}</p>
        </div>
      </div>

      <div class="team-section">
        <h3>Our Team</h3>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.name" class="team-card">
            <div class="member-image">
              <img :src="member.image" :alt="member.name">
            </div>
            <h4>{{ member.name }}</h4>
            <p class="position">{{ member.position }}</p>
            <p class="description">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
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

.about-section {
  padding: 6rem 2rem;
  background: rgba(20, 20, 20, 0.95);
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #D4AF37;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.company-intro {
  text-align: center;
  margin-bottom: 4rem;
}

.intro-text h3 {
  color: #D4AF37;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.intro-text p {
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.value-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.value-card:hover {
  transform: translateY(-5px);
  border-color: #D4AF37;
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.value-card h4 {
  color: #D4AF37;
  margin-bottom: 1rem;
}

.team-section {
  margin-top: 4rem;
  text-align: center;
}

.team-section h3 {
  color: #D4AF37;
  font-size: 2rem;
  margin-bottom: 3rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
}

.team-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.team-card:hover {
  transform: translateY(-5px);
  border-color: #D4AF37;
}

.member-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #D4AF37;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-card h4 {
  color: #D4AF37;
  margin-bottom: 0.5rem;
}

.position {
  color: #BF953F;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .about-section {
    padding: 4rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .team-grid {
    gap: 2rem;
  }
}
</style>