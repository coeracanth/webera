module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	rules: {
		"array-bracket-newline": "error",
		"array-bracket-spacing": "error",
		"array-element-newline": ["error", "consistent"],
		"arrow-parens": "error",
		"arrow-spacing": "error",
		"block-spacing": "error",
		"comma-dangle": ["error", "always-multiline"],
		"comma-style": "error",
		"computed-property-spacing": "error",
		curly: "error",
		"dot-location": ["error", "property"],
		"dot-notation": "error",
		"eol-last": "error",
		eqeqeq: ["error", "always", { null: "ignore" }],
		"function-call-argument-newline": ["error", "consistent"],
		"function-paren-newline": ["error", "consistent"],
		"generator-star-spacing": ["error", {
			after: true,
			before: false,
			method: {
				before: true,
				after: false,
			},
		}],
		"guard-for-in": "error",
		"implicit-arrow-linebreak": "error",
		"jsx-quotes": "error",
		"key-spacing": "error",
		"keyword-spacing": "error",
		"linebreak-style": "error",
		"max-len": ["error", { code: 100 }],
		"multiline-ternary": ["error", "always-multiline"],
		"new-parens": "error",
		"no-alert": "error",
		"no-await-in-loop": "off",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-class-assign": "off", // Typescript
		"no-confusing-arrow": "error",
		"no-console": "error",
		"no-const-assign": "off", // Typescript
		"no-constant-condition": "off", // @typescript-eslint/no-unnecessary-condition
		"no-constructor-return": "error",
		"no-dupe-args": "off", // Typescript
		"no-dupe-class-members": "off", // Typescript
		"no-dupe-else-if": "error",
		"no-dupe-keys": "off", // Typescript
		// "no-duplicate-imports": "error", // Can't handle type import well enough
		"no-eval": "error",
		"no-extra-label": "error",
		"no-extra-semi": "off", // @typescript-eslint/no-extra-semi
		"no-fallthrough": "off", // Typescript
		"no-floating-decimal": "error",
		"no-implicit-coercion": "error",
		"no-import-assign": "error",
		"no-invalid-this": "error",
		"no-irregular-whitespace": ["error", { skipStrings: false }],
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": ["error", { allowLoop: true, allowSwitch: true }],
		"no-lone-blocks": "error",
		"no-multi-assign": "error",
		"no-multi-spaces": ["error", { ignoreEOLComments: true }],
		"no-multi-str": "error",
		"no-multiple-empty-lines": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-symbol": "off", // Typescript
		"no-new-wrappers": "error",
		"no-obj-calls": "off", // Typescript
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-proto": "error",
		"no-regex-spaces": "off",
		"no-return-assign": ["error", "always"],
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-setter-return": "off", // Typescript
		"no-shadow": "off", // Typescript
		"no-this-before-super": "off", // Typescript
		"no-trailing-spaces": "error",
		"no-undef": "off", // Typescript
		"no-unreachable": "off", // Typescript
		"no-unsafe-negation": ["off", { enforceForOrderingRelations: true }],
		"no-unused-vars": "off", // Typescript
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"no-void": "error",
		"no-whitespace-before-property": "error",
		"object-curly-newline": "error",
		"object-curly-spacing": "error",
		"object-shorthand": ["error", "properties"],
		"operator-linebreak": ["error", "after"],
		"padded-blocks": ["error", "never"],
		"prefer-arrow-callback": "error",
		"prefer-exponentiation-operator": "error",
		"prefer-object-spread": "error",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"quote-props": ["error", "as-needed"],
		"rest-spread-spacing": "error",
		"require-yield": ["off"],
		"semi-spacing": "error",
		"semi-style": "error",
		"space-before-blocks": "error",
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"spaced-comment": "error",
		"switch-colon-spacing": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
		"use-isnan": ["error", {
			enforceForSwitchCase: true,
			enforceForIndexOf: true,
		}],
		"valid-typeof": "off", // Typescript
		"wrap-iife": "error",
		"yield-star-spacing": "error",
		yoda: ["error", "never", { exceptRange: true }],
		"@typescript-eslint/brace-style": ["error", "1tbs", {
			allowSingleLine: true,
		}],
		"@typescript-eslint/comma-spacing": "error",
		"@typescript-eslint/consistent-type-assertions": ["error", {
			assertionStyle: "as",
			objectLiteralTypeAssertions: "allow-as-parameter",
		}],
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-member-accessibility": "error",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/func-call-spacing": "error",
		"@typescript-eslint/indent": ["error", "tab", { SwitchCase: 1 }],
		"@typescript-eslint/method-signature-style": "error",
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-extra-non-null-assertion": "error",
		"@typescript-eslint/no-extra-parens": ["error", "all", {
			ignoreJSX: "all",
			nestedBinaryExpressions: false,
		}],
		"@typescript-eslint/no-extra-semi": "error",
		"@typescript-eslint/no-implied-eval": "error",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-floating-promises": "warn",
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-this-alias": "off",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-parameter-properties": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-throw-literal": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unnecessary-condition": ["error", {
			allowConstantLoopConditions: true,
		}],
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unused-expressions": "error",
		"@typescript-eslint/no-use-before-define": "off", // Typescript
		"@typescript-eslint/restrict-template-expressions": ["error", {
			allowNumber: true,
		}],
		"@typescript-eslint/no-unused-vars": "off", // Typescript
		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-includes": "off",
		"@typescript-eslint/prefer-namespace-keyword": "off",
		"@typescript-eslint/prefer-nullish-coalescing": ["error", {
			ignoreConditionalTests: false,
			ignoreMixedLogicalExpressions: false,
		}],
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "off",
		"@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
		"@typescript-eslint/restrict-plus-operands": ["error", {
			checkCompoundAssignments: true,
		}],
		"@typescript-eslint/semi": "error",
		"@typescript-eslint/strict-boolean-expressions": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
	},
	"overrides": [
		{
			"files": ["*.tsx"],
			"rules": {
				"max-len": ["error", { code: 100, tabWidth: 2 }],
			}
		}
	]
};
