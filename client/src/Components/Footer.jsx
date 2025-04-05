export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-end align-buttom">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Train Inspector</h3>
            <p className="text-sm text-gray-200">
              Advanced crack detection for train wagons using cutting-edge technology.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/detector" className="text-sm hover:text-gray-200">
                  Detector
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="/schedule" className="text-sm hover:text-gray-200">
                  Schedule
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/docs" className="text-sm hover:text-gray-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/api" className="text-sm hover:text-gray-200">
                  API
                </a>
              </li>
              <li>
                <a href="/support" className="text-sm hover:text-gray-200">
                  Support
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm hover:text-gray-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" className="text-sm hover:text-gray-200">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-sm hover:text-gray-200">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-sm hover:text-gray-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/discord" className="text-sm hover:text-gray-200">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Train Inspector. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

