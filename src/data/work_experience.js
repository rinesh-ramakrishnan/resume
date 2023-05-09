const work_experience = [
    {
        role: "Lead ETL Developer",
        startDate:'October 2019',
        endDate: 'Present',
        company: 'EY Global Delivery Services',
        location: "Kochi, India",
        client: 'Insurance Australia Group, Australia',
        tools: ['Greenplum', 'PostgreSQL', 'SQL/PLpgSQL', 'Python', 'Git', 'Jira', 'Confluence'],
        responsibilities: [
            "Designed, developed, and supported 10+ data pipelines for seamless data integration, scalability, and maintenance.",
            "Designed and implemented a solution utilizing complex SQL regular expressions to extract layup periods from unstructured text data, delivering essential insights for the pricing team in rate calculation.",
            "Led a team of four and worked in collaboration with business analysts to comprehensively understand and document the project requirements.",
            "Revamped column mapping system using JSON data type in Greenplum database to reduce query complexity and improve scalability, resulting in streamlined data extraction and analysis processes.",
            "As Lead Developer for an Agile project, I engage in high-level planning, sprint planning, and collaborate regularly with stakeholders to ensure alignment with requirements.",
            "Successfully executed sprint planning and maintained regular collaboration with cross-functional teams in an Agile environment to ensure timely and efficient project delivery."
        ],
        projects: [
            {
                name: "Pricing Engine Algorithm Simplification(PEAS)",
                duration: "October, 2019 to Present",
                description: "This project involves the migration of Data warehouse platform from Oracle to Netezza DW Appliance " +
                    "and the maintenance of the new platform. Netezza being linear scalable in architecture will improve the performance " +
                    "of the system and is best positioned for adding new data marts in future."
            }
        ],
        tasks: [
            "Designed and implemented a data pipeline to extract information from unstructured comments data stored in Greenplum " +
            "using regular expression(regex) pattern matching and stored the processed data in Greenplum.",
            "Co-developed an ETL pipeline in Greenplum to process pricing data in multiple legacy source systems, " +
            "loaded enriched and harmonized data into the database thereby making it suitable for pricing analysis.",
            "Designed and implemented an ETL process using Python to automaticaly extract data from Jira board and generate burnup chart " +
            "for any sprint. Automation of this process reduced manual activity by 90% and is being used in 10+ projects currently.",
            "Designed and developed a production level code using Python for validating coding standards followed by developers. This utility " +
            "can be accessed through a CLI, Web Browser or via api calls.",
            "Supervising a team of 3 members as Team Lead."
        ]
    },
    {
        role: "Senior ETL Developer",
        startDate:'July 2015',
        endDate: 'October 2019',
        company: 'Infosys Limited',
        location: "Duesseldorf, Germany",
        client: 'Uniper, Germany',
        tools: ['Oracle', 'SQL/PLSQL', 'SAP BODS 4.2', 'SVN', 'Jira', 'Confluence'],
        responsibilities: [],
        projects: [
            {
                name: "FX-2step conversion for GTM",
                duration: 'June, 2018 to October, 2019',
                description: "The Project is to replace existing FX conversion process to simplify the FX conversion rules " +
                    "and implement a generic solution for all GTM tables which is easy to maintain and enhance. " +
                    "Current process which is complex and separate for each GTM is to be replaced with generic configurations " + 
                    "common for all GTM and easily controlled using database tables there by avoiding the need for an ETL code " +
                    "deployment in case of future changes."
            },
            {
                name: "Virtual Storage implementation for data archiving",
                duration: 'February, 2018 to June, 2018',
                description: "The Project is to build an oracle package which can be used for data migration data between " +
                    "primary server and cold storage server. This implementation will help to release additional database " +
                    "storage required for storing old data in primary server which allows the servers and storage operate " +
                    "more efficiently"
            },
            {
                name: "Market Abuse Report (MAR) Interface implementation",
                duration: 'February, 2018 to June, 2018',
                description: "MAR regulation reporting is used for enhancing market integrity and investor protection. " + 
                    "To this end MAR updates and strengthened the existing MAD framework by extending its scope to new markets" +
                    " and trading strategies and by introducing new requirements. This Project is to build a new ERP interface to" + 
                    " process MAR feeds from source systems and enrich/format the data for reporting."
            },
            {
                name: "Generic Trade Model(GTM) Harmonization for Power, Gas & Oil, Solar and Coal products",
                duration: 'February, 2017 to February, 2018',
                description: "The Project is to build a harmonized data model which can be used to store both Gas and " +
                    "Power trade information coming from various source systems which allows more natural access for " + 
                    "cross-commodity reporting, easy maintenance and future enhancements. This project also involves the" +
                    " migration of Generic Trade Model data from old tables to new harmonized tables."
            },
            {
                name: "EMIR Compliant trade report generation",
                duration: 'August, 2016 to February, 2017',
                description: "This project involves generation of trade reports in XML format for reporting the details of " +
                    "derivative contracts that are relevant for EMIR reporting. The Enterprise Reporting (ERP) system will serve " +
                    "as an intermediary system to gather and consolidate report-relevant data from various source systems and " +
                    "then generate the XML reports. The project is implemented using SAP BODS to load data to Data mart and " + 
                    "generate XML reports."
            },
            {
                name: "REMIT Compliant trade report generation",
                duration: 'July, 2015 to August, 2016',
                description: "This project involves building an application to report the details of transactions and orders of " +
                    "wholesale energy product to ACER. The Enterprise Reporting (ERP) system will serve as an intermediary system " +
                    "to gather and consolidate report-relevant data from various source systems and then generate the XML reports. " +
                    "The project is implemented using SAP BODS to load, cleanse and apply business validations to data from 9 " +
                    "different source systems and the data thus loaded to Data mart is used to generate XML reports."
            }
        ],
        tasks: [
            "Designed and implemented a generic FX conversion process to replace existing process specific to each object " +
            "using Oracle database and SAP BODS dataflows.",
            "Designed and developed virtual storage process for archiving data older than 1 year using Oracle PLSQL programming.",
            "Developed an ETL pipeline using SAP BODS for processing MAR(Market Abuse Report) feed from multiple source systems, used for " +
            "enhancing market integrity and investor protection.",
            "Designed and developed an ETL pipeline in SAP BODS to harmonize the Generic Trade Model(GTM) for Power, Gas & Oil, Solar and " +
            "Coal products.",
            "Designed and implemented multiple ETL pipelines in SAP BODS for EMIR & REMIT reporting.",
            "Designed and implemented generic delta detection to improve the performance.",
            "Supervised a team of ten members as Team Lead."
        ]
    },
    {
        role: "Junior ETL Developer",
        startDate:'December 2011',
        endDate: 'July 2015',
        company: 'Infosys Limited',
        location: "Trivandrum, India",
        client: 'Cellular South, USA',
        tools: ['Netezza', 'Oracle', 'SQL/PLSQL/PLpgSQL', 'SAP BODS 4.0'],
        responsibilities: [],
        projects: [
            {
                name: "Oracle to Netezza BI Migration Project",
                duration: "December, 2011 to July, 2015",
                description: "This project involves the migration of Data warehouse platform from Oracle to Netezza DW Appliance " +
                    "and the maintenance of the new platform. Netezza being linear scalable in architecture will improve the performance " +
                    "of the system and is best positioned for adding new data marts in future."
            }
        ],
        tasks: [
            "Co-developed an ETL pipeline in SAP BODS and Netezza to migrate existing Data Warehouse from Oracle to Netezza platform.",
            "Automated the ETL process by implementing job dependency and event based triggering using SAP BODS and Netezza.",
            "Automated the data migration process(Oracle to Netezza) using Unix shell scripting and Netezza procedures.",
            "Implemented custom email notifications in SAP BODS to notify the stakeholders regarding status of SAP Jobs.",
            "Developed a user interface for dynamically generating SAP BODS dataflow components using Python. This saved a lot of effort" +
            " required in performing redundant activities."
        ]
    }
]

export default work_experience;