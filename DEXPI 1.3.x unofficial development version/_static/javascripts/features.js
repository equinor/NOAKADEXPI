
const FEATURES = new Set();
const ACTIVE_FEATURES = new Set();

function initializeFeatures(features) {
  
  for (const feature of features){
    FEATURES.add(feature);
  }

  const storedActiveFeatures = localStorage.getItem("activeFeatures");
  if (storedActiveFeatures == null) {
    for (const feature of features){
      ACTIVE_FEATURES.add(feature);
    }
  } else {
    for (const feature of JSON.parse(storedActiveFeatures)) {
      ACTIVE_FEATURES.add(feature);
    }
  }
  for (const feature of FEATURES){
    updateFeature(feature);
    const checkBox = document.getElementById("show-" + feature);
    checkBox.checked = ACTIVE_FEATURES.has(feature);
    checkBox.addEventListener('change', function(event) {
      if (event.target.checked) {
        ACTIVE_FEATURES.add(event.target.name);
      } else {
        ACTIVE_FEATURES.delete(event.target.name);
      }
      storeFeatures();
      updateFeature(event.target.name);
    });
  }
  window.addEventListener('click', storeFeatures);
}

function storeFeatures() {
  localStorage.setItem(
    "activeFeatures",
    JSON.stringify(Array.from(ACTIVE_FEATURES)));
}

function updateFeature(feature) {
  let display;
  if (ACTIVE_FEATURES.has(feature))
  {
    display = "";
  } else {
    display = "none";
  }
  for (const element of document.getElementsByClassName("feature-"+feature)) {
    element.style.display = display;
  }
}
