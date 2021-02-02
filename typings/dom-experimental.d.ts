type RequestIdleCallbackHandle = number

interface RequestIdleCallbackOptions {
	timeout: number
}

interface RequestIdleCallbackDeadline {
	readonly didTimeout: boolean
	timeRemaining(): number
}

interface RequestIdleProvider {
	requestIdleCallback(
		callback: (deadline: RequestIdleCallbackDeadline) => void,
		options?: RequestIdleCallbackOptions,
	): RequestIdleCallbackHandle
	cancelIdleCallback(handle: RequestIdleCallbackHandle): void
}

interface PaintRenderingContext2D
	extends CanvasState,
		CanvasTransform,
		CanvasCompositing,
		CanvasImageSmoothing,
		CanvasFillStrokeStyles,
		CanvasShadowStyles,
		CanvasRect,
		CanvasDrawPath,
		CanvasDrawImage,
		CanvasPathDrawingStyles,
		CanvasPath {}

interface PaintSize {
	readonly width: number
	readonly height: number
}

interface PaintWorklet {
	paint(
		context: PaintRenderingContext2D,
		geometry: PaintSize,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		properties: any,
	): void
}

interface PaintWorkletConstructor {
	inputProperties: string[]
	new (): PaintWorklet
}

declare function registerPaint(
	name: string,
	worklet: PaintWorkletConstructor,
): void

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Window extends RequestIdleProvider {}
