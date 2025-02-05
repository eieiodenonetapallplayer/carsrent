<script setup>
import { useRouter } from 'vue-router'
import AboutUs from './AboutUs.vue'

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

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-heading">Contact Us</h3>
        <p>Email: onthetopcarrent@gmail.com</p>
        <p>Phone: +66 098-629-8000</p>
        <p>Location: Nonthaburi</p>
      </div>

      <div class="footer-section">
        <h3 class="footer-heading">Quick Links</h3>
        <ul>
          <li><a href="/">หน้าแรก</a></li>
          <li><a @click="scrollToAbout">เกี่ยวกับเรา</a></li>
          <li><a @click="scrollToGallery" >แกลลอรี่</a></li>
          <li><a href="/#">วิธีชำระเงิน</a></li>
          <li><a @click="scrollToContact">ติดต่อเรา</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3 class="footer-heading">Follow Us</h3>
        <div class="social-links">
          <a
            href="https://www.facebook.com/pangpond.surapimonsal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/mr.pond9999/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Line"
          >
            <i class="fa-brands fa-line"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Create with ❤️ by Goodplace Team / 4levy</p>
    </div>
  </footer>
</template>

<style scoped>

.footer-heading {
  font-size: 1.8rem;
  background: linear-gradient(to right, #bf953f, #fcf6ba, #d4af37, #fbf5b7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.3),
    0 0 20px rgba(212, 175, 55, 0.3), 0 0 30px rgba(212, 175, 55, 0.3);
  animation: footerGlow 2s ease-in-out infinite alternate;
}

@keyframes footerGlow {
  from {
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.3),
      0 0 20px rgba(212, 175, 55, 0.3), 0 0 30px rgba(212, 175, 55, 0.3);
  }
  to {
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.5),
      0 0 30px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.5);
  }
}

.footer {
  background: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 0.98),
    rgba(30, 30, 30, 0.98)
  );
  padding: 4rem 2rem 2rem;
  color: #fff;
  position: relative;
  z-index: 100;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-section {
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.footer-section:hover {
  background: rgba(212, 175, 55, 0.05);
  transform: translateY(-5px);
}

.footer-section h3 {
  color: #d4af37;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  font-weight: 600;
}

.footer-section h3::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.5rem;
  width: 2rem;
  height: 2px;
  background: linear-gradient(90deg, #d4af37, #c5a028);
}

.footer-section p {
  color: #c0b283;
  margin: 0.5rem 0;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.footer-section p:hover {
  color: #d4af37;
  transform: translateX(5px);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin: 0.8rem 0;
}

.footer-section ul li a {
  color: #c0b283;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 1.2rem;
  display: inline-block;
}

.footer-section ul li a::before {
  content: "→";
  position: absolute;
  left: 0;
  opacity: 0;
  transition: all 0.3s ease;
}

.footer-section ul li a:hover {
  color: #d4af37;
  padding-left: 1.5rem;
}

.footer-section ul li a:hover::before {
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  color: #c0b283;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.social-links a:hover {
  color: #d4af37;
  transform: translateY(-3px);
  background: rgba(212, 175, 55, 0.1);
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
}

.footer-bottom {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  text-align: center;
}

.footer-bottom p {
  color: #c0b283;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1rem 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-section {
    text-align: center;
  }

  .footer-section:hover {
    transform: none;
  }

  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, #d4af37, #c5a028);
  }

  .social-links {
    justify-content: center;
  }

  .footer-section ul li a {
    padding-left: 0;
  }

  .footer-section ul li a:hover {
    padding-left: 0;
  }

  .footer-section ul li a::before {
    display: none;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2rem 1rem 1rem;
  }

  .social-links a {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
}
</style>
