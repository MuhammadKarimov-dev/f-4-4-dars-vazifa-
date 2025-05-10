import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
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
                <Link href="/contact" className="hover:text-gray-500 font-medium">
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
            <h1 className="text-4xl font-bold mb-8 text-center">Biz bilan bog'laning</h1>
            <div className="max-w-xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Ism
                    </label>
                    <Input id="name" placeholder="Ismingiz" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Emailingiz" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Mavzu
                  </label>
                  <Input id="subject" placeholder="Xabar mavzusi" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Xabar
                  </label>
                  <Textarea id="message" placeholder="Xabaringiz" rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Xabar yuborish
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Manzil</h3>
                  <p className="text-gray-600">
                    123 Asosiy ko'cha
                    <br />
                    Toshkent, O'zbekiston 100000
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">
                    info@oddiyweb.com
                    <br />
                    yordam@oddiyweb.com
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Telefon</h3>
                  <p className="text-gray-600">
                    +998 (90) 123-4567
                    <br />
                    +998 (90) 123-4568
                  </p>
                </div>
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
