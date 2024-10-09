export default async function ProfilePage() {
  const accessToken = 'EUoY73Ypj6mQ6YvE0brOiOLP4MX0SCBFig';

  const wowProfile = await fetch('https://eu.api.blizzard.com/profile/user/wow', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const text = await wowProfile.text();

  const checkTokenValidity = await fetch('https://eu.battle.net/oauth/check_token', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl">Profile Page</h1>
    </div>
  );
}
