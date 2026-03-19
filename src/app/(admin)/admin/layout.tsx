import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Users, FileText, Briefcase, MessageSquare, Settings, LogOut, Star } from "lucide-react";

// Simple auth check via cookie
async function checkAuth() {
  // In production, use NextAuth
  return true; // For demo, always authenticated
}

const navItems = [
  { href: "/admin", icon: <LayoutDashboard size={18} />, label: "Tableau de bord" },
  { href: "/admin/leads", icon: <Users size={18} />, label: "Leads" },
  { href: "/admin/devis", icon: <FileText size={18} />, label: "Demandes de Devis" },
  { href: "/admin/projets", icon: <Briefcase size={18} />, label: "Portfolio" },
  { href: "/admin/articles", icon: <MessageSquare size={18} />, label: "Blog" },
  { href: "/admin/temoignages", icon: <Star size={18} />, label: "Témoignages" },
  { href: "/admin/settings", icon: <Settings size={18} />, label: "Paramètres" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await checkAuth();
  if (!isAuth) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen flex bg-[#080812]">
      {/* Sidebar */}
      <aside
        className="w-64 shrink-0 flex flex-col"
        style={{
          background: "rgba(13, 13, 26, 0.98)",
          borderRight: "1px solid rgba(124, 58, 237, 0.15)",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 40,
        }}
      >
        {/* Logo */}
        <div
          className="p-6 border-b"
          style={{ borderColor: "rgba(124, 58, 237, 0.15)" }}
        >
          <Link href="/" className="flex items-center gap-3">
            <div
              className="hexagon w-9 h-9 flex items-center justify-center text-white font-black text-lg"
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
              }}
            >
              N
            </div>
            <div>
              <div className="font-poppins font-black text-white text-sm">
                NEX<span className="gradient-text">ARA</span>
              </div>
              <div className="text-[#8892A4] text-xs">Admin Dashboard</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#8892A4] hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium"
                >
                  <span style={{ color: "#7C3AED" }}>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div
          className="p-4 border-t"
          style={{ borderColor: "rgba(124, 58, 237, 0.15)" }}
        >
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#8892A4] hover:text-white hover:bg-white/5 transition-all text-sm"
          >
            <LogOut size={16} />
            Retour au site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <main className="min-h-screen p-8">{children}</main>
      </div>
    </div>
  );
}
