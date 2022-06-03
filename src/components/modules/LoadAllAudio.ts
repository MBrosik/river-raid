import audioLoader from "../utils/audioLoader";

import crush from "../../audio/crush.wav"
import enemyCrush from "../../audio/enemyCrush.wav"
import noFuel from "../../audio/NoFuel.wav"

import flyNoise from "../../audio/flyNoise.wav"
import flyStart from "../../audio/flyStart.wav"

import Health from "../../audio/Health.wav"
import strike from "../../audio/strike.wav"
import tankStrike from "../../audio/tankStrike.wav"

import helicopterStrike from "../../audio/helicopterStrike.wav"



export default class LoadAllAudio {
   static audios: {
      crush: HTMLAudioElement;
      enemyCrush: HTMLAudioElement;
      noFuel: HTMLAudioElement;

      flyNoise: HTMLAudioElement;
      flyStart: HTMLAudioElement;

      Health: HTMLAudioElement;
      strike: HTMLAudioElement;
      tankStrike: HTMLAudioElement;

      helicopterStrike: HTMLAudioElement;
   };

   static async getAudios() {
      LoadAllAudio.audios = {
         crush: await audioLoader(crush),
         enemyCrush: await audioLoader(enemyCrush),
         noFuel: await audioLoader(noFuel),

         flyNoise: await audioLoader(flyNoise),
         flyStart: await audioLoader(flyStart),

         Health: await audioLoader(Health),
         strike: await audioLoader(strike),
         tankStrike: await audioLoader(tankStrike),

         helicopterStrike: await audioLoader(helicopterStrike),
      }
   }
}