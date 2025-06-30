<template>
  <div
    ref="lottieContainer"
    class="lottie-container"
  >
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  animationData: {
    type: [Object, String],
    required: true
  },
  width: {
    type: [String, Number],
    default: '200px'
  },
  height: {
    type: [String, Number],
    default: '200px'
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  loop: {
    type: Boolean,
    default: true
  },
  strokeWidth: {
    type: Number,
    default: 0.5
  },
  handColor: {
    type: String,
    default: '#ebf1f4' // color-lightblue
  }
})

const lottieContainer = ref(null)
let animationInstance = null

// Expose methods to parent component
const playAnimation = () => {
  if (animationInstance) {
    animationInstance.goToAndPlay(0, true) // Start from beginning and play
  }
}

const pauseAnimation = () => {
  if (animationInstance) {
    animationInstance.goToAndStop(0, true) // Go back to first frame and stop
  }
}

// Expose methods to parent
defineExpose({
  playAnimation,
  pauseAnimation
})

onMounted(async () => {
  try {
    console.log('Loading Lottie animation from:', props.animationData)

    // Dynamically import lottie-web
    const lottie = await import('lottie-web')

    let animationData = props.animationData

    // If animationData is a string (path), fetch the JSON
    if (typeof animationData === 'string') {
      console.log('Fetching animation data from URL...')
      const response = await fetch(animationData)
      if (!response.ok) {
        throw new Error(`Failed to fetch animation: ${response.status} ${response.statusText}`)
      }
      animationData = await response.json()
      console.log('Animation data loaded successfully')
    }

    // Modify hand/skin colors in the animation data
    if (animationData && animationData.layers) {
      modifyHandColors(animationData, props.handColor)
    }

    animationInstance = lottie.default.loadAnimation({
      container: lottieContainer.value,
      renderer: 'svg',
      loop: props.loop,
      autoplay: false, // Always start paused
      animationData: animationData
    })

    // Go to first frame and pause (so it's visible)
    animationInstance.addEventListener('DOMLoaded', () => {
      animationInstance.goToAndStop(0, true) // Go to frame 0 and stop
    })

    console.log('Lottie animation loaded successfully')

  } catch (error) {
    console.error('Error loading Lottie animation:', error)
    // Show fallback content
    if (lottieContainer.value) {
      lottieContainer.value.innerHTML = '<div style="width: 160px; height: 160px; background: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #666;">Animation not found</div>'
    }
  }
})

// Function to modify hand/skin colors in Lottie data
const modifyHandColors = (data, newColor) => {
  // Convert hex color to RGB array for Lottie
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255,
      1
    ] : [0, 0, 0, 1]
  }

  const targetColor = hexToRgb(newColor)

  // Common skin tone colors to replace (in RGB 0-1 format)
  const skinTones = [
    [1, 0.8, 0.6, 1],      // Light skin
    [0.96, 0.76, 0.56, 1], // Peach
    [0.92, 0.72, 0.52, 1], // Light tan
    [0.8, 0.6, 0.4, 1],    // Tan
    [0.7, 0.5, 0.3, 1],    // Medium
    [0.6, 0.4, 0.2, 1],    // Dark tan
  ]

  const traverse = (obj) => {
    if (typeof obj !== 'object' || obj === null) return

    // Check for color properties (fill colors)
    if (obj.c && Array.isArray(obj.c) && obj.c.length >= 3) {
      // Check if this color is close to a skin tone
      const currentColor = obj.c
      for (const skinTone of skinTones) {
        const colorDiff = Math.abs(currentColor[0] - skinTone[0]) +
                         Math.abs(currentColor[1] - skinTone[1]) +
                         Math.abs(currentColor[2] - skinTone[2])

        if (colorDiff < 0.3) { // If close to skin tone, replace it
          obj.c = [...targetColor]
          break
        }
      }
    }

    // Handle keyframe data for animated colors
    if (obj.k !== undefined) {
      if (Array.isArray(obj.k)) {
        obj.k.forEach(keyframe => {
          if (keyframe.s && Array.isArray(keyframe.s) && keyframe.s.length >= 3) {
            const currentColor = keyframe.s
            for (const skinTone of skinTones) {
              const colorDiff = Math.abs(currentColor[0] - skinTone[0]) +
                               Math.abs(currentColor[1] - skinTone[1]) +
                               Math.abs(currentColor[2] - skinTone[2])

              if (colorDiff < 0.3) {
                keyframe.s = [...targetColor]
                break
              }
            }
          }
          if (keyframe.e && Array.isArray(keyframe.e) && keyframe.e.length >= 3) {
            const currentColor = keyframe.e
            for (const skinTone of skinTones) {
              const colorDiff = Math.abs(currentColor[0] - skinTone[0]) +
                               Math.abs(currentColor[1] - skinTone[1]) +
                               Math.abs(currentColor[2] - skinTone[2])

              if (colorDiff < 0.3) {
                keyframe.e = [...targetColor]
                break
              }
            }
          }
        })
      } else if (Array.isArray(obj.k) && obj.k.length >= 3) {
        const currentColor = obj.k
        for (const skinTone of skinTones) {
          const colorDiff = Math.abs(currentColor[0] - skinTone[0]) +
                           Math.abs(currentColor[1] - skinTone[1]) +
                           Math.abs(currentColor[2] - skinTone[2])

          if (colorDiff < 0.3) {
            obj.k = [...targetColor]
            break
          }
        }
      }
    }

    // Recursively traverse all properties
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        traverse(obj[key])
      }
    }
  }

  traverse(data)
}

onBeforeUnmount(() => {
  if (animationInstance) {
    animationInstance.destroy()
  }
})
</script>

<style scoped>
.lottie-container {
  display: inline-block;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 140px;
  height: 140px;
}

.lottie-container:hover {
  transform: scale(1.05);
}
</style>