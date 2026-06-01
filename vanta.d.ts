declare module "vanta/dist/vanta.net.min" {
  import { Object3D } from "three"

  interface VantaNetConfig {
    el: HTMLElement | null
    THREE: any
    mouseControls?: boolean
    touchControls?: boolean
    gyroControls?: boolean
    minHeight?: number
    minWidth?: number
    scale?: number
    scaleMobile?: number
    color?: number | string
    backgroundColor?: number | string
    [key: string]: any
  }

  interface VantaEffect {
    destroy(): void
    resize(): void
    setOptions(options: Partial<VantaNetConfig>): void
  }

  function NET(config: VantaNetConfig): VantaEffect
  export default NET
}
