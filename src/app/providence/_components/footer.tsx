import { DiscordLogoIcon } from '@radix-ui/react-icons';

const navigation = {
  social: [
    {
      name: 'YouTube',
      href: 'https://discord.gg/RG738gWp',
      icon: <DiscordLogoIcon className="h-6 w-6 text-[#0581B2]" />,
    },
  ],
};

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 sm:pt-24 lg:px-8">
        <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} target="_blank" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2024 Providence, Inc. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
