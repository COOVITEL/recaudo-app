import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-3xl m-12">App Recaudos Impuestos</h1>
      <div className="flex flex-row gap-10">
        <Link href="/register">Asesores</Link>
        <Link href="/operations">Operaciones</Link>
      </div>
    </main>
  );
}
