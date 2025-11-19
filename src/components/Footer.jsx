import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Made with <FaHeart className="text-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

