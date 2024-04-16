import Layout from '@/components/layout'
import Services from '@/components/organisms/services'

const App = () => {
  return (
    <Layout>
      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="block text-2xl font-bold text-white sm:text-4xl">Smart Maker</h1>
        <p className="mt-3 text-lg text-gray-300">
          Single solution for all your electrical problems.
        </p>
        <div id="services">
          <Services />
        </div>
      </div>
    </Layout>
  )
}

export default App
