module.exports = (async () => {
  const tailwind = (await import("prettier-plugin-tailwindcss")).default;
  return {
    plugins: [tailwind],
  };
})();