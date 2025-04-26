import type { TwoslashTypesCache } from '@/index';
import { unstable_cache } from 'next/cache';
import type { TwoslashReturn } from 'twoslash';

export function createNextTypesCache(): TwoslashTypesCache {
  const cache = new Map<string, unknown>();

  const read = unstable_cache(async (code: string) => {
    return cache.get(code) as TwoslashReturn | null;
  }, []);
  return {
    read,
    write(code, data) {
      cache.set(code, data);
    },
  };
}
