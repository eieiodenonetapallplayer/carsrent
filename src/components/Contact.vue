<script setup>
import { ref, onMounted } from "vue";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// Form data
const formData = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

// Contact info
const socialContacts = {
  lineId: "luvnaja",
  lineId2: "luvnaja2",
  tel: "+66-123-456-789",
  whatsapp: "whatsapp-id",
  wechat: "wechat-id",
  email: "contact@example.com",
};

// Form state
const isSubmitting = ref(false);
const submitStatus = ref("");
const formErrors = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  try {
    const templateParams = {
      name: formData.value.name,
      email: formData.value.email,
      phone: formData.value.phone || "N/A", 
      subject: formData.value.subject,
      message: formData.value.message,
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      submitStatus.value = "success";
      resetForm();
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error("Error sending email:", error);
    submitStatus.value = "error";
  } finally {
    isSubmitting.value = false;
    setTimeout(() => {
      submitStatus.value = "";
    }, 5000);
  }
};

// Form validation
const validateForm = () => {
  let isValid = true;
  formErrors.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  if (!formData.value.name) {
    formErrors.value.name = "กรุณากรอกชื่อ";
    isValid = false;
  }

  if (!formData.value.email) {
    formErrors.value.email = "กรุณากรอกอีเมล";
    isValid = false;
  } else if (!validateEmail(formData.value.email)) {
    formErrors.value.email = "รูปแบบอีเมลไม่ถูกต้อง";
    isValid = false;
  }

  if (!formData.value.subject) {
    formErrors.value.subject = "กรุณากรอกหัวข้อ";
    isValid = false;
  }

  if (!formData.value.message) {
    formErrors.value.message = "กรุณากรอกข้อความ";
    isValid = false;
  }

  return isValid;
};

// Email validation helper
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Form reset
const resetForm = () => {
  formData.value = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  formErrors.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};

onMounted(() => {
  try {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('EmailJS initialization failed:', error);
  }
});

</script>
<template>
    <div class="divider-container">
    <div class="luxury-divider">
      <span class="divider-line"></span>
      <span class="divider-icon">✦</span>
      <span class="divider-line"></span>
    </div>
  </div>
    <section id="contact" class="contact-section">
    <div class="contact-container">
      <div class="contact-hero">
        <div class="luxury-divider">
          <span class="divider-line"></span>
          <span class="divider-icon">✧</span>
          <span class="divider-line"></span>
        </div>
        <h2 class="section-title">ช่องทางการติดต่อเรา</h2>
        <p class="main-subtitle">ยินดีให้บริการ และตอบคำถามทุกข้อสงสัย</p>
        <div class="luxury-divider">
          <span class="divider-line"></span>
          <span class="divider-icon">✦</span>
          <span class="divider-line"></span>
        </div>
      </div>

      <section class="social-section glass-panel">
        <div class="social-info">
          <div class="contact-methods">
            <!-- Line Contact -->
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fab fa-line"></i>
              </div>
              <div class="contact-details">
                <h4>Line Official</h4>
                <p>
                  {{ socialContacts.lineId }} <span class="badge">หลัก</span>
                </p>
                <p>
                  {{ socialContacts.lineId2 }}
                  <span class="badge secondary">สำรอง</span>
                </p>
                <small class="availability">ตอบกลับภายใน 24 ชั่วโมง</small>
              </div>
            </div>

            <!-- Phone Contact -->
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="contact-details">
                <h4>เบอร์โทรศัพท์</h4>
                <p>{{ socialContacts.tel }}</p>
                <small class="availability">เปิดทำการ 24/7</small>
              </div>
            </div>

            <!-- WhatsApp Contact -->
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fab fa-whatsapp"></i>
              </div>
              <div class="contact-details">
                <h4>WhatsApp</h4>
                <p>{{ socialContacts.whatsapp }}</p>
              </div>
            </div>

            <!-- WeChat Contact -->
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fab fa-weixin"></i>
              </div>
              <div class="contact-details">
                <h4>WeChat</h4>
                <p>{{ socialContacts.wechat }}</p>
              </div>
            </div>

            <!-- Email Contact -->
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h4>Email</h4>
                <p>{{ socialContacts.email }}</p>
                <small class="response-time">ตอบกลับภายใน 24 ชั่วโมง</small>
              </div>
            </div>
          </div>

          <!-- QR Code Section -->
          <div class="qr-container">
            <h3 class="qr-title">สแกนเพื่อติดต่อ</h3>
            <br />
            <div class="qr-codes">
              <div class="qr-code">
                <div class="qr-wrapper">
                  <img src="../assets/Qr_code/Line.png" alt="Line QR Code" />
                  <div class="qr-overlay">
                    <br />
                    <i class="fab fa-line"></i>
                  </div>
                </div>
                <p>Line Official</p>
              </div>
              <div class="qr-code">
                <div class="qr-wrapper">
                  <img src="#" alt="WeChat QR Code" />
                  <div class="qr-overlay">
                    <br />
                    <i class="fab fa-weixin"></i>
                  </div>
                </div>
                <p>WeChat Official</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="form-section">
        <div class="contact-hero">
          <div class="luxury-divider">
            <span class="divider-line"></span>
            <span class="divider-icon">✧</span>
            <span class="divider-line"></span>
          </div>
          <h2 class="section-title">ส่งข้อความถึงเรา</h2>
          <p class="main-subtitle">กรุณา กรอกแบบฟอร์ม</p>
          <div class="luxury-divider">
            <span class="divider-line"></span>
            <span class="divider-icon">✦</span>
            <span class="divider-line"></span>
          </div>
        </div>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-grid">
            <div class="form-group">
              <label for="name"> <i class="fas fa-user"></i> ชื่อ * </label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                placeholder="กรุณากรอกชื่อของคุณ"
              />
            </div>

            <div class="form-group">
              <label for="email">
                <i class="fas fa-envelope"></i> อีเมล *
              </label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                placeholder="example@domain.com"
              />
            </div>

            <div class="form-group">
              <label for="phone">
                <i class="fas fa-phone"></i> เบอร์โทรศัพท์
              </label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                placeholder="0XX-XXX-XXXX"
              />
            </div>

            <div class="form-group">
              <label for="subject">
                <i class="fas fa-heading"></i> หัวข้อ *
              </label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                required
                placeholder="กรุณากรอกหัวข้อ"
              />
            </div>
          </div>

          <div class="form-group full-width">
            <label for="message">
              <i class="fas fa-comment-alt"></i> ข้อความ *
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              rows="5"
              placeholder="กรุณากรอกข้อความของคุณ"
            ></textarea>
          </div>

          <div class="form-actions">
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <i
                class="fas"
                :class="isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'"
              ></i>
              {{ isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ" }}
            </button>
          </div>

          <div class="form-status">
            <transition name="fade">
              <div
                v-if="submitStatus"
                :class="['status-message', submitStatus]"
              >
                <i
                  :class="[
                    'fas',
                    submitStatus === 'success'
                      ? 'fa-check-circle'
                      : 'fa-exclamation-circle',
                  ]"
                ></i>
                <p>
                  {{
                    submitStatus === "success"
                      ? "ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็วที่สุด"
                      : "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง"
                  }}
                </p>
              </div>
            </transition>
          </div>
        </form>
      </section>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 3rem;
  background: linear-gradient(to right, #bf953f, #fcf6ba, #d4af37, #fbf5b7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.3),
    0 0 20px rgba(212, 175, 55, 0.3), 0 0 30px rgba(212, 175, 55, 0.3);
  animation: glowContact 2s ease-in-out infinite alternate;
}

@keyframes glowContact {
  from {
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.3),
      0 0 20px rgba(212, 175, 55, 0.3), 0 0 30px rgba(212, 175, 55, 0.3);
  }
  to {
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.5),
      0 0 30px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.5);
  }
}

