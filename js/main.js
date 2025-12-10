  // Scroll animation trigger
        document.addEventListener('DOMContentLoaded', function() {
            const skillsSection = document.getElementById('skills');
            const progressLines = document.querySelectorAll('.progress-line');
            const percentElements = document.querySelectorAll('.percent');
            const courseSkills = document.querySelectorAll('.course-skill');
            
            // Set initial widths for professional skills
            courseSkills.forEach((skill, index) => {
                const width = skill.querySelector('h4:first-child').textContent;
                skill.style.setProperty('--target-width', width);
                
                // Add staggered delay based on index
                skill.style.transitionDelay = `${index * 0.2}s`;
            });
            
            // Add staggered delay for progress lines
            progressLines.forEach((line, index) => {
                line.style.transitionDelay = `${index * 0.2}s`;
                
                const span = line.querySelector('span');
                if (span) {
                    span.style.transitionDelay = `${index * 0.2 + 0.5}s`;
                }
            });
            
            // Add staggered delay for percent text
            percentElements.forEach((percent, index) => {
                const spans = percent.querySelectorAll('span');
                spans.forEach((span, spanIndex) => {
                    span.style.transitionDelay = `${index * 0.2 + 0.2 * spanIndex}s`;
                });
            });
            
            // Scroll detection function
            function checkScroll() {
                const sectionTop = skillsSection.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                // When the section is 80% visible in the viewport
                if (sectionTop < windowHeight * 0.8) {
                    skillsSection.classList.add('visible');
                    
                    // Animate progress lines
                    progressLines.forEach(line => {
                        line.classList.add('animated');
                    });
                    
                    // Animate percent text
                    percentElements.forEach(percent => {
                        percent.classList.add('animated');
                    });
                    
                    // Animate professional skills
                    courseSkills.forEach(skill => {
                        skill.classList.add('animated');
                    });
                    
                    // Remove scroll listener after animation is triggered
                    window.removeEventListener('scroll', checkScroll);
                }
            }
            
            // Initial check in case the section is already in view
            checkScroll();
            
            // Add scroll event listener
            window.addEventListener('scroll', checkScroll);
            
            // Reset animation when scrolling back to top
            window.addEventListener('scroll', function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // If scrolled near the top, reset animations
                if (scrollTop < 100) {
                    skillsSection.classList.remove('visible');
                    
                    progressLines.forEach(line => {
                        line.classList.remove('animated');
                    });
                    
                    percentElements.forEach(percent => {
                        percent.classList.remove('animated');
                    });
                    
                    courseSkills.forEach(skill => {
                        skill.classList.remove('animated');
                    });
                    
                    // Re-add the scroll listener
                    window.addEventListener('scroll', checkScroll);
                }
            });
        });