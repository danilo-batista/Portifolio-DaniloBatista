import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
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
