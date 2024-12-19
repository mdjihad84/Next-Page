const getStoredBook = () => {
  const storedBook = localStorage.getItem("cart");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};

const saveBook = (id) => {
  const storedBooks = getStoredBook();
  const updateBook = [...storedBooks, id];
  localStorage.setItem("cart", JSON.stringify(updateBook));

  // Dispatch a custom event to notify about the update
  const event = new Event("cartUpdated");
  window.dispatchEvent(event);
};

export { getStoredBook, saveBook };
