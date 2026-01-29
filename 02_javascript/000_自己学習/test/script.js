fetch("https://script.google.com/macros/s/AKfycbxOZgCyhPwTgfJrrxbvTesVDNVHRWHerWtYwJfOsWl9uYXkvX7XN8le_VoxnGsZf25gMg/exec")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById("output").textContent =
      JSON.stringify(data, null, 2);
  })
  .catch(err => {
    console.error(err);
  });
