
const controller = document.getElementById("controller");

        // Add an event listener for scroll
        window.addEventListener("scroll", () => {
            // Get the scroll position as a percentage of the page height
            const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;


            // Show the controller if scrolled more than 20%
            if (scrollPosition > 20) {
                controller.style.display = "flex";
            } else {
                controller.style.display = "none";
            }
        });
        if (scrollPercentage > 20) {
            controller.style.display = "flex";
        } else {
            controller.style.display = "none";
        }
        const scrollHint = document.getElementById("scrollHint");

        window.addEventListener("scroll", () => {
            // Get the scroll position and document dimensions
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Check if the user has reached the bottom of the page
            if (scrollTop + windowHeight >= documentHeight) {
                scrollHint.classList.add("hidden");
            } else {
                scrollHint.classList.remove("hidden");
            }
        });
        function toggleMenu(event, menuId) {
            event.preventDefault();
        
            // Get the target menu
            const targetMenu = document.getElementById(menuId);
        
            // Close all menus except the clicked one
            const allMenus = document.querySelectorAll('.dropdown-menu');
            allMenus.forEach(menu => {
                if (menu !== targetMenu) {
                    menu.style.display = 'none';
                }
            });
        
            // Toggle the target menu
            if (targetMenu.style.display === 'block') {
                targetMenu.style.display = 'none';
            } else {
                targetMenu.style.display = 'block';
            }
        }
        