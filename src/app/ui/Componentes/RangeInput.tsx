export const RangeInput = ({ value, handleChange }) => {
  return (
    <div>
      <label
        htmlFor="default-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Opacidad
      </label>
      <input
        id="default-range"
        type="range"
        min="0.0"
        max="1"
        step={0.1}
        value={value}
        onChange={(e) => handleChange(e)}
        // onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};
