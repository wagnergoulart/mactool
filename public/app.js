async function formatMac() {
  const mac = document.getElementById("mac").value;
  const type = document.getElementById("type").value;

  const res = await fetch(`/api/format?mac=${mac}&type=${type}`);
  const data = await res.json();

  document.getElementById("result").textContent =
    data.formatted || data.error;
}
