function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-blue-500 to-purple-600" />
          <span className="font-bold text-base-content">Krea AI</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-base-content/60">
          <span>curated by</span>
          <div className="flex items-center space-x-1">
            <div className="h-4 w-4 rounded bg-base-content" />
            <span className="font-semibold text-base-content">Mobbin</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer