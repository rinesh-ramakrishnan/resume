const work_experience = [
    {
        role: "Senior",
        startDate:'October 2019',
        endDate: 'Present',
        company: 'EY Global Delivery Services',
        location: "Kochi, India",
        client: 'Insurance Australia Group, Australia',
        tools: ['Greenplum', 'PostgreSQL', 'SQL/PLpgSQL', 'Python', 'Git', 'Jira', 'Confluence'],
        responsibilities: [
            "Developed and supported 10+ data pipelines for seamless data integration, scalability, and maintenance.",
            "Designed and implemented a solution utilizing complex SQL regular expressions to extract layup periods from unstructured text data, delivering essential insights for the pricing team in rate calculation.",
            "Led a team of four and worked in collaboration with business stakeholders to comprehensively understand and translate business needs to actionable project requirements.",
            "Revamped column mapping system using JSON data type in Greenplum database to reduce query complexity and improve scalability, resulting in streamlined data extraction and analysis processes.",
            "Successfully executed sprint planning and maintained regular collaboration with cross-functional teams in an Agile environment to ensure timely and efficient project delivery.",
            "Executed release management activities using Git and Jenkins, ensuring a smooth deployment process.",
            "Provided critical support in SIT/UAT defect fixing and testing as well as seamless production releases.",
            "Created an automated ETL process using Python to extract data from Jira boards and generate burnup charts for sprints, " +
            "resulting in a 90% reduction in manual effort. The solution was presented to stakeholders, which was well-received and " +
            "successfully implemented across 10+ projects.",
            "Designed and implemented a robust Python-based tool for validating coding standards, offering accessibility via CLI, " +
            "web browser, or API. This utility has been instrumental in enhancing the accuracy and consistency of coding practices " +
            "and has effectively contributed to the maintenance and enhancement of existing codebases",
            "Automated bulk loading of large data sets used for data reconciliation, resulting in a 95% reduction in manual effort and improved accuracy which significantly reduced effort required for each release."
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
        role: "Technology Analyst",
        startDate:'July 2015',
        endDate: 'October 2019',
        company: 'Infosys Limited',
        location: "Duesseldorf, Germany",
        client: 'Uniper, Germany',
        tools: ['Oracle', 'SQL/PLSQL', 'SAP BODS 4.2', 'SVN', 'Jira', 'Confluence'],
        responsibilities: [
            "Implemented and enhanced 6 data pipeline architecture using SAP data Services to ensure efficient and accurate data processing, while providing support for both internal business users and regulatory compliance.",
            "Built data pipelines using data extracted from ENDUR outbound interfaces for Power, Gas & Oil, Solar, and Coal products, leveraging extensive experience in the domain.",
            "Designed and developed virtual storage process for archiving data older than 1 year using Oracle PLSQL programming. " +
            "This helped to free up storage space in the primary server, resulting in improved performance of the data pipelines.",
            "Collaborated with stakeholders to gather requirements and gain domain knowledge, providing architectural design solutions to meet client needs.",
            "Analyzed various reporting requirements and collaborated with the team to successfully complete daily reporting.",
            "Implemented changes identified through root cause analysis, incident handling, and operational excellence initiatives to improve system performance and reliability.",
            "Improved system performance by 30% through designing and implementing a generic delta detection logic using Oracle. The logic was successfully incorporated into data " +
            "pipelines used for regulatory compliance reporting, such as REMIT and EMIR.",
            "Designed and developed a resilience check component using SAP Data Services, ensuring the accuracy and integrity of data used for regulatory compliance reporting.",
            "Improved the performance of the EOD Sales data processing by 90%, leveraging the pushdown capabilities of SAP Data Services. The processing time was reduced from 2 hours to 10 minutes."
        ],
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
        role: "Senior Systems Engineer",
        startDate:'December 2011',
        endDate: 'July 2015',
        company: 'Infosys Limited',
        location: "Trivandrum, India",
        client: 'Cellular South, USA',
        tools: ['Netezza', 'Oracle', 'SQL/PLSQL/PLpgSQL', 'SAP BODS 4.0'],
        responsibilities: [
            "Created an ETL pipeline using SAP Data Services and Netezza to facilitate the migration of the Data Warehouse from Oracle to the Netezza platform.",
            "Automated the scheduling process by implementing job dependency and event based triggering.",
            "Automated the data migration process(Oracle to Netezza) using Unix shell scripting and Netezza procedures.",
            "Developed custom email notifications using SAP Data Services to keep stakeholders informed about the status of jobs in the data pipeline.",
            "Developed a user interface for dynamically generating SAP Data Services dataflow components using Python. This saved a lot of effort required in performing redundant activities."
        ],
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