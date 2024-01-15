import { Sidebar } from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-auto grid h-full max-w-8xl grid-cols-app gap-5 p-5">
      <Sidebar />
      <div className="py-13 px-24">{children}</div>
    </div>
  );
}
