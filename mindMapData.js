// const mindMapData = {
//     meta: {
//         name: 'ADPL Course Structure',
//         author: 'Author',
//         version: '1.0'
//     },
//     format: 'node_array',
//     data: [
//         { id: 'root', isroot: true, topic: 'ADPL' },
        
//         // Life Sciences (Upper diagonal section)
//         { id: 'st_1', parentid: 'root', topic: 'Biotechnology', direction: 'top-right' },
//         { id: 'st_2', parentid: 'root', topic: 'Genetics And Evolution', direction: 'top-right' },
//         { id: 'st_3', parentid: 'root', topic: 'Biology In Human Welfare', direction: 'top-left' },
//         { id: 'st_5', parentid: 'root', topic: 'Reproduction', direction: 'top-left' },
        
//         // Physical Sciences (Lower diagonal section)
//         { id: 'st_4', parentid: 'root', topic: 'Ecology', direction: 'bottom-right' },
//         { id: 'st_6', parentid: 'root', topic: 'Experimental Skills', direction: 'bottom-right' },
//         { id: 'st_7', parentid: 'root', topic: 'Electrodynamics', direction: 'bottom-left' },
        
//         // Radial arrangement for physics topics
//         { id: 'st_8', parentid: 'root', topic: 'Optics', direction: 'right-up' },
//         { id: 'st_9', parentid: 'root', topic: 'Modern Physics And Electronics', direction: 'right-down' },
        
//         // Chemistry topics (Left radial arrangement)
//         { id: 'st_10', parentid: 'root', topic: 'Organic Chemistry', direction: 'left-up' },
//         { id: 'st_11', parentid: 'root', topic: 'Inorganic Chemistry', direction: 'left-down' },
//         { id: 'st_12', parentid: 'root', topic: 'Physical Chemistry', direction: 'left-up' },

//         // Biotechnology subtopics (Diagonal arrangement)
//         { id: 't_1', parentid: 'st_1', topic: 'Principles And Processes', direction: 'top-right' },
//         { id: 't_2', parentid: 'st_1', topic: 'Applications', direction: 'right-up' },

//         // Genetics and Evolution subtopics (Diagonal arrangement)
//         { id: 't_3', parentid: 'st_2', topic: 'Principles Of Inheritance', direction: 'top-right' },
//         { id: 't_4', parentid: 'st_2', topic: 'Molecular Basis', direction: 'right-up' },
//         { id: 't_10', parentid: 'st_2', topic: 'Evolution', direction: 'right-up' },

//         // Biology in Human Welfare subtopics (Radial arrangement)
//         { id: 't_5', parentid: 'st_3', topic: 'Microbes In Human Welfare', direction: 'left-up' },
//         { id: 't_13', parentid: 'st_3', topic: 'Human Health And Disease', direction: 'left-up' },

//         // Reproduction subtopics (Diagonal arrangement)
//         { id: 't_9', parentid: 'st_5', topic: 'Sexual Reproduction In Plants', direction: 'top-left' },
//         { id: 't_11', parentid: 'st_5', topic: 'Reproductive Health', direction: 'left-up' },
//         { id: 't_12', parentid: 'st_5', topic: 'Human Reproduction', direction: 'left-up' },

//         // Ecology subtopics (Diagonal arrangement)
//         { id: 't_6', parentid: 'st_4', topic: 'Ecosystem', direction: 'bottom-right' },
//         { id: 't_7', parentid: 'st_4', topic: 'Biodiversity And Conservation', direction: 'right-down' },
//         { id: 't_8', parentid: 'st_4', topic: 'Organisms And Populations', direction: 'bottom-right' },

//         // Experimental Skills subtopics (Radial arrangement)
//         { id: 't_14', parentid: 'st_6', topic: 'Experimental Skills XII', direction: 'right-down' },

//         // Electrodynamics subtopics (Diagonal arrangement)
//         { id: 't_15', parentid: 'st_7', topic: 'Capacitor', direction: 'bottom-left' },
//         { id: 't_16', parentid: 'st_7', topic: 'Electromagnetic Induction', direction: 'left-down' },
//         { id: 't_17', parentid: 'st_7', topic: 'Magnetic Effects', direction: 'bottom-left' }
//     ]
// };




