import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    vue(),
    Components({
      resolvers: IconsResolver(),
    }),
    Icons({ autoInstall: true }),
  ],
}
