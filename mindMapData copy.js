// const mindMapData = {
//     meta: {
//         name: 'jsMind Demo',
//         author: 'Author',
//         version: '1.0'
//     },
//     format: 'node_array',
//     data: [
//         { id: 'root', isroot: true, topic: 'Project Planning' },
        
//         // Right side branches
//         // Development Branch (1)
//         { id: '1', parentid: 'root', topic: 'Development', direction: 'right' },
//         { id: '1.1', parentid: '1', topic: 'Frontend', direction: 'right' },
//         { id: '1.2', parentid: '1', topic: 'Backend', direction: 'right' },
//         { id: '1.3', parentid: '1', topic: 'Database', direction: 'right' },
        
//         // Frontend Children (1.1)
//         { id: '1.1_1', parentid: '1.1', topic: 'UI Design', direction: 'right' },
//         { id: '1.1_2', parentid: '1.1', topic: 'UX Flow', direction: 'right' },
//         { id: '1.1_3', parentid: '1.1', topic: 'Responsive Design', direction: 'right' },
        
//         // Backend Children (1.2)
//         { id: '1.2_1', parentid: '1.2', topic: 'API Development', direction: 'right' },
//         { id: '1.2_2', parentid: '1.2', topic: 'Security', direction: 'right' },
//         { id: '1.2_3', parentid: '1.2', topic: 'Performance', direction: 'right' },
        
//         // Testing Branch (2)
//         { id: '2', parentid: 'root', topic: 'Testing', direction: 'right' },
//         { id: '2.1', parentid: '2', topic: 'Unit Tests', direction: 'right' },
//         { id: '2.2', parentid: '2', topic: 'Integration Tests', direction: 'right' },
//         { id: '2.3', parentid: '2', topic: 'E2E Tests', direction: 'right' },
        
//         // Left side branches
//         // Resources Branch (3)
//         { id: '3', parentid: 'root', topic: 'Resources', direction: 'left' },
//         { id: '3.1', parentid: '3', topic: 'Team Members', direction: 'left' },
//         { id: '3.2', parentid: '3', topic: 'Budget', direction: 'left' },
//         { id: '3.3', parentid: '3', topic: 'Timeline', direction: 'left' },
        
//         // Team Children (3.1)
//         { id: '3.1_1', parentid: '3.1', topic: 'Developers', direction: 'left' },
//         { id: '3.1_2', parentid: '3.1', topic: 'Designers', direction: 'left' },
//         { id: '3.1_3', parentid: '3.1', topic: 'QA Engineers', direction: 'left' },
        
//         // Timeline Children (3.3)
//         { id: '3.3_1', parentid: '3.3', topic: 'Phase 1', direction: 'left' },
//         { id: '3.3_2', parentid: '3.3', topic: 'Phase 2', direction: 'left' },
//         { id: '3.3_3', parentid: '3.3', topic: 'Phase 3', direction: 'left' },
        
//         // Stakeholders Branch (4)
//         { id: '4', parentid: 'root', topic: 'Stakeholders', direction: 'left' },
//         { id: '4.1', parentid: '4', topic: 'Clients', direction: 'left' },
//         { id: '4.2', parentid: '4', topic: 'Investors', direction: 'left' },
//         { id: '4.3', parentid: '4', topic: 'Partners', direction: 'left' }
//     ]
// }; 



