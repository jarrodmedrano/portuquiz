export default function HintButton({ hint }: { hint: string }) {
  return (
    <div className="relative">
      <button className="bg-gray-100 hover:bg-gray-200 rounded px-2 py-1 text-sm">
        Hint
      </button>

      <div className="absolute invisible tooltip rounded p-2 text-sm bg-gray-900 text-white">
        {hint}
      </div>
    </div>
  );
}
