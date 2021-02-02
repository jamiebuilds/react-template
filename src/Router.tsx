import { lazy } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

let HomePage = lazy(async () => import("./pages/HomePage"))

export default function Router(): React.ReactElement {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
