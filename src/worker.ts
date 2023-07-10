/**events[0]ne
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import {
  channel,
  hasSubscribers,
  subscribe,
  unsubscribe,
  tracingChannel,
} from 'node:diagnostics_channel';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

        const tailChannel = channel('tail-channel');

        tailChannel.publish("hoya");

        console.log("HI");
		//let req = new Request("https://httpbin.org/anything/url")
		return new Response("hello, this is the response");
	},
};
