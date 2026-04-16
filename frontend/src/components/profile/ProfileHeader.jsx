import React, { useState } from 'react';
import { EditIcon, MapPinIcon, ShieldCheckIcon, StarIcon } from '../Icons';

export default function ProfileHeader({ user, onUpdate, isEditMode, setEditMode }) {
  const [formData, setFormData] = useState({
    displayName: user.displayName,
    bio: user.bio,
    location: user.location || 'Earth',
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          const city = data.address.city || data.address.town || data.address.village || "Somewhere";
          const country = data.address.country || "";
          const locationStr = country ? `${city}, ${country}` : city;
          setFormData({ ...formData, location: locationStr });
        } catch (err) {
          console.error("Error fetching location string", err);
        } finally {
          setIsLocating(false);
        }
      },
      () => {
        alert("Unable to retrieve your location. Please enter it manually.");
        setIsLocating(false);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updates = { ...formData };
    if (avatarFile) {
      updates.avatar = avatarFile;
    }

    setIsSaving(true);
    const success = await onUpdate(updates);
    setIsSaving(false);

    if (success) {
      setEditMode(false);
      setAvatarFile(null);
      setAvatarPreview(null);
    }
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-sm p-6 md:p-10 border border-slate-100 mb-8 relative overflow-hidden group">
      {/* Decorative background flare */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 md:-mr-32 md:-mt-32 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

      {!isEditMode ? (
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-10 relative z-10">
          <div className="relative">
            <img
              src={user.avatarUrl || `https://ui-avatars.com/api/?name=${user.displayName}&background=3b82f6&color=fff`}
              alt="Profile"
              className="w-28 h-28 md:w-40 md:h-40 rounded-[2.5rem] object-cover border-4 border-slate-50 shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2.5 rounded-2xl shadow-lg">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row items-center md:items-start flex-wrap gap-4 mb-4">
              <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {user.displayName}
              </h1>
              <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-blue-100">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                Top Mentor
              </span>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
              {user.bio || "No bio added yet. Tell people about your skills and wisdom!"}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-sm font-bold text-slate-400">
              <div className="flex items-center gap-2 text-orange-500 bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-100">
                <StarIcon className="w-4 h-4" />
                <span>4.9 (128 reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <MapPinIcon className="w-4 h-4" />
                <span>{user.location || 'Earth'}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setEditMode(true)}
            className="flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-5 md:px-6 py-3 md:py-3.5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm md:text-base"
          >
            <EditIcon className="w-5 h-5" />
            Edit Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6 max-w-2xl">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="relative group/avatar">
              <div className="w-32 h-32 rounded-[2rem] overflow-hidden border-4 border-white shadow-lg relative">
                <img
                  src={avatarPreview || user.avatarUrl || `https://ui-avatars.com/api/?name=${user.displayName}&background=3b82f6&color=fff`}
                  alt="Profile Preview"
                  className="w-full h-full object-cover transition-opacity group-hover/avatar:opacity-50"
                />
                <label className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover/avatar:opacity-100 transition-opacity bg-black/20">
                  <div className="bg-white p-2.5 rounded-xl shadow-lg transform translate-y-2 group-hover/avatar:translate-y-0 transition-transform">
                    <EditIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Edit Basic Information</h2>
              <p className="text-sm text-slate-400">Update your public profile info and location.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Display Name</label>
              <input
                type="text"
                value={formData.displayName}
                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white transition-all rounded-2xl px-5 py-3.5 outline-none font-semibold"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white transition-all rounded-2xl px-5 py-3.5 pr-12 outline-none font-semibold"
                />
                <button
                  type="button"
                  onClick={handleLocation}
                  disabled={isLocating}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800 disabled:opacity-50"
                  title="Use current location"
                >
                  <MapPinIcon className={`w-5 h-5 ${isLocating ? 'animate-bounce' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bio</label>
            <textarea
              rows="4"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white transition-all rounded-3xl px-5 py-4 outline-none font-medium leading-relaxed resize-none"
              placeholder="Share your story and expertise..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSaving}
              className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-all flex items-center gap-2 ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving Changes...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setEditMode(false);
                setAvatarPreview(null);
                setAvatarFile(null);
              }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-8 py-3.5 rounded-xl font-bold active:scale-95 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
