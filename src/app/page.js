import Link from "next/link";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main className="p-8 max-w-xl mx-auto space-y-4 text-center">
      <h1 className="text-3xl font-bold text-blue-600">Halo Next.js</h1>
      <p className="text-gray-600">
        Ini halaman utama yang dirender di server.
      </p>
      <Link
        href="/about"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
      >
        Ke halaman About
      </Link>
      <div>
        <Counter />
      </div>
    </main>
  );
}