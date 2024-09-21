import React from "react";
import Link from "next/link";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">
        Project Name
            </Link>
          </h1>
          <nav className="space-x-4">
            <Link href="#overview" className="hover:text-blue-600">Overview
            </Link>
            <Link href="#features" className="hover:text-blue-600">Features
            </Link>
            <Link href="#getstarted" className="hover:text-blue-600">Get Started
            </Link>
            <Link href="#contact" className="hover:text-blue-600">Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="overview" className="bg-blue-600 text-white text-center py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Your Project Name</h1>
          <p className="text-lg sm:text-xl mb-8">
            A tagline that describes what your project or product does in a few concise words.
          </p>
          <div className="space-x-4">
            <a
              href="https://github.com/YourGitHubRepo"
              className="bg-white text-blue-600 px-6 py-3 rounded shadow font-semibold hover:bg-gray-100"
            >
              View on GitHub
            </a>
            <Link href="#getstarted" className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-900">
                Get Started
            
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="flex flex-wrap justify-around">
          <FeatureCard
            title="🔄 Token Transfers"
            description="Securely transfer tokens across different blockchains using Chainlink CCIP."
            link="/token-transfer"
          />
          <FeatureCard
            title="✉️ Cross-Chain Messaging"
            description="Send and receive data across multiple blockchains seamlessly."
            link="/cross-chain-messaging"
          />
          <FeatureCard
            title="🖼️ NFT Minting"
            description="Mint NFTs on any destination chain via cross-chain requests."
            link="/cross-chain-minting"
          />
          <FeatureCard
            title="🎲 Chainlink VRF"
            description="Generate and verify randomness securely using Chainlink VRF."
            link="/vrf"
          />
          <FeatureCard
            title="📈 Data Feeds"
            description="Connect your smart contracts to the real-world data such as asset prices."
            link="/price-feed"
          />
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getstarted" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
          <p className="text-lg mb-8 text-center">
            A quick start guide to help you integrate our features into your project.
          </p>
          <div className="space-y-6">
            <GettingStartedCard
              title="🔄 Token Transfers"
              description="Use Chainlink CCIP to securely transfer tokens across different blockchains."
            />
            <GettingStartedCard
              title="✉️ Cross-Chain Messaging"
              description="Transmit important data or commands between different blockchains."
            />
            <GettingStartedCard
              title="🖼️ Cross-Chain NFT Minting"
              description="Trigger NFT creation on another blockchain, expanding the reach of your digital assets."
            />
            <GettingStartedCard
              title="🎲 Chainlink VRF"
              description="Generate secure and verifiable randomness for various use cases."
            />
            <GettingStartedCard
              title="📈 Data Feeds"
              description="Connect your smart contracts to real-world data, such as asset prices and more."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-4">
            If you have any questions or need support, feel free to reach out to us.
          </p>
          <a
            href="mailto:support@example.com"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Your Project Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, link }) => (
  <Link href={link} className="hover:scale-105 transition-all w-80 bg-white p-6 shadow-lg rounded-lg text-center mb-8">
      <h4 className="text-2xl font-bold mb-4">{title}</h4>
      <p>{description}</p>
  
  </Link>
);

// Getting Started Card Component
const GettingStartedCard = ({ title, description }) => (
  <div className="bg-gray-100 p-6 rounded shadow-lg">
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p>{description}</p>
  </div>
);

export default Home;
