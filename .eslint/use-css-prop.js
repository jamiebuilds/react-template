module.exports = {
	meta: {
		docs: {
			description: "Use css prop instead of className",
			category: "",
			recommended: false,
		},
		schema: [],
		fixable: true,
	},
	create(context) {
		return {
			JSXAttribute(node) {
				if (node.name.name !== "className") {
					return
				}

				if (node.value.type !== "JSXExpressionContainer") {
					return
				}

				if (node.value.expression.type !== "TaggedTemplateExpression") {
					return
				}

				if (node.value.expression.tag.name !== "css") {
					return
				}

				context.report({
					node,
					message: "Use css prop instead of className",
					fix(fixer) {
						return [fixer.replaceTextRange(node.name.range, "css")]
					},
				})
			},
		}
	},
}
