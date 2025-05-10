import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-bold">OddiyWeb</div>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-gray-500">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-500">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-500">
                  Aloqa
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Bizning veb-saytimizga xush kelibsiz</h1>
            <p className="text-xl text-gray-600 mb-8">Biz oddiy va samarali yechimlarni taqdim etamiz</p>
            <Link href="/contact" className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800">
              Biz bilan bog'laning
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Bizning xizmatlar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Birinchi xizmat</h3>
                <p className="text-gray-600">Bizning birinchi xizmatimiz haqida oddiy tavsif.</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Ikkinchi xizmat</h3>
                <p className="text-gray-600">Bizning ikkinchi xizmatimiz haqida oddiy tavsif.</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Uchinchi xizmat</h3>
                <p className="text-gray-600">Bizning uchinchi xizmatimiz haqida oddiy tavsif.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 OddiyWeb. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  )
}
