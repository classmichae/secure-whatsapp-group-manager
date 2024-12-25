import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{user?.username}</span>
              {user?.isSuperAdmin && (
                <span className="text-sm text-muted-foreground">(מנהל על)</span>
              )}
            </div>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="w-4 h-4 mr-2" />
              התנתק
            </Button>
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}