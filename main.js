// Progress bar animation
        document.addEventListener('DOMContentLoaded', function() {
            const progressBars = document.querySelectorAll('.progress-fill');
            
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
            
            // Print functionality
            const printButton = document.getElementById('printBtn');
            
            printButton.addEventListener('mouseenter', function() {
                this.style.background = 'var(--primary-dark)';
                this.style.transform = 'translateY(-2px)';
            });
            
            printButton.addEventListener('mouseleave', function() {
                this.style.background = 'var(--primary)';
                this.style.transform = 'translateY(0)';
            });
            
            printButton.addEventListener('click', function() {
                window.print();
            });
        });
