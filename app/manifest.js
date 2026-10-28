export const dynamic = "force-static";
export default function manifest() {
  return {
    name: "Aditya Jadhav | Data Analyst",
    short_name: "Aditya Jadhav",
    start_url: "/",
    display: "browser",
    background_color: "#06142B",
    theme_color: "#06142B",
    icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/icon-512.png", sizes: "512x512", type: "image/png" }],
  };
}
