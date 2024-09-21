declare module '@remote/volumes/*' {
  import { ComponentType } from 'react';
  import type { VolumesProps } from './src/App';

  export const Volumes: ComponentType<VolumesProps>;
}