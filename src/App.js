import React from 'react';
import { Command } from 'lucide-react';

const CommandList = () => {
  const commands = [
    {
      name: '!lurk',
      description: 'Let EthJuan know you\'re watching but not actively chatting',
      response: 'Thanks for lurking, @username! 👀 Hope you enjoy the stream!'
    },
    {
      name: '!followage',
      description: 'Shows how long you\'ve been following the channel',
      response: '@username has been following for 2 years and 3 months! 🎉'
    },
    {
      name: '!discord',
      description: 'Get the link to join EthJuan\'s Discord server',
      response: 'Join the Discord server! (discord link)'
    },
    {
      name: '!stats',
      description: 'Shows EthJuan\'s Valorant stats via tracker link',
      response: 'Check out my Valorant stats here: (tracker URL)'
    },
    {
      name: '!commands',
      description: 'Links to the website with all available commands',
      response: 'Check out all available commands here: (website link)'
    },
    {
      name: '!uptime',
      description: 'Shows how long the current stream has been live',
      response: 'Stream has been live for 3h 45m! 🎮'
    },
    {
      name: '!ping',
      description: 'Checks the bot\'s response time',
      response: 'Pong! Latency: 123ms 🏓'
    },
    {
      name: '!play [song name/url]',
      description: 'Plays a song through Discord for Juan to rate',
      response: 'Playing your requested song!'
    },
    {
      name: '!queue',
      description: 'Shows the current music queue',
      response: 'Current queue: [song list]'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-purple-900 py-8 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 flex items-center">
            <Command className="mr-2" size={32} color="white" />
            EthJuan's Commands
          </h1>
          <p className="text-purple-200">All the commands you need for the stream!</p>
        </div>
      </header>

      {/* Commands List */}
      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="grid gap-6">
          {commands.map((cmd) => (
            <div 
              key={cmd.name}
              className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700"
            >
              <h2 className="text-xl font-mono text-purple-400 mb-2">{cmd.name}</h2>
              <p className="text-gray-300 mb-3">{cmd.description}</p>
              <div className="bg-gray-900 p-3 rounded font-mono text-sm text-green-400">
                Response: {cmd.response}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-400">
          <p>Made with 💜 for EthJuan's community</p>
        </div>
      </footer>
    </div>
  );
};

export default CommandList;