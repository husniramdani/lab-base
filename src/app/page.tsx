import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center">
      <p>This is it</p>
      <ul>
        <li>
          <Link href="/table">table</Link>
        </li>
      </ul>
    </main>
  );
}
