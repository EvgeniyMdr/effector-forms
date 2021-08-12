import { babel } from "@rollup/plugin-babel"
import replace from "@rollup/plugin-replace"
import { terser } from "rollup-plugin-terser"
import typescript from "rollup-plugin-typescript2"
import pkg from "./package.json"
import babelConfig from "./babel.config.json"

export default {
    external: [
        "effector",
        "effector-react",
        "react",
        "object-assign",
        "react-dom"
    ],
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true,
        },
        {
            file: pkg["umd:main"],
            format: "umd",
            sourcemap: true,
            name: "EffectorForm",
        },
        {
            file: "./dist/effector-forms.iife.js",
            format: "iife",
            name: "EffectorForm",
            sourcemap: true,
        }
    ],
    plugins: [
        typescript(),
        replace({
            "SSR_BUILD": false,
            "preventAssignment": false,
        }),
        babel({
            exclude: "node_modules/**",
            extensions: [".js", ".ts", ".tsx"],
            ...babelConfig,
        }),
        terser(),
    ]
}
