// app/page.tsx
"use client";

import { redirect } from "next/navigation";

export default function Page() {
  // Redirect to the dashboard product page
  redirect("/dashboard/product");
}
