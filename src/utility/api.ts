/** @format */

export default (() => {
  const BASE_URL = "http://localhost:8000/api";

  async function getBlocks() {
    const response = await fetch(`${BASE_URL}/bc/blocks`);
    return response.json();
  }

  return {
    getBlocks,
  };
})();