.form-status {
  margin-top: 1.5rem;
}

.status-message {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  animation: fadeIn 0.5s ease-in;
}

.status-message.success {
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.2);
  color: #d4af37;
}

.status-message.error {
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.2);
  color: #ff6b6b;
}

.form-error {
  color: #ff6b6b;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-section {
  padding: 4rem 2rem;
  background: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 0.98),
    rgba(30, 30, 30, 0.98)
  );
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.social-info {
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(212, 175, 55, 0.05);
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(20, 20, 20, 0.5);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
  background: rgba(212, 175, 55, 0.1);
}

.contact-item i {
  font-size: 1.5rem;
  color: #d4af37;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 50%;
}

.contact-item h4 {
  color: #d4af37;
  margin: 0;
  font-size: 1rem;
}

.contact-item p {
  color: #c0b283;
  margin: 0.2rem 0 0;
  font-size: 0.9rem;
}

.qr-codes {
  display: flex;
  gap: 2rem;
}

.qr-code {
  text-align: center;
}

.qr-code img {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  padding: 0.5rem;
  background: white;
  border: 2px solid rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;
}

.qr-code:hover img {
  transform: scale(1.05);
  border-color: #d4af37;
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
}

.qr-code p {
  color: #c0b283;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

h2 {
  color: #d4af37;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

.subtitle {
  color: #c0b283;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  color: #c0b283;
  font-size: 0.95rem;
  font-weight: 500;
}

input,
textarea {
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  background: rgba(20, 20, 20, 0.95);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:hover,
textarea:hover {
  border-color: rgba(212, 175, 55, 0.5);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #d4af37;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background: linear-gradient(135deg, #d4af37, #c5a028);
  color: #000;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
  background: linear-gradient(135deg, #e5c14c, #d4af37);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.success-message {
  color: #d4af37;
  text-align: center;
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.2);
  animation: fadeIn 0.5s ease-in;
}

.error-message {
  color: #ff6b6b;
  text-align: center;
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.2);
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 2rem 1rem;
  }

  .contact-container {
    padding: 2rem 1.5rem;
  }

  .social-info {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .qr-codes {
    justify-content: center;
  }

  h2 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .submit-btn {
    width: 100%;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 1rem;
  }

  .qr-codes {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
