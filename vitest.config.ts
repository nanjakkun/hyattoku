import { defineConfig, mergeConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(async (env) => {
	// getViteConfigは設定を返す
	const astroViteConfigFn = getViteConfig({
		plugins: [tsconfigPaths()],
	});

	// Vitestから受け取ったenvを使う
	const astroViteConfig = await astroViteConfigFn(env);

	// Vitest固有の設定を定義
	return mergeConfig(astroViteConfig, {
		test: {
			setupFiles: ['src/__tests__/setup.ts'],
			include: ['src/**/*.{test,spec}.ts'],
			environment: 'happy-dom',
		},
	});
});
