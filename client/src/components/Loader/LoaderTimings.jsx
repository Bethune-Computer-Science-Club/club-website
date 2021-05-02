// timings = {
//   modes: {
//     timing-names: times(ms)
//   }
// }
export const timings = {
  "standard":{
    "transition": 500,
    "clean-animation-timing": 100,
    "bar-fill-time": 1000,
    "finish-bar-load-time": 500 * 2 + 100 * 2 + 1000, // aka "transition" * 2 + "clean-animation-timing" * 2 + "bar-fill-time"
  },
  "fast":{
    "transition": 350,
    "clean-animation-timing": 75,
    "bar-fill-time": 500,
    "finish-bar-load-time": 350 * 2 + 75 * 2 + 500,
  },
  "fastest":{
    "transition": 350,
    "clean-animation-timing": 25,
    "bar-fill-time": 100,
    "finish-bar-load-time": 350 * 2 + 25 * 2 + 100,
  }
}

export function getFinishTimeFromMode(mode){
  return timings[mode]["finish-bar-load-time"]
}