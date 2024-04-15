import Divider from '@/components/atoms/divider'
import Footer from '@/components/molecules/footer'
import NavBar from '@/components/molecules/navbar'
import Services from '@/components/organisms/services'

const App = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col px-5 lg:px-11 ">
        <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 text-sm py-4">
          <NavBar />
        </header>

        <main id="content">
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-2xl font-bold text-white sm:text-4xl">Smart Maker</h1>
            <p className="mt-3 text-lg text-gray-300">
              Single solution for all your electrical problems.
            </p>
            <div id="services">
              <Services />
            </div>
          </div>
        </main>
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
