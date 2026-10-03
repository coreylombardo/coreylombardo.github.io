import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Blog" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Blog() {
    return <div>this is gonna be the blog page adsfklhgadfklgafsdhgjlkfadgdlk</div>
}