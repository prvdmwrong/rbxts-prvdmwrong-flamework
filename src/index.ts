import * as ts from "typescript"


export const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
	return (sourceFile) => {
		const visitor = (node: ts.Node): ts.Node => {
			if (ts.isConstructorDeclaration(node)) {
				const parent = node.parent
				if (parent && ts.isClassDeclaration(parent)) {
					console.log(parent, node)
				}
			}
			return ts.visitEachChild(node, visitor, context)
		}

		return ts.visitNode(sourceFile, visitor)
	}
}

export default transformer
