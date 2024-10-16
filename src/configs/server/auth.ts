import { PrismaAdapter } from '@auth/prisma-adapter';
import { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth';
import { type Adapter } from 'next-auth/adapters';
import { env } from '@/configs/env';
import { db } from '@/configs/server/db';
import { URL } from '@/configs/constants/url';

import BattleNetProvider from 'next-auth/providers/battlenet';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: User['role'];
      accessToken?: string;
    } & DefaultSession['user'];
  }

  interface User {
    role: 'USER' | 'ADMIN';
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    maxAge: 24 * 60 * 60, // 24 hours
  },

  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        role: user.role ?? 'USER',
      },
    }),

    async redirect({ url, baseUrl }) {
      if (url.startsWith(URL.HOME)) return baseUrl + url;
      return baseUrl + URL.HOME;
    },
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    BattleNetProvider({
      clientId: env.BATTLENET_CLIENT_ID,
      clientSecret: env.BATTLENET_CLIENT_SECRET,
      issuer: 'https://eu.battle.net/oauth',
      region: 'eu',
      authorization: {
        params: {
          scope: 'openid wow.profile',
        },
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
