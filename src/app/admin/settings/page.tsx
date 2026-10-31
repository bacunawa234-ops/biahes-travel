'use client';

import { useState } from 'react';
import { BRAND, CONTACT } from '@/lib/constants';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    phone: CONTACT.phone,
    email: CONTACT.email,
    address: '123 Travel Street, Manila, Philippines',
    businessHours: 'Mon - Fri: 9:00 AM - 6:00 PM',
  });

  const [adminUsers, setAdminUsers] = useState([
    { id: '1', email: 'admin@biahes.com', role: 'owner', created_at: '2026-10-01' },
    { id: '2', email: 'manager@biahes.com', role: 'editor', created_at: '2026-10-15' },
  ]);

  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminRole, setNewAdminRole] = useState('editor');
  const [saveMessage, setSaveMessage] = useState('');
  const [editingSettings, setEditingSettings] = useState(false);

  const handleSettingsChange = (field: string, value: string) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleSaveSettings = () => {
    setSaveMessage('Settings saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
    setEditingSettings(false);
  };

  const handleAddAdmin = () => {
    if (!newAdminEmail) return;

    const newAdmin = {
      id: String(adminUsers.length + 1),
      email: newAdminEmail,
      role: newAdminRole,
      created_at: new Date().toISOString().split('T')[0],
    };

    setAdminUsers([...adminUsers, newAdmin]);
    setNewAdminEmail('');
    setNewAdminRole('editor');
  };

  const handleRemoveAdmin = (id: string) => {
    setAdminUsers(adminUsers.filter((admin) => admin.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-biahes-navy mb-2">Settings</h1>
        <p className="text-gray-600">Manage business information and admin access</p>
      </div>

      {/* Business Information */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-biahes-navy">Business Information</h2>
          <button
            onClick={() => setEditingSettings(!editingSettings)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              editingSettings
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-biahes-bright-blue text-white hover:bg-biahes-royal-blue'
            }`}
          >
            {editingSettings ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {saveMessage && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-lg">
            <p className="text-green-800 font-semibold text-sm">{saveMessage}</p>
          </div>
        )}

        <div className="space-y-4">
          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-biahes-navy mb-2">Phone Number</label>
            {editingSettings ? (
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => handleSettingsChange('phone', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
              />
            ) : (
              <p className="text-gray-700">{settings.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-biahes-navy mb-2">Email Address</label>
            {editingSettings ? (
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleSettingsChange('email', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
              />
            ) : (
              <p className="text-gray-700">{settings.email}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-biahes-navy mb-2">Business Address</label>
            {editingSettings ? (
              <textarea
                value={settings.address}
                onChange={(e) => handleSettingsChange('address', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
              />
            ) : (
              <p className="text-gray-700">{settings.address}</p>
            )}
          </div>

          {/* Business Hours */}
          <div>
            <label className="block text-sm font-semibold text-biahes-navy mb-2">Business Hours</label>
            {editingSettings ? (
              <input
                type="text"
                value={settings.businessHours}
                onChange={(e) => handleSettingsChange('businessHours', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
              />
            ) : (
              <p className="text-gray-700">{settings.businessHours}</p>
            )}
          </div>

          {/* Save Button */}
          {editingSettings && (
            <button onClick={handleSaveSettings} className="btn-primary w-full py-3">
              Save Changes
            </button>
          )}
        </div>
      </div>

      {/* Admin Users */}
      <div className="card">
        <h2 className="text-xl font-bold text-biahes-navy mb-6">Admin Users</h2>

        {/* Current Admins */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-biahes-navy mb-4">Current Admins</h3>
          <div className="space-y-3">
            {adminUsers.map((admin) => (
              <div key={admin.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-biahes-navy">{admin.email}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Role: <span className="font-semibold">{admin.role}</span> • Added: {admin.created_at}
                  </p>
                </div>
                {admin.role !== 'owner' && (
                  <button
                    onClick={() => handleRemoveAdmin(admin.id)}
                    className="px-3 py-1 bg-biahes-red text-white rounded hover:bg-biahes-deep-red transition-colors text-sm font-semibold"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Add New Admin */}
        <div className="border-t-2 border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-biahes-navy mb-4">Add New Admin</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-biahes-navy mb-2">Email Address</label>
                <input
                  type="email"
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                  placeholder="newadmin@biahes.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-biahes-navy mb-2">Role</label>
                <select
                  value={newAdminRole}
                  onChange={(e) => setNewAdminRole(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
                >
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleAddAdmin}
              disabled={!newAdminEmail}
              className="btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Admin User
            </button>
          </div>

          <p className="text-xs text-gray-600 mt-4 italic">
            Note: New admins will receive a welcome email with login instructions.
          </p>
        </div>
      </div>

      {/* System Information */}
      <div className="card bg-blue-50 border-2 border-biahes-bright-blue">
        <h2 className="text-lg font-bold text-biahes-navy mb-4">System Information</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="font-semibold">Application Version:</span>
            <span>1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Database:</span>
            <span>Supabase PostgreSQL</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Last Updated:</span>
            <span>2026-10-30</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Status:</span>
            <span className="text-green-600 font-semibold">✓ Operational</span>
          </div>
        </div>
      </div>

      {/* Help & Support */}
      <div className="card">
        <h2 className="text-lg font-bold text-biahes-navy mb-4">💡 Need Help?</h2>
        <p className="text-gray-700 mb-4">
          For technical support or questions about managing your tours and bookings, please contact the Biahes team.
        </p>
        <div className="flex gap-4">
          <a
            href={`mailto:${settings.email}`}
            className="btn-primary"
          >
            📧 Contact Support
          </a>
          <a
            href={`tel:${settings.phone}`}
            className="btn-outline"
          >
            ☎️ Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
