import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/MainLayout.tsx", [
        index("routes/_index.tsx"), 
        route("/product", "routes/products/index.tsx"),
        route("/product/:id", "routes/products/$id.tsx")
    ]),
] satisfies RouteConfig;