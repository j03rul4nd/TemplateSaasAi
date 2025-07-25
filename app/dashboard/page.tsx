import DashboardContent from "./_components/DashboardContent";
export default async function Dashboard() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardContent />
    </div>
  );
}