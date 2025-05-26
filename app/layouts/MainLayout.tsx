
import { Outlet, Link } from "react-router";

import type { Route } from "./+types/MainLayout";
import { Navbar } from "~/components/common/Navbar";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Tradoora - Your Ultimate Online Shopping Destination" },
        { 
            name: "description", 
            content: "Discover a seamless shopping experience at Tradoora. Find amazing deals on fashion, electronics, home essentials and more. Shop smart, shop easy with Tradoora."
        },
        {
            name: "keywords",
            content: "online shopping, e-commerce, shopping platform, best deals, fashion, electronics, home essentials"
        }
    ];
}

export default function MainLayout() {
  return (
    <main>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </main>
  );
}