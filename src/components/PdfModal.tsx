interface PdfModalProps {
  url: string;
  title: string;
  onClose: () => void;
}

export default function PdfModal({ url, title, onClose }: PdfModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(26,50,99,0.7)' }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-4xl h-[90vh] rounded-xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: '#E8E2DB' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3" style={{ backgroundColor: '#1A3263' }}>
          <span className="text-[#E8E2DB] font-medium text-sm truncate">{title}</span>
          <button
            onClick={onClose}
            className="text-[#E8E2DB] hover:text-[#FAB95B] transition-colors ml-4"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <iframe
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`}
          title={title}
          className="flex-1 w-full border-0"
        />
      </div>
    </div>
  );
}