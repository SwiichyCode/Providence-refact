import { blizzardClient } from '@/configs/libs/blizzard-client';
import { wow } from '@blizzard-api/wow';

class BlizzardProfileService {
  private accessToken: string;

  constructor() {
    this.accessToken = '';
  }

  async initialize() {
    const response = await blizzardClient.getAccessToken({});
    this.accessToken = response.data.access_token;
  }

  async getUserProfile() {
    await this.initialize();

    try {
      const response = await blizzardClient.sendRequest(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        wow.accountProfileSummary(this.accessToken),
      );

      console.log('response', response.data);
    } catch (error) {
      console.error(`Error fetching user profile:`, error);
    }
  }
}

export const blizzardProfileService = new BlizzardProfileService();
