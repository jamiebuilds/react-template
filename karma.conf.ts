/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable unicorn/prevent-abbreviations */
import type { Config, ConfigOptions, ClientOptions } from "karma"

export default function createConfig(config: Config): void {
	config.set({
		frameworks: ["mocha", "chai"],
		reporters: ["progress"],
		browsers: ["ChromeHeadless"],

		files: [
			{
				pattern: "./src/**/*.test.*",
				watched: false,
			},
		],

		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		concurrency: Infinity,

		preprocessors: {
			"./src/**/*.test.*": ["rollup"],
		},

		client: {
			mocha: {
				ui: "qunit",
			},
		} as ClientOptions,

		// rollupPreprocessor: {
		// 	...baseRollupConfig,
		// 	output: {
		// 		format: "iife",
		// 		name: "Jam",
		// 		sourcemap: "inline",
		// 	},
		// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
		// 	onwarn: (error: any) => {
		// 		if (error.message.includes("node_modules/chai/")) {
		// 			return
		// 		}
		// 		// eslint-disable-next-line no-console
		// 		console.error(error.toString())
		// 	},
		// },
	} as ConfigOptions)
}
