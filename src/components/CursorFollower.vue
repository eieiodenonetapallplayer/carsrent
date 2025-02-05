<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stars = ref([])
const maxStars = 20
const isHovering = ref(false)

const createStar = (x, y) => {
  if (isHovering.value) return // Don't create stars when hovering clickable elements
  const star = {
    id: Date.now(),
    x,
    y,
    opacity: 1,
    scale: 1
  }
  stars.value.push(star)
  if (stars.value.length > maxStars) {
    stars.value.shift()
  }
  setTimeout(() => {
    const index = stars.value.findIndex(s => s.id === star.id)
    if (index !== -1) {
      stars.value.splice(index, 1)
    }
  }, 1000)
}

const handleMouseMove = (e) => {
  const target = e.target
  if (target.matches('button, a, .car-images, .car-info, [role="button"], .clickable')) {
    isHovering.value = true
    return
  }
  isHovering.value = false
  createStar(e.clientX, e.clientY)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div class="cursor-follower" :class="{ 'paused': isHovering }">
    <div
      v-for="star in stars"
      :key="star.id"
      class="star"
      :style="{
        left: `${star.x}px`,
        top: `${star.y}px`,
      }"
    >
      ✦
    </div>
  </div>
</template>

<style scoped>
.cursor-follower {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  user-select: none;
}

.cursor-follower.paused .star {
  animation-play-state: paused;
  opacity: 0;
}

.star {
  position: absolute;
  font-size: 1.5rem;
  color: #D4AF37;
  transform: translate(-50%, -50%);
  animation: fadeOut 1s forwards;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
  pointer-events: none;
  user-select: none;
  opacity: 0.6;
}

@keyframes fadeOut {
  0% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(0.2);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>