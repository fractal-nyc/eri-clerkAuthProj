import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/secret", "routes/secret.tsx"),
    route("/profile", "routes/profile.tsx"),

] satisfies RouteConfig;


