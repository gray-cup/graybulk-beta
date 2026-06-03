import { AuthProvider } from "./_context/auth";

export const metadata = {
  title: "Gray Bulk Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">{children}</div>
    </AuthProvider>
  );
}
