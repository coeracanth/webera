/** @jsx h */
import { SizeHint, Webview } from "https://deno.land/x/webview@0.7.5/mod.ts";
import { h } from "./deps/preact.ts";
import { renderToString } from "./deps/preact_render.ts";
import { bundle } from "https://deno.land/x/emit@0.10.0/mod.ts";
import { serve } from "https://deno.land/std@0.161.0/http/server.ts";

const sev = Deno.listen({ port: 8000 });
// const server = serve(async (req) => {
// 	const scripts = await bundle("./src/index.tsx");

// 	return new Response(scripts.code);
// });

// const View = () => (
// 	<html>
// 		<head>
// 			<meta charSet="utf-8" />
// 			<link rel="preconnect" href="https://fonts.googleapis.com" />
// 			<link
// 				rel="preconnect"
// 				href="https://fonts.gstatic.com"
// 				crossOrigin="true"
// 			/>
// 			<link
// 				href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+KR:wght@400;700&display=swap"
// 				rel="stylesheet"
// 			/>
// 			<script type="module" src="http://localhost:8000/"></script>
// 		</head>
// 		<body>
// 			<div id="root">hoge</div>
// 		</body>
// 	</html>
// );

const windowWorker = new Worker(new URL("./client.tsx", import.meta.url).href, {
	type: "module",
});

const workers = new Promise((res, rej) => {
	windowWorker.onmessage = (e) => {
		res(e.data);
	};
	windowWorker.onerror = (e) => {
		rej(e.error);
	};
	windowWorker.onmessageerror = (e) => {
		rej(e.data);
	};
}).finally(() => {
	// 閉じてもデバッグ終わんないんだけどどうすりゃいいの
	sev.close();
});

for await (const con of sev) {
	const httpCon = Deno.serveHttp(con);
	for await (const req of httpCon) {
		switch (req.request.url) {
			case "http://localhost:8000/script.js": {
				const scripts = await bundle("./src/index.tsx");
				const res = new Response(scripts.code);
				res.headers.set("Content-Type", "text/javascript");
				req.respondWith(res);
				break;
			}
			case "http://localhost:8000/index.html": {
				req.respondWith(
					new Response(await Deno.readFile("./public/index.html")),
				);
				break;
			}
			default: {
				break;
			}
		}
	}
}

// const wv = new Webview(true);
// wv.size = {
// 	height: 300,
// 	width: 400,
// 	hint: SizeHint.NONE,
// };
// wv.navigate(`data:text/html, ${encodeURIComponent(renderToString(View()))}`);
// // 同期的にブロックするせいで裏で鯖すら建てれない
// wv.run();

// console.log("end");
