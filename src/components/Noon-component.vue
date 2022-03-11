<template>
    <div @click="playNote">
        <h1>placeholder for noon image</h1>
    </div>
</template>

<script>
const noonSound = require('@/assets/noon.mp3')
export default {
  mounted () {
    this.playNote()
  },
  data: () => ({
    noonSound
  }),
  methods: {
    playNote () {
      const sound = new Audio(this.noonSound)
      sound.addEventListener('canplaythrough', () => { // wait for audio file to load
        sound.play()
      })
    }
  }
}
</script>
