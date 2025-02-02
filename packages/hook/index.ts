// export function useAnimationFrame(
//   fn: (timestamp: number) => void,
//   delta = 0,
//   autoStop = false
// ): () => void {
//   let start: number
//   let work = true
//   const animationFrame =
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     ((fn) => setTimeout(fn, 1000 / 60))
//   const cancelAnimation =
//     window.cancelAnimationFrame ||
//     window.webkitCancelAnimationFrame ||
//     window.mozCancelAnimationFrame ||
//     window.oCancelAnimationFrame ||
//     window.msCancelAnimationFrame ||
//     clearTimeout
//   const animationId = animationFrame(function myFrame(
//     timestamp: number = Date.now()
//   ) {
//     if (!work) return
//     // eslint-disable-next-line no-constant-binary-expression
//     if (typeof start === undefined) {
//       start = timestamp
//     } else if (timestamp - start > delta) {
//       fn?.(timestamp)
//       start = timestamp
//       if (autoStop) stop()
//     }
//     animationFrame(myFrame)
//   })
//   function stop() {
//     work = false
//     cancelAnimation(animationId)
//   }
//   return stop
// }
import Spring from './spring'

export default Spring
