// 1. Dark Mode ka Mukammal Code
const toggleBtn = document.getElementById('theme-toggle');

if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
        // Body par dark mode apply karna
        document.body.classList.toggle('dark-mode');
        
        // Button ka text aur style change karna
        if (document.body.classList.contains('dark-mode')) {
            toggleBtn.textContent = "Light Mode";
            toggleBtn.style.backgroundColor = "#fff";
        } else {
            toggleBtn.textContent = "Dark Mode";
            toggleBtn.style.backgroundColor = "#f1c40f";
        }
    });
}

// 2. Skills Details Show karne ka Code
function showDetail(skillId) {
    console.log("Aapne is button par click kiya hai: " + skillId); 
    
    // Main box ko open karo
    let container = document.getElementById('details-container');
    if(container) {
        container.style.display = 'block';
    }

    // Pehle se khuli hui saari details band karo
    let contents = document.getElementsByClassName('skill-content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // Sirf click hone wali detail dikhao
    let activeSkill = document.getElementById(skillId);
    if(activeSkill) {
        activeSkill.style.display = 'block';
    } else {
        console.log("Error: ID nahi mili!");
    }
}

