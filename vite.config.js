import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
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
				manualChunks: (id) => {
					// Vendor chunks - bibliotecas de terceiros
					if (id.includes("node_modules")) {
						if (id.includes("react") || id.includes("react-dom")) {
							return "vendor-react";
						}
						if (id.includes("react-router")) {
							return "vendor-router";
						}
						return "vendor";
					}
					
					// Chunk para componentes de Cards (otimizar carregamento)
					if (id.includes("/components/Cards/")) {
						return "cards";
					}
					
					// Chunk para database (JSON files)
					if (id.includes("/database/")) {
						return "data";
					}
				},
				// Otimizar nomes de chunks
				chunkFileNames: "assets/[name]-[hash].js",
				entryFileNames: "assets/[name]-[hash].js",
				assetFileNames: "assets/[name]-[hash].[ext]",
			},
		},
	},
	server: {
		historyApiFallback: true,
	},
});
