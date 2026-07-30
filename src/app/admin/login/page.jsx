import LoginForm from "@/components/admin/LoginForm";

export const metadata = {
  title: "Admin Login",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0B1020] flex items-center justify-center px-5">
      <LoginForm />
    </main>
  );
}