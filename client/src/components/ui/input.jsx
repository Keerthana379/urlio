// src/components/ui/input.jsx
export function Input(props) {
  return (
    <input
      {...props}
      className={`px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className || ""}`}
    />
  );
}
