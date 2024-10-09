import { createBlizzardApiClient } from '@blizzard-api/client';
import { env } from '@/configs/env';

export const blizzardClient = await createBlizzardApiClient({
  key: env.BATTLENET_CLIENT_ID,
  secret: env.BATTLENET_CLIENT_SECRET,
  origin: 'eu',
});
