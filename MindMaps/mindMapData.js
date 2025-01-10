const mindMapData = {
    meta: {
        name: "Technology Landscape"
    },
    format: "node_array",
    data: [
        {"id": "root", "isroot": true, "topic": "Technology", "direction": "center"},
        
        // Left side branches
        // Frontend Development Branch
        {"id": "frontend", "parentid": "root", "topic": "Frontend Development", "direction": "left"},
        {"id": "html", "parentid": "frontend", "topic": "HTML", "direction": "left"},
        {"id": "css", "parentid": "frontend", "topic": "CSS", "direction": "left"},
        {"id": "javascript", "parentid": "frontend", "topic": "JavaScript", "direction": "left"},
        
        // Backend Development Branch
        {"id": "backend", "parentid": "root", "topic": "Backend Development", "direction": "left"},
        {"id": "nodejs", "parentid": "backend", "topic": "Node.js", "direction": "left"},
        {"id": "python", "parentid": "backend", "topic": "Python", "direction": "left"},
        {"id": "java", "parentid": "backend", "topic": "Java", "direction": "left"},
        
        // Database Branch
        {"id": "database", "parentid": "root", "topic": "Databases", "direction": "left"},
        {"id": "sql", "parentid": "database", "topic": "SQL", "direction": "left"},
        {"id": "nosql", "parentid": "database", "topic": "NoSQL", "direction": "left"},
        
        // Right side branches
        // DevOps Branch
        {"id": "devops", "parentid": "root", "topic": "DevOps", "direction": "right"},
        {"id": "cicd", "parentid": "devops", "topic": "CI/CD", "direction": "right"},
        {"id": "cloud", "parentid": "devops", "topic": "Cloud", "direction": "right"},
        {"id": "containers", "parentid": "devops", "topic": "Containers", "direction": "right"},
        
        // Mobile Branch
        {"id": "mobile", "parentid": "root", "topic": "Mobile Development", "direction": "right"},
        {"id": "android", "parentid": "mobile", "topic": "Android", "direction": "right"},
        {"id": "ios", "parentid": "mobile", "topic": "iOS", "direction": "right"},
        {"id": "react-native", "parentid": "mobile", "topic": "React Native", "direction": "right"},
        
        // Security Branch
        {"id": "security", "parentid": "root", "topic": "Security", "direction": "right"},
        {"id": "auth", "parentid": "security", "topic": "Authentication", "direction": "right"},
        {"id": "encryption", "parentid": "security", "topic": "Encryption", "direction": "right"},
        {"id": "testing", "parentid": "security", "topic": "Security Testing", "direction": "right"}
    ]
}; 