const mindMapData = 
    {
    "meta": {
        "name": "jsMind Demo",
        "author": "Author",
        "version": "1.0"
    },
    "format": "node_array",
    "data": [
        {
            "id": "root",
            "isroot": true,
            "topic": "ADPL",
            "parentid": null,
            "direction": "right"
        },
        {
            "id": "st_1",
            "parentid": "root",
            "topic": "Biotechnology",
            "direction": "left"
        },
        {
            "id": "st_2",
            "parentid": "root",
            "topic": "Genetics And Evolution",
            "direction": "left"
        },
        {
            "id": "st_3",
            "parentid": "root",
            "topic": "Biology In Human Welfare",
            "direction": "left"
        },
        {
            "id": "st_4",
            "parentid": "root",
            "topic": "Ecology",
            "direction": "right"
        },
        {
            "id": "st_5",
            "parentid": "root",
            "topic": "Reproduction",
            "direction": "left"
        },
        {
            "id": "st_6",
            "parentid": "root",
            "topic": "Experimental Skills",
            "direction": "right"
        },
        {
            "id": "st_7",
            "parentid": "root",
            "topic": "Electrodynamics",
            "direction": "left"
        },
        {
            "id": "st_8",
            "parentid": "root",
            "topic": "Optics",
            "direction": "left"
        },
        {
            "id": "st_9",
            "parentid": "root",
            "topic": "Modern Physics And Electronics",
            "direction": "right"
        },
        {
            "id": "st_10",
            "parentid": "root",
            "topic": "Organic Chemistry",
            "direction": "right"
        },
        {
            "id": "st_11",
            "parentid": "root",
            "topic": "Inorganic Chemistry",
            "direction": "right"
        },
        {
            "id": "st_12",
            "parentid": "root",
            "topic": "Physical Chemistry",
            "direction": "right"
        },
        {
            "id": "st_13",
            "parentid": "root",
            "topic": "empty",
            "direction": "right"
        },
        {
            "id": "t_1",
            "parentid": "st_1",
            "topic": "Biotechnology: Principles And Processes",
            "direction": "left"
        },
        {
            "id": "sub_16",
            "parentid": "t_1",
            "topic": "Isolation And Cutting Of DNA",
            "direction": "right"
        },
        {
            "id": "sub_17",
            "parentid": "t_1",
            "topic": "Product Obtaining And Downstream Processing",
            "direction": "right"
        },
        {
            "id": "sub_18",
            "parentid": "t_1",
            "topic": "Introduction",
            "direction": "right"
        },
        {
            "id": "sub_19",
            "parentid": "t_1",
            "topic": "Intra (Tools Of Biotech) (BT01 To BT04)",
            "direction": "right"
        },
        {
            "id": "sub_20",
            "parentid": "t_1",
            "topic": "Passenger DNA And Host Cell",
            "direction": "right"
        },
        {
            "id": "sub_21",
            "parentid": "t_1",
            "topic": "Cloning, Vectors",
            "direction": "right"
        },
        {
            "id": "sub_22",
            "parentid": "t_1",
            "topic": "r-Dna Formation, Transfer In Host Cell",
            "direction": "right"
        },
        {
            "id": "sub_23",
            "parentid": "t_1",
            "topic": "Gel Electrophoresis",
            "direction": "right"
        },
        {
            "id": "sub_24",
            "parentid": "t_1",
            "topic": "P.C.R.",
            "direction": "right"
        },
        {
            "id": "sub_25",
            "parentid": "t_1",
            "topic": "Intra (Processes Of Biotech.) (BT06 To BT11)",
            "direction": "right"
        },
        {
            "id": "sub_26",
            "parentid": "t_1",
            "topic": "Inter (BT01 To BT12)",
            "direction": "right"
        },
        {
            "id": "sub_27",
            "parentid": "t_1",
            "topic": "Principles Of Biotechnology, Tools Of Recombinant DNA Technology, Restriction (All Enzymes) Endonucleases",
            "direction": "right"
        },
        {
            "id": "sub_28",
            "parentid": "t_1",
            "topic": "Selection Of Recombinant",
            "direction": "right"
        },
        {
            "id": "t_2",
            "parentid": "st_1",
            "topic": "Biotechnology And Its Applications",
            "direction": "left"
        },
        {
            "id": "sub_30",
            "parentid": "t_2",
            "topic": "Biotechnological Applications In Medicine (Genetically Engineered Insulin, Gene Therapy, Molecular Diagnosis",
            "direction": "right"
        },
        {
            "id": "sub_31",
            "parentid": "t_2",
            "topic": "Biotechnological Applications In Agriculture,Tissue Culture",
            "direction": "right"
        },
        {
            "id": "sub_32",
            "parentid": "t_2",
            "topic": "Intra (BA01 To BA02)",
            "direction": "right"
        },
        {
            "id": "sub_33",
            "parentid": "t_2",
            "topic": "Transgenic Animals",
            "direction": "right"
        },
        {
            "id": "sub_34",
            "parentid": "t_2",
            "topic": "Intra (BA04 To BA05)",
            "direction": "right"
        },
        {
            "id": "sub_35",
            "parentid": "t_2",
            "topic": "Inter (BA01 To BA06)",
            "direction": "right"
        },
        {
            "id": "sub_36",
            "parentid": "t_2",
            "topic": "Ethical Issues",
            "direction": "right"
        },
        {
            "id": "t_3",
            "parentid": "st_2",
            "topic": "Principles Of Inheritance And Variation",
            "direction": "left"
        },
        {
            "id": "sub_38",
            "parentid": "t_3",
            "topic": "Cytoplasmic Inheritance",
            "direction": "right"
        },
        {
            "id": "sub_39",
            "parentid": "t_3",
            "topic": "Dihybrid Cross Theory",
            "direction": "right"
        },
        {
            "id": "sub_40",
            "parentid": "t_3",
            "topic": "Sex Linkage, Sex Limited And Sex Influenced Characters, Sex Linked Disease - Haemophilia And Colour Blindness",
            "direction": "right"
        },
        {
            "id": "sub_41",
            "parentid": "t_3",
            "topic": "Inter (PI01 To PI25)",
            "direction": "right"
        },
        {
            "id": "sub_42",
            "parentid": "t_3",
            "topic": "Human Genetics - Pedigree",
            "direction": "right"
        },
        {
            "id": "sub_43",
            "parentid": "t_3",
            "topic": "Linkage",
            "direction": "right"
        },
        {
            "id": "sub_44",
            "parentid": "t_3",
            "topic": "Intra - (Gene Interaction Complete) (PI10 To PI15)",
            "direction": "right"
        },
        {
            "id": "sub_45",
            "parentid": "t_3",
            "topic": "Intra (PI01 To PI08)",
            "direction": "right"
        },
        {
            "id": "sub_46",
            "parentid": "t_3",
            "topic": "Incomplete Dominance",
            "direction": "right"
        },
        {
            "id": "sub_47",
            "parentid": "t_3",
            "topic": "Special Crosses",
            "direction": "right"
        },
        {
            "id": "sub_48",
            "parentid": "t_3",
            "topic": "Polygenic Inheritance",
            "direction": "right"
        },
        {
            "id": "sub_49",
            "parentid": "t_3",
            "topic": "Monohybrid Cross Numerical",
            "direction": "right"
        },
        {
            "id": "sub_50",
            "parentid": "t_3",
            "topic": "Dihybrid Cross Numerical",
            "direction": "right"
        },
        {
            "id": "sub_51",
            "parentid": "t_3",
            "topic": "Sex Determination",
            "direction": "right"
        },
        {
            "id": "sub_52",
            "parentid": "t_3",
            "topic": "Monohybrid Cross Theory",
            "direction": "right"
        },
        {
            "id": "sub_53",
            "parentid": "t_3",
            "topic": "Multiple Alleles",
            "direction": "right"
        },
        {
            "id": "sub_54",
            "parentid": "t_3",
            "topic": "Intra - Linkage And S.D. Complete (PI17 To PI20)",
            "direction": "right"
        },
        {
            "id": "sub_55",
            "parentid": "t_3",
            "topic": "Codominance",
            "direction": "right"
        },
        {
            "id": "sub_56",
            "parentid": "t_3",
            "topic": "History Of Mendel",
            "direction": "right"
        },
        {
            "id": "sub_57",
            "parentid": "t_3",
            "topic": "Genetic Disorders",
            "direction": "right"
        },
        {
            "id": "sub_58",
            "parentid": "t_3",
            "topic": "Pleiotropy, Sickle Cell Anemia",
            "direction": "right"
        },
        {
            "id": "sub_59",
            "parentid": "t_3",
            "topic": "Question Of Gamete Formation",
            "direction": "right"
        },
        {
            "id": "sub_60",
            "parentid": "t_3",
            "topic": "Chromosomal Theory Of Inheritance",
            "direction": "right"
        },
        {
            "id": "sub_61",
            "parentid": "t_3",
            "topic": "Intra (PI22 To PI24)",
            "direction": "right"
        },
        {
            "id": "sub_62",
            "parentid": "t_3",
            "topic": "Population Genetics",
            "direction": "right"
        },
        {
            "id": "sub_63",
            "parentid": "t_3",
            "topic": "Mendelism- Introduction - Terminology",
            "direction": "right"
        },
        {
            "id": "t_4",
            "parentid": "st_2",
            "topic": "Molecular Basis Of Inheritance",
            "direction": "left"
        },
        {
            "id": "sub_65",
            "parentid": "t_4",
            "topic": "Split Gene",
            "direction": "right"
        },
        {
            "id": "sub_66",
            "parentid": "t_4",
            "topic": "Regulation Of Gene Expression",
            "direction": "right"
        },
        {
            "id": "sub_67",
            "parentid": "t_4",
            "topic": "Intra - Regulation To DNA Fingerprinting (MI16 To MI19)",
            "direction": "right"
        },
        {
            "id": "sub_68",
            "parentid": "t_4",
            "topic": "H.G.P.",
            "direction": "right"
        },
        {
            "id": "sub_69",
            "parentid": "t_4",
            "topic": "Intra - Up To Translation (MI08 To MI14)",
            "direction": "right"
        },
        {
            "id": "sub_70",
            "parentid": "t_4",
            "topic": "Transcription",
            "direction": "right"
        },
        {
            "id": "sub_71",
            "parentid": "t_4",
            "topic": "Properties Of Genetic Material",
            "direction": "right"
        },
        {
            "id": "sub_72",
            "parentid": "t_4",
            "topic": "DNA Packaging",
            "direction": "right"
        },
        {
            "id": "sub_73",
            "parentid": "t_4",
            "topic": "Search Of Genetic Material",
            "direction": "right"
        },
        {
            "id": "sub_74",
            "parentid": "t_4",
            "topic": "Mutations, Gene Mutation And Chromosomal Mutation",
            "direction": "right"
        },
        {
            "id": "sub_75",
            "parentid": "t_4",
            "topic": "Genetic Code",
            "direction": "right"
        },
        {
            "id": "sub_76",
            "parentid": "t_4",
            "topic": "RNA World",
            "direction": "right"
        },
        {
            "id": "sub_77",
            "parentid": "t_4",
            "topic": "Nucleotides",
            "direction": "right"
        },
        {
            "id": "sub_78",
            "parentid": "t_4",
            "topic": "DNA Replication",
            "direction": "right"
        },
        {
            "id": "sub_79",
            "parentid": "t_4",
            "topic": "Translation",
            "direction": "right"
        },
        {
            "id": "sub_80",
            "parentid": "t_4",
            "topic": "DNA Structure And Features",
            "direction": "right"
        },
        {
            "id": "sub_81",
            "parentid": "t_4",
            "topic": "RNA, Types Of RNA",
            "direction": "right"
        },
        {
            "id": "sub_82",
            "parentid": "t_4",
            "topic": "Intra - Up To Replication (MI01 To MI06)",
            "direction": "right"
        },
        {
            "id": "sub_83",
            "parentid": "t_4",
            "topic": "Inter- Complete Molecular (MI01 To MI20)",
            "direction": "right"
        },
        {
            "id": "sub_84",
            "parentid": "t_4",
            "topic": "Central Dogma, Wobble Hypothesis",
            "direction": "right"
        },
        {
            "id": "sub_85",
            "parentid": "t_4",
            "topic": "DNA Fingerprinting",
            "direction": "right"
        },
        {
            "id": "t_5",
            "parentid": "st_3",
            "topic": "Microbes In Human Welfare",
            "direction": "left"
        },
        {
            "id": "sub_87",
            "parentid": "t_5",
            "topic": "Microbes In Production Of Biogas,Microbes In Sewage Treatment",
            "direction": "right"
        },
        {
            "id": "sub_88",
            "parentid": "t_5",
            "topic": "Intra (MH01 To MH03)",
            "direction": "right"
        },
        {
            "id": "sub_89",
            "parentid": "t_5",
            "topic": "Microbes As Biofertilizers",
            "direction": "right"
        },
        {
            "id": "sub_90",
            "parentid": "t_5",
            "topic": "Microbes As Biocontrol Agents, Bioremediation",
            "direction": "right"
        },
        {
            "id": "sub_91",
            "parentid": "t_5",
            "topic": "Inter (MH01 To MH07)",
            "direction": "right"
        },
        {
            "id": "sub_92",
            "parentid": "t_5",
            "topic": "Microbes In Industrial Products (Fermented Beverages, Antibiotics, Chemicals, Enzymes And Bioactive Molecules)",
            "direction": "right"
        },
        {
            "id": "sub_93",
            "parentid": "t_5",
            "topic": "Intra (MH05 To 06)",
            "direction": "right"
        },
        {
            "id": "sub_94",
            "parentid": "t_5",
            "topic": "Microbes In Household Products",
            "direction": "right"
        },
        {
            "id": "t_6",
            "parentid": "st_4",
            "topic": "Ecosystem",
            "direction": "right"
        },
        {
            "id": "sub_96",
            "parentid": "t_6",
            "topic": "Abiotic Factors -Temperature, Morphological And Behavioural Adaptations, Physiological Adaptations",
            "direction": "right"
        },
        {
            "id": "sub_97",
            "parentid": "t_6",
            "topic": "Intra - Light, Temperature, Response To Abiotic Factors (ES14 To ES17)",
            "direction": "right"
        },
        {
            "id": "sub_98",
            "parentid": "t_6",
            "topic": "Ecological Pyramids - Standing Crop, Standing State",
            "direction": "right"
        },
        {
            "id": "sub_99",
            "parentid": "t_6",
            "topic": "Intra - Energy Flow, Food Chain, Food Web Pyramids, Standing Crop, Standing State, Productivity, Decomposition (ES04 To ES07)",
            "direction": "right"
        },
        {
            "id": "sub_100",
            "parentid": "t_6",
            "topic": "Function Of Ecosystem - Biogeochemical Cycle - Introduction",
            "direction": "right"
        },
        {
            "id": "sub_101",
            "parentid": "t_6",
            "topic": "Intra - Of Biogeochemical Cycle, Carbon Cycle, Phosphorus Cycle, Ecosystem Services (ES09 To ES12)",
            "direction": "right"
        },
        {
            "id": "sub_102",
            "parentid": "t_6",
            "topic": "Carbon Cycle",
            "direction": "right"
        },
        {
            "id": "sub_103",
            "parentid": "t_6",
            "topic": "Phosphorus Cycle",
            "direction": "right"
        },
        {
            "id": "sub_104",
            "parentid": "t_6",
            "topic": "Abiotic Factors - Light",
            "direction": "right"
        },
        {
            "id": "sub_105",
            "parentid": "t_6",
            "topic": "Biotic Component (Producers, Macroconsumer And Microconsumers)",
            "direction": "right"
        },
        {
            "id": "sub_106",
            "parentid": "t_6",
            "topic": "Response To Abiotic Factors: Eurythermal, Stenothermal, Euryhaline, Stenohaline, Regulator And Conformers",
            "direction": "right"
        },
        {
            "id": "sub_107",
            "parentid": "t_6",
            "topic": "Function Of Ecosystem - Productivity",
            "direction": "right"
        },
        {
            "id": "sub_108",
            "parentid": "t_6",
            "topic": "Functions Of Ecosystem - Energy Flow, Food Chain, Food Web",
            "direction": "right"
        },
        {
            "id": "sub_109",
            "parentid": "t_6",
            "topic": "Ecosystem Services",
            "direction": "right"
        },
        {
            "id": "sub_110",
            "parentid": "t_6",
            "topic": "Water",
            "direction": "right"
        },
        {
            "id": "sub_111",
            "parentid": "t_6",
            "topic": "Function Of Ecosystem - Decomposition And Factors",
            "direction": "right"
        },
        {
            "id": "sub_112",
            "parentid": "t_6",
            "topic": "Inter - Ecosystem (ES01 To ES20)",
            "direction": "right"
        },
        {
            "id": "sub_113",
            "parentid": "t_6",
            "topic": "Intra - Ecosystem Introduction And Biotic Component (ES01 To ES02)",
            "direction": "right"
        },
        {
            "id": "sub_114",
            "parentid": "t_6",
            "topic": "Ecosystem Introduction (Structural And Functional Units)",
            "direction": "right"
        },
        {
            "id": "sub_115",
            "parentid": "t_6",
            "topic": "Terrestrial Biomes",
            "direction": "right"
        },
        {
            "id": "sub_116",
            "parentid": "t_6",
            "topic": "Intra - Of Water , Terrestrial Biomes (ES18 To ES20)",
            "direction": "right"
        },
        {
            "id": "t_7",
            "parentid": "st_4",
            "topic": "Biodiversity And Conservation",
            "direction": "right"
        },
        {
            "id": "sub_118",
            "parentid": "t_7",
            "topic": "Causes Of Biodiversity Losses - Alien Species Invasion And Co-Extinction",
            "direction": "right"
        },
        {
            "id": "sub_119",
            "parentid": "t_7",
            "topic": "Patterns Of Biodiversity, Latitudinal Gradient, Species- Area Relationship",
            "direction": "right"
        },
        {
            "id": "sub_120",
            "parentid": "t_7",
            "topic": "Natural Resources (Inexhaustible- Inexhaustible Water And Land Resources)",
            "direction": "right"
        },
        {
            "id": "sub_121",
            "parentid": "t_7",
            "topic": "Biodiversity-Genetics Diversity, Species Diversity, Ecological Diversity",
            "direction": "right"
        },
        {
            "id": "sub_122",
            "parentid": "t_7",
            "topic": "Intra - Narrowly Utilitarian, Biodiversity Conservation - In-Situ, Ex Situ, Earth Summit, World Summit, Threatened Species Concept, Red Data Book, Silent Valley. (BD11 To BD14)",
            "direction": "right"
        },
        {
            "id": "sub_123",
            "parentid": "t_7",
            "topic": "Inter - Of Biodiversity And Conservation (BD01 To BD15)",
            "direction": "right"
        },
        {
            "id": "sub_124",
            "parentid": "t_7",
            "topic": "Earth Summit, World Summit, Threatened Species Concept, Red Data Book, Silent Valley.",
            "direction": "right"
        },
        {
            "id": "sub_125",
            "parentid": "t_7",
            "topic": "Intra - Natural Resources, Biodiversity-Genetics Diversity, Species Diversity, Ecological Diversity, Number Of Species On Earth And Pie Chart - Invertebrate, Vertebrate,Plants, Patterns Of Biodiversity, Latitudinal Gradient, Species-Area Relationship, Importance Of Species Diversity To The Ecosystem (David Tilman And Paul Ehrlich) (BD01 To BD05)",
            "direction": "right"
        },
        {
            "id": "sub_126",
            "parentid": "t_7",
            "topic": "Biodiversity Conservation - In-Situ Conservation (Hot Spot, Biosphere Reserve, Sanctuaries, Sacred Groves, National Park).",
            "direction": "right"
        },
        {
            "id": "sub_127",
            "parentid": "t_7",
            "topic": "Importance Of Species Diversity To The Ecosystem (David Tilman And Paul Ehrlich)",
            "direction": "right"
        },
        {
            "id": "sub_128",
            "parentid": "t_7",
            "topic": "Number Of Species On Earth And Pie Chart - Invertebrate, Vertebrate,Plants.",
            "direction": "right"
        },
        {
            "id": "sub_129",
            "parentid": "t_7",
            "topic": "Causes Of Biodiversity Losses - Habitat Loss, Over Exploitation",
            "direction": "right"
        },
        {
            "id": "sub_130",
            "parentid": "t_7",
            "topic": "Biodiversity Conservation - Ex-Situ Conservation",
            "direction": "right"
        },
        {
            "id": "sub_131",
            "parentid": "t_7",
            "topic": "Narrowly Utilitarian , Broadly Utilitarian, Conservation Forestry",
            "direction": "right"
        },
        {
            "id": "sub_132",
            "parentid": "t_7",
            "topic": "Loss Of Biodiversity And Jhum Cultivation",
            "direction": "right"
        },
        {
            "id": "sub_133",
            "parentid": "t_7",
            "topic": "Intra - Loss Of Biodiversity, Causes Of Biodiversity Losses (BD07 To BD09)",
            "direction": "right"
        },
        {
            "id": "t_8",
            "parentid": "st_4",
            "topic": "Organisms And Populations",
            "direction": "right"
        },
        {
            "id": "sub_135",
            "parentid": "t_8",
            "topic": "Age - Sex Pyramids, DG2",
            "direction": "right"
        },
        {
            "id": "sub_136",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Protocooperation",
            "direction": "right"
        },
        {
            "id": "sub_137",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Predation",
            "direction": "right"
        },
        {
            "id": "sub_138",
            "parentid": "t_8",
            "topic": "History And Introduction",
            "direction": "right"
        },
        {
            "id": "sub_139",
            "parentid": "t_8",
            "topic": "Population Growth - Logistic Growth, DG4",
            "direction": "right"
        },
        {
            "id": "sub_140",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Mutualism",
            "direction": "right"
        },
        {
            "id": "sub_141",
            "parentid": "t_8",
            "topic": "Inter - OP01 To OP08 , OP15 To OP23, DG1 To DG5",
            "direction": "right"
        },
        {
            "id": "sub_142",
            "parentid": "t_8",
            "topic": "Intra - History And Introduction, Ecological Hierarchy And Branches Of Ecology, Types Of Population (Local, Sister And Meta Population), Types Of Species (Key Stone, Endemic And Critical Link) (OP01 To OP04)",
            "direction": "right"
        },
        {
            "id": "sub_143",
            "parentid": "t_8",
            "topic": "Introduction, Population, Attributes, (Birth Rate, Death Rate,Population Density) . Emigration, DG1",
            "direction": "right"
        },
        {
            "id": "sub_144",
            "parentid": "t_8",
            "topic": "Types Of Population (Local, Sister And Meta Population)",
            "direction": "right"
        },
        {
            "id": "sub_145",
            "parentid": "t_8",
            "topic": "Characteristics Of Community- Stratification/Ecotone And Edge Species",
            "direction": "right"
        },
        {
            "id": "sub_146",
            "parentid": "t_8",
            "topic": "Intra - Of Demography (DG01 To DG05)",
            "direction": "right"
        },
        {
            "id": "sub_147",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Parasitism",
            "direction": "right"
        },
        {
            "id": "sub_148",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Competition/ Niche",
            "direction": "right"
        },
        {
            "id": "sub_149",
            "parentid": "t_8",
            "topic": "Ecological Hierarchy And Branches Of Ecology",
            "direction": "right"
        },
        {
            "id": "sub_150",
            "parentid": "t_8",
            "topic": "Intra - Characteristics Of Community -Species Diversity And Dominance, Characteristics Of Community- Stratification (OP06 To OP07)",
            "direction": "right"
        },
        {
            "id": "sub_151",
            "parentid": "t_8",
            "topic": "Intra - Species / Population Interaction (OP9 To OP22)",
            "direction": "right"
        },
        {
            "id": "sub_152",
            "parentid": "t_8",
            "topic": "Characteristics Of Community -Species Diversity And Dominance",
            "direction": "right"
        },
        {
            "id": "sub_153",
            "parentid": "t_8",
            "topic": "Life History Variation, DG5",
            "direction": "right"
        },
        {
            "id": "sub_154",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Commensalism",
            "direction": "right"
        },
        {
            "id": "sub_155",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Amensalism",
            "direction": "right"
        },
        {
            "id": "sub_156",
            "parentid": "t_8",
            "topic": "Population Growth - Exponential Growth, DG3",
            "direction": "right"
        },
        {
            "id": "sub_157",
            "parentid": "t_8",
            "topic": "Types Of Species (Key Stone, Endemic And Critical Link)",
            "direction": "right"
        },
        {
            "id": "sub_158",
            "parentid": "t_8",
            "topic": "Intra - Of Positive Interactions - Mutualism, Commensalism, Protocooperation (OP15 To OP18)",
            "direction": "right"
        },
        {
            "id": "t_9",
            "parentid": "st_5",
            "topic": "Sexual Reproduction In Flowering Plants",
            "direction": "left"
        },
        {
            "id": "sub_160",
            "parentid": "t_9",
            "topic": "Seed - Structure, Types And Germination",
            "direction": "right"
        },
        {
            "id": "sub_161",
            "parentid": "t_9",
            "topic": "Intra - Pollination To Seed Germination (SR05 To SR08)",
            "direction": "right"
        },
        {
            "id": "sub_162",
            "parentid": "t_9",
            "topic": "Pre-Fertilization Events : Male Reproductive Whorl - Androecium : Structure And Development Of Anther, Structure Of Pollen Grain, Dehiscence Of Anther And Development Of Male Gametophyte.",
            "direction": "right"
        },
        {
            "id": "sub_163",
            "parentid": "t_9",
            "topic": "Inter- Complete Sexual Reproduction In Flowering Plants (SR01 To SR10)",
            "direction": "right"
        },
        {
            "id": "sub_164",
            "parentid": "t_9",
            "topic": "Pollination",
            "direction": "right"
        },
        {
            "id": "sub_165",
            "parentid": "t_9",
            "topic": "Apomixis And Polyembryony",
            "direction": "right"
        },
        {
            "id": "sub_166",
            "parentid": "t_9",
            "topic": "Pre-Fertilization Events : Female Reproductive Whorl - Gynoecium : Structure And Types Of Ovule, Megasporogenesis And Development Of Female Gametophyte.",
            "direction": "right"
        },
        {
            "id": "sub_167",
            "parentid": "t_9",
            "topic": "Flower - A Fascinating Organ Of Angiosperms",
            "direction": "right"
        },
        {
            "id": "sub_168",
            "parentid": "t_9",
            "topic": "Post-Fertilization Events : Development Of Endosperm And Embryo",
            "direction": "right"
        },
        {
            "id": "sub_169",
            "parentid": "t_9",
            "topic": "Intra - Flower To Development Of Female Gametophyte (SR01 To SR03)",
            "direction": "right"
        },
        {
            "id": "sub_170",
            "parentid": "t_9",
            "topic": "Fertilization Events - Double Fertilization (Syngamy And Triple Fusion)",
            "direction": "right"
        },
        {
            "id": "sub_171",
            "parentid": "t_7",
            "topic": "Causes Of Biodiversity Losses - Habitat Loss, Over Exploitation",
            "direction": "right"
        },
        {
            "id": "sub_172",
            "parentid": "t_7",
            "topic": "Earth Summit, World Summit, Threatened Species Concept, Red Data Book Silent Valley.",
            "direction": "right"
        },
        {
            "id": "sub_173",
            "parentid": "t_7",
            "topic": "Causes Of Biodiversity Losses - Alien Species Invasion And Co-Extinction",
            "direction": "right"
        },
        {
            "id": "sub_174",
            "parentid": "t_7",
            "topic": "Number Of Species On Earth And Pie Chart - Invertebrate, Vertebrate,Plants",
            "direction": "right"
        },
        {
            "id": "sub_175",
            "parentid": "t_7",
            "topic": "Patterns Of Biodiversity, Latitudinal Gradient, Species- Area Relationship",
            "direction": "right"
        },
        {
            "id": "sub_176",
            "parentid": "t_7",
            "topic": "Natural Resources (Inexhaustible- Exhaustible Water\nAnd Land Resources)",
            "direction": "right"
        },
        {
            "id": "sub_177",
            "parentid": "t_7",
            "topic": "Biodiversity Conservation - Ex-Situ Conservation",
            "direction": "right"
        },
        {
            "id": "sub_178",
            "parentid": "t_7",
            "topic": "Importance Of Species Diversity To The Ecosystem (David Tilman And Paul Ehrlich)",
            "direction": "right"
        },
        {
            "id": "sub_179",
            "parentid": "t_7",
            "topic": "Biodiversity And Conservation - In Situ Conservation (Hot Spot, Biosphere Reserve, Sanctuaries, Sacred Groves, National Park",
            "direction": "right"
        },
        {
            "id": "sub_180",
            "parentid": "t_7",
            "topic": "Narrowly Utilitarian , Broadly Utilitarian, Conservation Forestry",
            "direction": "right"
        },
        {
            "id": "sub_181",
            "parentid": "t_7",
            "topic": "Intra - Narrowly Utilitarian, Biodiversity Conservation - In-Situ, Ex Situ, Earth Summit, World Summit, Threatened Species Concept, Red Data Book, Silent Valley. (BD11 To BD14)",
            "direction": "right"
        },
        {
            "id": "sub_182",
            "parentid": "t_7",
            "topic": "Intra - Natural Resources, Biodiversity-Genetics Diversity, Species Diversity, Ecological Diversity, Number Of Species On Earth And Pie Chart - Invertebrate, Vertebrate,Plants, Patterns Of Biodiversity, Latitudinal Gradient, Species-Area Relationship, Importance Of Species Diversity To The Ecosystem (David Tilman And Paul Ehrlich) (BD01 To BD05)",
            "direction": "right"
        },
        {
            "id": "sub_183",
            "parentid": "t_7",
            "topic": "Intra - Loss Of Biodiversity, Causes Of Biodiversity Losses (BD07 To BD09)",
            "direction": "right"
        },
        {
            "id": "sub_184",
            "parentid": "t_7",
            "topic": "Biodiversity-Genetics Diversity, Species Diversity, Ecological Diversity",
            "direction": "right"
        },
        {
            "id": "sub_185",
            "parentid": "t_7",
            "topic": "Inter - Of Biodiversity And Conservation (BD01 To BD15)",
            "direction": "right"
        },
        {
            "id": "sub_186",
            "parentid": "t_7",
            "topic": "Loss Of Biodiversity And Jhum Cultivation",
            "direction": "right"
        },
        {
            "id": "sub_187",
            "parentid": "t_8",
            "topic": "Intra - Of Species / Population Negative Interaction (OP17 To OP20)",
            "direction": "right"
        },
        {
            "id": "sub_188",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Mutualism",
            "direction": "right"
        },
        {
            "id": "sub_189",
            "parentid": "t_8",
            "topic": "Characteristics Of Community -Species Diversity And Dominance",
            "direction": "right"
        },
        {
            "id": "sub_190",
            "parentid": "t_8",
            "topic": "Intra - Of Positive Interactions - Mutualism, Commensalism, Protocooperation (OP13 To OP15)",
            "direction": "right"
        },
        {
            "id": "sub_191",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Amensalism",
            "direction": "right"
        },
        {
            "id": "sub_192",
            "parentid": "t_8",
            "topic": "Population Growth - Logistic Growth",
            "direction": "right"
        },
        {
            "id": "sub_193",
            "parentid": "t_8",
            "topic": "Inter - OP01 To OP21",
            "direction": "right"
        },
        {
            "id": "sub_194",
            "parentid": "t_8",
            "topic": "Intra - Characteristics Of Community -Species Diversity And Dominance, Characteristics Of Community- Stratification (OP06 To OP07)",
            "direction": "right"
        },
        {
            "id": "sub_195",
            "parentid": "t_8",
            "topic": "Intra - History And Introduction, Ecological Hierarchy And Branches Of Ecology, Types Of Population (Local, Sister And Meta Population), Types Of Species (Key Stone, Endemic And Critical Link) (OP01 To OP04)",
            "direction": "right"
        },
        {
            "id": "sub_196",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Protocooperation",
            "direction": "right"
        },
        {
            "id": "sub_197",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Parasitism",
            "direction": "right"
        },
        {
            "id": "sub_198",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Commensalism",
            "direction": "right"
        },
        {
            "id": "sub_199",
            "parentid": "t_8",
            "topic": "Ecological Hierarchy And Branches Of Ecology",
            "direction": "right"
        },
        {
            "id": "sub_200",
            "parentid": "t_8",
            "topic": "History And Introduction",
            "direction": "right"
        },
        {
            "id": "sub_201",
            "parentid": "t_8",
            "topic": "Characteristics Of Community- Stratification/Ecotone And Edge Species",
            "direction": "right"
        },
        {
            "id": "sub_202",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Predation",
            "direction": "right"
        },
        {
            "id": "sub_203",
            "parentid": "t_8",
            "topic": "Intra - Of Demography (DG01 To DG05)",
            "direction": "right"
        },
        {
            "id": "sub_204",
            "parentid": "t_8",
            "topic": "Population Growth - Exponential Growth",
            "direction": "right"
        },
        {
            "id": "sub_205",
            "parentid": "t_8",
            "topic": "Species/ Population Interaction - Competition/ Niche",
            "direction": "right"
        },
        {
            "id": "sub_206",
            "parentid": "t_8",
            "topic": "Introduction, Population, Attributes, (Birth Rate, Death Rate,Population Density) . Emigration , Immigration",
            "direction": "right"
        },
        {
            "id": "sub_207",
            "parentid": "t_8",
            "topic": "Types Of Population (Local, Sister And Meta Population)",
            "direction": "right"
        },
        {
            "id": "sub_208",
            "parentid": "t_8",
            "topic": "Types Of Species (Key Stone, Endemic And Critical Link)",
            "direction": "right"
        },
        {
            "id": "sub_209",
            "parentid": "t_8",
            "topic": "Life History Variation",
            "direction": "right"
        },
        {
            "id": "sub_210",
            "parentid": "t_8",
            "topic": "Age - Sex Pyramids",
            "direction": "right"
        },
        {
            "id": "sub_211",
            "parentid": "t_6",
            "topic": "Inter - Ecosystem (ES01 To ES23)",
            "direction": "right"
        },
        {
            "id": "sub_212",
            "parentid": "t_6",
            "topic": "Functions Of Ecosystem - Energy Flow, Food Chain, Food Web",
            "direction": "right"
        },
        {
            "id": "sub_213",
            "parentid": "t_6",
            "topic": "Biotic Component (Producers, Macroconsumer And Microconsumers)",
            "direction": "right"
        },
        {
            "id": "sub_214",
            "parentid": "t_6",
            "topic": "Ecosystem Services",
            "direction": "right"
        },
        {
            "id": "sub_215",
            "parentid": "t_6",
            "topic": "Intra - Of Introduction And Biotic Component (ES01 To ES02)",
            "direction": "right"
        },
        {
            "id": "sub_216",
            "parentid": "t_6",
            "topic": "Intra - Of Water , Terrestrial Biomes (ES20 To ES22)",
            "direction": "right"
        },
        {
            "id": "sub_217",
            "parentid": "t_6",
            "topic": "Carbon Cycle",
            "direction": "right"
        },
        {
            "id": "sub_218",
            "parentid": "t_6",
            "topic": "Function Of Ecosystem - Decomposition And Factors",
            "direction": "right"
        },
        {
            "id": "sub_219",
            "parentid": "t_6",
            "topic": "Response To Abiotic Factors: Eurythermal, Stenothermal, Euryhaline, Stenohaline, Regulator And Conformers",
            "direction": "right"
        },
        {
            "id": "sub_220",
            "parentid": "t_6",
            "topic": "Water",
            "direction": "right"
        },
        {
            "id": "sub_221",
            "parentid": "t_6",
            "topic": "Intra - Energy Flow, Food Chain, Food Web Pyramids, Standing Crop, Standing State, Productivity, Decomposition (ES04 To ES07)",
            "direction": "right"
        },
        {
            "id": "sub_222",
            "parentid": "t_6",
            "topic": "Intra - Of Biogeochemical Cycle, Carbon Cycle, Phosphorus Cycle, Ecosystem Services (ES09 To ES12)",
            "direction": "right"
        },
        {
            "id": "sub_223",
            "parentid": "t_6",
            "topic": "Function Of Ecosystem - Biogeochemical Cycle - Introduction",
            "direction": "right"
        },
        {
            "id": "sub_224",
            "parentid": "t_6",
            "topic": "Ecological Pyramids - Standing Crop",
            "direction": "right"
        },
        {
            "id": "sub_225",
            "parentid": "t_6",
            "topic": "Intra - Of Light, Temperature, Response To Abiotic Factors (ES14 To ES18)",
            "direction": "right"
        },
        {
            "id": "sub_226",
            "parentid": "t_6",
            "topic": "Phosphorus Cycle",
            "direction": "right"
        },
        {
            "id": "sub_227",
            "parentid": "t_6",
            "topic": "Abiotic Factors -Temperature, Morphological And Behavioural Adaptations, Physiological Adaptations",
            "direction": "right"
        },
        {
            "id": "sub_228",
            "parentid": "t_6",
            "topic": "Terrestrial Biomes",
            "direction": "right"
        },
        {
            "id": "sub_229",
            "parentid": "t_6",
            "topic": "Function Of Ecosystem - Productivity",
            "direction": "right"
        },
        {
            "id": "sub_230",
            "parentid": "t_6",
            "topic": "Ecosystem Introduction (Structural And Functional Units)",
            "direction": "right"
        },
        {
            "id": "sub_231",
            "parentid": "t_6",
            "topic": "Abiotic Factors - Light",
            "direction": "right"
        },
        {
            "id": "sub_232",
            "parentid": "t_4",
            "topic": "Inter- Complete Molecular (MI01 To MI20)",
            "direction": "right"
        },
        {
            "id": "sub_233",
            "parentid": "t_4",
            "topic": "Intra - Regulation To DNA Fingerprinting (MI16 To MI19)",
            "direction": "right"
        },
        {
            "id": "sub_234",
            "parentid": "t_4",
            "topic": "Search Of Genetic Material",
            "direction": "right"
        },
        {
            "id": "sub_235",
            "parentid": "t_4",
            "topic": "Mutations, Gene Mutational Disorders And Chromosomal Disorders",
            "direction": "right"
        },
        {
            "id": "sub_236",
            "parentid": "t_4",
            "topic": "Intra - Up To Translation (MI08 To MI14)",
            "direction": "right"
        },
        {
            "id": "sub_237",
            "parentid": "t_4",
            "topic": "Regulation Of Gene Expression",
            "direction": "right"
        },
        {
            "id": "sub_238",
            "parentid": "t_4",
            "topic": "Translation",
            "direction": "right"
        },
        {
            "id": "sub_239",
            "parentid": "t_4",
            "topic": "Central Dogma, Wobble Hypothesis",
            "direction": "right"
        },
        {
            "id": "sub_240",
            "parentid": "t_4",
            "topic": "DNA Structure And Features",
            "direction": "right"
        },
        {
            "id": "sub_241",
            "parentid": "t_4",
            "topic": "Properties Of Genetic Material",
            "direction": "right"
        },
        {
            "id": "sub_242",
            "parentid": "t_4",
            "topic": "Nucleotides",
            "direction": "right"
        },
        {
            "id": "sub_243",
            "parentid": "t_4",
            "topic": "DNA Replication",
            "direction": "right"
        },
        {
            "id": "sub_244",
            "parentid": "t_4",
            "topic": "DNA Fingerprinting",
            "direction": "right"
        },
        {
            "id": "sub_245",
            "parentid": "t_4",
            "topic": "Intra - Up To Replication (MI01 To MI06)",
            "direction": "right"
        },
        {
            "id": "sub_246",
            "parentid": "t_4",
            "topic": "Genetic Code",
            "direction": "right"
        },
        {
            "id": "sub_247",
            "parentid": "t_4",
            "topic": "DNA Packaging",
            "direction": "right"
        },
        {
            "id": "sub_248",
            "parentid": "t_4",
            "topic": "Transcription",
            "direction": "right"
        },
        {
            "id": "sub_249",
            "parentid": "t_4",
            "topic": "RNA, Types Of RNA",
            "direction": "right"
        },
        {
            "id": "sub_250",
            "parentid": "t_4",
            "topic": "Split Gene",
            "direction": "right"
        },
        {
            "id": "sub_251",
            "parentid": "t_4",
            "topic": "RNA World",
            "direction": "right"
        },
        {
            "id": "sub_252",
            "parentid": "t_4",
            "topic": "H.G.P.",
            "direction": "right"
        },
        {
            "id": "t_10",
            "parentid": "st_2",
            "topic": "Evolution",
            "direction": "left"
        },
        {
            "id": "sub_254",
            "parentid": "t_10",
            "topic": "Introduction, Origin Of Universe (Bigbang Theory)",
            "direction": "right"
        },
        {
            "id": "sub_255",
            "parentid": "t_10",
            "topic": "Lamarckism, Darwinism",
            "direction": "right"
        },
        {
            "id": "sub_256",
            "parentid": "t_10",
            "topic": "Fossils, Geological Time Scale, Brief Account Of Evolution",
            "direction": "right"
        },
        {
            "id": "sub_257",
            "parentid": "t_10",
            "topic": "Based On Embryology",
            "direction": "right"
        },
        {
            "id": "sub_258",
            "parentid": "t_10",
            "topic": "Based On Vestigial Organs",
            "direction": "right"
        },
        {
            "id": "sub_259",
            "parentid": "t_10",
            "topic": "Neo Darwinism (Up To Bottleneck Effect)",
            "direction": "right"
        },
        {
            "id": "sub_260",
            "parentid": "t_10",
            "topic": "Speciation",
            "direction": "right"
        },
        {
            "id": "sub_261",
            "parentid": "t_10",
            "topic": "Artificial Selection",
            "direction": "right"
        },
        {
            "id": "sub_262",
            "parentid": "t_10",
            "topic": "Inter - (EV01 To EV07,EV09 To EV24)",
            "direction": "right"
        },
        {
            "id": "sub_263",
            "parentid": "t_10",
            "topic": "Evolution Of Man",
            "direction": "right"
        },
        {
            "id": "sub_264",
            "parentid": "t_10",
            "topic": "Intra - All Above Theories (EV01 To EV03)",
            "direction": "right"
        },
        {
            "id": "sub_265",
            "parentid": "t_10",
            "topic": "Mutation Theory",
            "direction": "right"
        },
        {
            "id": "sub_266",
            "parentid": "t_10",
            "topic": "Hardy Weinberg Principle",
            "direction": "right"
        },
        {
            "id": "sub_267",
            "parentid": "t_10",
            "topic": "Based On Biochemistry",
            "direction": "right"
        },
        {
            "id": "sub_268",
            "parentid": "t_10",
            "topic": "Mimicry, Types Of Evolution",
            "direction": "right"
        },
        {
            "id": "sub_269",
            "parentid": "t_10",
            "topic": "Theories About Origin Of Life (Up To Biogenesis)",
            "direction": "right"
        },
        {
            "id": "sub_270",
            "parentid": "t_10",
            "topic": "Reproductive Isolation",
            "direction": "right"
        },
        {
            "id": "sub_271",
            "parentid": "t_10",
            "topic": "Darwin Finches, Australian Marsupials And Placental Mammals",
            "direction": "right"
        },
        {
            "id": "sub_272",
            "parentid": "t_10",
            "topic": "Types Of Natural Selection, Examples Of Natural Selection",
            "direction": "right"
        },
        {
            "id": "sub_273",
            "parentid": "t_10",
            "topic": "Anatomy - Morphology (Homology - Analogy), Divergent, Convergent And Parallel Evolution",
            "direction": "right"
        },
        {
            "id": "sub_274",
            "parentid": "t_10",
            "topic": "Genetic Basis Of Adaptation Natural Selection",
            "direction": "right"
        },
        {
            "id": "sub_275",
            "parentid": "t_10",
            "topic": "Based On Biogeographical Distribution",
            "direction": "right"
        },
        {
            "id": "sub_276",
            "parentid": "t_10",
            "topic": "All Data Based Questions (NCERT Data)",
            "direction": "right"
        },
        {
            "id": "sub_277",
            "parentid": "t_10",
            "topic": "Oparin-Haldane Theory And Urey - Miller Experiment",
            "direction": "right"
        },
        {
            "id": "sub_278",
            "parentid": "t_10",
            "topic": "Intra - All These Evidences (EV05 To EV07)",
            "direction": "right"
        },
        {
            "id": "sub_279",
            "parentid": "t_1",
            "topic": "Cloning, Vectors",
            "direction": "right"
        },
        {
            "id": "sub_280",
            "parentid": "t_1",
            "topic": "Product Obtaining And Downstream Processing",
            "direction": "right"
        },
        {
            "id": "sub_281",
            "parentid": "t_1",
            "topic": "Introduction",
            "direction": "right"
        },
        {
            "id": "sub_282",
            "parentid": "t_1",
            "topic": "P.C.R.",
            "direction": "right"
        },
        {
            "id": "sub_283",
            "parentid": "t_1",
            "topic": "Inter (BT01 To BT12)",
            "direction": "right"
        },
        {
            "id": "sub_284",
            "parentid": "t_1",
            "topic": "Intra (Tools Of Biotech) (BT01 To BT04)",
            "direction": "right"
        },
        {
            "id": "sub_285",
            "parentid": "t_1",
            "topic": "Gel Electrophoresis",
            "direction": "right"
        },
        {
            "id": "sub_286",
            "parentid": "t_1",
            "topic": "Principles Of Biotechnology, Tools Of Recombinant DNA Technology, Restriction (All Enzymes) Endonucleases",
            "direction": "right"
        },
        {
            "id": "sub_287",
            "parentid": "t_1",
            "topic": "Intra (Processes Of Biotech.) (BT06 To BT11)",
            "direction": "right"
        },
        {
            "id": "sub_288",
            "parentid": "t_1",
            "topic": "r-Dna Formation, Transfer In Host Cell",
            "direction": "right"
        },
        {
            "id": "sub_289",
            "parentid": "t_1",
            "topic": "Selection Of Recombinant",
            "direction": "right"
        },
        {
            "id": "sub_290",
            "parentid": "t_1",
            "topic": "Passenger DNA And Host Cell",
            "direction": "right"
        },
        {
            "id": "sub_291",
            "parentid": "t_1",
            "topic": "Isolation And Cutting Of DNA",
            "direction": "right"
        },
        {
            "id": "sub_292",
            "parentid": "t_2",
            "topic": "Intra (BA04 To BA05)",
            "direction": "right"
        },
        {
            "id": "sub_293",
            "parentid": "t_2",
            "topic": "Ethical Issues",
            "direction": "right"
        },
        {
            "id": "sub_294",
            "parentid": "t_2",
            "topic": "Intra (BA01 To BA02)",
            "direction": "right"
        },
        {
            "id": "sub_295",
            "parentid": "t_2",
            "topic": "Biotechnological Applications In Medicine (Genetically Engineered Insulin, Gene Therapy, Molecular Diagnosis",
            "direction": "right"
        },
        {
            "id": "sub_296",
            "parentid": "t_2",
            "topic": "Transgenic Animals",
            "direction": "right"
        },
        {
            "id": "sub_297",
            "parentid": "t_2",
            "topic": "Biotechnological Applications In Agriculture,Tissue Culture",
            "direction": "right"
        },
        {
            "id": "sub_298",
            "parentid": "t_2",
            "topic": "Inter (BA01 To BA06)",
            "direction": "right"
        },
        {
            "id": "t_11",
            "parentid": "st_5",
            "topic": "Reproductive Health",
            "direction": "left"
        },
        {
            "id": "sub_300",
            "parentid": "t_11",
            "topic": "STDS",
            "direction": "right"
        },
        {
            "id": "sub_301",
            "parentid": "t_11",
            "topic": "Intra RH08- RH09",
            "direction": "right"
        },
        {
            "id": "sub_302",
            "parentid": "t_11",
            "topic": "Birth Control Surgical Contraceptive Methods",
            "direction": "right"
        },
        {
            "id": "sub_303",
            "parentid": "t_11",
            "topic": "Population Stabilisation",
            "direction": "right"
        },
        {
            "id": "sub_304",
            "parentid": "t_11",
            "topic": "Introduction, Problems And Strategies",
            "direction": "right"
        },
        {
            "id": "sub_305",
            "parentid": "t_11",
            "topic": "Intra RH01-RH03",
            "direction": "right"
        },
        {
            "id": "sub_306",
            "parentid": "t_11",
            "topic": "MTP",
            "direction": "right"
        },
        {
            "id": "sub_307",
            "parentid": "t_11",
            "topic": "Inter - (RH01 To RH10)",
            "direction": "right"
        },
        {
            "id": "sub_308",
            "parentid": "t_11",
            "topic": "Intra RH05- RH06",
            "direction": "right"
        },
        {
            "id": "sub_309",
            "parentid": "t_11",
            "topic": "Infertility (Art- Assisted Reproductive Technologies)",
            "direction": "right"
        },
        {
            "id": "sub_310",
            "parentid": "t_11",
            "topic": "Birth Control Temporary Contraceptive Methods",
            "direction": "right"
        },
        {
            "id": "sub_311",
            "parentid": "t_11",
            "topic": "Amniocentesis",
            "direction": "right"
        },
        {
            "id": "t_12",
            "parentid": "st_5",
            "topic": "Human Reproduction",
            "direction": "left"
        },
        {
            "id": "sub_313",
            "parentid": "t_12",
            "topic": "Oogenesis",
            "direction": "right"
        },
        {
            "id": "sub_314",
            "parentid": "t_12",
            "topic": "Structure Of Human Egg",
            "direction": "right"
        },
        {
            "id": "sub_315",
            "parentid": "t_12",
            "topic": "Fertilisation",
            "direction": "right"
        },
        {
            "id": "sub_316",
            "parentid": "t_12",
            "topic": "The Male Reproductive System -Histology Of Seminiferous Tubule",
            "direction": "right"
        },
        {
            "id": "sub_317",
            "parentid": "t_12",
            "topic": "General Stages Of Embryonic Development (Morula, Blastula, Implantation And Gastrula)",
            "direction": "right"
        },
        {
            "id": "sub_318",
            "parentid": "t_12",
            "topic": "Inter (HR01 - HR29)",
            "direction": "right"
        },
        {
            "id": "sub_319",
            "parentid": "t_12",
            "topic": "The Male Reproductive System -Penis",
            "direction": "right"
        },
        {
            "id": "sub_320",
            "parentid": "t_12",
            "topic": "Internal Structure Of Ovary And Follicular Development",
            "direction": "right"
        },
        {
            "id": "sub_321",
            "parentid": "t_12",
            "topic": "Introduction",
            "direction": "right"
        },
        {
            "id": "sub_322",
            "parentid": "t_12",
            "topic": "The Female Reproductive System - Female Accessory Ducts (Oviduct, Uterus And Vagina)",
            "direction": "right"
        },
        {
            "id": "sub_323",
            "parentid": "t_12",
            "topic": "The Male Reproductive System -Male Accessory Ducts (Rete Testis, Vasa Efferentia, Epididymis And Vas Deferens)",
            "direction": "right"
        },
        {
            "id": "sub_324",
            "parentid": "t_12",
            "topic": "Intra (HR14- HR19)",
            "direction": "right"
        },
        {
            "id": "sub_325",
            "parentid": "t_12",
            "topic": "Placenta",
            "direction": "right"
        },
        {
            "id": "sub_326",
            "parentid": "t_12",
            "topic": "The Female Reproductive System -Female External Genitalia (Mons Pubis, Labia Majora, Labia Minora, Hymen And Clitoris)",
            "direction": "right"
        },
        {
            "id": "sub_327",
            "parentid": "t_12",
            "topic": "Intra (HR21- HR27)",
            "direction": "right"
        },
        {
            "id": "sub_328",
            "parentid": "t_12",
            "topic": "Spermatogenesis",
            "direction": "right"
        },
        {
            "id": "sub_329",
            "parentid": "t_12",
            "topic": "Intra (HR10- HR12)",
            "direction": "right"
        },
        {
            "id": "sub_330",
            "parentid": "t_12",
            "topic": "Cleavage",
            "direction": "right"
        },
        {
            "id": "sub_331",
            "parentid": "t_12",
            "topic": "The Male Reproductive System -Hormones Of Male Reproductive System",
            "direction": "right"
        },
        {
            "id": "sub_332",
            "parentid": "t_12",
            "topic": "The Male Reproductive System -Structure Of Testis",
            "direction": "right"
        },
        {
            "id": "sub_333",
            "parentid": "t_12",
            "topic": "Intra (HR01- HR08)",
            "direction": "right"
        },
        {
            "id": "sub_334",
            "parentid": "t_12",
            "topic": "Summary Of Developmental Stages In Human",
            "direction": "right"
        },
        {
            "id": "sub_335",
            "parentid": "t_12",
            "topic": "Structure Of Sperm",
            "direction": "right"
        },
        {
            "id": "sub_336",
            "parentid": "t_12",
            "topic": "The Male Reproductive System -Male Accessory Glands (Seminal Vesicles , Prostate And Bulbourethral Glands)",
            "direction": "right"
        },
        {
            "id": "sub_337",
            "parentid": "t_12",
            "topic": "Extra Embryonic Membranes (Chorion, Amnion, Yolk Sac And Allantois)",
            "direction": "right"
        },
        {
            "id": "sub_338",
            "parentid": "t_12",
            "topic": "The Male Reproductive System -Structure Of Scrotum",
            "direction": "right"
        },
        {
            "id": "sub_339",
            "parentid": "t_12",
            "topic": "Parturition",
            "direction": "right"
        },
        {
            "id": "sub_340",
            "parentid": "t_12",
            "topic": "Menstrual Cycle And Menstrual Hygiene",
            "direction": "right"
        },
        {
            "id": "sub_341",
            "parentid": "t_12",
            "topic": "The Female Reproductive System -Mammary Gland And Lactation",
            "direction": "right"
        },
        {
            "id": "t_13",
            "parentid": "st_3",
            "topic": "Human Health And Disease",
            "direction": "left"
        },
        {
            "id": "sub_343",
            "parentid": "t_13",
            "topic": "Inter - (HD01 To HD19)",
            "direction": "right"
        },
        {
            "id": "sub_344",
            "parentid": "t_13",
            "topic": "Innate Immunity",
            "direction": "right"
        },
        {
            "id": "sub_345",
            "parentid": "t_13",
            "topic": "Effects Of Drug, Alcohol Abuse, Prevention And Control",
            "direction": "right"
        },
        {
            "id": "sub_346",
            "parentid": "t_13",
            "topic": "Adolescence, Addiction And Dependence",
            "direction": "right"
        },
        {
            "id": "sub_347",
            "parentid": "t_13",
            "topic": "Viral Diseases",
            "direction": "right"
        },
        {
            "id": "sub_348",
            "parentid": "t_13",
            "topic": "Intra - (HD18 To HD23)",
            "direction": "right"
        },
        {
            "id": "sub_349",
            "parentid": "t_13",
            "topic": "Allergy",
            "direction": "right"
        },
        {
            "id": "sub_350",
            "parentid": "t_13",
            "topic": "Grafting (HLA System)",
            "direction": "right"
        },
        {
            "id": "sub_351",
            "parentid": "t_13",
            "topic": "Intra - Intro., Innate And Acquired Immunity, Vaccination , Grafting (HD01 To HD05)",
            "direction": "right"
        },
        {
            "id": "sub_352",
            "parentid": "t_13",
            "topic": "Intra - (HD07 To HD12, HD14 To HD19)",
            "direction": "right"
        },
        {
            "id": "sub_353",
            "parentid": "t_13",
            "topic": "Smoking And Alcohol",
            "direction": "right"
        },
        {
            "id": "sub_354",
            "parentid": "t_13",
            "topic": "Introduction",
            "direction": "right"
        },
        {
            "id": "sub_355",
            "parentid": "t_13",
            "topic": "Protozoan Diseases",
            "direction": "right"
        },
        {
            "id": "sub_356",
            "parentid": "t_13",
            "topic": "Acquired Immunity, Immune System In The Body",
            "direction": "right"
        },
        {
            "id": "sub_357",
            "parentid": "t_13",
            "topic": "AIDS",
            "direction": "right"
        },
        {
            "id": "sub_358",
            "parentid": "t_13",
            "topic": "Helminthic And Fungal Diseases (Prevention And Control Of Infectious Diseases)",
            "direction": "right"
        },
        {
            "id": "sub_359",
            "parentid": "t_13",
            "topic": "Bacterial Diseases",
            "direction": "right"
        },
        {
            "id": "sub_360",
            "parentid": "t_13",
            "topic": "Autoimmune Disorders And Immunotherapy",
            "direction": "right"
        },
        {
            "id": "sub_361",
            "parentid": "t_13",
            "topic": "Cancer",
            "direction": "right"
        },
        {
            "id": "sub_362",
            "parentid": "t_13",
            "topic": "Drug And Alcohol Abuse",
            "direction": "right"
        },
        {
            "id": "sub_363",
            "parentid": "t_13",
            "topic": "Vaccination And Immunisation",
            "direction": "right"
        },
        {
            "id": "t_14",
            "parentid": "st_6",
            "topic": "Experimental Skills Xii",
            "direction": "right"
        },
        {
            "id": "sub_365",
            "parentid": "t_14",
            "topic": "Identification Of Diode, LED, Resistor, A Capacitor From A Mixed Collection Of Such Items",
            "direction": "right"
        },
        {
            "id": "sub_366",
            "parentid": "t_14",
            "topic": "Characteristic Curves Of A p-n Junction Diode In Forward And Reverse Bias",
            "direction": "right"
        },
        {
            "id": "sub_367",
            "parentid": "t_14",
            "topic": "The Plot Of The Angle Of Deviation Vs Angle Of Incidence For A Triangular Prism",
            "direction": "right"
        },
        {
            "id": "sub_368",
            "parentid": "t_14",
            "topic": "The Resistivity Of The Material Of A Given Wire Using A Metre Bridge",
            "direction": "right"
        },
        {
            "id": "sub_369",
            "parentid": "t_14",
            "topic": "The Resistance Of A Given Wire Using Ohm's Law",
            "direction": "right"
        },
        {
            "id": "sub_370",
            "parentid": "t_14",
            "topic": "Characteristic Curves Of A Zener Diode And Finding Reverse Breakdown Voltage.",
            "direction": "right"
        },
        {
            "id": "sub_371",
            "parentid": "t_14",
            "topic": "Resistance And Figure Of Merit Of A Galvanometer By Half Deflection Method.",
            "direction": "right"
        },
        {
            "id": "sub_372",
            "parentid": "t_14",
            "topic": "The Focal Length Of Convex Mirror Using The Parallax Method",
            "direction": "right"
        },
        {
            "id": "sub_373",
            "parentid": "t_14",
            "topic": "The Focal Length Of Convex Lens, Using The Parallax Method",
            "direction": "right"
        },
        {
            "id": "sub_374",
            "parentid": "t_14",
            "topic": "Refractive Index Of A Glass Slab Using A Travelling Microscope.",
            "direction": "right"
        },
        {
            "id": "sub_375",
            "parentid": "t_14",
            "topic": "The Focal Length Of Concave Mirror Using The Parallax Method",
            "direction": "right"
        },
        {
            "id": "t_15",
            "parentid": "st_7",
            "topic": "Capacitor",
            "direction": "left"
        },
        {
            "id": "sub_377",
            "parentid": "t_15",
            "topic": "Circuit Analysis Only With Air Capacitors (No Resistors)",
            "direction": "right"
        },
        {
            "id": "sub_378",
            "parentid": "t_15",
            "topic": "KCL, KVL In Capacitor",
            "direction": "right"
        },
        {
            "id": "sub_379",
            "parentid": "t_15",
            "topic": "RC Circuit At t=0 And Steady State",
            "direction": "right"
        },
        {
            "id": "sub_380",
            "parentid": "t_15",
            "topic": "Mixing Of Drops",
            "direction": "right"
        },
        {
            "id": "sub_381",
            "parentid": "t_15",
            "topic": "Work Done By Battery And Energy Stored In A Capacitor",
            "direction": "right"
        },
        {
            "id": "sub_382",
            "parentid": "t_15",
            "topic": "Cylindrical Capacitors",
            "direction": "right"
        },
        {
            "id": "sub_383",
            "parentid": "t_15",
            "topic": "Polarization And Equivalent Capacitance With Dielectrics",
            "direction": "right"
        },
        {
            "id": "sub_384",
            "parentid": "t_15",
            "topic": "Charging Of A Capacitor",
            "direction": "right"
        },
        {
            "id": "sub_385",
            "parentid": "t_15",
            "topic": "Circuit Analysis With Capacitors Involving Switches And Sharing Of Charges",
            "direction": "right"
        },
        {
            "id": "sub_386",
            "parentid": "t_15",
            "topic": "Based On Breakdown Strength Of Capacitor",
            "direction": "right"
        },
        {
            "id": "sub_387",
            "parentid": "t_15",
            "topic": "Combination Of Capacitors (Series, Parallel, Mixed, Infinite Ladder)",
            "direction": "right"
        },
        {
            "id": "sub_388",
            "parentid": "t_15",
            "topic": "Combination Of Capacitors (Multiple Plate Setup)",
            "direction": "right"
        },
        {
            "id": "sub_389",
            "parentid": "t_15",
            "topic": "Miscellaneous",
            "direction": "right"
        },
        {
            "id": "sub_390",
            "parentid": "t_15",
            "topic": "Parallel Plate Capacitor (C, Q, V, Force b/w Plates, Energy Density,Electric Field)",
            "direction": "right"
        },
        {
            "id": "sub_391",
            "parentid": "t_15",
            "topic": "Circuit Analysis With Capacitors Having Dielectrics (Dielectric Insert/Out) [Q,C,E,U,V]",
            "direction": "right"
        },
        {
            "id": "sub_392",
            "parentid": "t_15",
            "topic": "Concept Of Capacity And Capacitance",
            "direction": "right"
        },
        {
            "id": "sub_393",
            "parentid": "t_15",
            "topic": "Discharging Of A Capacitor",
            "direction": "right"
        },
        {
            "id": "sub_394",
            "parentid": "t_15",
            "topic": "Spherical Capacitors",
            "direction": "right"
        },
        {
            "id": "t_16",
            "parentid": "st_7",
            "topic": "Electromagnetic Induction",
            "direction": "left"
        },
        {
            "id": "sub_396",
            "parentid": "t_16",
            "topic": "Eddy Currents",
            "direction": "right"
        },
        {
            "id": "sub_397",
            "parentid": "t_16",
            "topic": "Combination Of Inductors",
            "direction": "right"
        },
        {
            "id": "sub_398",
            "parentid": "t_16",
            "topic": "R-L DC Circuit Current Growth And Decay",
            "direction": "right"
        },
        {
            "id": "sub_399",
            "parentid": "t_16",
            "topic": "Circuit Based Questions On V = Ldi/dt",
            "direction": "right"
        },
        {
            "id": "sub_400",
            "parentid": "t_16",
            "topic": "Energy Stored In An Inductor And Energy Density",
            "direction": "right"
        },
        {
            "id": "sub_401",
            "parentid": "t_16",
            "topic": "Mutual Induction And Coefficient Of Mutual Induction",
            "direction": "right"
        },
        {
            "id": "sub_402",
            "parentid": "t_16",
            "topic": "Faraday's Law And Lenz's Law (Direction Based)",
            "direction": "right"
        },
        {
            "id": "sub_403",
            "parentid": "t_16",
            "topic": "Induced Parameters (EMF, Charge, Current, Heat)",
            "direction": "right"
        },
        {
            "id": "sub_404",
            "parentid": "t_16",
            "topic": "Motional EMF (Linear)",
            "direction": "right"
        },
        {
            "id": "sub_405",
            "parentid": "t_16",
            "topic": "DC Motor",
            "direction": "right"
        },
        {
            "id": "sub_406",
            "parentid": "t_16",
            "topic": "No EMI Cases",
            "direction": "right"
        },
        {
            "id": "sub_407",
            "parentid": "t_16",
            "topic": "Self-Induction And Self-Inductance Of Coil/Solenoid/Toroid",
            "direction": "right"
        },
        {
            "id": "sub_408",
            "parentid": "t_16",
            "topic": "Transformers",
            "direction": "right"
        },
        {
            "id": "sub_409",
            "parentid": "t_16",
            "topic": "Miscellaneous",
            "direction": "right"
        },
        {
            "id": "sub_410",
            "parentid": "t_16",
            "topic": "Induced Electric Field",
            "direction": "right"
        },
        {
            "id": "sub_411",
            "parentid": "t_16",
            "topic": "Magnetic Flux",
            "direction": "right"
        },
        {
            "id": "sub_412",
            "parentid": "t_16",
            "topic": "R-L At t= 0 And At Steady State",
            "direction": "right"
        },
        {
            "id": "sub_413",
            "parentid": "t_16",
            "topic": "Motional EMF (Rotational)",
            "direction": "right"
        },
        {
            "id": "sub_414",
            "parentid": "t_16",
            "topic": "AC Generator/Periodic EMI",
            "direction": "right"
        },
        {
            "id": "t_17",
            "parentid": "st_7",
            "topic": "Magnetic Effect Of Current And Magnetism",
            "direction": "left"
        },
        {
            "id": "sub_416",
            "parentid": "t_17",
            "topic": "Force On A Current-Carrying Loop In Uniform Field",
            "direction": "right"
        },
        {
            "id": "sub_417",
            "parentid": "t_17",
            "topic": "Ampere's Law",
            "direction": "right"
        },
        {
            "id": "sub_418",
            "parentid": "t_17",
            "topic": "Moving Coil Galvanometer",
            "direction": "right"
        },
        {
            "id": "sub_419",
            "parentid": "t_17",
            "topic": "Earth's Magnetic Field (Geomagnetism)",
            "direction": "right"
        },
        {
            "id": "sub_420",
            "parentid": "t_17",
            "topic": "Magnetic Dipole Moment (Current Loop)",
            "direction": "right"
        },
        {
            "id": "sub_421",
            "parentid": "t_17",
            "topic": "Magnetic Hysteresis And Electromagnet",
            "direction": "right"
        },
        {
            "id": "sub_422",
            "parentid": "t_17",
            "topic": "Magnetic Force On Moving Charge",
            "direction": "right"
        },
        {
            "id": "sub_423",
            "parentid": "t_17",
            "topic": "Cyclotron",
            "direction": "right"
        },
        {
            "id": "sub_424",
            "parentid": "t_17",
            "topic": "Other Form Of Ampere's Law And Relation Between B And H",
            "direction": "right"
        },
        {
            "id": "sub_425",
            "parentid": "t_17",
            "topic": "Magnetic Field : Introduction",
            "direction": "right"
        },
        {
            "id": "sub_426",
            "parentid": "t_17",
            "topic": "Application Of Biot-Savart's Law For Circular Current (Only At Centre) And Combinations",
            "direction": "right"
        },
        {
            "id": "sub_427",
            "parentid": "t_17",
            "topic": "MF Due To Solenoid",
            "direction": "right"
        },
        {
            "id": "sub_428",
            "parentid": "t_17",
            "topic": "Magnetic Field Lines",
            "direction": "right"
        },
        {
            "id": "sub_429",
            "parentid": "t_17",
            "topic": "Application Of Biot-Savart's Law For Combination Of Straight Wires / Circular Arc",
            "direction": "right"
        },
        {
            "id": "sub_430",
            "parentid": "t_17",
            "topic": "Biot-Savart Law And Magnetic Field Due To A Moving Charge",
            "direction": "right"
        },
        {
            "id": "sub_431",
            "parentid": "t_17",
            "topic": "Motion Of Charged Particle In Limited Magnetic Field",
            "direction": "right"
        },
        {
            "id": "sub_432",
            "parentid": "t_17",
            "topic": "Force On A Wire/Loop In Non-Uniform Field",
            "direction": "right"
        },
        {
            "id": "sub_433",
            "parentid": "t_17",
            "topic": "Magnetization And Magnetizing Intensity (B, H, I)",
            "direction": "right"
        },
        {
            "id": "sub_434",
            "parentid": "t_17",
            "topic": "Application Of Geomagnetism (Vibration Magnetometer)",
            "direction": "right"
        },
        {
            "id": "sub_435",
            "parentid": "t_17",
            "topic": "Relation Between M And L",
            "direction": "right"
        },
        {
            "id": "sub_436",
            "parentid": "t_17",
            "topic": "Magnetic Dipole Moment (Bar Magnet)",
            "direction": "right"
        },
        {
            "id": "sub_437",
            "parentid": "t_17",
            "topic": "Motion Of Charged Particle In Magnetic Field (Helical)",
            "direction": "right"
        },
        {
            "id": "sub_438",
            "parentid": "t_17",
            "topic": "Application Of Geomagnetism (Tangent Galvanometer And Neutral Point)",
            "direction": "right"
        },
        {
            "id": "sub_439",
            "parentid": "t_17",
            "topic": "Force On A Current-Carrying Conductor In Uniform Field",
            "direction": "right"
        },
        {
            "id": "sub_440",
            "parentid": "t_17",
            "topic": "MF Due To Toroid",
            "direction": "right"
        },
        {
            "id": "sub_441",
            "parentid": "t_17",
            "topic": "Force Between Two Current-Carrying Parallel Wires",
            "direction": "right"
        },
        {
            "id": "sub_442",
            "parentid": "t_17",
            "topic": "Field Due To Magnetic Dipole / Bar Magnet",
            "direction": "right"
        },
        {
            "id": "sub_443",
            "parentid": "t_17",
            "topic": "Magnetic Properties Of Materials And Magnetic Shielding [Para, Dia, Ferro, Curie-Weiss Law]",
            "direction": "right"
        },
        {
            "id": "sub_444",
            "parentid": "t_17",
            "topic": "Application Of Biot-Savart's Law For Straight Current",
            "direction": "right"
        },
        {
            "id": "sub_445",
            "parentid": "t_17",
            "topic": "MF Due To Current Carrying Cylindrical Conductor",
            "direction": "right"
        },
        {
            "id": "sub_446",
            "parentid": "t_17",
            "topic": "Magnetic Field On Axis Of A Coil And Helmholtz Coils",
            "direction": "right"
        },
        {
            "id": "sub_447",
            "parentid": "t_17",
            "topic": "Motion Of Charged Particle In Magnetic Field (St Line, Circular)",
            "direction": "right"
        },
        {
            "id": "sub_448",
            "parentid": "t_17",
            "topic": "Atomic Magnetism",
            "direction": "right"
        },
        {
            "id": "sub_449",
            "parentid": "t_17",
            "topic": "Magnetic Dipole In External Non-Uniform Magnetic Field (Force, Torque)",
            "direction": "right"
        },
        {
            "id": "sub_450",
            "parentid": "t_17",
            "topic": "Magnetic Dipole In External Uniform Magnetic Field (Force, Torque, Work, PE)",
            "direction": "right"
        },
        {
            "id": "sub_451",
            "parentid": "t_17",
            "topic": "Lorentz Force And Velocity Selector",
            "direction": "right"
        },
        {
            "id": "sub_452",
            "parentid": "t_17",
            "topic": "Miscellaneous",
            "direction": "right"
        },
        {
            "id": "t_18",
            "parentid": "st_7",
            "topic": "Alternating Current",
            "direction": "left"
        },
        {
            "id": "sub_454",
            "parentid": "t_18",
            "topic": "Simple Circuits - Only Capacitive",
            "direction": "right"
        },
        {
            "id": "sub_455",
            "parentid": "t_18",
            "topic": "LCR Series Circuit (Without Resonance)",
            "direction": "right"
        },
        {
            "id": "sub_456",
            "parentid": "t_18",
            "topic": "Half Power Frequency, Bandwidth, Quality Factor",
            "direction": "right"
        },
        {
            "id": "sub_457",
            "parentid": "t_18",
            "topic": "Mechanical Equivalent In LCR Circuit",
            "direction": "right"
        },
        {
            "id": "sub_458",
            "parentid": "t_18",
            "topic": "L-C Circuit And LC Oscillations",
            "direction": "right"
        },
        {
            "id": "sub_459",
            "parentid": "t_18",
            "topic": "Simple Circuits - Only Inductive",
            "direction": "right"
        },
        {
            "id": "sub_460",
            "parentid": "t_18",
            "topic": "Peak, Rms And Average Values And Measurement Of AC",
            "direction": "right"
        },
        {
            "id": "sub_461",
            "parentid": "t_18",
            "topic": "Choke Coil",
            "direction": "right"
        },
        {
            "id": "sub_462",
            "parentid": "t_18",
            "topic": "L-R Circuit",
            "direction": "right"
        },
        {
            "id": "sub_463",
            "parentid": "t_18",
            "topic": "Resonance In LCR Series",
            "direction": "right"
        },
        {
            "id": "sub_464",
            "parentid": "t_18",
            "topic": "Power In AC Circuits, Power Factor And Wattless Current",
            "direction": "right"
        },
        {
            "id": "sub_465",
            "parentid": "t_18",
            "topic": "Definition And Properties Of AC",
            "direction": "right"
        },
        {
            "id": "sub_466",
            "parentid": "t_18",
            "topic": "C-R Circuit",
            "direction": "right"
        },
        {
            "id": "sub_467",
            "parentid": "t_18",
            "topic": "Simple Circuits - Only Resistive",
            "direction": "right"
        },
        {
            "id": "sub_468",
            "parentid": "t_18",
            "topic": "Miscellaneous",
            "direction": "right"
        },
        {
            "id": "sub_469",
            "parentid": "t_18",
            "topic": "LCR Parallel Circuit",
            "direction": "right"
        },
        {
            "id": "t_19",
            "parentid": "st_7",
            "topic": "Electromagnetic Waves",
            "direction": "left"
        },
        {
            "id": "sub_471",
            "parentid": "t_19",
            "topic": "Basics Of Electromagnetic Waves",
            "direction": "right"
        },
        {
            "id": "sub_472",
            "parentid": "t_19",
            "topic": "Maxwell Equations And Hertz's Experiment",
            "direction": "right"
        },
        {
            "id": "sub_473",
            "parentid": "t_19",
            "topic": "Miscellaneous",
            "direction": "right"
        },
        {
            "id": "sub_474",
            "parentid": "t_19",
            "topic": "Poynting Vector And Intensity Of EMW",
            "direction": "right"
        },
        {
            "id": "sub_475",
            "parentid": "t_19",
            "topic": "Energy Density Of Electromagnetic Field",
            "direction": "right"
        },
        {
            "id": "sub_476",
            "parentid": "t_19",
            "topic": "Electromagnetic Spectrum",
            "direction": "right"
        },
        {
            "id": "sub_477",
            "parentid": "t_19",
            "topic": "Momentum And Radiation Pressure",
            "direction": "right"
        },
        {
            "id": "sub_478",
            "parentid": "t_19",
            "topic": "Displacement Current",
            "direction": "right"
        },
        {
            "id": "t_20",
            "parentid": "st_7",
            "topic": "Electrostatics",
            "direction": "left"
        },
        {
            "id": "sub_480",
            "parentid": "t_20",
            "topic": "Electric Potential Due To Dipole",
            "direction": "right"
        },
        {
            "id": "sub_481",
            "parentid": "t_20",
            "topic": "Earthing Of Conductors",
            "direction": "right"
        },
        {
            "id": "sub_482",
            "parentid": "t_20",
            "topic": "Electric Field Due To Linear Charge Distribution",
            "direction": "right"
        },
        {
            "id": "sub_483",
            "parentid": "t_20",
            "topic": "Electric Flux",
            "direction": "right"
        },
        {
            "id": "sub_484",
            "parentid": "t_20",
            "topic": "Electric Potential Due To Ring",
            "direction": "right"
        },
        {
            "id": "sub_485",
            "parentid": "t_20",
            "topic": "Methods Of Charging",
            "direction": "right"
        },
        {
            "id": "sub_486",
            "parentid": "t_20",
            "topic": "Electric Field Due To Linear/Ring Charge Distribution",
            "direction": "right"
        },
        {
            "id": "sub_487",
            "parentid": "t_20",
            "topic": "Electric Field Due To A Dipole",
            "direction": "right"
        },
        {
            "id": "sub_488",
            "parentid": "t_20",
            "topic": "Electric Potential In Case Of Concentric Conductors",
            "direction": "right"
        },
        {
            "id": "sub_489",
            "parentid": "t_20",
            "topic": "Gauss's Theorem",
            "direction": "right"
        },
        {
            "id": "sub_490",
            "parentid": "t_20",
            "topic": "Force, Torque And Oscillations Of Dipole In Uniform Electric Field",
            "direction": "right"
        },
        {
            "id": "sub_491",
            "parentid": "t_20",
            "topic": "Electric Potential Due To Discrete Charges",
            "direction": "right"
        },
        {
            "id": "sub_492",
            "parentid": "t_20",
            "topic": "Electric Potential Energy",
            "direction": "right"
        },
        {
            "id": "sub_493",
            "parentid": "t_20",
            "topic": "Detection Of Charge(Gold Leaf Electroscope)",
            "direction": "right"
        },
        {
            "id": "sub_494",
            "parentid": "t_20",
            "topic": "Electric Field Due To Volume Charge Distributions",
            "direction": "right"
        },
        {
            "id": "sub_495",
            "parentid": "t_20",
            "topic": "Electric Potential Due To Surface Charge Distribution",
            "direction": "right"
        },
        {
            "id": "sub_496",
            "parentid": "t_20",
            "topic": "Electric Field Due To A Solid/ Hollow Conducting Sphere Or Shell",
            "direction": "right"
        },
        {
            "id": "sub_497",
            "parentid": "t_20",
            "topic": "Work Done By Electric Field And COME",
            "direction": "right"
        },
        {
            "id": "sub_498",
            "parentid": "t_20",
            "topic": "Electric Potential Due To Conductor",
            "direction": "right"
        },
        {
            "id": "sub_499",
            "parentid": "t_20",
            "topic": "Force And Torque On Dipole In Non-Uniform Electric Field",
            "direction": "right"
        },
        {
            "id": "sub_500",
            "parentid": "t_20",
            "topic": "Equipotential Surfaces",
            "direction": "right"
        },
        {
            "id": "sub_501",
            "parentid": "t_20",
            "topic": "Electric Field Intensity Due To Discrete System Of Charges",
            "direction": "right"
        },
        {
            "id": "sub_502",
            "parentid": "t_20",
            "topic": "Electric Pressure",
            "direction": "right"
        },
        {
            "id": "sub_503",
            "parentid": "t_20",
            "topic": "Miscellaneous",
            "direction": "right"
        },
        {
            "id": "sub_504",
            "parentid": "t_20",
            "topic": "Motion Of Charged Particle In Electric Field",
            "direction": "right"
        },
        {
            "id": "sub_505",
            "parentid": "t_20",
            "topic": "Properties Of Conductors And Electrostatic Shielding",
            "direction": "right"
        },
        {
            "id": "sub_506",
            "parentid": "t_20",
            "topic": "Electric Potential Due To Linear Charge Distribution",
            "direction": "right"
        },
        {
            "id": "sub_507",
            "parentid": "t_20",
            "topic": "Redistribution Of Charges In Case Of Conductors",
            "direction": "right"
        },
        {
            "id": "sub_508",
            "parentid": "t_20",
            "topic": "Relation Between Field And Potential",
            "direction": "right"
        },
        {
            "id": "sub_509",
            "parentid": "t_20",
            "topic": "Equilibrium Of Suspended Charge System",
            "direction": "right"
        },
        {
            "id": "sub_510",
            "parentid": "t_20",
            "topic": "Potential Energy Of Dipole In External Field",
            "direction": "right"
        },
        {
            "id": "sub_511",
            "parentid": "t_20",
            "topic": "Properties Of Electric Charges",
            "direction": "right"
        },
        {
            "id": "sub_512",
            "parentid": "t_20",
            "topic": "Equilibrium In Case Of Discrete Charge Systems",
            "direction": "right"
        },
        {
            "id": "sub_513",
            "parentid": "t_20",
            "topic": "Electric Potential Due To Volume Charge Distribution",
            "direction": "right"
        },
        {
            "id": "sub_514",
            "parentid": "t_20",
            "topic": "Calculation Of Charge In Case Of Continuous Charge Distribution",
            "direction": "right"
        },
        {
            "id": "sub_515",
            "parentid": "t_20",
            "topic": "Coulomb's Law And Principle Of Superposition, Permittivity",
            "direction": "right"
        },
        {
            "id": "sub_516",
            "parentid": "t_20",
            "topic": "Electric Field Due To A Plane Sheet Of Charge",
            "direction": "right"
        },
        {
            "id": "sub_517",
            "parentid": "t_20",
            "topic": "Electric Field Lines",
            "direction": "right"
        },
        {
            "id": "sub_518",
            "parentid": "t_20",
            "topic": "Electric Field In Case Of Concentric Conductors",
            "direction": "right"
        },
        {
            "id": "t_21",
            "parentid": "st_7",
            "topic": "Current Electricity",
            "direction": "left"
        },
        {
            "id": "sub_520",
            "parentid": "t_21",
            "topic": "Miscellaneous",
            "direction": "right"
        },
        {
            "id": "sub_521",
            "parentid": "t_21",
            "topic": "Temperature Dependence Of Resistance",
            "direction": "right"
        },
        {
            "id": "sub_522",
            "parentid": "t_21",
            "topic": "Meter Bridge",
            "direction": "right"
        },
        {
            "id": "sub_523",
            "parentid": "t_21",
            "topic": "Questions Based On Bulbs",
            "direction": "right"
        },
        {
            "id": "sub_524",
            "parentid": "t_21",
            "topic": "Cell And Its Charging/Discharging",
            "direction": "right"
        },
        {
            "id": "sub_525",
            "parentid": "t_21",
            "topic": "Combination Of Cells",
            "direction": "right"
        },
        {
            "id": "sub_526",
            "parentid": "t_21",
            "topic": "Potentiometer",
            "direction": "right"
        },
        {
            "id": "sub_527",
            "parentid": "t_21",
            "topic": "Maximum Power Theorem",
            "direction": "right"
        },
        {
            "id": "sub_528",
            "parentid": "t_21",
            "topic": "Ohm's Law And Microscopic View Of Ohm's Law",
            "direction": "right"
        },
        {
            "id": "sub_529",
            "parentid": "t_21",
            "topic": "Drift Velocity",
            "direction": "right"
        },
        {
            "id": "sub_530",
            "parentid": "t_21",
            "topic": "Calculation Of Resistance Of Conductor",
            "direction": "right"
        },
        {
            "id": "sub_531",
            "parentid": "t_21",
            "topic": "Conversion Of Galvanometer Into Voltmeter",
            "direction": "right"
        },
        {
            "id": "sub_532",
            "parentid": "t_21",
            "topic": "Combination Of Resistors(Series And Parallel Only)",
            "direction": "right"
        },
        {
            "id": "sub_533",
            "parentid": "t_21",
            "topic": "Electrical Energy And Power",
            "direction": "right"
        },
        {
            "id": "sub_534",
            "parentid": "t_21",
            "topic": "Kirchhoff's Voltage Law And Its Applications(Circuit Problems)",
            "direction": "right"
        },
        {
            "id": "sub_535",
            "parentid": "t_21",
            "topic": "Combination Of Resistors (Symmetrical, Equipotential, Infinite Ladder Etc.)",
            "direction": "right"
        },
        {
            "id": "sub_536",
            "parentid": "t_21",
            "topic": "Real Ammeter And Voltmeter",
            "direction": "right"
        },
        {
            "id": "sub_537",
            "parentid": "t_21",
            "topic": "Introduction Of Electric Current And Current Density",
            "direction": "right"
        },
        {
            "id": "sub_538",
            "parentid": "t_21",
            "topic": "Kirchhoff's Current Law And Its Applications(Circuit Problems)",
            "direction": "right"
        },
        {
            "id": "sub_539",
            "parentid": "t_21",
            "topic": "Wheatstone Bridge",
            "direction": "right"
        },
        {
            "id": "sub_540",
            "parentid": "t_21",
            "topic": "Galvanometer",
            "direction": "right"
        },
        {
            "id": "sub_541",
            "parentid": "t_21",
            "topic": "Conversion Of Galvanometer Into Ammeter",
            "direction": "right"
        },
        {
            "id": "sub_542",
            "parentid": "t_21",
            "topic": "Carbon Resistors",
            "direction": "right"
        },
        {
            "id": "sub_543",
            "parentid": "t_21",
            "topic": "Single Loop /Battery Circuits",
            "direction": "right"
        },
        {
            "id": "t_22",
            "parentid": "st_8",
            "topic": "Wave Optics",
            "direction": "left"
        },
        {
            "id": "sub_545",
            "parentid": "t_22",
            "topic": "Resolving Power Of Optical Instruments",
            "direction": "right"
        },
        {
            "id": "sub_546",
            "parentid": "t_22",
            "topic": "YDSE With White Light",
            "direction": "right"
        },
        {
            "id": "sub_547",
            "parentid": "t_22",
            "topic": "Brewster's Law",
            "direction": "right"
        },
        {
            "id": "sub_548",
            "parentid": "t_22",
            "topic": "Newton's Corpuscular Theory, Huygens' Principle And Wave Front",
            "direction": "right"
        },
        {
            "id": "sub_549",
            "parentid": "t_22",
            "topic": "Interference In Thin Film",
            "direction": "right"
        },
        {
            "id": "sub_550",
            "parentid": "t_22",
            "topic": "Optical And Geometrical Path",
            "direction": "right"
        },
        {
            "id": "sub_551",
            "parentid": "t_22",
            "topic": "Standard YDSE, Fringe Width",
            "direction": "right"
        },
        {
            "id": "sub_552",
            "parentid": "t_22",
            "topic": "Modified/Asymmetric/Miscellaneous On YDSE",
            "direction": "right"
        },
        {
            "id": "sub_553",
            "parentid": "t_22",
            "topic": "YDSE With Thin Sheet In Front Of A Slit",
            "direction": "right"
        },
        {
            "id": "sub_554",
            "parentid": "t_22",
            "topic": "Miscellaneous",
            "direction": "right"
        },
        {
            "id": "sub_555",
            "parentid": "t_22",
            "topic": "Malus' Law",
            "direction": "right"
        },
        {
            "id": "sub_556",
            "parentid": "t_22",
            "topic": "Fraunhofer Diffraction",
            "direction": "right"
        },
        {
            "id": "sub_557",
            "parentid": "t_22",
            "topic": "YDSE In A Medium",
            "direction": "right"
        },
        {
            "id": "sub_558",
            "parentid": "t_22",
            "topic": "Superposition, Interference And Coherent/Incoherent Sources",
            "direction": "right"
        },
        {
            "id": "sub_559",
            "parentid": "t_22",
            "topic": "Interference + Diffraction Combined",
            "direction": "right"
        },
        {
            "id": "sub_560",
            "parentid": "t_22",
            "topic": "Fresnel's Distance",
            "direction": "right"
        },
        {
            "id": "sub_561",
            "parentid": "t_22",
            "topic": "Rayleigh's Criteria For Resolution And Resolving Power Of Eye",
            "direction": "right"
        },
        {
            "id": "sub_562",
            "parentid": "t_22",
            "topic": "Fresnel Diffraction",
            "direction": "right"
        },
        {
            "id": "sub_563",
            "parentid": "t_22",
            "topic": "Polarisation Of Light And Methods Of Polarization",
            "direction": "right"
        },
        {
            "id": "sub_564",
            "parentid": "t_22",
            "topic": "Shape Of Fringes And Fringe Visibility",
            "direction": "right"
        },
        {
            "id": "t_23",
            "parentid": "st_8",
            "topic": "Ray Optics And Optical Instruments",
            "direction": "left"
        },
        {
            "id": "sub_566",
            "parentid": "t_23",
            "topic": "Image Formation By Plane Mirror, Field Of View, Lateral Inversion",
            "direction": "right"
        },
        {
            "id": "sub_567",
            "parentid": "t_23",
            "topic": "Newton's Formula In Mirror",
            "direction": "right"
        },
        {
            "id": "sub_568",
            "parentid": "t_23",
            "topic": "Laws Of Reflection And Fermat's Principle",
            "direction": "right"
        },
        {
            "id": "sub_569",
            "parentid": "t_23",
            "topic": "Refraction At Spherical Surfaces (Image, Magnification, Velocity)",
            "direction": "right"
        },
        {
            "id": "sub_570",
            "parentid": "t_23",
            "topic": "Velocity Of Image In Lens",
            "direction": "right"
        },
        {
            "id": "sub_571",
            "parentid": "t_23",
            "topic": "Longitudinal, Superficial And Volumetric Magnification",
            "direction": "right"
        },
        {
            "id": "sub_572",
            "parentid": "t_23",
            "topic": "Power Of Spherical Surfaces, Lens And Lens In Combination",
            "direction": "right"
        },
        {
            "id": "sub_573",
            "parentid": "t_23",
            "topic": "Simple Microscope",
            "direction": "right"
        },
        {
            "id": "sub_574",
            "parentid": "t_23",
            "topic": "Lateral Shift By Slab",
            "direction": "right"
        },
        {
            "id": "sub_575",
            "parentid": "t_23",
            "topic": "Thin Prism",
            "direction": "right"
        },
        {
            "id": "sub_576",
            "parentid": "t_23",
            "topic": "Apparent Velocity In Refraction From Plane Surface",
            "direction": "right"
        },
        {
            "id": "sub_577",
            "parentid": "t_23",
            "topic": "Combination Of Mirror And Slab",
            "direction": "right"
        },
        {
            "id": "sub_578",
            "parentid": "t_23",
            "topic": "Aberration In Mirrors, Paraxial And Marginal Rays, Focal Length",
            "direction": "right"
        },
        {
            "id": "sub_579",
            "parentid": "t_23",
            "topic": "Defect Of Vision : Hypermetropia And Its Correction",
            "direction": "right"
        },
        {
            "id": "sub_580",
            "parentid": "t_23",
            "topic": "Other Defect Of Vision : Presbyopia, Astigmatism",
            "direction": "right"
        },
        {
            "id": "sub_581",
            "parentid": "t_23",
            "topic": "Miscellaneous",
            "direction": "right"
        },
        {
            "id": "sub_582",
            "parentid": "t_23",
            "topic": "Dispersion And Dispersive Power For Prism",
            "direction": "right"
        },
        {
            "id": "sub_583",
            "parentid": "t_23",
            "topic": "Lens Maker's Formula And No. Of Images",
            "direction": "right"
        },
        {
            "id": "sub_584",
            "parentid": "t_23",
            "topic": "Lenses In A Surrounding Medium Other Than Air",
            "direction": "right"
        },
        {
            "id": "sub_585",
            "parentid": "t_23",
            "topic": "Velocity Of Image In Spherical Mirrors",
            "direction": "right"
        },
        {
            "id": "sub_586",
            "parentid": "t_23",
            "topic": "Combination And Cutting Of Mirrors",
            "direction": "right"
        },
        {
            "id": "sub_587",
            "parentid": "t_23",
            "topic": "Defect Of Vision : Myopia And Its Correction",
            "direction": "right"
        },
        {
            "id": "sub_588",
            "parentid": "t_23",
            "topic": "Terrestrial And Cassegrain Telescope",
            "direction": "right"
        },
        {
            "id": "sub_589",
            "parentid": "t_23",
            "topic": "Reflection From Spherical Mirrors (Ray Diagram)",
            "direction": "right"
        },
        {
            "id": "sub_590",
            "parentid": "t_23",
            "topic": "Rotation Of Plane Mirror",
            "direction": "right"
        },
        {
            "id": "sub_591",
            "parentid": "t_23",
            "topic": "Image Formation By Combination Of Mirrors And Lens (With Some Distance)",
            "direction": "right"
        },
        {
            "id": "sub_592",
            "parentid": "t_23",
            "topic": "Silvering And Cutting Of Lenses",
            "direction": "right"
        },
        {
            "id": "sub_593",
            "parentid": "t_23",
            "topic": "Astronomical Telescope (Keplerian)",
            "direction": "right"
        },
        {
            "id": "sub_594",
            "parentid": "t_23",
            "topic": "Mirror Formula And Transverse Magnification",
            "direction": "right"
        },
        {
            "id": "sub_595",
            "parentid": "t_23",
            "topic": "Deviation By Plane Mirror",
            "direction": "right"
        },
        {
            "id": "sub_596",
            "parentid": "t_23",
            "topic": "Prism : Definition And Deviation",
            "direction": "right"
        },
        {
            "id": "sub_597",
            "parentid": "t_23",
            "topic": "Critical Angle And Total Internal Reflection, Colour TIR",
            "direction": "right"
        },
        {
            "id": "sub_598",
            "parentid": "t_23",
            "topic": "Newton's Formula In Lenses",
            "direction": "right"
        },
        {
            "id": "sub_599",
            "parentid": "t_23",
            "topic": "Spherical And Chromatic Aberration Of Lens",
            "direction": "right"
        },
        {
            "id": "sub_600",
            "parentid": "t_23",
            "topic": "Refraction At Plane Surface: Snell's Law",
            "direction": "right"
        },
        {
            "id": "sub_601",
            "parentid": "t_23",
            "topic": "Galilean Telescope",
            "direction": "right"
        },
        {
            "id": "sub_602",
            "parentid": "t_23",
            "topic": "Rainbow And Scattering Of Light",
            "direction": "right"
        },
        {
            "id": "sub_603",
            "parentid": "t_23",
            "topic": "Image Formation By Combination Of Lens",
            "direction": "right"
        },
        {
            "id": "sub_604",
            "parentid": "t_23",
            "topic": "Applications And Phenomenon Related To TIR",
            "direction": "right"
        },
        {
            "id": "sub_605",
            "parentid": "t_23",
            "topic": "Human Eye And Its Accommodation Power And Visual Angle",
            "direction": "right"
        },
        {
            "id": "sub_606",
            "parentid": "t_23",
            "topic": "Images In Combination Of Mirrors",
            "direction": "right"
        },
        {
            "id": "sub_607",
            "parentid": "t_23",
            "topic": "Normal Shift",
            "direction": "right"
        },
        {
            "id": "sub_608",
            "parentid": "t_23",
            "topic": "Photometry",
            "direction": "right"
        },
        {
            "id": "sub_609",
            "parentid": "t_23",
            "topic": "Apparent Depth, Height In Refraction From Plane Surface",
            "direction": "right"
        },
        {
            "id": "sub_610",
            "parentid": "t_23",
            "topic": "Lens Formula And Magnification",
            "direction": "right"
        },
        {
            "id": "sub_611",
            "parentid": "t_23",
            "topic": "Compound Microscope",
            "direction": "right"
        },
        {
            "id": "sub_612",
            "parentid": "t_23",
            "topic": "Introduction Of Light And Its Properties",
            "direction": "right"
        },
        {
            "id": "sub_613",
            "parentid": "t_23",
            "topic": "Combination Of Prism (Achromatic And Direct Vision)",
            "direction": "right"
        },
        {
            "id": "sub_614",
            "parentid": "t_23",
            "topic": "Displacement Method",
            "direction": "right"
        },
        {
            "id": "sub_615",
            "parentid": "t_23",
            "topic": "Power Of Mirror",
            "direction": "right"
        },
        {
            "id": "sub_616",
            "parentid": "t_23",
            "topic": "TIR And Silvering In Prism",
            "direction": "right"
        },
        {
            "id": "sub_617",
            "parentid": "t_23",
            "topic": "Velocity Of Image In Plane Mirror",
            "direction": "right"
        },
        {
            "id": "sub_618",
            "parentid": "t_23",
            "topic": "Camera And Projectors",
            "direction": "right"
        },
        {
            "id": "sub_619",
            "parentid": "t_23",
            "topic": "Minimum Deviation In Prism",
            "direction": "right"
        },
        {
            "id": "sub_620",
            "parentid": "t_23",
            "topic": "Image Formation By Lens (Ray Diagram)",
            "direction": "right"
        },
        {
            "id": "t_24",
            "parentid": "st_9",
            "topic": "Semiconductor Electronics",
            "direction": "right"
        },
        {
            "id": "sub_622",
            "parentid": "t_24",
            "topic": "Half Wave And Full Wave Rectifiers (Definition, Circuit Diagram And Output Waveform)",
            "direction": "right"
        },
        {
            "id": "sub_623",
            "parentid": "t_24",
            "topic": "Semiconductor Diode And Circuit Based Questions",
            "direction": "right"
        },
        {
            "id": "sub_624",
            "parentid": "t_24",
            "topic": "Energy Band Theory And Intrinsic Semiconductors",
            "direction": "right"
        },
        {
            "id": "sub_625",
            "parentid": "t_24",
            "topic": "Logic Gates (Definition, Truth Table And Circuit Equivalents)",
            "direction": "right"
        },
        {
            "id": "sub_626",
            "parentid": "t_24",
            "topic": "Solar Cell",
            "direction": "right"
        },
        {
            "id": "sub_627",
            "parentid": "t_24",
            "topic": "p-n Junction, Biasing And I-V Characteristic",
            "direction": "right"
        },
        {
            "id": "sub_628",
            "parentid": "t_24",
            "topic": "Miscellaneous",
            "direction": "right"
        },
        {
            "id": "sub_629",
            "parentid": "t_24",
            "topic": "Filter Circuit And RMS, Avg, Efficiency Of Rectifiers, Ripple",
            "direction": "right"
        },
        {
            "id": "sub_630",
            "parentid": "t_24",
            "topic": "Extrinsic Semiconductors (p-Type And n-Type) And Mass Action Law, Conductivity",
            "direction": "right"
        },
        {
            "id": "sub_631",
            "parentid": "t_24",
            "topic": "Photo Diode",
            "direction": "right"
        },
        {
            "id": "sub_632",
            "parentid": "t_24",
            "topic": "Optoelectronic Devices (LED And Photocell)",
            "direction": "right"
        },
        {
            "id": "sub_633",
            "parentid": "t_24",
            "topic": "Boolean Algebra",
            "direction": "right"
        },
        {
            "id": "sub_634",
            "parentid": "t_24",
            "topic": "Breakdown Of Diode And Zener Diode As Voltage Regulator",
            "direction": "right"
        },
        {
            "id": "sub_635",
            "parentid": "t_24",
            "topic": "Combination Of Logic Gates",
            "direction": "right"
        },
        {
            "id": "t_25",
            "parentid": "st_9",
            "topic": "Modern Physics",
            "direction": "right"
        },
        {
            "id": "sub_637",
            "parentid": "t_25",
            "topic": "Nuclear Physics : Miscellaneous",
            "direction": "right"
        },
        {
            "id": "sub_638",
            "parentid": "t_25",
            "topic": "Nuclear Physics (Pair Production And Pair Annihilation)",
            "direction": "right"
        },
        {
            "id": "sub_639",
            "parentid": "t_25",
            "topic": "De-Broglie Waves (Standard Questions)",
            "direction": "right"
        },
        {
            "id": "sub_640",
            "parentid": "t_25",
            "topic": "Mixed Concept Based Question On De-Broglie Waves (Momentum Conservation, Atomic Structure)",
            "direction": "right"
        },
        {
            "id": "sub_641",
            "parentid": "t_25",
            "topic": "Radioactivity (Introduction And Properties Of Alpha, Beta, Gamma)",
            "direction": "right"
        },
        {
            "id": "sub_642",
            "parentid": "t_25",
            "topic": "Radioactivity (Gamma Decay)",
            "direction": "right"
        },
        {
            "id": "sub_643",
            "parentid": "t_25",
            "topic": "Nuclear Physics (Nuclear Fission, Chain Reaction And Nuclear Reactor)",
            "direction": "right"
        },
        {
            "id": "sub_644",
            "parentid": "t_25",
            "topic": "Nuclear Physics (Nuclear Reaction, Q-Value Based)",
            "direction": "right"
        },
        {
            "id": "sub_645",
            "parentid": "t_25",
            "topic": "Miscellaneous",
            "direction": "right"
        },
        {
            "id": "sub_646",
            "parentid": "t_25",
            "topic": "Nuclear Physics (Introduction, Nucleons, Radius, Density, Average Atomic Mass)",
            "direction": "right"
        },
        {
            "id": "sub_647",
            "parentid": "t_25",
            "topic": "Einstein's Explanation And Photoelectric Effect Equation",
            "direction": "right"
        },
        {
            "id": "sub_648",
            "parentid": "t_25",
            "topic": "Radioactivity (Beta Decay And K-Capture), Properties Of Neutrino/Anti-Neutrino",
            "direction": "right"
        },
        {
            "id": "sub_649",
            "parentid": "t_25",
            "topic": "Nuclear Physics (Energy-Mass Equivalence, Rest Mass Energy, Total Energy)",
            "direction": "right"
        },
        {
            "id": "sub_650",
            "parentid": "t_25",
            "topic": "Photo-Cell Based On PEE",
            "direction": "right"
        },
        {
            "id": "sub_651",
            "parentid": "t_25",
            "topic": "Atomic Structure : Bohr Model Of Hydrogen Atom",
            "direction": "right"
        },
        {
            "id": "sub_652",
            "parentid": "t_25",
            "topic": "Atomic Structure : Rutherford Scattering",
            "direction": "right"
        },
        {
            "id": "sub_653",
            "parentid": "t_25",
            "topic": "Nuclear Physics (Mass Defect, Binding Energy, Stability And Binding Energy Curve)",
            "direction": "right"
        },
        {
            "id": "sub_654",
            "parentid": "t_25",
            "topic": "Failure Of Wave Theory",
            "direction": "right"
        },
        {
            "id": "sub_655",
            "parentid": "t_25",
            "topic": "Probabilistic Wave And Heisenberg Uncertainty",
            "direction": "right"
        },
        {
            "id": "sub_656",
            "parentid": "t_25",
            "topic": "Intensity, Power And Mixed Concept Based On Photon Theory Of Light",
            "direction": "right"
        },
        {
            "id": "sub_657",
            "parentid": "t_25",
            "topic": "Radiation Pressure",
            "direction": "right"
        },
        {
            "id": "sub_658",
            "parentid": "t_25",
            "topic": "Radioactivity (Alpha Decay)",
            "direction": "right"
        },
        {
            "id": "sub_659",
            "parentid": "t_25",
            "topic": "Electron Emission, Work Function, Threshold Frequency, Threshold Wavelength",
            "direction": "right"
        },
        {
            "id": "sub_660",
            "parentid": "t_25",
            "topic": "Experimental Study Of PEE",
            "direction": "right"
        },
        {
            "id": "sub_661",
            "parentid": "t_25",
            "topic": "Mixed Concept Based Question On PEE (E, B And Atomic Structure)",
            "direction": "right"
        },
        {
            "id": "sub_662",
            "parentid": "t_25",
            "topic": "Nuclear Physics (Nuclear Fusion)",
            "direction": "right"
        },
        {
            "id": "sub_663",
            "parentid": "t_25",
            "topic": "Photon Theory Of Light (E=hf, Relativistic Mass, Momentum)",
            "direction": "right"
        },
        {
            "id": "sub_664",
            "parentid": "t_25",
            "topic": "Nuclear Physics (Nuclear Force)",
            "direction": "right"
        },
        {
            "id": "sub_665",
            "parentid": "t_25",
            "topic": "Reaction Balancing With \u03b1, \u03b2, \u03b3",
            "direction": "right"
        },
        {
            "id": "sub_666",
            "parentid": "t_25",
            "topic": "Bohr's Angular Momentum Quantization And Davisson-Germer Experiment",
            "direction": "right"
        },
        {
            "id": "t_26",
            "parentid": "st_10",
            "topic": "Principles Related To Practical Chemistry (Organic Chemistry)",
            "direction": "right"
        },
        {
            "id": "sub_668",
            "parentid": "t_26",
            "topic": "Groups Hydroxyl (Alcoholic And Phenolic), Carbonyl (Aldehyde And Ketones Carbonyl, And Amino Group In The Organic Compounds.",
            "direction": "right"
        },
        {
            "id": "sub_669",
            "parentid": "t_26",
            "topic": "Organic Compounds: Acetanilide, P-Nitro Acetanilide, Aniline Yellow, Iodoform.",
            "direction": "right"
        },
        {
            "id": "t_27",
            "parentid": "st_10",
            "topic": "Aldehydes, Ketones And Carboxylic Acids",
            "direction": "right"
        },
        {
            "id": "sub_671",
            "parentid": "t_27",
            "topic": "Chemical Reaction Of Aldehyde / Ketone - Nar Mechanism And Reactivity Order",
            "direction": "right"
        },
        {
            "id": "sub_672",
            "parentid": "t_27",
            "topic": "Reaction Of Aldehyde / Ketone - Addition Of Ammonia And Its Derivative",
            "direction": "right"
        },
        {
            "id": "sub_673",
            "parentid": "t_27",
            "topic": "Reaction Of Aldehyde / Ketone - Addition Of Alcohol",
            "direction": "right"
        },
        {
            "id": "sub_674",
            "parentid": "t_27",
            "topic": "Physical Properties Of Acid / Acid Derivatives",
            "direction": "right"
        },
        {
            "id": "sub_675",
            "parentid": "t_27",
            "topic": "Reaction Due To \u00ce\u00b1-Hydrogen - Aldol Condensation",
            "direction": "right"
        },
        {
            "id": "sub_676",
            "parentid": "t_27",
            "topic": "Haloform Reaction",
            "direction": "right"
        },
        {
            "id": "sub_677",
            "parentid": "t_27",
            "topic": "Miscellaneous Questions",
            "direction": "right"
        },
        {
            "id": "sub_678",
            "parentid": "t_27",
            "topic": "Reduction Of Aldehyde / Ketone - Clemmensen Reduction / Wolff - Kishner Reduction, Reduction Of Aldehyde / Ketone To Alcohol",
            "direction": "right"
        },
        {
            "id": "sub_679",
            "parentid": "t_27",
            "topic": "Reaction Of Acid/ Derivative -HVZ",
            "direction": "right"
        },
        {
            "id": "sub_680",
            "parentid": "t_27",
            "topic": "Physical Properties Of Carbonyl Compound",
            "direction": "right"
        },
        {
            "id": "sub_681",
            "parentid": "t_27",
            "topic": "Reaction Of Aldehyde / Ketone - Addition Of Hcn",
            "direction": "right"
        },
        {
            "id": "sub_682",
            "parentid": "t_27",
            "topic": "Preparation Of Carbonyl Compound",
            "direction": "right"
        },
        {
            "id": "sub_683",
            "parentid": "t_27",
            "topic": "Oxidation / Aldehyde / Ketone - Tollen's Reagent, Fehling Solution, Benedict Solution",
            "direction": "right"
        },
        {
            "id": "sub_684",
            "parentid": "t_27",
            "topic": "Cannizzaro Reaction",
            "direction": "right"
        },
        {
            "id": "sub_685",
            "parentid": "t_27",
            "topic": "Reaction Of Aryl Carboxylic Acid ,Nitrobenzene And Other Meta Directing Groups (Esr)",
            "direction": "right"
        },
        {
            "id": "sub_686",
            "parentid": "t_27",
            "topic": "Reaction Of Acid / Derivative - Esterification",
            "direction": "right"
        },
        {
            "id": "sub_687",
            "parentid": "t_27",
            "topic": "Chemical Reaction Of Acid/ Derivative - Nucleophilic Aryl Substitution",
            "direction": "right"
        },
        {
            "id": "sub_688",
            "parentid": "t_27",
            "topic": "Heating Effect Of Carboxylic Acid",
            "direction": "right"
        },
        {
            "id": "sub_689",
            "parentid": "t_27",
            "topic": "Oxidation, Reduction Of Acid / Acid Derivatives",
            "direction": "right"
        },
        {
            "id": "sub_690",
            "parentid": "t_27",
            "topic": "Reaction Of Aldehyde / Ketone - Addition Of Grignard Reagent",
            "direction": "right"
        },
        {
            "id": "sub_691",
            "parentid": "t_27",
            "topic": "Reaction Of Aldehyde / Ketone - Addition Of H2O",
            "direction": "right"
        },
        {
            "id": "sub_692",
            "parentid": "t_27",
            "topic": "Use Of Aldehyde And Ketones",
            "direction": "right"
        },
        {
            "id": "sub_693",
            "parentid": "t_27",
            "topic": "SNAE Reaction In Acid Derivative : Other SNAE Reactions,Dehydration Of Amide)",
            "direction": "right"
        },
        {
            "id": "sub_694",
            "parentid": "t_27",
            "topic": "Preparation Of Carboxylic Acid / Derivative",
            "direction": "right"
        },
        {
            "id": "sub_695",
            "parentid": "t_27",
            "topic": "Other Name Reaction (Including Wittig, Reformatsky,Tischenko)",
            "direction": "right"
        },
        {
            "id": "sub_696",
            "parentid": "t_27",
            "topic": "Use Of Acid / Acid Derivatives",
            "direction": "right"
        },
        {
            "id": "sub_697",
            "parentid": "t_27",
            "topic": "NAR (Reactivity / Reactions) : Reaction Of Other Nucleophile",
            "direction": "right"
        },
        {
            "id": "sub_698",
            "parentid": "t_27",
            "topic": "Reaction Of Aldehyde / Ketone - Addition Of NaHSO3",
            "direction": "right"
        },
        {
            "id": "sub_699",
            "parentid": "t_27",
            "topic": "Snae Reaction In Acid Derivative : Commercial Important Product By Snae Reaction",
            "direction": "right"
        },
        {
            "id": "sub_700",
            "parentid": "t_27",
            "topic": "Reaction Of Acid / Derivative- Reaction With Ph-Oh,H2O,R-Oh,Nh3 ,Rmyx",
            "direction": "right"
        },
        {
            "id": "sub_701",
            "parentid": "t_27",
            "topic": "Esr Reaction In Aromatic Aldehyde / Ketone",
            "direction": "right"
        },
        {
            "id": "sub_702",
            "parentid": "t_27",
            "topic": "Reaction Due To \u00ce\u00b1-Hydrogen - Aldol Aldol Condensation",
            "direction": "right"
        },
        {
            "id": "t_28",
            "parentid": "st_10",
            "topic": "Amines",
            "direction": "right"
        },
        {
            "id": "sub_704",
            "parentid": "t_28",
            "topic": "Preparation Of Amine : Hoffman Bromamide Degradation Reaction",
            "direction": "right"
        },
        {
            "id": "sub_705",
            "parentid": "t_28",
            "topic": "Reaction Of Benzene Diazonium Salt",
            "direction": "right"
        },
        {
            "id": "sub_706",
            "parentid": "t_28",
            "topic": "Reaction Of Amine - Basic Nature Of Amine ,Alkylation Of Amine,Acylation Of Amine Carbylamine Reaction Of Amine With Nitrous Acid Reaction Of Amine With Hinsberg Reagent",
            "direction": "right"
        },
        {
            "id": "sub_707",
            "parentid": "t_28",
            "topic": "Preparation Of Amine : Gabriel Phthalimide Reaction",
            "direction": "right"
        },
        {
            "id": "sub_708",
            "parentid": "t_28",
            "topic": "Reaction Of Cyanides : Other Reactions",
            "direction": "right"
        },
        {
            "id": "sub_709",
            "parentid": "t_28",
            "topic": "Reaction Of Isocyanides",
            "direction": "right"
        },
        {
            "id": "sub_710",
            "parentid": "t_28",
            "topic": "Electrophilic Substitution In Aniline- Halogenation,Nitration Sulphonation",
            "direction": "right"
        },
        {
            "id": "sub_711",
            "parentid": "t_28",
            "topic": "Reaction Of Nitro Compound (Nitrobenzene, Etc) : Other Reactions",
            "direction": "right"
        },
        {
            "id": "sub_712",
            "parentid": "t_28",
            "topic": "Reaction Of Cyanides : Hydrolysis",
            "direction": "right"
        },
        {
            "id": "sub_713",
            "parentid": "t_28",
            "topic": "Reaction Of Cyanides : Reductions",
            "direction": "right"
        },
        {
            "id": "sub_714",
            "parentid": "t_28",
            "topic": "POC Of N-Containing Compound",
            "direction": "right"
        },
        {
            "id": "sub_715",
            "parentid": "t_28",
            "topic": "Physical Properties Of Amines",
            "direction": "right"
        },
        {
            "id": "sub_716",
            "parentid": "t_28",
            "topic": "Preparation Of Amine : Other Methods",
            "direction": "right"
        },
        {
            "id": "sub_717",
            "parentid": "t_28",
            "topic": "Preparation Of Benzene Diazonium Salt",
            "direction": "right"
        },
        {
            "id": "sub_718",
            "parentid": "t_28",
            "topic": "Reduction Of Nitro Compound",
            "direction": "right"
        },
        {
            "id": "sub_719",
            "parentid": "t_28",
            "topic": "Miscellaneous Questions",
            "direction": "right"
        },
        {
            "id": "sub_720",
            "parentid": "t_28",
            "topic": "Preparation Of Amine - By Reduction Of Nitro Compound,From Halide ,By Reduction Of Nitriles, Reduction Of Amides",
            "direction": "right"
        },
        {
            "id": "t_29",
            "parentid": "st_10",
            "topic": "Haloalkanes And Haloarenes",
            "direction": "right"
        },
        {
            "id": "sub_722",
            "parentid": "t_29",
            "topic": "Sn2 Reaction Mechanism And Reactivity Order Of Sn1",
            "direction": "right"
        },
        {
            "id": "sub_723",
            "parentid": "t_29",
            "topic": "Haloform Test",
            "direction": "right"
        },
        {
            "id": "sub_724",
            "parentid": "t_29",
            "topic": "Chemical Reaction Of Alkyl Halide/ Dihalide/Trihalide",
            "direction": "right"
        },
        {
            "id": "sub_725",
            "parentid": "t_29",
            "topic": "Sn1 Reaction Mechanism And Reactivity Order Of Sn1",
            "direction": "right"
        },
        {
            "id": "sub_726",
            "parentid": "t_29",
            "topic": "\u03b1/\u03b2/Elimination Reaction (E1, E2, Pyrolysis) : E1 Reactivity Order",
            "direction": "right"
        },
        {
            "id": "sub_727",
            "parentid": "t_29",
            "topic": "Sn1 And Sn2 Reaction",
            "direction": "right"
        },
        {
            "id": "sub_728",
            "parentid": "t_29",
            "topic": "Formation Of Organometallic Compounds",
            "direction": "right"
        },
        {
            "id": "sub_729",
            "parentid": "t_29",
            "topic": "Leaving Ability Of Leaving Groups",
            "direction": "right"
        },
        {
            "id": "sub_730",
            "parentid": "t_29",
            "topic": "Miscellaneous Questions",
            "direction": "right"
        },
        {
            "id": "sub_731",
            "parentid": "t_29",
            "topic": "\u0391/\u0392/Elimination Reaction (E1, E2, Pyrolysis) : Other Elimination Reactivity Order",
            "direction": "right"
        },
        {
            "id": "sub_732",
            "parentid": "t_29",
            "topic": "Use Of Polyhalogen Compounds",
            "direction": "right"
        },
        {
            "id": "sub_733",
            "parentid": "t_29",
            "topic": "Physical Properties Of Alkyl Halides, Aryl Halides",
            "direction": "right"
        },
        {
            "id": "sub_734",
            "parentid": "t_29",
            "topic": "Sn1 Reactions : Stereochemistry Based",
            "direction": "right"
        },
        {
            "id": "sub_735",
            "parentid": "t_29",
            "topic": "Sn2 Reactions : Stereochemistry Based",
            "direction": "right"
        },
        {
            "id": "sub_736",
            "parentid": "t_29",
            "topic": "Chemical Reaction Of Aryl Halide-Nsr",
            "direction": "right"
        },
        {
            "id": "sub_737",
            "parentid": "t_29",
            "topic": "Substitution V/S Elimination",
            "direction": "right"
        },
        {
            "id": "sub_738",
            "parentid": "t_29",
            "topic": "Chemical Reaction Of Aryl Halide -Esr",
            "direction": "right"
        },
        {
            "id": "sub_739",
            "parentid": "t_29",
            "topic": "Method Of Preparation Of Alkyl Halide",
            "direction": "right"
        },
        {
            "id": "sub_740",
            "parentid": "t_29",
            "topic": "Nucleophilicity, Effect Of Solvent",
            "direction": "right"
        },
        {
            "id": "sub_741",
            "parentid": "t_29",
            "topic": "\u03b1/\u03b2/Elimination Reaction (E1, E2, Pyrolysis) : Pyrolysis Reactivity Order",
            "direction": "right"
        },
        {
            "id": "sub_742",
            "parentid": "t_29",
            "topic": "\u03b1/\u03b2/Elimination Reaction (E1, E2, Pyrolysis) : E2 Reactivity Order",
            "direction": "right"
        },
        {
            "id": "t_30",
            "parentid": "st_10",
            "topic": "Alcohols, Phenols And Ethers",
            "direction": "right"
        },
        {
            "id": "sub_744",
            "parentid": "t_30",
            "topic": "Chemical Reaction Of Alcohol : Based On Reactivity (SN1- SN2)",
            "direction": "right"
        },
        {
            "id": "sub_745",
            "parentid": "t_30",
            "topic": "Preparation Of Alcohol",
            "direction": "right"
        },
        {
            "id": "sub_746",
            "parentid": "t_30",
            "topic": "Physical Properties Of Alcohol, Phenol, Ether",
            "direction": "right"
        },
        {
            "id": "sub_747",
            "parentid": "t_30",
            "topic": "Reduction Of Alcohol",
            "direction": "right"
        },
        {
            "id": "sub_748",
            "parentid": "t_30",
            "topic": "Chemical Reaction Of Alcohol : Hx,Lucas Reagent PCl3, PCl5, SOCl2",
            "direction": "right"
        },
        {
            "id": "sub_749",
            "parentid": "t_30",
            "topic": "Chemical Reaction Of Phenol (Other Reaction Then ESR)",
            "direction": "right"
        },
        {
            "id": "sub_750",
            "parentid": "t_30",
            "topic": "POC Of Alcohol, Phenol, Ether",
            "direction": "right"
        },
        {
            "id": "sub_751",
            "parentid": "t_30",
            "topic": "Oxidation Of Alcohol, Pinacol-Pinacolone Reaction",
            "direction": "right"
        },
        {
            "id": "sub_752",
            "parentid": "t_30",
            "topic": "Chemical Reaction Of Phenol - Kolbe's Reaction Reimer-Tiemann Reaction",
            "direction": "right"
        },
        {
            "id": "sub_753",
            "parentid": "t_30",
            "topic": "Preparation Of Phenol",
            "direction": "right"
        },
        {
            "id": "sub_754",
            "parentid": "t_30",
            "topic": "Preparation Of Ether",
            "direction": "right"
        },
        {
            "id": "sub_755",
            "parentid": "t_30",
            "topic": "Chemical Reaction Of Ether - Hydrolysis",
            "direction": "right"
        },
        {
            "id": "sub_756",
            "parentid": "t_30",
            "topic": "Chemical Reaction Of Alcohol : Williamson Continuous Ether Synthesis",
            "direction": "right"
        },
        {
            "id": "sub_757",
            "parentid": "t_30",
            "topic": "Chemical Reaction Of Phenol- Halogenation Of Phenol,Nitration Of Phenol-Kolbe's Reaction , Reimer - Tiemann Reaction",
            "direction": "right"
        },
        {
            "id": "sub_758",
            "parentid": "t_30",
            "topic": "Some Commercial Important Alcohol",
            "direction": "right"
        },
        {
            "id": "sub_759",
            "parentid": "t_30",
            "topic": "Chemical Reaction Of Ether : Reaction With Conc Hx",
            "direction": "right"
        },
        {
            "id": "sub_760",
            "parentid": "t_30",
            "topic": "Oxidation / Reduction Of Phenol",
            "direction": "right"
        },
        {
            "id": "sub_761",
            "parentid": "t_30",
            "topic": "Miscellaneous Questions",
            "direction": "right"
        },
        {
            "id": "sub_762",
            "parentid": "t_30",
            "topic": "Chemical Reaction Of Phenol - Halogenation Of Phenol,Nitration Of Phenol",
            "direction": "right"
        },
        {
            "id": "sub_763",
            "parentid": "t_30",
            "topic": "ESR On Phenol And Other Activated HCD (Except Aniline) : Other ESR",
            "direction": "right"
        },
        {
            "id": "sub_764",
            "parentid": "t_30",
            "topic": "Chemical Reaction Of Ether : Reactivity Order Based",
            "direction": "right"
        },
        {
            "id": "t_31",
            "parentid": "st_10",
            "topic": "Biomolecules",
            "direction": "right"
        },
        {
            "id": "sub_766",
            "parentid": "t_31",
            "topic": "Vitamin, Enzyme",
            "direction": "right"
        },
        {
            "id": "sub_767",
            "parentid": "t_31",
            "topic": "Carbohydrate : Mutarotation,Invert Sugar",
            "direction": "right"
        },
        {
            "id": "sub_768",
            "parentid": "t_31",
            "topic": "Carbohydrate : Classification Of Carbohydrates",
            "direction": "right"
        },
        {
            "id": "sub_769",
            "parentid": "t_31",
            "topic": "Test Of Various Biomolecules",
            "direction": "right"
        },
        {
            "id": "sub_770",
            "parentid": "t_31",
            "topic": "Carbohydrate : Reactions Of Glucose And Fructose",
            "direction": "right"
        },
        {
            "id": "sub_771",
            "parentid": "t_31",
            "topic": "Carbohydrate : Polysaccharides Based",
            "direction": "right"
        },
        {
            "id": "sub_772",
            "parentid": "t_31",
            "topic": "Amino Acid, Proteins : Type And Structure Of Amino Acid Based",
            "direction": "right"
        },
        {
            "id": "sub_773",
            "parentid": "t_31",
            "topic": "Nucleic Acid",
            "direction": "right"
        },
        {
            "id": "sub_774",
            "parentid": "t_31",
            "topic": "Miscellaneous Questions",
            "direction": "right"
        },
        {
            "id": "sub_775",
            "parentid": "t_31",
            "topic": "Carbohydrate : Disaccharides Based",
            "direction": "right"
        },
        {
            "id": "sub_776",
            "parentid": "t_31",
            "topic": "Hormones",
            "direction": "right"
        },
        {
            "id": "sub_777",
            "parentid": "t_31",
            "topic": "Carbohydrate : Miscellaneous Questions",
            "direction": "right"
        },
        {
            "id": "sub_778",
            "parentid": "t_31",
            "topic": "Carbohydrate : Anomer, Epimer",
            "direction": "right"
        },
        {
            "id": "sub_779",
            "parentid": "t_31",
            "topic": "Amino Acid, Proteins : Type And Structure Of Protein Based",
            "direction": "right"
        },
        {
            "id": "t_32",
            "parentid": "st_10",
            "topic": "Optical Isomerism",
            "direction": "right"
        },
        {
            "id": "sub_781",
            "parentid": "t_32",
            "topic": "Phone Of Symmetry, Centre Of Symmetry",
            "direction": "right"
        },
        {
            "id": "sub_782",
            "parentid": "t_32",
            "topic": "Fg Isomerism",
            "direction": "right"
        },
        {
            "id": "sub_783",
            "parentid": "t_32",
            "topic": "Degree Of Unsaturation",
            "direction": "right"
        },
        {
            "id": "sub_784",
            "parentid": "t_32",
            "topic": "Racemic Mixture",
            "direction": "right"
        },
        {
            "id": "sub_785",
            "parentid": "t_32",
            "topic": "Relation Based Questions : Enantiomers",
            "direction": "right"
        },
        {
            "id": "sub_786",
            "parentid": "t_32",
            "topic": "Optical Activity In Cumulenes And Biphenyl Compound",
            "direction": "right"
        },
        {
            "id": "sub_787",
            "parentid": "t_32",
            "topic": "Relation Based Questions : Homomers",
            "direction": "right"
        },
        {
            "id": "sub_788",
            "parentid": "t_32",
            "topic": "Metamerism",
            "direction": "right"
        },
        {
            "id": "sub_789",
            "parentid": "t_32",
            "topic": "Plane Of Symmetry, Centre Of Symmetry",
            "direction": "right"
        },
        {
            "id": "sub_790",
            "parentid": "t_32",
            "topic": "Meso Compound",
            "direction": "right"
        },
        {
            "id": "sub_791",
            "parentid": "t_32",
            "topic": "Relation Based Questions : Diastereomers",
            "direction": "right"
        },
        {
            "id": "sub_792",
            "parentid": "t_32",
            "topic": "Configuration Of Chiral Centre : R , S",
            "direction": "right"
        },
        {
            "id": "sub_793",
            "parentid": "t_32",
            "topic": "Number Of Geometrical Isomers",
            "direction": "right"
        },
        {
            "id": "sub_794",
            "parentid": "t_32",
            "topic": "Number Of Structural Isomers : Total Possible Structural Isomer",
            "direction": "right"
        },
        {
            "id": "sub_795",
            "parentid": "t_32",
            "topic": "Configuration Of Chiral Centre : Erythro - Threo",
            "direction": "right"
        },
        {
            "id": "sub_796",
            "parentid": "t_32",
            "topic": "Position Isomerism",
            "direction": "right"
        },
        {
            "id": "sub_797",
            "parentid": "t_32",
            "topic": "Number Of Stereoisomers",
            "direction": "right"
        },
        {
            "id": "sub_798",
            "parentid": "t_32",
            "topic": "Interconversion In Various Projections",
            "direction": "right"
        },
        {
            "id": "sub_799",
            "parentid": "t_32",
            "topic": "Sawhorse Projection, Newman Projection",
            "direction": "right"
        },
        {
            "id": "sub_800",
            "parentid": "t_32",
            "topic": "Chain Isomerism",
            "direction": "right"
        },
        {
            "id": "sub_801",
            "parentid": "t_32",
            "topic": "Number Of Optical Isomers",
            "direction": "right"
        },
        {
            "id": "sub_802",
            "parentid": "t_32",
            "topic": "Number Of Optical Stereoisomers",
            "direction": "right"
        },
        {
            "id": "sub_803",
            "parentid": "t_32",
            "topic": "Chiral Centre",
            "direction": "right"
        },
        {
            "id": "sub_804",
            "parentid": "t_32",
            "topic": "Configuration Of Chiral Centre : D, L",
            "direction": "right"
        },
        {
            "id": "sub_805",
            "parentid": "t_32",
            "topic": "Chiral / Achiral Molecule",
            "direction": "right"
        },
        {
            "id": "t_33",
            "parentid": "st_11",
            "topic": "D And F Block Elements",
            "direction": "right"
        },
        {
            "id": "sub_807",
            "parentid": "t_33",
            "topic": "Properties Of Transition Elements (d-Block) (Electrode Potential, Oxidation States, Alloy Formation, Formation Of Interstitial Compounds, Catalytic Properties, Complex Forming Tendency)",
            "direction": "right"
        },
        {
            "id": "sub_808",
            "parentid": "t_33",
            "topic": "General Properties Of f Block Elements",
            "direction": "right"
        },
        {
            "id": "sub_809",
            "parentid": "t_33",
            "topic": "Compounds Of d-Block Elements (KMno4, Preparation, Properties, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_810",
            "parentid": "t_33",
            "topic": "General Properties Of The Transition Elements (d-Block) (Atomic Size, IP, Mpt, Heat Of Atomisation, Magnetic Properties)",
            "direction": "right"
        },
        {
            "id": "sub_811",
            "parentid": "t_33",
            "topic": "Comparison Between Lanthanoids And Actinoids",
            "direction": "right"
        },
        {
            "id": "sub_812",
            "parentid": "t_33",
            "topic": "Compounds Of d-Block Elements (K2Cr2O7, Preparation, Properties, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_813",
            "parentid": "t_33",
            "topic": "Some Applications Of d And f Block Elements",
            "direction": "right"
        },
        {
            "id": "sub_814",
            "parentid": "t_33",
            "topic": "Electronic Configuration Of d Block And f Block Elements",
            "direction": "right"
        },
        {
            "id": "t_34",
            "parentid": "st_11",
            "topic": "Principles Related To Practical Chemistry (Inorganic Chemistry)",
            "direction": "right"
        },
        {
            "id": "sub_816",
            "parentid": "t_34",
            "topic": "The Chemistry Involved In The Preparation Of Inorganic Compounds : Mohr's Salt, Potash Alum.",
            "direction": "right"
        },
        {
            "id": "sub_817",
            "parentid": "t_34",
            "topic": "Chemical Principles Involved In The Qualitative Salt Analysis Of Cations And Anions",
            "direction": "right"
        },
        {
            "id": "t_35",
            "parentid": "st_11",
            "topic": "p-Block Elements - Group 13 To 18",
            "direction": "right"
        },
        {
            "id": "sub_819",
            "parentid": "t_35",
            "topic": "Drying/Dehydrating Agent And Bleaching Agent",
            "direction": "right"
        },
        {
            "id": "sub_820",
            "parentid": "t_35",
            "topic": "Compounds Of Nitrogen (N2, NH3, Preparation, Properties, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_821",
            "parentid": "t_35",
            "topic": "Inert Pair Effect",
            "direction": "right"
        },
        {
            "id": "sub_822",
            "parentid": "t_35",
            "topic": "Back Bonding (Pi-Coordinate Bond)",
            "direction": "right"
        },
        {
            "id": "sub_823",
            "parentid": "t_35",
            "topic": "Compounds Of Carbon And Silicon (SiO2, CO, CO2, Carbides)",
            "direction": "right"
        },
        {
            "id": "sub_824",
            "parentid": "t_35",
            "topic": "Compounds Of Boron (B2H6, Structure, Preparation, Properties, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_825",
            "parentid": "t_35",
            "topic": "Hydrolysis Of Non Metals And Halogens (P4, S8, F2, Cl2, Br2, I2)",
            "direction": "right"
        },
        {
            "id": "sub_826",
            "parentid": "t_35",
            "topic": "Oxyacids (Naming, Structures)",
            "direction": "right"
        },
        {
            "id": "sub_827",
            "parentid": "t_35",
            "topic": "General Properties And Trends Of Group-18/Uses Of Noble Gases",
            "direction": "right"
        },
        {
            "id": "sub_828",
            "parentid": "t_35",
            "topic": "General Properties And Trends Of Oxygen Family",
            "direction": "right"
        },
        {
            "id": "sub_829",
            "parentid": "t_35",
            "topic": "Compounds Of Nitrogen (HNO3, Preparation, Properties, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_830",
            "parentid": "t_35",
            "topic": "Hydrolysis Of Non Metallic Hydrides, Oxyacids (Oleum, Marshall's Acid)",
            "direction": "right"
        },
        {
            "id": "sub_831",
            "parentid": "t_35",
            "topic": "Compounds Of Boron (Borax, Structure, Properties, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_832",
            "parentid": "t_35",
            "topic": "General Properties Of Carbon Family And Anomalous Properties Of Carbon",
            "direction": "right"
        },
        {
            "id": "sub_833",
            "parentid": "t_35",
            "topic": "Compounds Of Sulphur (SO2, H2S, H2SO4, Preparation, Properties, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_834",
            "parentid": "t_35",
            "topic": "Hydrolysis Of Carbide, Nitride, Sulphides (Ionic)/Other General Examples",
            "direction": "right"
        },
        {
            "id": "sub_835",
            "parentid": "t_35",
            "topic": "Uses Of Boron, Al And Compounds (AlUM,AlCl3,Al2O3)",
            "direction": "right"
        },
        {
            "id": "sub_836",
            "parentid": "t_35",
            "topic": "Silicones (Structure, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_837",
            "parentid": "t_35",
            "topic": "Silicates (Type, Structure, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_838",
            "parentid": "t_35",
            "topic": "General Properties And Trends Of Halogen Family",
            "direction": "right"
        },
        {
            "id": "sub_839",
            "parentid": "t_35",
            "topic": "Allotropes (Carbon)",
            "direction": "right"
        },
        {
            "id": "sub_840",
            "parentid": "t_35",
            "topic": "Compounds Of Oxygen (O2, O3, Preparation, Properties, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_841",
            "parentid": "t_35",
            "topic": "Compounds Of Boron (H3BO3, Structure, Properties, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_842",
            "parentid": "t_35",
            "topic": "Dimerisation (Banana Bond, Coordinate Bond, Odd e-Dimer)",
            "direction": "right"
        },
        {
            "id": "sub_843",
            "parentid": "t_35",
            "topic": "General Properties And Trends Of Nitrogen Family",
            "direction": "right"
        },
        {
            "id": "sub_844",
            "parentid": "t_35",
            "topic": "Uses Of Halogen And Compounds",
            "direction": "right"
        },
        {
            "id": "sub_845",
            "parentid": "t_35",
            "topic": "Hydrolysis (BeCl2, MgCl2, BCl3, AlCl3, SiCl4, PCl5 And Others)",
            "direction": "right"
        },
        {
            "id": "sub_846",
            "parentid": "t_35",
            "topic": "Oxyacids (Properties)",
            "direction": "right"
        },
        {
            "id": "sub_847",
            "parentid": "t_35",
            "topic": "Allotropes (P, S, Sn)",
            "direction": "right"
        },
        {
            "id": "sub_848",
            "parentid": "t_35",
            "topic": "General Properties Of Boron Family And Anomalous Properties Of Boron",
            "direction": "right"
        },
        {
            "id": "sub_849",
            "parentid": "t_35",
            "topic": "Compounds Of Group-17 Elements (Cl2, HCl, Interhalogen Compounds, Pseudo Halogen, Pseudohalides )",
            "direction": "right"
        },
        {
            "id": "sub_850",
            "parentid": "t_35",
            "topic": "Uses Of O2 Gas, Sulphur",
            "direction": "right"
        },
        {
            "id": "sub_851",
            "parentid": "t_35",
            "topic": "Uses Of Carbon, Silicon And Compounds",
            "direction": "right"
        },
        {
            "id": "sub_852",
            "parentid": "t_35",
            "topic": "Compounds Of Phosphorus (PH3, PCl3, PCl5, Preparation, Properties, Uses)",
            "direction": "right"
        },
        {
            "id": "sub_853",
            "parentid": "t_35",
            "topic": "Uses Of N2 Gas, Phosphorus",
            "direction": "right"
        },
        {
            "id": "t_36",
            "parentid": "st_11",
            "topic": "Coordination Compounds",
            "direction": "right"
        },
        {
            "id": "sub_855",
            "parentid": "t_36",
            "topic": "Ligands (Types, Denticity, Donor Atom)",
            "direction": "right"
        },
        {
            "id": "sub_856",
            "parentid": "t_36",
            "topic": "Introduction/Definition Of Important Terms Pertaining To Coordination Compounds",
            "direction": "right"
        },
        {
            "id": "sub_857",
            "parentid": "t_36",
            "topic": "Importance And Applications Of Coordination Compounds",
            "direction": "right"
        },
        {
            "id": "sub_858",
            "parentid": "t_36",
            "topic": "Isomerism In Complexes (Structural Isomerism)",
            "direction": "right"
        },
        {
            "id": "sub_859",
            "parentid": "t_36",
            "topic": "Isomerism In Complexes (Optical Isomerism)",
            "direction": "right"
        },
        {
            "id": "sub_860",
            "parentid": "t_36",
            "topic": "Bonding In Coordination Compounds (Valence Bond Theory Concepts)",
            "direction": "right"
        },
        {
            "id": "sub_861",
            "parentid": "t_36",
            "topic": "Crystal Field Theory And Applications (Stability Of Complex, Colour Of Complex)",
            "direction": "right"
        },
        {
            "id": "sub_862",
            "parentid": "t_36",
            "topic": "Werner's Theory/Calculation Of EAN",
            "direction": "right"
        },
        {
            "id": "sub_863",
            "parentid": "t_36",
            "topic": "Isomerism In Complexes (Geometrical Isomerism)",
            "direction": "right"
        },
        {
            "id": "sub_864",
            "parentid": "t_36",
            "topic": "Synergic Bonding (Bonding In Metal Carbonyl)",
            "direction": "right"
        },
        {
            "id": "sub_865",
            "parentid": "t_36",
            "topic": "Nomenclature Of Coordination Compounds",
            "direction": "right"
        },
        {
            "id": "sub_866",
            "parentid": "t_36",
            "topic": "Application Of VBT (Hybridisation, Geometry, Magnetic Nature)",
            "direction": "right"
        },
        {
            "id": "sub_867",
            "parentid": "t_36",
            "topic": "Organometallic Compounds",
            "direction": "right"
        },
        {
            "id": "t_37",
            "parentid": "st_12",
            "topic": "Principles Related To Practical Chemistry (Physical Chemistry)",
            "direction": "right"
        },
        {
            "id": "sub_869",
            "parentid": "t_37",
            "topic": "Preparation Of Lyophilic And Lyophobic Sols.",
            "direction": "right"
        },
        {
            "id": "sub_870",
            "parentid": "t_37",
            "topic": "Kinetic Study Of The Reaction Of Iodide Ions With Hydrogen Peroxide At Room Temperature.",
            "direction": "right"
        },
        {
            "id": "t_38",
            "parentid": "st_12",
            "topic": "Electrochemistry",
            "direction": "right"
        },
        {
            "id": "sub_872",
            "parentid": "t_38",
            "topic": "Theory Of Galvanic Cell, Salt Bridge And Its Function",
            "direction": "right"
        },
        {
            "id": "sub_873",
            "parentid": "t_38",
            "topic": "Dry Cell",
            "direction": "right"
        },
        {
            "id": "sub_874",
            "parentid": "t_38",
            "topic": "Faraday's Second Law Of Electrolysis",
            "direction": "right"
        },
        {
            "id": "sub_875",
            "parentid": "t_38",
            "topic": "Fuel Cell",
            "direction": "right"
        },
        {
            "id": "sub_876",
            "parentid": "t_38",
            "topic": "Concentration Cell",
            "direction": "right"
        },
        {
            "id": "sub_877",
            "parentid": "t_38",
            "topic": "Faraday's First Law Of Electrolysis",
            "direction": "right"
        },
        {
            "id": "sub_878",
            "parentid": "t_38",
            "topic": "Calculation Of Electrode Potential And pH Of Hydrogen Electrode",
            "direction": "right"
        },
        {
            "id": "sub_879",
            "parentid": "t_38",
            "topic": "Lead Storage Battery",
            "direction": "right"
        },
        {
            "id": "sub_880",
            "parentid": "t_38",
            "topic": "Corrosion And Its Prevention",
            "direction": "right"
        },
        {
            "id": "sub_881",
            "parentid": "t_38",
            "topic": "Reference Electrode",
            "direction": "right"
        },
        {
            "id": "sub_882",
            "parentid": "t_38",
            "topic": "ECS",
            "direction": "right"
        },
        {
            "id": "sub_883",
            "parentid": "t_38",
            "topic": "Factors Affecting Electrolytic Conductance",
            "direction": "right"
        },
        {
            "id": "sub_884",
            "parentid": "t_38",
            "topic": "Prediction Of Spontaneity Of Cell Reaction By E\u00b0Cell Or \u0394G\u00b0",
            "direction": "right"
        },
        {
            "id": "sub_885",
            "parentid": "t_38",
            "topic": "Theory Of Electrolytic Cell, Qualitative Aspects Of Electrolysis",
            "direction": "right"
        },
        {
            "id": "sub_886",
            "parentid": "t_38",
            "topic": "Calculation Of E\u00b0 Of Half Cell Using \u0394G\u00b0 Concept",
            "direction": "right"
        },
        {
            "id": "sub_887",
            "parentid": "t_38",
            "topic": "Application Of Kohlrausch's Law",
            "direction": "right"
        },
        {
            "id": "sub_888",
            "parentid": "t_38",
            "topic": "Determination Solubility And Ksp With The Help Of \u039b (Saturated)",
            "direction": "right"
        },
        {
            "id": "sub_889",
            "parentid": "t_38",
            "topic": "E\u00b0 Cell And Ksp (Solubility Product) Based Problems",
            "direction": "right"
        },
        {
            "id": "sub_890",
            "parentid": "t_38",
            "topic": "Molar Conductance",
            "direction": "right"
        },
        {
            "id": "sub_891",
            "parentid": "t_38",
            "topic": "Introduction Of Electrochemistry",
            "direction": "right"
        },
        {
            "id": "sub_892",
            "parentid": "t_38",
            "topic": "Equivalent Conductance",
            "direction": "right"
        },
        {
            "id": "sub_893",
            "parentid": "t_38",
            "topic": "Prediction Of Oxidising And Reducing Power From SRP Or SOP",
            "direction": "right"
        },
        {
            "id": "sub_894",
            "parentid": "t_38",
            "topic": "Remaining Application Of ECS",
            "direction": "right"
        },
        {
            "id": "sub_895",
            "parentid": "t_38",
            "topic": "Calculation Of Equilibrium Constant With Help Of E\u00b0Cell Or \u0394G\u00b0 (Or Vice-Versa)",
            "direction": "right"
        },
        {
            "id": "sub_896",
            "parentid": "t_38",
            "topic": "Debye-Huckel-Onsager Equation",
            "direction": "right"
        },
        {
            "id": "sub_897",
            "parentid": "t_38",
            "topic": "Calculation Of Electrode Potential (ERP Or EOP)",
            "direction": "right"
        },
        {
            "id": "sub_898",
            "parentid": "t_38",
            "topic": "Kohlrausch's Law",
            "direction": "right"
        },
        {
            "id": "sub_899",
            "parentid": "t_38",
            "topic": "Resistivity, Conductivity, Cell Constant",
            "direction": "right"
        },
        {
            "id": "sub_900",
            "parentid": "t_38",
            "topic": "Nernst Equation For Complete Cell",
            "direction": "right"
        },
        {
            "id": "t_39",
            "parentid": "st_12",
            "topic": "Chemical Kinetics",
            "direction": "right"
        },
        {
            "id": "sub_902",
            "parentid": "t_39",
            "topic": "Elementary And Complex Reaction",
            "direction": "right"
        },
        {
            "id": "sub_903",
            "parentid": "t_39",
            "topic": "Problems Based On Mixed Concept Of Different Order Reactions",
            "direction": "right"
        },
        {
            "id": "sub_904",
            "parentid": "t_39",
            "topic": "Theory And Unit Of Rate Constant",
            "direction": "right"
        },
        {
            "id": "sub_905",
            "parentid": "t_39",
            "topic": "Theory Of Order And Molecularity Of Reaction",
            "direction": "right"
        },
        {
            "id": "sub_906",
            "parentid": "t_39",
            "topic": "Interval Formula Based First Order Problems",
            "direction": "right"
        },
        {
            "id": "sub_907",
            "parentid": "t_39",
            "topic": "Determination Of Order With The Help Of Half Life Method",
            "direction": "right"
        },
        {
            "id": "sub_908",
            "parentid": "t_39",
            "topic": "Parallel First Order Reaction",
            "direction": "right"
        },
        {
            "id": "sub_909",
            "parentid": "t_39",
            "topic": "General Integrated Rate Equation",
            "direction": "right"
        },
        {
            "id": "sub_910",
            "parentid": "t_39",
            "topic": "Rate Of Formation, Rate Of Disappearance And Rate Of Reaction In Form Of Stoichiometry",
            "direction": "right"
        },
        {
            "id": "sub_911",
            "parentid": "t_39",
            "topic": "Pseudo Order Reaction",
            "direction": "right"
        },
        {
            "id": "sub_912",
            "parentid": "t_39",
            "topic": "Effect Of Temperature On Rate And Rate Constant, Temp. Coefficient",
            "direction": "right"
        },
        {
            "id": "sub_913",
            "parentid": "t_39",
            "topic": "Mechanism Of Reaction Based Rate Law Problem",
            "direction": "right"
        },
        {
            "id": "sub_914",
            "parentid": "t_39",
            "topic": "Second Order Reaction",
            "direction": "right"
        },
        {
            "id": "sub_915",
            "parentid": "t_39",
            "topic": "Simple Rate Law Based Problems",
            "direction": "right"
        },
        {
            "id": "sub_916",
            "parentid": "t_39",
            "topic": "Problems Based On Relationship Between \u0394H And Ea",
            "direction": "right"
        },
        {
            "id": "sub_917",
            "parentid": "t_39",
            "topic": "First Order Reaction",
            "direction": "right"
        },
        {
            "id": "sub_918",
            "parentid": "t_39",
            "topic": "Remaining Factors Affecting Rate Of Reaction",
            "direction": "right"
        },
        {
            "id": "sub_919",
            "parentid": "t_39",
            "topic": "Average Rate",
            "direction": "right"
        },
        {
            "id": "sub_920",
            "parentid": "t_39",
            "topic": "Introduction Of Chemical Kinetics, Rate Of Reaction",
            "direction": "right"
        },
        {
            "id": "sub_921",
            "parentid": "t_39",
            "topic": "Zero Order Reaction",
            "direction": "right"
        },
        {
            "id": "sub_922",
            "parentid": "t_39",
            "topic": "Prediction Of Order From Graph",
            "direction": "right"
        },
        {
            "id": "sub_923",
            "parentid": "t_39",
            "topic": "Arrhenius Equation",
            "direction": "right"
        },
        {
            "id": "sub_924",
            "parentid": "t_39",
            "topic": "Instantaneous Rate",
            "direction": "right"
        },
        {
            "id": "sub_925",
            "parentid": "t_39",
            "topic": "Collision Theory",
            "direction": "right"
        },
        {
            "id": "sub_926",
            "parentid": "t_39",
            "topic": "Experimental Table Based Rate Law Problem",
            "direction": "right"
        },
        {
            "id": "sub_927",
            "parentid": "t_39",
            "topic": "Pressure Based First Order Rate Constant Problems",
            "direction": "right"
        },
        {
            "id": "t_40",
            "parentid": "st_12",
            "topic": "Solutions",
            "direction": "right"
        },
        {
            "id": "sub_929",
            "parentid": "t_40",
            "topic": "RLVP Problems (For i>1)",
            "direction": "right"
        },
        {
            "id": "sub_930",
            "parentid": "t_40",
            "topic": "Non-Ideal Solution Having Negative Deviation",
            "direction": "right"
        },
        {
            "id": "sub_931",
            "parentid": "t_40",
            "topic": "Molarity (M)",
            "direction": "right"
        },
        {
            "id": "sub_932",
            "parentid": "t_40",
            "topic": "Depression In Freezing Point (For i = 1)",
            "direction": "right"
        },
        {
            "id": "sub_933",
            "parentid": "t_40",
            "topic": "Osmosis And Reverse Osmosis",
            "direction": "right"
        },
        {
            "id": "sub_934",
            "parentid": "t_40",
            "topic": "Depression In Freezing Point (For i< 1)",
            "direction": "right"
        },
        {
            "id": "sub_935",
            "parentid": "t_40",
            "topic": "Relative Lowering In V.P. For Normal Solution (i = 1)",
            "direction": "right"
        },
        {
            "id": "sub_936",
            "parentid": "t_40",
            "topic": "Introduction Of Solution",
            "direction": "right"
        },
        {
            "id": "sub_937",
            "parentid": "t_40",
            "topic": "Van't Hoff Factor For Dissociation",
            "direction": "right"
        },
        {
            "id": "sub_938",
            "parentid": "t_40",
            "topic": "Solubility Of Gases In Liquid, Henry's Law",
            "direction": "right"
        },
        {
            "id": "sub_939",
            "parentid": "t_40",
            "topic": "Osmotic Pressure (For i>1)",
            "direction": "right"
        },
        {
            "id": "sub_940",
            "parentid": "t_40",
            "topic": "RLVP Problems (For i<1)",
            "direction": "right"
        },
        {
            "id": "sub_941",
            "parentid": "t_40",
            "topic": "Remaining Concentration Terms",
            "direction": "right"
        },
        {
            "id": "sub_942",
            "parentid": "t_40",
            "topic": "Normality (N)",
            "direction": "right"
        },
        {
            "id": "sub_943",
            "parentid": "t_40",
            "topic": "Vapour Pressure, Raoult's Law For Liq-Liq Solution",
            "direction": "right"
        },
        {
            "id": "sub_944",
            "parentid": "t_40",
            "topic": "Elevation In B.P (i = 1)",
            "direction": "right"
        },
        {
            "id": "sub_945",
            "parentid": "t_40",
            "topic": "Elevation In Boiling Point (For i<1)",
            "direction": "right"
        },
        {
            "id": "sub_946",
            "parentid": "t_40",
            "topic": "Relation Between Molarity And Normality",
            "direction": "right"
        },
        {
            "id": "sub_947",
            "parentid": "t_40",
            "topic": "Concept Of Isotonic Solution",
            "direction": "right"
        },
        {
            "id": "sub_948",
            "parentid": "t_40",
            "topic": "Volume Strength Of H2O2",
            "direction": "right"
        },
        {
            "id": "sub_949",
            "parentid": "t_40",
            "topic": "Elevation In Boiling Point (For i>1)",
            "direction": "right"
        },
        {
            "id": "sub_950",
            "parentid": "t_40",
            "topic": "Molality (m)",
            "direction": "right"
        },
        {
            "id": "sub_951",
            "parentid": "t_40",
            "topic": "Van't Hoff Factor For Association",
            "direction": "right"
        },
        {
            "id": "sub_952",
            "parentid": "t_40",
            "topic": "Azeotropic Mixtures",
            "direction": "right"
        },
        {
            "id": "sub_953",
            "parentid": "t_40",
            "topic": "Relation Between Molality And Mole Fraction",
            "direction": "right"
        },
        {
            "id": "sub_954",
            "parentid": "t_40",
            "topic": "Ideal Solution Of 2 Liquids A And B",
            "direction": "right"
        },
        {
            "id": "sub_955",
            "parentid": "t_40",
            "topic": "Concept Of Dilution And Mixing Of Solutions",
            "direction": "right"
        },
        {
            "id": "sub_956",
            "parentid": "t_40",
            "topic": "Relation Between Molarity And Molality",
            "direction": "right"
        },
        {
            "id": "sub_957",
            "parentid": "t_40",
            "topic": "Non-Ideal Solution Having Positive Deviation",
            "direction": "right"
        },
        {
            "id": "sub_958",
            "parentid": "t_40",
            "topic": "Osmotic Pressure (For i = 1)",
            "direction": "right"
        },
        {
            "id": "sub_959",
            "parentid": "t_40",
            "topic": "Depression In Freezing Point (For i>1)",
            "direction": "right"
        },
        {
            "id": "t_41",
            "parentid": "st_13",
            "topic": "empty",
            "direction": "right"
        },
        {
            "id": "sub_961",
            "parentid": "t_41",
            "topic": "empty",
            "direction": "right"
        }
    ]
}
