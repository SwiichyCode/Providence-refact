export default async function ProfilePage() {
  const accessToken = 'EUC9PYYE0sidPsZM36rfhuxgAtG5lhRhze';

  const wowProfile = await fetch('https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_GB', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const checkTokenValidity = await fetch('https://eu.battle.net/oauth/check_token', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  const wowProfileData = await wowProfile.json();

  console.log('wowProfileData', wowProfileData.wow_accounts[0].characters);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl">Profile Page</h1>
    </div>
  );
}
