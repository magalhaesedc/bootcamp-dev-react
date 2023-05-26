export default function Header({ children }) {
  return (
    <header>
      <div className="bg-yellow-800 mx-auto p-4">
        <h1 className="text-center font-semibold text-xl text-red-50">
          {children}
        </h1>
      </div>
    </header>
  );
}
