import { configs } from "@nx/eslint-plugin"
import { imports, base, baseReact, a11y } from "@leancodepl/eslint-config"
import { resolveFlatConfig } from "@leancodepl/resolve-eslint-flat-config"

export default resolveFlatConfig([
  ...configs["flat/base"],
  ...configs["flat/typescript"],
  ...configs["flat/javascript"],
  {
    ignores: ["**/dist"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: [String.raw`^.*/eslint(\.base)?\.config\.[cm]?js$`],
          depConstraints: [
            {
              sourceTag: "*",
              onlyDependOnLibsWithTags: ["*"],
            },
          ],
        },
      ],
    },
  },
  ...imports,
  ...base,
  ...baseReact,
  ...a11y,
])
