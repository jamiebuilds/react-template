import type { ReactElement } from "react"
import { css } from "@emotion/react"
import { FormattedMessage } from "react-intl"

export default function HomePage(): ReactElement {
	return (
		<h1
			css={css`
				color: hsl(330deg 100% 70%);
			`}
		>
			<FormattedMessage
				description="home page greeting"
				defaultMessage="Hello World!"
			/>
		</h1>
	)
}
