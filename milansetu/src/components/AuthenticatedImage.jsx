import { useEffect, useState } from 'react';
import { fetchAuthenticatedImageUrl, getProfileAvatar } from '../utils/profileHelpers';

/**
 * Renders an image that may require JWT auth (API gallery URLs).
 * Falls back to placeholder avatars when no src or load fails.
 */
export default function AuthenticatedImage({ src, profile, alt = '', className, fallbackSrc }) {
  const placeholder = fallbackSrc || getProfileAvatar(profile);
  const [resolvedSrc, setResolvedSrc] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let objectUrl = null;

    async function load() {
      if (!src) {
        setResolvedSrc(null);
        return;
      }
      const url = await fetchAuthenticatedImageUrl(src);
      if (cancelled) {
        if (url?.startsWith('blob:')) URL.revokeObjectURL(url);
        return;
      }
      objectUrl = url;
      setResolvedSrc(url);
    }

    load();

    return () => {
      cancelled = true;
      if (objectUrl?.startsWith('blob:')) URL.revokeObjectURL(objectUrl);
    };
  }, [src]);

  return (
    <img
      src={resolvedSrc || placeholder}
      alt={alt}
      className={className}
      onError={() => setResolvedSrc(null)}
    />
  );
}
