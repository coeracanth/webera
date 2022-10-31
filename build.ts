import { build } from "https://deno.land/x/esbuild@v0.15.12/mod.js";

const res = await build({
	bundle: true,
	format: "esm",
	entryPoints: ["src/index.tsx"],
	outfile: "public/bundle.js",
});
console.log(res.outputFiles);
if (res.stop) {
	res.stop();
}
