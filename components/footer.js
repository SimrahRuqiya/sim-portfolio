export default function footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-500">
        <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Simrah Shabandri. All rights reserved.
        </p>
        <p className="text-gray-400">
            Built with Next.js 13.4.4 and Tailwind CSS
        </p>
    </footer>
  );
}
