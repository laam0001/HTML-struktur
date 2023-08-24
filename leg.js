const overskrift = document.querySelector("#overskrift");
console.log(overskrift);

const info = document.querySelector("article:first-child");
console.log(info);

const p = document.querySelector("article:nth-child(2)");
console.log(p);

const boks = document.querySelector("section:last-child");
console.log(boks);

const kasse = document.querySelector("#billede1");
console.log(kasse);

const titel = document.querySelector("#titel");
console.log(titel);
titel.textContent = "Her er min nye overskrift";

const underoverskrift1 = document.querySelector("#underoverskrift1");
console.log(underoverskrift1);
underoverskrift1.textContent = "Hvad skal der stå her?";

const underoverskrift2 = document.querySelector("#underoverskrift2");
console.log(underoverskrift2);
underoverskrift2.textContent = "Her er en vild overskrift!";

const img1 = document.querySelector("#billede1");
console.log(img1);
img1.src =
  "https://fastly.picsum.photos/id/62/2000/1333.jpg?hmac=PbFIn8k0AndjiUwpOJcfHz2h-wPCQi_vJRTJZPdr6kQ";
img1.alt = "Her er en alt teskt";

const img2 = document.querySelector("#billede2");
img2.src =
  "https://fastly.picsum.photos/id/116/3504/2336.jpg?hmac=C46vgpj3R407e8pCyy8NhIsNaBZCjb4r5d71keNgMJY";
img2.alt = "Her er endnu en alt teskt";
