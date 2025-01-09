# Pin npm packages by running ./bin/importmap

pin "application"
pin_all_from "components", to: "components"
pin "react", to: "https://cdn.jsdelivr.net/npm/react@17/umd/react.development.js"
pin "react-dom", to: "https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.development.js"
