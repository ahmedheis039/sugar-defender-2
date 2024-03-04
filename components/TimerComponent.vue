<template>
  <div>
    <div>
      <span class="timer-part">{{ hours }}</span>:
      <span class="timer-part">{{ minutes }}</span>:
      <span class="timer-part">{{ seconds }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totalSeconds: 3540, // 59 minutes in seconds
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      setInterval(() => {
        if (this.totalSeconds > 0) {
          this.totalSeconds--;
          this.updateTimeParts(this.totalSeconds);
        }
      }, 1000);
    },
    updateTimeParts(totalSeconds) {
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      this.hours = String(hours).padStart(2, "0");
      this.minutes = String(minutes).padStart(2, "0");
      this.seconds = String(seconds).padStart(2, "0");
    },
  },
};
</script>

<style>
.timer-part {
  font-size: 1.5em;
  margin: 0 0.5em;
  background: #404549;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
</style>
