import { Sidebar } from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid h-full max-w-[1536px] grid-cols-app gap-5 p-5">
      <Sidebar />
      <main className="px-24 py-13">{children}</main>
    </div>
  );
}
