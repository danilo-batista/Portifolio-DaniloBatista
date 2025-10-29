import path from "node:path";
import react from "@vitejs/plugin-react";
import critical from "rollup-plugin-critical";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		react(),
		critical({
			criticalUrl: ["http://localhost:5173", "https://www.danilobatista.com"],
			criticalBase: "dist",
			criticalPages: [
				{ uri: "", template: "index.html" },
				{ uri: "/contato", template: "contato.html" },
			],
			inline: true,
			extract: false,
			width: 1300,
			height: 900,
			penthouse: {
				blockJSRequests: false,
				timeout: 30000,
			},
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
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
