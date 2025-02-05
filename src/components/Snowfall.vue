<template>
  <canvas class="snowfall-canvas"></canvas>
</template>

<script>
export default {
  props: {
    amount: { type: Number, default: 150 },
    size: { type: Number, default: 3 },
    speed: { type: Number, default: 1 },
    wind: { type: Number, default: 0.5 },
    color: { type: String, default: "#ffffff" },
    opacity: { type: Number, default: 0.6 },
    swing: { type: Number, default: 1.5 },
    resize: { type: Boolean, default: true },
    starAmount: { type: Number, default: 20 },
    starColor: { type: String, default: "#ffffff" },
  },

  mounted() {
    const self = this;
    const CANVAS = self.$el;
    const CONTEXT = CANVAS.getContext("2d");
    let canvasHeight = CANVAS.offsetHeight;
    let canvasWidth = CANVAS.offsetWidth;
    let flakes = [];
    let stars = [];

    CANVAS.height = canvasHeight;
    CANVAS.width = canvasWidth;

    function handleResize() {
      const H0 = CANVAS.height;
      const W0 = CANVAS.width;
      CANVAS.height = canvasHeight = CANVAS.offsetHeight;
      CANVAS.width = canvasWidth = CANVAS.offsetWidth;

      flakes.forEach((flake) => {
        flake.x = (flake.x / W0) * canvasWidth;
        flake.y = (flake.y / H0) * canvasHeight;
      });

      stars.forEach((star) => {
        star.x = (star.x / W0) * canvasWidth;
        star.y = (star.y / H0) * canvasHeight;
      });
    }

    if (self.resize) {
      window.addEventListener("resize", handleResize);
    }

    this.handleResize = handleResize; // ✅ Store reference for removal

    function animate() {
      CONTEXT.clearRect(0, 0, canvasWidth, canvasHeight);

      flakes.forEach((flake) => {
        flake.rotation += flake.rotationSpeed;
        flake.velX = Math.sin(flake.swing) * self.wind;
        flake.x += flake.velX;
        flake.y += flake.velY;
        flake.swing += 0.02;

        drawSnowflake(CONTEXT, flake.x, flake.y, flake.size, flake.opacity, flake.rotation);

        if (flake.y > canvasHeight + flake.size) {
          flake.y = -flake.size;
          flake.x = random(0, canvasWidth);
        }
      });

      stars.forEach((star) => {
        star.rotation += star.rotationSpeed;
        star.velX = Math.sin(star.twinkle) * (self.wind * 0.5);
        star.x += star.velX;
        star.y += star.velY;
        star.twinkle += 0.02;
        star.opacity = 0.5 + Math.abs(Math.sin(star.twinkle)) * 0.4;

        drawStar(CONTEXT, star.x, star.y, star.size, star.opacity, star.rotation);

        if (star.y > canvasHeight + star.size) {
          star.y = -star.size;
          star.x = random(0, canvasWidth);
        }
      });

      requestAnimationFrame(animate);
    }

    function init() {
      flakes = [];
      stars = [];

      for (let i = 0; i < self.amount; i++) {
        flakes.push({
          x: random(0, canvasWidth),
          y: random(-canvasHeight, 0),
          size: random(self.size * 0.5, self.size * 2),
          velY: random(self.speed * 0.5, self.speed * 1.5),
          swing: random(0, 2 * Math.PI),
          rotation: random(0, Math.PI * 2),
          rotationSpeed: random(-0.02, 0.02),
          opacity: random(0.3, self.opacity),
        });
      }

      for (let i = 0; i < self.starAmount; i++) {
        stars.push({
          x: random(0, canvasWidth),
          y: random(-canvasHeight, 0),
          size: random(self.size * 0.3, self.size),
          velY: random(self.speed * 0.3, self.speed * 0.8),
          rotation: random(0, Math.PI * 2),
          rotationSpeed: random(-0.01, 0.01),
          opacity: random(0.5, 0.9),
          twinkle: random(0, Math.PI * 2),
        });
      }

      requestAnimationFrame(animate);
    }

    init();
  },

  unmounted() {
    if (this.resize && this.handleResize) {
      window.removeEventListener("resize", this.handleResize); // ✅ Correctly remove listener
    }
  },
};

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function drawSnowflake(ctx, x, y, size, opacity, rotation) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();

  for (let i = 0; i < 6; i++) {
    ctx.moveTo(0, 0);
    ctx.lineTo(size, 0);
    ctx.moveTo(size * 0.5, -size * 0.2);
    ctx.lineTo(size * 0.5, size * 0.2);
    ctx.moveTo(size * 0.75, -size * 0.15);
    ctx.lineTo(size * 0.75, size * 0.15);
    ctx.rotate(Math.PI / 3);
  }

  ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
  ctx.lineWidth = size / 10;
  ctx.stroke();
  ctx.restore();
}

function drawStar(ctx, x, y, size, opacity, rotation) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.shadowBlur = size * 2;
  ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.5})`;

  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    ctx.lineTo(
      Math.cos(((18 + i * 72) * Math.PI) / 180) * size,
      Math.sin(((18 + i * 72) * Math.PI) / 180) * size
    );
    ctx.lineTo(
      Math.cos(((54 + i * 72) * Math.PI) / 180) * size * 0.3,
      Math.sin(((54 + i * 72) * Math.PI) / 180) * size * 0.3
    );
  }
  ctx.closePath();

  const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
  gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
  gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.restore();
}
</script>

<style scoped>
.snowfall-canvas {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}
</style>
