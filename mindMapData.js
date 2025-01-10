const mindMapData = {
    meta: {
        name: "Technology Landscape"
    },
    format: "node_array",
    data: [
        {"id": "root", "isroot": true, "topic": "Technology"},
        
        // Frontend Development Branch
        {"id": "frontend", "parentid": "root", "topic": "Frontend Development"},
        {"id": "html", "parentid": "frontend", "topic": "HTML"},
        {"id": "css", "parentid": "frontend", "topic": "CSS"},
        {"id": "javascript", "parentid": "frontend", "topic": "JavaScript"},
        
        // HTML Children
        {"id": "html5", "parentid": "html", "topic": "HTML5 Features"},
        {"id": "semantic", "parentid": "html", "topic": "Semantic Elements"},
        {"id": "forms", "parentid": "html", "topic": "Forms & Validation"},
        
        // CSS Children
        {"id": "flexbox", "parentid": "css", "topic": "Flexbox"},
        {"id": "grid", "parentid": "css", "topic": "Grid"},
        {"id": "animations", "parentid": "css", "topic": "Animations"},
        {"id": "sass", "parentid": "css", "topic": "Sass/SCSS"},
        
        // JavaScript Children
        {"id": "es6", "parentid": "javascript", "topic": "ES6+"},
        {"id": "frameworks", "parentid": "javascript", "topic": "Frameworks"},
        {"id": "testing", "parentid": "javascript", "topic": "Testing"},
        
        // Backend Development Branch
        {"id": "backend", "parentid": "root", "topic": "Backend Development"},
        {"id": "nodejs", "parentid": "backend", "topic": "Node.js"},
        {"id": "python", "parentid": "backend", "topic": "Python"},
        {"id": "java", "parentid": "backend", "topic": "Java"},
        
        // Node.js Children
        {"id": "express", "parentid": "nodejs", "topic": "Express.js"},
        {"id": "npm", "parentid": "nodejs", "topic": "NPM"},
        {"id": "websocket", "parentid": "nodejs", "topic": "WebSocket"},
        
        // Python Children
        {"id": "django", "parentid": "python", "topic": "Django"},
        {"id": "flask", "parentid": "python", "topic": "Flask"},
        {"id": "fastapi", "parentid": "python", "topic": "FastAPI"},
        
        // Database Branch
        {"id": "database", "parentid": "root", "topic": "Databases"},
        {"id": "sql", "parentid": "database", "topic": "SQL"},
        {"id": "nosql", "parentid": "database", "topic": "NoSQL"},
        
        // SQL Children
        {"id": "mysql", "parentid": "sql", "topic": "MySQL"},
        {"id": "postgresql", "parentid": "sql", "topic": "PostgreSQL"},
        {"id": "oracle", "parentid": "sql", "topic": "Oracle"},
        
        // NoSQL Children
        {"id": "mongodb", "parentid": "nosql", "topic": "MongoDB"},
        {"id": "redis", "parentid": "nosql", "topic": "Redis"},
        {"id": "cassandra", "parentid": "nosql", "topic": "Cassandra"},
        
        // DevOps Branch
        {"id": "devops", "parentid": "root", "topic": "DevOps"},
        {"id": "ci-cd", "parentid": "devops", "topic": "CI/CD"},
        {"id": "cloud", "parentid": "devops", "topic": "Cloud Services"},
        {"id": "containers", "parentid": "devops", "topic": "Containers"},
        
        // Cloud Services Children
        {"id": "aws", "parentid": "cloud", "topic": "AWS"},
        {"id": "azure", "parentid": "cloud", "topic": "Azure"},
        {"id": "gcp", "parentid": "cloud", "topic": "Google Cloud"},
        
        // Container Children
        {"id": "docker", "parentid": "containers", "topic": "Docker"},
        {"id": "kubernetes", "parentid": "containers", "topic": "Kubernetes"},
        
        // Security Branch
        {"id": "security", "parentid": "root", "topic": "Security"},
        {"id": "auth", "parentid": "security", "topic": "Authentication"},
        {"id": "encryption", "parentid": "security", "topic": "Encryption"},
        {"id": "security-testing", "parentid": "security", "topic": "Security Testing"},
        
        // Mobile Development Branch
        {"id": "mobile", "parentid": "root", "topic": "Mobile Development"},
        {"id": "android", "parentid": "mobile", "topic": "Android"},
        {"id": "ios", "parentid": "mobile", "topic": "iOS"},
        {"id": "cross-platform", "parentid": "mobile", "topic": "Cross-Platform"},
        
        // Cross-Platform Children
        {"id": "react-native", "parentid": "cross-platform", "topic": "React Native"},
        {"id": "flutter", "parentid": "cross-platform", "topic": "Flutter"},
        {"id": "xamarin", "parentid": "cross-platform", "topic": "Xamarin"}
    ]
};
