import Link from 'next/link';

const LoginPromptModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50  bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center animate-fade-in">
        <h2 className="text-xl font-semibold mb-3">Login Required</h2>
        <p className="text-gray-600 mb-4">Please log in to add items to your wishlist.</p>

        <div className="flex justify-center gap-4">
          <Link href="/auth/login">
            <button className="bg-black text-white px-4 py-2 rounded hover:opacity-90">Login</button>
          </Link>
          <Link href="/auth/signup" className="text-blue-600 underline mt-2">
            Sign Up
          </Link>
        </div>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginPromptModal;
