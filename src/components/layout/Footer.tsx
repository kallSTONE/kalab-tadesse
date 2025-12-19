export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-tertiary">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm text-text-tertiary">
            Designed & Built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
