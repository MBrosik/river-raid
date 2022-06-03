export default function audioLoader(link: string): Promise<HTMLAudioElement> {
   return new Promise(resolve => {
      let audio = new Audio(link);

      audio.oncanplaythrough = () => {
         audio.volume = 0.5;
         resolve(audio)
      }
   })

}