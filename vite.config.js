import path from 'node:path';
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	build: {
		outDir: "dist",
		minify: "esbuild",
		sourcemap: false,
		target: "esnext",
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
	server: {
		historyApiFallback: true,
	},
});