const mindMapData = {
    meta: {
        name: 'jsMind Demo',
        author: 'Author',
        version: '1.2'
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
        { id: '1.4', parentid: '1', topic: 'DevOps', direction: 'right' },
        { id: '1.5', parentid: '1', topic: 'Mobile Development', direction: 'right' },

        // Frontend Children (1.1)
        { id: '1.1_1', parentid: '1.1', topic: 'UI Design', direction: 'right' },
        { id: '1.1_2', parentid: '1.1', topic: 'UX Flow', direction: 'right' },
        { id: '1.1_3', parentid: '1.1', topic: 'Responsive Design', direction: 'right' },
        { id: '1.1_4', parentid: '1.1', topic: 'Accessibility Standards', direction: 'right' },
        { id: '1.1_5', parentid: '1.1', topic: 'Component Libraries', direction: 'right' },

        // Backend Children (1.2)
        { id: '1.2_1', parentid: '1.2', topic: 'API Development', direction: 'right' },
        { id: '1.2_2', parentid: '1.2', topic: 'Security', direction: 'right' },
        { id: '1.2_3', parentid: '1.2', topic: 'Performance', direction: 'right' },
        { id: '1.2_4', parentid: '1.2', topic: 'Scalability', direction: 'right' },
        { id: '1.2_5', parentid: '1.2', topic: 'Microservices', direction: 'right' },

        // Database Children (1.3)
        { id: '1.3_1', parentid: '1.3', topic: 'Schema Design', direction: 'right' },
        { id: '1.3_2', parentid: '1.3', topic: 'Data Migration', direction: 'right' },
        { id: '1.3_3', parentid: '1.3', topic: 'Backup Strategies', direction: 'right' },
        { id: '1.3_4', parentid: '1.3', topic: 'Optimization', direction: 'right' },
        { id: '1.3_5', parentid: '1.3', topic: 'Replication', direction: 'right' },

        // DevOps Children (1.4)
        { id: '1.4_1', parentid: '1.4', topic: 'CI/CD Pipelines', direction: 'right' },
        { id: '1.4_2', parentid: '1.4', topic: 'Infrastructure as Code', direction: 'right' },
        { id: '1.4_3', parentid: '1.4', topic: 'Monitoring & Logging', direction: 'right' },
        { id: '1.4_4', parentid: '1.4', topic: 'Containerization', direction: 'right' },

        // Mobile Development Children (1.5)
        { id: '1.5_1', parentid: '1.5', topic: 'iOS Development', direction: 'right' },
        { id: '1.5_2', parentid: '1.5', topic: 'Android Development', direction: 'right' },
        { id: '1.5_3', parentid: '1.5', topic: 'Cross-Platform Tools', direction: 'right' },
        { id: '1.5_4', parentid: '1.5', topic: 'App Store Optimization', direction: 'right' },

        // Testing Branch (2)
        { id: '2', parentid: 'root', topic: 'Testing', direction: 'right' },
        { id: '2.1', parentid: '2', topic: 'Unit Tests', direction: 'right' },
        { id: '2.2', parentid: '2', topic: 'Integration Tests', direction: 'right' },
        { id: '2.3', parentid: '2', topic: 'E2E Tests', direction: 'right' },
        { id: '2.4', parentid: '2', topic: 'Regression Testing', direction: 'right' },
        { id: '2.5', parentid: '2', topic: 'Load Testing', direction: 'right' },
        { id: '2.6', parentid: '2', topic: 'User Acceptance Testing', direction: 'right' },

        // Left side branches
        // Resources Branch (3)
        { id: '3', parentid: 'root', topic: 'Resources', direction: 'left' },
        { id: '3.1', parentid: '3', topic: 'Team Members', direction: 'left' },
        { id: '3.2', parentid: '3', topic: 'Budget', direction: 'left' },
        { id: '3.3', parentid: '3', topic: 'Timeline', direction: 'left' },
        { id: '3.4', parentid: '3', topic: 'Tools & Technologies', direction: 'left' },

        // Team Children (3.1)
        { id: '3.1_1', parentid: '3.1', topic: 'Developers', direction: 'left' },
        { id: '3.1_2', parentid: '3.1', topic: 'Designers', direction: 'left' },
        { id: '3.1_3', parentid: '3.1', topic: 'QA Engineers', direction: 'left' },
        { id: '3.1_4', parentid: '3.1', topic: 'Project Managers', direction: 'left' },
        { id: '3.1_5', parentid: '3.1', topic: 'Stakeholder Liaisons', direction: 'left' },

        // Budget Children (3.2)
        { id: '3.2_1', parentid: '3.2', topic: 'Software Licenses', direction: 'left' },
        { id: '3.2_2', parentid: '3.2', topic: 'Hardware', direction: 'left' },
        { id: '3.2_3', parentid: '3.2', topic: 'Training', direction: 'left' },
        { id: '3.2_4', parentid: '3.2', topic: 'Outsourcing', direction: 'left' },

        // Timeline Children (3.3)
        { id: '3.3_1', parentid: '3.3', topic: 'Phase 1', direction: 'left' },
        { id: '3.3_2', parentid: '3.3', topic: 'Phase 2', direction: 'left' },
        { id: '3.3_3', parentid: '3.3', topic: 'Phase 3', direction: 'left' },
        { id: '3.3_4', parentid: '3.3', topic: 'Milestones', direction: 'left' },
        { id: '3.3_5', parentid: '3.3', topic: 'Deliverables', direction: 'left' },

        // Tools & Technologies Children (3.4)
        { id: '3.4_1', parentid: '3.4', topic: 'Version Control', direction: 'left' },
        { id: '3.4_2', parentid: '3.4', topic: 'Collaboration Tools', direction: 'left' },
        { id: '3.4_3', parentid: '3.4', topic: 'Development Frameworks', direction: 'left' },

        // Stakeholders Branch (4)
        { id: '4', parentid: 'root', topic: 'Stakeholders', direction: 'left' },
        { id: '4.1', parentid: '4', topic: 'Clients', direction: 'left' },
        { id: '4.2', parentid: '4', topic: 'Investors', direction: 'left' },
        { id: '4.3', parentid: '4', topic: 'Partners', direction: 'left' },
        { id: '4.4', parentid: '4', topic: 'Regulatory Bodies', direction: 'left' },
        { id: '4.5', parentid: '4', topic: 'End Users', direction: 'left' }
    ]
};
