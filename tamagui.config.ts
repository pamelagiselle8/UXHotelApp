import { config } from "@tamagui/config/v2";
import { createTamagui } from "tamagui"; // or '@tamagui/core'

const appConfig = createTamagui(config);

export type AppConfig = typeof appConfig;
declare module "tamagui" {
  // or '@tamagui/core'
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
