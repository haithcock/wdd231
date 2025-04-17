// Resource data stored as an array of objects
const resources = [
    { name: "Coursera", category: "Learning Platforms", link: "https://www.coursera.org" },
    { name: "edX", category: "Learning Platforms", link: "https://www.edx.org" },
    { name: "Khan Academy", category: "Learning Platforms", link: "https://www.khanacademy.org" },
    { name: "DeepSeek AI", category: "AI Tools", link: "https://www.deepseek.com/" },
    { name: "ChatGPT", category: "AI Tools", link: "https://chatgpt.com/" },
    { name: "Z-Library", category: "Digital Libraries", link: "https://z-library.sk" },
    { name: "Claude", category: "AI Tools", link: "https://claude.ai/"},
    { name: "W3Schools", category: "Learning Platforms", link: "https://www.w3schools.com/"},
    { name: "MIT OpenCourseWare", category: "Learning Platforms", link: "https://ocw.mit.edu/"},
    { name: "Annas archive", category: "Digital Libraries", link: "https://annas-archive.org/"}

];

// Function to display resources
function displayResources(filteredResources) {
    const container = document.querySelector(".resourcesection");
    container.innerHTML = ""; // Clear existing content

    if (filteredResources.length === 0) {
        container.innerHTML = `<p>No resources found. Try a different search term.</p>`;
        return;
    }

    filteredResources.forEach(resource => {
        const resourceHTML = `
            <section>
                <h3>${resource.name}</h3>
                <p>Category: ${resource.category}</p>
                <a href="${resource.link}" target="_blank">Visit ${resource.name}</a>
            </section>
        `;
        container.innerHTML += resourceHTML;
    });
}

// Function to filter resources by search term
function searchResources(searchTerm) {
    const filtered = resources.filter(resource => 
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayResources(filtered);
}
function filterResources(category) {
    const filtered = resources.filter(resource => resource.category === category);
    displayResources(filtered);
}
function showAllResources() {
    displayResources(resources);
}
document.querySelector("#filterLearning").addEventListener("click", () => filterResources("Learning Platforms"));
document.querySelector("#filterAI").addEventListener("click", () => filterResources("AI Tools"));
document.querySelector("#filterLibraries").addEventListener("click", () => filterResources("Digital Libraries"));
document.querySelector("#filterAll").addEventListener("click", showAllResources);

// Initialize: Display all resources by default
showAllResources();
// Event listener for the search bar
document.querySelector("#search").addEventListener("input", (event) => {
    const searchTerm = event.target.value.trim(); // Get the search term
    searchResources(searchTerm); // Filter and display resources
});

// Initialize: Display all resources by default
displayResources(resources);