let lang = "en"; // default language

// Plant names
const plants = {
  en: ["Mango","Jackfruit","Hibiscus","Rose","Coconut","Plantain","Wild Jack","Jasmine","Ixora"],
  ml: ["മാങ്ങ","ചക്ക","ചെമ്പരത്തി","റോസ്","തേങ്ങ","വാഴ","പ്ലാവ്","മുല്ല"," ഇക്സോറ"]
};

// Plant data (English + Malayalam)
const plantData = {
  en: {
    Mango: { soil:"Loamy", water:"Weekly", manure:"Organic compost", speciality:"Sweet fruit" },
    Jackfruit: { soil:"Sandy loam", water:"Weekly", manure:"Farmyard manure", speciality:"Large edible fruit" },
    Hibiscus: { soil:"Well-drained", water:"Every 2 days", manure:"Potash-rich fertilizer", speciality:"Medicinal flower" },
    Rose: { soil:"Clay loam", water:"Every 2 days", manure:"Bone meal", speciality:"Fragrant flower" },
    Coconut: { soil:"Sandy coastal", water:"Daily", manure:"Cow dung", speciality:"Multipurpose tree" },
    Plantain: { soil:"Rich loam", water:"Daily", manure:"Banana manure mix", speciality:"Fruit plant" },
    "Wild Jack": { soil:"Laterite", water:"Weekly", manure:"Organic compost", speciality:"Wild fruit tree" },
    Jasmine: { soil:"Well-drained", water:"Every 2 days", manure:"Phosphorus fertilizer", speciality:"Fragrant flower" },
    Ixora: { soil:"Acidic soil", water:"Every 2 days", manure:"NPK fertilizer", speciality:"Ornamental shrub" }
  },
  ml: {
    "മാങ്ങ": { soil:"ചെളി മണ്ണ്", water:"ആഴ്ചയിൽ ഒരിക്കൽ", manure:"ഓർഗാനിക് കമ്പോസ്റ്റ്", speciality:"മധുരമുള്ള പഴം" },
    "ചക്ക": { soil:"മണൽ മണ്ണ്", water:"ആഴ്ചയിൽ ഒരിക്കൽ", manure:"കൃഷി വളം", speciality:"വലിയ പഴം" },
    "ചെമ്പരത്തി": { soil:"നന്നായി ഒഴുകുന്ന മണ്ണ്", water:"രണ്ട് ദിവസത്തിലൊരിക്കൽ", manure:"പൊട്ടാഷ് വളം", speciality:"ഔഷധ പൂവ്" },
    "റോസ്": { soil:"ക്ലേ മണ്ണ്", water:"രണ്ട് ദിവസത്തിലൊരിക്കൽ", manure:"ബോൺ മീൽ", speciality:"സുഗന്ധ പൂവ്" },
    "തേങ്ങ": { soil:"മണൽ തീരപ്രദേശം", water:"ദിവസേന", manure:"കാളവളം", speciality:"ബഹുമുഖ വൃക്ഷം" },
    "വാഴ": { soil:"സമ്പന്നമായ മണ്ണ്", water:"ദിവസേന", manure:"വാഴ വളം", speciality:"പഴം" },
    "പ്ലാവ്": { soil:"ലാറ്ററൈറ്റ് മണ്ണ്", water:"ആഴ്ചയിൽ ഒരിക്കൽ", manure:"ഓർഗാനിക് കമ്പോസ്റ്റ്", speciality:"കാട്ടുപഴം" },
    "മുല്ല": { soil:"നന്നായി ഒഴുകുന്ന മണ്ണ്", water:"രണ്ട് ദിവസത്തിലൊരിക്കൽ", manure:"ഫോസ്ഫറസ് വളം", speciality:"സുഗന്ധ പൂവ്" },
    "ചെമ്പരത്തി ഇക്സോറ": { soil:"ആസിഡിക് മണ്ണ്", water:"രണ്ട് ദിവസത്തിലൊരിക്കൽ", manure:"എൻപികെ വളം", speciality:"അലങ്കാര ചെടി" }
  }
};

// Disease remedies with keywords
const diseaseRemedies = {
  en: {
    "powdery mildew": { remedy:"Spray neem oil, avoid excess moisture.", keywords:["powdery","mildew","white","fungus"] },
    "leaf spot": { remedy:"Remove affected leaves, use copper fungicide.", keywords:["leaf","spot","yellow","brown","patch"] },
    "root rot": { remedy:"Improve drainage, reduce watering.", keywords:["root","rot","decay","wet soil"] }
  },
  ml: {
    "പൗഡറി മിൽഡ്യൂ": { remedy:"നീം ഓയിൽ തളിക്കുക, അധിക ഈർപ്പം ഒഴിവാക്കുക.", keywords:["പൗഡറി","മിൽഡ്യൂ","വെള്ള","ഫംഗസ്"] },
    "ഇല സ്പോട്ട്": { remedy:"ബാധിത ഇലകൾ നീക്കം ചെയ്യുക, കോപ്പർ ഫംഗിസൈഡ് ഉപയോഗിക്കുക.", keywords:["ഇല","സ്പോട്ട്","മഞ്ഞ","തവിട്ട്","പാച്ച്"] },
    "റൂട്ട് റോട്ട്": { remedy:"ഡ്രെയിനേജ് മെച്ചപ്പെടുത്തുക, വെള്ളം കുറയ്ക്കുക.", keywords:["റൂട്ട്","റോട്ട്","ചീഞ്ഞ","ഈർപ്പം"] }
  }
};

