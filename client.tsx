/** @jsx h */
import { SizeHint, Webview } from "https://deno.land/x/webview@0.7.5/mod.ts";
import { h } from "./deps/preact.ts";
import { renderToString } from "./deps/preact_render.ts";
import { bundle } from "https://deno.land/x/emit@0.10.0/mod.ts";
import { serve } from "https://deno.land/std@0.161.0/http/server.ts";

const View = () => (
	<html>
		<head>
			<meta charSet="utf-8" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+KR:wght@400;700&display=swap"
				rel="stylesheet"
			/>
			<script crossOrigin="true" type="module" src="http://localhost:8000/">
			</script>
		</head>
		<body>
			<div id="root">hoge</div>
		</body>
	</html>
);
const wv = new Webview(true);
wv.size = {
	height: 300,
	width: 400,
	hint: SizeHint.NONE,
};
// wv.navigate(`data:text/html, ${encodeURIComponent(renderToString(View()))}`);
wv.navigate(`http://localhost:8000/index.html`);
wv.run();

postMessage("quit");
