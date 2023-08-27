import { defineConfig } from "astro/config";
import image from '@astrojs/image';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
        icon({
            include: {
                mdi: ["*"], // Loads entire Material Design Icon set
                mingcute: ["*"],
                ph: ["moon-fill", "sun-fill"],
            },
        })
    ],
});