// Render plant buttons on the home screen
function renderButtons() {
  const btnContainer = document.getElementById("buttons");
  btnContainer.innerHTML = "";
  plants[lang].forEach(p => {
    const btn = document.createElement("button");
    btn.innerText = p;
    btn.onclick = () => openPlantPage(p);
    btnContainer.appendChild(btn);
  });
}

// Show multiple search results
function showResults(matches) {
  const btnContainer = document.getElementById("buttons");
  btnContainer.innerHTML = "<h3>" + (lang === "en" ? "Matching plants:" : "പോരുത്തമുള്ള ചെടികൾ:") + "</h3>";
  matches.forEach(name => {
    const btn = document.createElement("button");
    btn.innerText = name;
    btn.onclick = () => openPlantPage(name);
    btnContainer.appendChild(btn);
  });
}

// Open the detail page for a plant
function openPlantPage(name) {
  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("plantScreen").style.display = "block";
  document.getElementById("plantName").innerText = name;

  const data = plantData[lang][name];
  const detailsDiv = document.getElementById("details");
  if (data) {
    const labels = lang === "en"
      ? { soil: "Soil", water: "Water", manure: "Manure", speciality: "Speciality" }
      : { soil: "മണ്ണ്", water: "നനയ്ക്കൽ", manure: "വളം", speciality: "പ്രത്യേകത" };

    detailsDiv.innerHTML = `
      <p><strong>${labels.soil}:</strong> ${data.soil}</p>
      <p><strong>${labels.water}:</strong> ${data.water}</p>
      <p><strong>${labels.manure}:</strong> ${data.manure}</p>
      <p><strong>${labels.speciality}:</strong> ${data.speciality}</p>
    `;
  } else {
    detailsDiv.innerHTML = "";
  }

  // Reset disease search state each time a plant page opens
  document.getElementById("diseaseSearch").value = "";
  document.getElementById("remedies").innerHTML = "";
}

// Search for a disease remedy by name or keyword
function searchDisease(query) {
  const remediesDiv = document.getElementById("remedies");
  const q = query.toLowerCase().trim();

  if (!q) {
    remediesDiv.innerHTML = "";
    return;
  }

  const matches = [];
  for (const [name, info] of Object.entries(diseaseRemedies[lang])) {
    const inName = name.toLowerCase().includes(q);
    const inKeywords = info.keywords.some(k => k.toLowerCase().includes(q));
    if (inName || inKeywords) matches.push({ name, remedy: info.remedy });
  }

  if (matches.length > 0) {
    remediesDiv.innerHTML = matches
      .map(m => `<p><strong>${m.name}:</strong> ${m.remedy}</p>`)
      .join("");
  } else {
    remediesDiv.innerHTML = `<p>${lang === "en" ? "No matching disease found." : "രോഗം കണ്ടെത്തിയില്ല."}</p>`;
  }
}

// Return to the home screen
function goHome() {
  document.getElementById("plantScreen").style.display = "none";
  document.getElementById("homeScreen").style.display = "block";
  document.getElementById("searchBar").value = "";
  renderButtons();
}

// Update all translatable UI text/placeholders
function updateLangUI() {
  document.getElementById("langToggle").innerText = lang === "en" ? "മലയാളം" : "English";
  document.getElementById("searchBar").placeholder = lang === "en"
    ? "Search plants or keywords..."
    : "ചെടികൾ അല്ലെങ്കിൽ കീവേഡുകൾ തിരയുക...";
  document.getElementById("diseaseTitle").innerText = lang === "en"
    ? "Check for Diseases"
    : "രോഗങ്ങൾ പരിശോധിക്കുക";
  document.getElementById("diseaseSearch").placeholder = lang === "en"
    ? "Enter disease name or keywords..."
    : "രോഗത്തിന്റെ പേര് അല്ലെങ്കിൽ കീവേഡുകൾ നൽകുക...";
}

// Wire everything up once the DOM is ready
function init() {
  document.getElementById("homeScreen").style.display = "block";
  document.getElementById("plantScreen").style.display = "none";

  renderButtons();
  updateLangUI();

  document.getElementById("langToggle").addEventListener("click", () => {
    lang = lang === "en" ? "ml" : "en";
    document.getElementById("searchBar").value = "";
    updateLangUI();
    renderButtons();
  });

  document.getElementById("searchBar").addEventListener("keyup", e => {
    if (e.key !== "Enter") return;
    const query = e.target.value.toLowerCase().trim();

    if (!query) {
      renderButtons();
      return;
    }

    const exact = plants[lang].find(p => p.toLowerCase() === query);
    if (exact) {
      openPlantPage(exact);
      return;
    }

    const matches = [];
    for (const [name, data] of Object.entries(plantData[lang])) {
      const values = Object.values(data).join(" ").toLowerCase();
      if (name.toLowerCase().includes(query) || values.includes(query)) matches.push(name);
    }

    if (matches.length > 0) {
      showResults(matches);
    } else {
      alert(lang === "en" ? "No plant found." : "ചെടി കണ്ടെത്തിയില്ല.");
    }
  });

  document.getElementById("diseaseSearch").addEventListener("keyup", e => {
    searchDisease(e.target.value);
  });
}

document.addEventListener("DOMContentLoaded", init);

// Register the service worker for offline/PWA support
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(err => {
      console.error("Service worker registration failed:", err);
    });
  });
}
