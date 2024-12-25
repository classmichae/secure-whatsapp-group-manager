import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/MainLayout";

const Dashboard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">0</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Active Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">0</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Permissions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">0</p>
        </CardContent>
      </Card>
    </div>
  );
};

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Dashboard />
      </div>
    </MainLayout>
  );
};

export default Index;