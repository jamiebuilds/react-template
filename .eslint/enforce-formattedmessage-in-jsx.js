module.exports = {
	meta: {
		docs: {
			description: "Enforce use <FormattedMessage/> instead of text in JSX",
			category: "",
			recommended: false,
		},
		schema: [],
	},
	create(context) {
		return {
			JSXElement(node) {
				if (node.children.length === 0) {
					return
				}

				if (false) {
					const firstToken = context.getFirstToken(node)
				}
				let found = node.children.some((child) => {
					return (
						(child.type === "Literal" || child.type === "JSXText") &&
						child.value.trim() !== ""
					)
				})

				if (!found) {
					return
				}

				context.report({
					node,
					message: "Use <FormatMessage/> for text",
				})
			},
		}
	},
}
