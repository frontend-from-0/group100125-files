export default function Button({ label, onClick, type, disabled = false }) {
  return (
    <button
      onClick={onClick}
      className='bg-slate-400 rounded-lg p-2 hover:bg-slate-500 mt-8'
      disabled={disabled}
      type={type === 'submit' ? 'submit' : ''}
    >
      {label}
    </button>
  );
}
