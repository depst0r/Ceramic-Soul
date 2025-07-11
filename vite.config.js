import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				catalog: resolve(__dirname, "/pages/catalog.html"),
				blog: resolve(__dirname, "/pages/blog.html"),
				about: resolve(__dirname, "/pages/about.html"),
			},
		},
	},
});
