declare module 'uuid' {
  export function v4(): string;
  export function v4(options: {
    random?: number[];
    rng?: () => number[];
  }): string;
  export function validate(uuid: string): boolean;
  export function version(uuid: string): number;
} 