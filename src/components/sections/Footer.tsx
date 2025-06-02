'use client'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container text-center text-secondary dark:text-secondary-dark">
        © {new Date().getFullYear()} Pulkit Khursija. All rights reserved.
      </div>
    </footer>
  )
} 