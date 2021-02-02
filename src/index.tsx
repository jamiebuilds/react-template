import type { ReactElement } from "react"
import { Suspense } from "react"
import { css } from "@emotion/react"
import { render } from "react-dom"
import { FormattedMessage } from "react-intl"
import IntlProvider from "./IntlProvider"
import Router from "./Router"

function App(): ReactElement {
	return (
		<IntlProvider>
			<Suspense
				fallback={
					<h1
						css={css`
							font-family: sans-serif;
						`}
					>
						<FormattedMessage
							description="Empty page loading text"
							defaultMessage="Loading..."
						/>
					</h1>
				}
			>
				<Router />
			</Suspense>
		</IntlProvider>
	)
}

render(<App />, document.querySelector("#root"))
