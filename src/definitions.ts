export interface CapacitorAudioRecorderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
