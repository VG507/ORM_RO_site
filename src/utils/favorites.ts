// LocalStorage helper for role favorites with cross-component event sync

const STORAGE_KEY = 'orm_ro_favorites_roles';
const FAVORITES_EVENT = 'orm_ro_favorites_changed';

export const getFavoriteRoleIds = (): string[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const toggleFavoriteRole = (roleId: string): boolean => {
  const current = getFavoriteRoleIds();
  const exists = current.includes(roleId);
  const updated = exists ? current.filter((id) => id !== roleId) : [...current, roleId];
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(FAVORITES_EVENT, { detail: updated }));
  } catch (e) {
    console.error('Failed to update favorites', e);
  }
  return !exists;
};

export const subscribeToFavorites = (callback: (ids: string[]) => void): (() => void) => {
  const handler = (e: Event) => {
    const custom = e as CustomEvent<string[]>;
    callback(custom.detail || getFavoriteRoleIds());
  };
  window.addEventListener(FAVORITES_EVENT, handler);
  return () => window.removeEventListener(FAVORITES_EVENT, handler);
};
