import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Resume = () => {
  // Path to your PDF in the assets folder
  const pdfUrl = '/assets/V_Madhava_Manikanta_Naga_Pavan_Kumar.pdf'

  // Function to trigger download
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'V_Madhava_Manikanta_Naga_Pavan_Kumar.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold mb-8 text-accent">Resume</h1>

        {/* PDF Embed */}
        <div className="w-full max-w-4xl mb-8">
          <embed
            src={pdfUrl}
            type="application/pdf"
            width="100%"
            height="800px" // Fixed height, adjust as needed
            className="border-2 border-accent rounded-lg"
          />
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="bg-accent text-primary px-6 py-3 rounded-full hover:bg-secondary hover:text-accent transition-colors duration-300 interactive"
        >
          Download Resume
        </button>
      </motion.main>

      <footer className="bg-transparent py-6 text-center text-secondary">
        <p>© {new Date().getFullYear()} Madhava. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Resume