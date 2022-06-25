import { TIME } from "./TwoJS/Renderer";

export default function normalizeFrameRate(){
   return 1/((1 / 60) / (TIME.time_stamp/1000))
}