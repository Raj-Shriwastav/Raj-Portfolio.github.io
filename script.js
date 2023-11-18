// To scroll to bottom of page to contact details

function scrollToContact() {
    document.getElementById('contact-loc').scrollIntoView({
        behavior: 'smooth'
    });
}

// to change the active status of the header text

$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        // Adjust these values based on layout and preference
        var topThreshold = windowHeight ;
        var bottomThreshold = documentHeight - (windowHeight/3) - topThreshold;

        $('nav ul li a').removeClass("active");

        if (scrollPos < topThreshold) {
            $('nav ul li a[href="#"]').addClass("active");
        } else if (scrollPos > bottomThreshold) {
            $('nav ul li a[href="#contact-loc"]').addClass("active");
        } else {
            $('nav ul li a[href="#portfolio-loc"]').addClass("active");
        }
    });
});

// To search

$(document).ready(function () {
    $("#searchIcon").click(function () {
        performSearch();
    });

    $("#searchInput").keypress(function (e) {
        if (e.which === 13) {
            performSearch();
        }
    });

    function performSearch() {
        var searchTerm = $("#searchInput").val().toLowerCase();
        var foundElement = null;

        if (searchTerm === "portfolio") {
            foundElement = "#portfolio-loc";
        } else if (searchTerm === "about") {
            foundElement = "#About-loc";
        } else if (searchTerm === "skills") {
            foundElement = "#Skills-loc";
        }else if (searchTerm === "education") {
            foundElement = "#Education-loc";
        }else if (searchTerm === "contact me") {
            foundElement = "#contact-loc";
        }else if (searchTerm === "contact-me") {
            foundElement = "#contact-loc";
        }else if (searchTerm === "contact") {
            foundElement = "#contact-loc";
        }else if (searchTerm === "intro") {
            foundElement = "#intro-loc";
        }else if (searchTerm === "introduction") {
            foundElement = "#intro-loc";
        }else {
            foundElement = "#intro-loc";
        }

        if (foundElement) {
            $('html, body').animate({
                scrollTop: $(foundElement).offset().top
            }, 500);
        } else {
            alert("Element not found");
        }
    }
});


// $(document).ready(function () {
//     $("#searchIcon").click(function () {
//         performSearch();
//     });

//     // Optionally, you can also trigger the search when the user presses Enter in the input field
//     $("#searchInput").keypress(function (e) {
//         if (e.which === 13) { // Check if Enter key is pressed
//             performSearch();
//         }
//     });

//     function performSearch() {
//         var searchTerm = $("#searchInput").val();
//         // Implement your search logic here
//         alert("Performing search for: " + searchTerm);
//         // You can replace the alert with your actual search functionality
//     }
// });