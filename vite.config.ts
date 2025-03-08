import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: '応用情報技術者試験ドットコムのテキスト選択を有効化',
        version: '1.0.0',
        author: 'Kiyotaka Takizuka',
        namespace: 'https://github.com/takizuka/',
        description: '応用情報技術者試験ドットコムのテキスト選択ができるようにします。',
        grant:  ['unsafeWindow'],
        license: 'MIT',
        match: ['https://www.ap-siken.com/*'],
      },
    }),
  ],
});
