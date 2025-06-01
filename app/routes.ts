import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/MainLayout.tsx", [
        index("routes/_index.tsx"), 
        route("/product", "routes/products/index.tsx"),
        route("/product/:slug", "routes/products/$slug.tsx"),
        route("/cart", "routes/cart.tsx")
    ]),
    route('/login', 'routes/auth/login.tsx'),
    route('/register', 'routes/auth/register.tsx')
] satisfies RouteConfig;