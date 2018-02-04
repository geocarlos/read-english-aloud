import { Media, MediaObject } from '@ionic-native/media';

export class Word {

  private text: string;
  private ipa: string;
  private sound: MediaObject;

  constructor(text: string, ipa: string, sound: string, media: Media) {
    this.text = text;
    this.ipa = ipa;
    this.sound = media.create(sound);
  }

  playSound(): void {
    this.sound.play();
    this.sound.onStatusUpdate.subscribe(status =>{
      if(status === 4) this.sound.release();
    });
  }

  getSoundMedia(): MediaObject {
    return this.sound;
  }

  getText() {
    return this.text;
  }

}
