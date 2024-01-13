import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/image/profile.png" // Replace with your profile image path
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Your Name</h1>
          <p className="text-gray-500 mb-4">Web Developer</p>
          <p className="text-gray-800">
            {`Hello! I'm a passionate web developer with a keen interest in creating beautiful and functional websites.
  Let's build something amazing together.`}
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="https://github.com/SHINYOONCHAN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
