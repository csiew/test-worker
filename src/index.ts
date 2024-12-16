/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import handleGetUsers from "./services/db";
import handleJson from "./services/json";
import handleTest from "./services/test";

const handler: ExportedHandler<Env> = {
	fetch: async (request, env, ctx): Promise<Response> => {
		const url = new URL(request.url);

		switch (url.pathname) {
		case "/test":
			return handleTest.fetch!(request, env, ctx);
		case "/json":
			return handleJson.fetch!(request, env, ctx);
		case "/db":
			return handleGetUsers.fetch!(request, env, ctx);
		}

		return new Response(
`
<html>
<head>
	<title>Not Found!</title>
</head>
<body>
	<h1>Hello World!</h1>
	<p>This is a test page.</p>
</body>
</html>
`,
			{
				headers: {
					"content-type": "text/html;charset=UTF-8"
				},
				status: 404,
				statusText: "404 Not Found"
			}
		);
	}
};

export default handler;
