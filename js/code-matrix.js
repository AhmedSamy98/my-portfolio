// ===================================
// DIGITAL CODE MATRIX FOR EXPERIENCE
// ===================================

const codeMatrixManager = {
    binaryColumns: [],
    codeBlocks: [],
    fallingElements: [],
    
    init: () => {
        const matrixContainer = document.querySelector('.code-matrix-background');
        if (!matrixContainer) return;
        
        codeMatrixManager.createBinaryRain();
        codeMatrixManager.createFloatingCodeBlocks();
        codeMatrixManager.createFallingElements();
        codeMatrixManager.createParticleSystem();
        codeMatrixManager.bindEvents();
    },
    
    createBinaryRain: () => {
        const container = document.querySelector('.binary-rain');
        if (!container) return;
        
        container.innerHTML = '';
        
        // Create 25 binary columns (increased from 15)
        for (let i = 0; i < 25; i++) {
            const column = document.createElement('div');
            column.className = 'binary-column';
            
            // Generate random binary sequence
            let binarySequence = '';
            for (let j = 0; j < 30; j++) {
                binarySequence += Math.random() > 0.5 ? '1' : '0';
                if (j < 29) binarySequence += '<br>';
            }
            column.innerHTML = binarySequence;
            
            // Position and timing
            column.style.left = `${i * 4}%`;
            column.style.animationDuration = `${6 + Math.random() * 8}s`;
            column.style.animationDelay = `${Math.random() * 10}s`;
            
            // Random colors based on theme
            const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
            const colors = isLightTheme ? 
                ['#2563eb', '#7c3aed', '#059669', '#dc2626', '#ea580c'] :
                ['#00ff88', '#ff4757', '#3742fa', '#ffa502', '#ff6348'];
            column.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            container.appendChild(column);
            codeMatrixManager.binaryColumns.push(column);
        }
        
        // Refresh binary sequences periodically
        setInterval(() => {
            codeMatrixManager.refreshBinaryColumns();
        }, 3000);
    },
    
    refreshBinaryColumns: () => {
        codeMatrixManager.binaryColumns.forEach(column => {
            let binarySequence = '';
            for (let j = 0; j < 30; j++) {
                binarySequence += Math.random() > 0.5 ? '1' : '0';
                if (j < 29) binarySequence += '<br>';
            }
            column.innerHTML = binarySequence;
            
            // Update colors on refresh
            const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
            const colors = isLightTheme ? 
                ['#2563eb', '#7c3aed', '#059669', '#dc2626', '#ea580c'] :
                ['#00ff88', '#ff4757', '#3742fa', '#ffa502', '#ff6348'];
            column.style.color = colors[Math.floor(Math.random() * colors.length)];
        });
    },
    
    createFloatingCodeBlocks: () => {
        const container = document.querySelector('.floating-code-blocks');
        if (!container) return;
        
        container.innerHTML = '';
        
        const codeSnippets = [
            'const developer = {\n  name: "Ahmed",\n  role: "Flutter Dev",\n  experience: "3+"\n};',
            'function buildApp() {\n  return Flutter(\n    architecture: "Clean",\n    state: "Cubit"\n  );\n}',
            'class Experience {\n  final int years = 3;\n  final List<String> tech = [\n    "Flutter", "Dart",\n    "Firebase", "REST"\n  ];\n}',
            'async getData() {\n  try {\n    final response = \n      await api.fetch();\n    return response.data;\n  } catch (e) {\n    throw Exception(e);\n  }\n}',
            'Widget build(context) {\n  return Scaffold(\n    appBar: AppBar(),\n    body: BlocBuilder(\n      builder: (context, state) {\n        return MyApp();\n      }\n    )\n  );\n}',
            'git add .\ngit commit -m \n"feat: implement \nnew timeline feature"\ngit push origin main',
            'class TimelineState {\n  final bool isLoading;\n  final List<Experience> items;\n  \n  const TimelineState({\n    this.isLoading = false,\n    this.items = const [],\n  });\n}',
            '// Clean Architecture\nrepository.getExperience()\n  .fold(\n    (failure) => emit(\n      TimelineError(failure)\n    ),\n    (data) => emit(\n      TimelineLoaded(data)\n    )\n  );',
            'abstract class ExperienceRepository {\n  Future<Either<Failure, List<Experience>>>\n    getExperience();\n}',
            'void main() {\n  runApp(\n    MultiBlocProvider(\n      providers: [\n        BlocProvider<TimelineCubit>(\n          create: (_) => TimelineCubit(),\n        ),\n      ],\n      child: MyApp(),\n    ),\n  );\n}'
        ];
        
        // Create 10 floating code blocks (increased from 6)
        for (let i = 0; i < 10; i++) {
            const block = document.createElement('div');
            block.className = 'code-block';
            block.innerHTML = codeSnippets[i];
            
            // Random positioning
            block.style.top = `${5 + Math.random() * 90}%`;
            block.style.left = `${2 + Math.random() * 92}%`;
            block.style.animationDelay = `${Math.random() * 20}s`;
            
            // Random size variation
            const scale = 0.7 + Math.random() * 0.6;
            block.style.transform = `scale(${scale})`;
            
            container.appendChild(block);
            codeMatrixManager.codeBlocks.push(block);
        }
    },
    
    createFallingElements: () => {
        const experienceSection = document.getElementById('experience');
        if (!experienceSection) return;
        
        // Create container for falling elements
        let fallingContainer = document.querySelector('.falling-elements');
        if (!fallingContainer) {
            fallingContainer = document.createElement('div');
            fallingContainer.className = 'falling-elements';
            fallingContainer.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 1;
                overflow: hidden;
            `;
            experienceSection.appendChild(fallingContainer);
        }
        
        const elements = [
            // Programming symbols
            '{', '}', '[', ']', '(', ')', '<', '>', '/', '\\',
            '=>', '!=', '==', '&&', '||', '++', '--', '+=', '-=',
            // Keywords
            'const', 'let', 'var', 'function', 'class', 'async', 'await',
            'if', 'else', 'for', 'while', 'try', 'catch', 'return',
            // Flutter/Dart specific
            'Widget', 'State', 'BuildContext', 'MaterialApp', 'Scaffold',
            'Column', 'Row', 'Container', 'Text', 'Button', 'ListView',
            'BlocBuilder', 'BlocProvider', 'Cubit', 'Repository', 'Entity',
            // Git commands
            'git add', 'git commit', 'git push', 'git pull', 'git merge',
            // Emojis and symbols
            '💻', '🚀', '⚡', '🔥', '💡', '🎯', '🌟', '⭐', '🔧', '🛠️',
            '📱', '🎨', '🌐', '💻', '🖥️', '⌨️', '🖱️', '📊', '📈', '🎭'
        ];
        
        // Create 20 different falling elements initially
        for (let i = 0; i < 20; i++) {
            codeMatrixManager.createSingleFallingElement(fallingContainer, elements);
        }
        
        // Continuously add new falling elements
        setInterval(() => {
            codeMatrixManager.createSingleFallingElement(fallingContainer, elements);
        }, 800);
    },
    
    createSingleFallingElement: (container, elements) => {
        const element = document.createElement('div');
        element.className = 'falling-element';
        element.textContent = elements[Math.floor(Math.random() * elements.length)];
        
        // Random positioning and properties
        const leftPosition = Math.random() * 100;
        const animationDuration = 8 + Math.random() * 12;
        const fontSize = 12 + Math.random() * 8;
        const rotation = Math.random() * 360;
        
        // Theme-aware colors
        const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
        const colors = isLightTheme ? 
            ['#2563eb', '#7c3aed', '#059669', '#dc2626', '#ea580c', '#0891b2', '#be185d'] :
            ['#00ff88', '#ff4757', '#3742fa', '#ffa502', '#ff6348', '#2ed573', '#ff3838', '#70a1ff'];
        
        element.style.cssText = `
            position: absolute;
            left: ${leftPosition}%;
            top: -10%;
            font-size: ${fontSize}px;
            color: ${colors[Math.floor(Math.random() * colors.length)]};
            pointer-events: none;
            white-space: nowrap;
            font-family: 'JetBrains Mono', monospace;
            font-weight: ${400 + Math.floor(Math.random() * 300)};
            transform: rotate(${rotation}deg);
            animation: fallDown ${animationDuration}s linear forwards;
            text-shadow: 0 0 5px currentColor;
            opacity: ${0.6 + Math.random() * 0.4};
        `;
        
        container.appendChild(element);
        codeMatrixManager.fallingElements.push(element);
        
        // Remove element after animation
        setTimeout(() => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
                const index = codeMatrixManager.fallingElements.indexOf(element);
                if (index > -1) {
                    codeMatrixManager.fallingElements.splice(index, 1);
                }
            }
        }, animationDuration * 1000);
    },
    
    createParticleSystem: () => {
        const experienceSection = document.getElementById('experience');
        if (!experienceSection) return;
        
        // Create container for particles
        let particleContainer = document.querySelector('.particle-system');
        if (!particleContainer) {
            particleContainer = document.createElement('div');
            particleContainer.className = 'particle-system';
            particleContainer.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 2;
                overflow: hidden;
            `;
            experienceSection.appendChild(particleContainer);
        }
        
        // Create 50 particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'matrix-particle';
            
            const size = 1 + Math.random() * 3;
            const leftPosition = Math.random() * 100;
            const topPosition = Math.random() * 100;
            const animationDuration = 10 + Math.random() * 20;
            
            const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
            const colors = isLightTheme ? 
                ['#2563eb', '#7c3aed', '#059669'] :
                ['#00ff88', '#3742fa', '#ffa502'];
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${leftPosition}%;
                top: ${topPosition}%;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                animation: particleFloat ${animationDuration}s linear infinite;
                box-shadow: 0 0 ${size * 2}px currentColor;
            `;
            
            particleContainer.appendChild(particle);
        }
    },    
    bindEvents: () => {
        // Responsive updates
        window.addEventListener('resize', () => {
            setTimeout(() => {
                codeMatrixManager.updatePositions();
            }, 100);
        });
        
        // Theme change updates
        const observer = new MutationObserver(() => {
            codeMatrixManager.updateThemeColors();
        });
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    },
    
    updatePositions: () => {
        // Update positions for responsive design
        codeMatrixManager.codeBlocks.forEach((block, index) => {
            block.style.top = `${5 + Math.random() * 90}%`;
            block.style.left = `${2 + Math.random() * 92}%`;
        });
    },
    
    updateThemeColors: () => {
        // Update all dynamic colors when theme changes
        const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
        const colors = isLightTheme ? 
            ['#2563eb', '#7c3aed', '#059669', '#dc2626', '#ea580c'] :
            ['#00ff88', '#ff4757', '#3742fa', '#ffa502', '#ff6348'];
        
        // Update binary columns
        codeMatrixManager.binaryColumns.forEach(column => {
            column.style.color = colors[Math.floor(Math.random() * colors.length)];
        });
        
        // Update falling elements
        codeMatrixManager.fallingElements.forEach(element => {
            element.style.color = colors[Math.floor(Math.random() * colors.length)];
        });
    }
};

// Initialize code matrix when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (document.querySelector('.code-matrix-background')) {
            codeMatrixManager.init();
        }
    }, 2000);
});

// Export for global use
window.codeMatrixManager = codeMatrixManager;
