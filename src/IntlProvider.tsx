import type { ReactNode, ReactElement } from "react"
import { IntlProvider as ReactIntlProvider } from "react-intl"

function createBold(children: ReactNode): ReactElement {
	return <strong>{children}</strong>
}

function createItalic(children: ReactNode): ReactElement {
	return <em>{children}</em>
}

let defaultRichTextElements = {
	["b"]: createBold,
	["i"]: createItalic,
}

export interface IntlProviderProps {
	children: ReactNode
}

export default function IntlProvider(props: IntlProviderProps): ReactElement {
	return (
		<ReactIntlProvider
			locale={"en"}
			defaultRichTextElements={defaultRichTextElements}
		>
			{props.children}
		</ReactIntlProvider>
	)
}
