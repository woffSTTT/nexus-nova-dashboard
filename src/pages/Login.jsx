import React from 'react';

const Login = () => {
  const discordLogin = () => {
    window.location.href = `https://discord.com/oauth2/authorize?client_id=${import.meta.env.VITE_DISCORD_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code&scope=identify guilds`;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Benvenuto su Nexus Nova</h1>
        <button onClick={discordLogin} className="bg-indigo-600 px-6 py-2 rounded hover:bg-indigo-700 transition text-white">
          Login con Discord
        </button>
      </div>
    </div>
  );
};

export default Login;
