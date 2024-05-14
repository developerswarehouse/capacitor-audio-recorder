import { WebPlugin } from '@capacitor/core';

import type { CapacitorAudioRecorderPlugin } from './definitions';

export class CapacitorAudioRecorderWeb
  extends WebPlugin
  implements CapacitorAudioRecorderPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
