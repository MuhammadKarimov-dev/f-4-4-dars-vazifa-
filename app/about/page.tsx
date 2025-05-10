import Link from "next/link"

export default function About() {
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
                <Link href="/about" className="hover:text-gray-500 font-medium">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Biz haqimizda</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Biz mijozlarimizga eng yaxshi yechimlarni taqdim etishga qaratilgan oddiy kompaniyamiz. Bizning jamoamiz
                tajribali mutaxassislardan iborat bo'lib, ular mukammallikka intiladilar.
              </p>
              <p className="text-lg mb-6">
                2020 yilda tashkil etilgan, biz innovatsion yondashuvlarimiz va sifatga bo'lgan sadoqatimiz orqali
                bizneslarning o'sishi va muvaffaqiyatiga yordam berib kelmoqdamiz.
              </p>
              <p className="text-lg">
                Bizning vazifamiz har bir mijozning o'ziga xos ehtiyojlarini qondiruvchi oddiy, samarali va arzon
                yechimlarni taqdim etishdir.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Bizning jamoa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Aziz Karimov</h3>
                <p className="text-gray-600">Asoschisi va Bosh direktor</p>
              </div>
              <div className="p-6 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Nilufar Rahimova</h3>
                <p className="text-gray-600">Ijodiy direktor</p>
              </div>
              <div className="p-6 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Bobur Aliyev</h3>
                <p className="text-gray-600">Bosh dasturchi</p>
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
