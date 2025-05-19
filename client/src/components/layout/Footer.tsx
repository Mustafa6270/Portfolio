import { contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">{contactInfo.name}</h3>
          <p className="text-gray-400 mb-4">Professional Portfolio</p>
          <div className="mb-4">
            <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-gray-400 hover:text-white transition">
              <i className="fas fa-phone mr-2"></i>{contactInfo.phone}
            </a>
            <span className="mx-3 text-gray-600">|</span>
            <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition">
              <i className="fas fa-envelope mr-2"></i>{contactInfo.email}
            </a>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            {contactInfo.socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-gray-400 hover:text-primary transition"
                aria-label={link.name}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} {contactInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
