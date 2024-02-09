import Link from "next/link";

export default function Home() {
  const linkStyles = "flex flex-col justify-center items-center px-10 py-5 border-2 border-blue-800 rounded-lg bg-[#007eb8] text-white hover:scale-105 hover:bg-[#2d2e83] trasition duration-200"
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-semibold m-12">App Recaudos Impuestos Coovitel</h1>
      <div className="flex flex-col w-[80%] gap-2 p-10 rounded-3xl bg-white">
        <Link href="/register" className={linkStyles}>
            <h3 className="font-mono text-6xl">Asesores</h3>
            <p className="text-xl">Realizar registros de recaudos</p>
        </Link>
        <Link href="/operations" className={linkStyles}>
            <h3 className="font-mono text-6xl">Operaciones</h3>
            <p className="text-xl">Registros de recaudos realizados</p>
        </Link>
      </div>
    </main>
  );
}
