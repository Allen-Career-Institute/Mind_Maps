document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    const options = {
        container: 'jsmind_container',
        theme: 'primary',
        editable: true,
        mode: 'full',
        view: {
            hmargin: 100,
            vmargin: 50,
            line_width: 2,
            line_color: '#555'
        }
    };
    console.log('Options initialized:', options);

    const mindMapData = {
        meta: {
            name: 'jsMind Demo',
            author: 'Author',
            version: '1.0'
        },
        format: 'node_array',
        data: [
            { id: 'root', isroot: true, topic: 'Project Planning' },
            
            // Right side branches
            // Development Branch (1)
            { id: '1', parentid: 'root', topic: 'Development', direction: 'right' },
            { id: '1.1', parentid: '1', topic: 'Frontend', direction: 'right' },
            { id: '1.2', parentid: '1', topic: 'Backend', direction: 'right' },
            { id: '1.3', parentid: '1', topic: 'Database', direction: 'right' },
            
            // Frontend Children (1.1)
            { id: '1.1_1', parentid: '1.1', topic: 'UI Design', direction: 'right' },
            { id: '1.1_2', parentid: '1.1', topic: 'UX Flow', direction: 'right' },
            { id: '1.1_3', parentid: '1.1', topic: 'Responsive Design', direction: 'right' },
            
            // Backend Children (1.2)
            { id: '1.2_1', parentid: '1.2', topic: 'API Development', direction: 'right' },
            { id: '1.2_2', parentid: '1.2', topic: 'Security', direction: 'right' },
            { id: '1.2_3', parentid: '1.2', topic: 'Performance', direction: 'right' },
            
            // Testing Branch (2)
            { id: '2', parentid: 'root', topic: 'Testing', direction: 'right' },
            { id: '2.1', parentid: '2', topic: 'Unit Tests', direction: 'right' },
            { id: '2.2', parentid: '2', topic: 'Integration Tests', direction: 'right' },
            { id: '2.3', parentid: '2', topic: 'E2E Tests', direction: 'right' },
            
            // Left side branches
            // Resources Branch (3)
            { id: '3', parentid: 'root', topic: 'Resources', direction: 'left' },
            { id: '3.1', parentid: '3', topic: 'Team Members', direction: 'left' },
            { id: '3.2', parentid: '3', topic: 'Budget', direction: 'left' },
            { id: '3.3', parentid: '3', topic: 'Timeline', direction: 'left' },
            
            // Team Children (3.1)
            { id: '3.1_1', parentid: '3.1', topic: 'Developers', direction: 'left' },
            { id: '3.1_2', parentid: '3.1', topic: 'Designers', direction: 'left' },
            { id: '3.1_3', parentid: '3.1', topic: 'QA Engineers', direction: 'left' },
            
            // Timeline Children (3.3)
            { id: '3.3_1', parentid: '3.3', topic: 'Phase 1', direction: 'left' },
            { id: '3.3_2', parentid: '3.3', topic: 'Phase 2', direction: 'left' },
            { id: '3.3_3', parentid: '3.3', topic: 'Phase 3', direction: 'left' },
            
            // Stakeholders Branch (4)
            { id: '4', parentid: 'root', topic: 'Stakeholders', direction: 'left' },
            { id: '4.1', parentid: '4', topic: 'Clients', direction: 'left' },
            { id: '4.2', parentid: '4', topic: 'Investors', direction: 'left' },
            { id: '4.3', parentid: '4', topic: 'Partners', direction: 'left' }
        ]
    };
    console.log('Mind map data structure defined');

    const mainBranchIds = ['1', '2', '3', '4'];
    console.log('Main branch IDs:', mainBranchIds);

    const jm = new jsMind(options);
    console.log('jsMind instance created');
    
    jm.show(mindMapData);
    console.log('Mind map rendered');

    function getAllChildNodes(branchId) {
        console.log(`Getting all child nodes for branch: ${branchId}`);
        const children = [];
        const branch = jm.get_node(branchId);
        if (branch) {
            function traverse(node) {
                console.log(`Traversing node: ${node.id}`);
                children.push(node.id);
                if (node.children) {
                    console.log(`Found children for node ${node.id}:`, node.children.map(c => c.id));
                    node.children.forEach(child => traverse(child));
                }
            }
            traverse(branch);
        }
        console.log(`Found ${children.length} children for branch ${branchId}:`, children);
        return children;
    }

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -50 && // Slightly above viewport
            rect.left >= -50 && // Slightly left of viewport
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 50 && // Slightly below viewport
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) + 50 // Slightly right of viewport
        );
    }

    // Function to update nodes based on viewport visibility
    function updateNodesVisibility() {
        console.log('Updating nodes visibility based on viewport');
        const allNodes = document.querySelectorAll('.jsmind-inner jmnode');
        
        allNodes.forEach(node => {
            if (isInViewport(node)) {
                console.log(`Node ${node.getAttribute('nodeid')} is in viewport`);
                node.classList.remove('faded-branch');
                node.classList.add('active-branch');
            } else {
                console.log(`Node ${node.getAttribute('nodeid')} is out of viewport`);
                node.classList.add('faded-branch');
                node.classList.remove('active-branch');
            }
        });
    }

    // Throttle function to limit scroll event firing
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Modified toggleBranchVisibility function
    function toggleBranchVisibility(activeBranchId = null) {
        if (window.innerWidth <= 768) { // Mobile viewport
            updateNodesVisibility();
        } else {
            // Existing desktop behavior
            console.log(`Toggling branch visibility. Active branch: ${activeBranchId}`);
            
            const mainBranches = mainBranchIds;
            const allNodes = document.querySelectorAll('.jsmind-inner jmnode');
            console.log(`Found ${allNodes.length} total nodes`);
            
            // First, fade and shrink all nodes
            console.log('Fading all nodes');
            allNodes.forEach(node => {
                node.classList.add('faded-branch');
                node.classList.remove('active-branch');
            });

            if (activeBranchId) {
                console.log(`Processing active branch: ${activeBranchId}`);
                
                // Keep the clicked branch and its children visible and enlarged
                const activeNodes = getAllChildNodes(activeBranchId);
                console.log(`Making ${activeNodes.length} nodes visible for active branch`);
                
                // Center the view on the active branch
                const activeBranchNode = jm.get_node(activeBranchId);
                if (activeBranchNode) {
                    console.log('Centering view on active branch');
                    jm.select_node(activeBranchId);
                    
                    // Add slight delay for smooth transition
                    setTimeout(() => {
                        activeNodes.forEach(nodeId => {
                            const nodeElement = document.querySelector(`.jsmind-inner jmnode[nodeid="${nodeId}"]`);
                            if (nodeElement) {
                                console.log(`Making node visible and enlarged: ${nodeId}`);
                                nodeElement.classList.remove('faded-branch');
                                nodeElement.classList.add('active-branch');
                            } else {
                                console.warn(`Node element not found for ID: ${nodeId}`);
                            }
                        });
                        
                        // Keep clicked node visible and enlarged
                        const clickedElement = document.querySelector(`.jsmind-inner jmnode[nodeid="${activeBranchId}"]`);
                        if (clickedElement) {
                            console.log('Making clicked node visible and enlarged');
                            clickedElement.classList.remove('faded-branch');
                            clickedElement.classList.add('active-branch');
                        }
                        
                        // Keep root visible but not enlarged
                        const rootNode = document.querySelector('.jsmind-inner jmnode[nodeid="root"]');
                        if (rootNode) {
                            console.log('Making root node visible');
                            rootNode.classList.remove('faded-branch');
                            rootNode.classList.add('active-branch');
                        }
                    }, 50);
                }
            } else {
                console.log('No active branch, showing all nodes normally');
                allNodes.forEach(node => {
                    node.classList.remove('faded-branch');
                    node.classList.add('active-branch');
                    // Reset transform for all nodes
                    node.style.transform = 'scale(1)';
                });
            }
        }
    }

    console.log('Initializing visibility');
    toggleBranchVisibility();

    // Click event handler
    document.querySelector('#jsmind_container').addEventListener('click', function(e) {
        console.log('Mind map clicked:', e.target);
        
        const nodeId = e.target.getAttribute('nodeid');
        console.log('Clicked node ID:', nodeId);
        
        const clickedNode = jm.get_node(nodeId);
        console.log('Retrieved node:', clickedNode);
        
        if (clickedNode) {
            console.log('Node data:', {
                id: clickedNode.id,
                topic: clickedNode.topic,
                isExpanded: clickedNode.isexpanded
            });
            
            if (mainBranchIds.includes(clickedNode.id)) {
                console.log('Main branch clicked');
                
                if (clickedNode.isexpanded) {
                    console.log('Collapsing branch:', clickedNode.id);
                    jm.collapse_node(clickedNode.id);
                    toggleBranchVisibility();
                } else {
                    console.log('Expanding branch:', clickedNode.id);
                    jm.expand_node(clickedNode.id);
                    toggleBranchVisibility(clickedNode.id);
                }
            } else {
                console.log('Clicked node is not a main branch');
            }
        } else {
            console.log('No node found for click');
        }
    });

    // Styling specific nodes
    console.log('Adding custom styling to nodes');
    const highlightNodes = ['1', '3'];
    highlightNodes.forEach(nodeId => {
        const node = jm.get_node(nodeId);
        if (node) {
            console.log(`Highlighting node: ${nodeId}`);
            node.data.background = '#e6c84c';
        } else {
            console.warn(`Node not found for highlighting: ${nodeId}`);
        }
    });

    // Add scroll event listener with throttling
    document.addEventListener('scroll', throttle(() => {
        if (window.innerWidth <= 768) { // Only for mobile
            updateNodesVisibility();
        }
    }, 100));

    // Add resize event listener
    window.addEventListener('resize', throttle(() => {
        toggleBranchVisibility();
    }, 100));

    // Add touch events for mobile
    let touchStartY = 0;
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', throttle((e) => {
        if (window.innerWidth <= 768) {
            const touchY = e.touches[0].clientY;
            const diff = touchStartY - touchY;
            touchStartY = touchY;
            
            if (Math.abs(diff) > 5) { // Minimum scroll threshold
                updateNodesVisibility();
            }
        }
    }, 100));
}); 