// This is a local demo response helper, not a live AI model.
// Connect a real AI provider through a secure server before publishing an AI API integration.
document.addEventListener("DOMContentLoaded", () => {
  if (!PawFur.requireLogin()) return;
  const form = document.getElementById("chatForm");
  const input = document.getElementById("questionInput");
  const messages = document.getElementById("chatMessages");
  if (!form || !input || !messages) return;
  const addMessage = (text, who) => {
    const div = document.createElement("div");
    div.className = "chat-message " + who;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  };
  function demoAnswer(q) {
    const s = q.toLowerCase();
    if (/poison|toxic|ate .* chocolate|chocolate|bleach|chemical/.test(s))
      return "If an animal may have eaten something toxic, contact a veterinarian or animal poison service immediately. Do not induce vomiting or try a home remedy unless a professional tells you to. Keep the product packaging and note the amount and time if known.";
    if (/injur|bleed|hit by|wild animal|orphaned/.test(s))
      return "An injured or distressed animal needs help from a qualified veterinarian or licensed wildlife rescue service. Keep a safe distance, avoid handling unfamiliar wildlife, and do not offer food or water unless instructed by a professional. If it is safe, note the location and contact local animal responders.";
    if (/dog|puppy|canine/.test(s))
      return "For dogs, provide fresh water, a suitable complete diet, daily exercise, enrichment, safe shelter, regular grooming, and preventive veterinary care. Avoid giving human medicines. If you notice sudden behavior changes, repeated vomiting, breathing difficulty, collapse, or severe pain, seek veterinary care promptly.";
    if (/cat|kitten|feline/.test(s))
      return "For cats, provide fresh water, a complete cat-appropriate diet, clean litter, scratching and play opportunities, a safe resting place, and regular veterinary care. Never give human medicines without veterinary direction. Changes in appetite, urination, breathing, or behavior deserve attention.";
    if (/bird|parrot|chicken|duck|poultry/.test(s))
      return "Bird care depends greatly on the species. Provide species-appropriate food, clean water, suitable space, enrichment, and good ventilation. Avoid fumes such as smoke and overheated non-stick cookware. For poultry, keep housing clean and protect birds from predators. A veterinarian experienced with birds can advise on health needs.";
    if (/rabbit|bunny|guinea pig|hamster|rodent/.test(s))
      return "Small mammals need species-specific diets, safe housing, enrichment, clean water, and gentle handling. Rabbits generally need unlimited grass hay, suitable leafy greens, measured pellets, and room to move. Find a veterinarian experienced with the particular species.";
    if (/reptile|snake|turtle|tortoise|lizard|gecko/.test(s))
      return "Reptiles have specialized needs. Their enclosure, temperature gradient, humidity, lighting (including UVB for many species), diet, and water must match the exact species. Avoid guessing at setup requirements; consult a reptile-experienced veterinarian or trusted species-specific husbandry resource.";
    if (/farm|cow|cattle|goat|sheep|pig|horse|carabao/.test(s))
      return "Farm-animal care depends on species, age, production purpose, and local conditions. Key basics include appropriate feed, clean water, shelter, adequate space, biosecurity, parasite control, and a preventive health plan with a livestock veterinarian or agricultural extension professional.";
    if (/feed|food|diet|nutrition/.test(s))
      return "The right diet depends on the animal's species, age, size, health, and life stage. Use a nutritionally complete food or a professionally designed diet for that species. Avoid assuming that foods safe for people are safe for animals. Tell me the animal's exact species and age for more relevant general guidance.";
    if (/symptom|sick|vomit|diarrhea|not eating|breath|cough|disease|ill/.test(s))
      return "I can't diagnose an animal, but changes such as not eating, repeated vomiting or diarrhea, unusual weakness, breathing changes, pain, or sudden behavior changes may need veterinary assessment. Breathing difficulty, collapse, seizures, heavy bleeding, suspected poisoning, or severe injury are urgent — seek veterinary help now.";
    if (/habitat|cage|enclosure|shelter/.test(s))
      return "Habitat needs vary widely by species. Consider safe space, temperature, humidity, ventilation, lighting, hiding/resting areas, substrate, enrichment, and protection from hazards. Share the exact species and age so I can give more useful general information.";
    return "I can help with general animal-care topics such as behavior, nutrition, habitat, handling, and preventive care. To make the guidance more relevant, tell me the animal's exact species, age, and what you'd like to understand. For diagnosis, treatment, or urgent concerns, contact a qualified veterinarian.";
  }
  function ask(question) {
    const q = question.trim();
    if (!q) return;
    addMessage(q, "user");
    const answer = demoAnswer(q);
    addMessage(answer, "assistant");
    const history = PawFur.getData("searches", []);
    history.unshift({ question: q, date: new Date().toISOString() });
    PawFur.setData("searches", history.slice(0, 20));
  }
  form.addEventListener("submit", e => { e.preventDefault(); ask(input.value); input.value = ""; });
  document.querySelectorAll("[data-prompt]").forEach(btn => btn.addEventListener("click", () => ask(btn.dataset.prompt)));
});