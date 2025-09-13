// pages/admin/products/index.js
import AdminLayout from '@/components/Admin/AdminLayout';
import AdminProductDashboard from '@/pages/admin/AdminProductDashboard';
import AdminGuard from '@/components/Admin/AdminGuard';
import AdminProductUpload from '@/pages/admin/AdminProductUpload';

export default function AdminProductsPage() {
  return (
    <AdminGuard>
      <AdminLayout>
        <AdminProductDashboard />
        <AdminProductUpload />
      </AdminLayout>
    </AdminGuard>
  );
}
