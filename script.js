        // Disable right-click on the page
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            alert("Right-click is disabled!");
        });

        //Disable Keyboard Shortcuts (F12, Ctrl+U, etc.)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
                e.preventDefault();
                alert("Viewing source is disabled!");
            }
            if (e.key === 'F12') {
                e.preventDefault();
                alert("Developer Tools are disabled!");
            }
            // Disable Ctrl + Shift + I (Inspect Element)
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                e.preventDefault();
                alert('Ctrl + Shift + I (Inspect Element) is disabled!');
            }

            // Disable Ctrl + Shift + C (Inspect Element - Console)
            if (e.ctrlKey && e.shiftKey && e.key === 'C') {
                e.preventDefault();
                alert('Ctrl + Shift + C (Inspect Element) is disabled!');
            }

            // Disable Ctrl + Shift + J (Developer Tools - Console)
            if (e.ctrlKey && e.shiftKey && e.key === 'J') {
                e.preventDefault();
                alert('Ctrl + Shift + J (Developer Tools - Console) is disabled!');
            }

            // Disable Ctrl + Shift + U (View Source)
            if (e.ctrlKey && e.shiftKey && e.key === 'U') {
                e.preventDefault();
                alert('Ctrl + Shift + U (View Source) is disabled!');
            }
        });