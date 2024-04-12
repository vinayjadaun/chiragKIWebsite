
    const imageContainer = document.querySelector('.image-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    prevButton.addEventListener('click', function() {
        imageContainer.scrollBy({
            left: -100,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        imageContainer.scrollBy({
            left: 100,
            behavior: 'smooth'
        });
    });

    
        const searchInput = document.getElementById('search');
        const copyButton = document.querySelector('.copybtn');
    
        copyButton.addEventListener('click', function() {
            const value = searchInput.value; // Get the value and trim whitespace
    
            if (value === '') {
                alert('Please write something in the input field.');
            } else {
                // Create a temporary textarea element
                const textarea = document.createElement('textarea');
                textarea.value = value; // Set textarea value to input value
    
                // Append the textarea to the document
                document.body.appendChild(textarea);
    
                // Select the text within the textarea
                textarea.select();
    
                // Execute the copy command
                document.execCommand('copy');
    
                // Remove the textarea from the document
                
    
                // Provide feedback to the user
                alert('Text copied to clipboard: ' + value);
            }
        });
const rightSide = document.querySelector('.right')
        const showRecipes = document.getElementById('recipes');
        const clicks = document.querySelector('.btn.btn-sm'); // Corrected selector for button
        
        async function checkRecipes(query) {
            try {
                const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
                const response = await fetch(api); // Send a GET request to the API
        
                
        
                const data = await response.json(); // Parse the JSON response
                console.log(data); // Output the retrieved data to the console for debugging
        
                if (data.meals && data.meals.length > 0) {
                    rightSide.style.display= "block"
                    const firstMeal = data.meals[0]; // Get the first meal object
                    const instructions = firstMeal.strInstructions; // Get the instructions
        
                    // Update the inner HTML of the recipes container with the instructions
                    showRecipes.innerHTML = `<p>${instructions}</p>`;
                } else {
                    
                    // Handle case when no meals are found for the given query
                    showRecipes.innerHTML = '<p>No recipes found for this query.</p>';
                }
            } catch (error) {
                console.error('Error fetching data:', error);
        
                // Handle error by displaying a friendly message to the user
                showRecipes.innerHTML = '<p>Failed to fetch recipes. Please try again later.</p>';
            }
        }
        
        // Event listener for button click to trigger recipe search
        clicks.addEventListener('click', () => {
            const query = searchInput.value.trim(); // Get the trimmed value from input
        
            if (query === '') {
                alert('Please enter a search query.'); // Display error message if input is empty
            } else {
                checkRecipes(query); // Call checkRecipes function with the search query
            }
        });

        
         checkRecipes(query)

         // Night mode toggle
        
         const nightMode = document.getElementById('night');

         function darkMode() {
             document.body.classList.toggle("dark");
        
         }

         //scroll to()
         function scrollToRecipe() {
            window.scrollTo(0, 600);
        }
        
        function scrollToTop() {
            window.scrollTo(0, 1350);
        }
        
         
    
         