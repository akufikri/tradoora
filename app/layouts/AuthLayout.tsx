
// app/layouts/AuthLayout.tsx
import { Outlet, Link } from "react-router";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {/* Logo/Title */}
        <div className="text-center mb-6">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            My Store
          </Link>
          <p className="text-gray-600 mt-2">Welcome back!</p>
        </div>

        {/* Konten form login/register akan tampil di sini */}
        <Outlet />

        {/* Link kembali ke home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}