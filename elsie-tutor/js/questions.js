// Network Fundamentals Quiz Questions
const questions = [
    // Network Basics (1-10)
    {
        question: "What is a computer network?",
        options: [
            { text: "A single computer system" },
            { text: "A collection of connected devices that can communicate and share resources" },
            { text: "A type of computer hardware" },
            { text: "A software application" }
        ],
        correctAnswer: 1,
        category: "Network Basics",
        explanation: "A computer network is a collection of interconnected devices (like computers, printers, and servers) that can communicate with each other and share resources such as files, applications, and internet connections. At NCA Ghana, this includes all the devices in their offices, from computers and printers to servers and monitoring equipment.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Which of the following is NOT a basic component of a network?",
        options: [
            { text: "Devices (Nodes)" },
            { text: "Media" },
            { text: "Operating System" },
            { text: "Services" }
        ],
        correctAnswer: 2,
        category: "Network Basics",
        explanation: "The four essential components of a network are: 1) Devices/Nodes (like the computers, printers, and servers in NCA's offices), 2) Media (like the Ethernet cables and Wi-Fi signals used in NCA's offices), 3) Services (such as file sharing or email), and 4) Rules/Protocols (the communication standards that devices follow). Operating systems are not a network component.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "What is the primary purpose of a computer network at NCA Ghana?",
        options: [
            { text: "To increase processing power" },
            { text: "To enable resource sharing, communication, and data access" },
            { text: "To store large amounts of data" },
            { text: "To improve computer graphics" }
        ],
        correctAnswer: 1,
        category: "Network Basics",
        explanation: "At NCA Ghana, the primary purposes of their network are: 1) Resource sharing (like shared printers and files across departments), 2) Communication (both internal emails and external communication with telecom operators), and 3) Data access (accessing regulatory databases and monitoring systems from different locations). This is essential for their role as Ghana's communications regulator.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "What are network protocols in the context of NCA's operations?",
        options: [
            { text: "Physical cables that connect devices" },
            { text: "Rules and standards that govern network communication" },
            { text: "Software applications for browsing the internet" },
            { text: "Security measures to protect networks" }
        ],
        correctAnswer: 1,
        category: "Network Basics",
        explanation: "Network protocols are the rules and standards that define how devices on NCA's network communicate. These protocols ensure that all devices, from office computers to monitoring equipment, can understand each other. This is crucial for NCA's operations, whether it's internal communication between departments or monitoring telecom networks across Ghana. Every piece of communication, from a simple email to accessing secure regulatory databases, follows specific protocols.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "In NCA's network, which of the following would be considered a 'node'?",
        options: [
            { text: "Only desktop computers" },
            { text: "Any device that can send, receive, or forward data on the network" },
            { text: "Only network switches and routers" },
            { text: "Only wireless devices" }
        ],
        correctAnswer: 1,
        category: "Network Basics",
        explanation: "In NCA's network, a node is any device that can send, receive, or forward data. This includes all computers, printers, servers, and network equipment like switches and routers. Even specialized equipment used by NCA-CERT for monitoring network security would be considered nodes. Each node has a unique identifier (like an IP address) to ensure proper communication on the network.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "How does NCA Ghana likely use both the internet and an intranet?",
        options: [
            { text: "The internet is used for public access, while their intranet is for internal communications and resources" },
            { text: "They only use the internet, not an intranet" },
            { text: "They only use an intranet, not the public internet" },
            { text: "The terms are used interchangeably at NCA" }
        ],
        correctAnswer: 0,
        category: "Network Basics",
        explanation: "NCA Ghana likely uses both: 1) The public internet for external communications, accessing global resources, and providing public services, and 2) A private intranet for internal communications, sharing sensitive documents, and accessing internal systems like their Data Management System (DMS). The intranet would be accessible only to NCA staff and would contain internal resources not meant for public access.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Why is bandwidth important for NCA Ghana's operations?",
        options: [
            { text: "It determines how many devices can connect to the network" },
            { text: "It affects how much data can be transferred in a given time, impacting performance" },
            { text: "It measures the physical distance a network can cover" },
            { text: "It's only important for wireless networks, not wired ones" }
        ],
        correctAnswer: 1,
        category: "Network Basics",
        explanation: "Bandwidth is crucial for NCA Ghana because it determines how much data can be transferred across their network in a given time. This impacts everything from simple web browsing to more data-intensive tasks like accessing regulatory databases, video conferencing between regional offices, or monitoring telecom services. Insufficient bandwidth could slow down critical operations, especially when transferring large files or when many users are accessing the network simultaneously.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "How does latency affect NCA Ghana's network performance?",
        options: [
            { text: "It determines the time it takes for data to travel between points, affecting response times" },
            { text: "It limits the number of devices that can connect to the network" },
            { text: "It only affects wireless connections, not wired ones" },
            { text: "It's not a concern for NCA's operations" }
        ],
        correctAnswer: 0,
        category: "Network Basics",
        explanation: "Latency, the time it takes for data to travel from source to destination, is crucial for NCA Ghana's operations. High latency can cause delays in critical functions like accessing regulatory databases, video conferencing between regional offices, or real-time monitoring of telecom services. For example, when NCA staff in Accra access data from a server in Tamale, lower latency means faster response times. This is particularly important for time-sensitive operations and when using cloud-based applications.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Why are both upload and download speeds important for NCA Ghana's operations?",
        options: [
            { text: "Download is for receiving data (like accessing websites), upload is for sending data (like submitting reports)" },
            { text: "Only download speed matters for NCA's work" },
            { text: "They are the same thing, just measured differently" },
            { text: "Upload speed is only important for home users, not organizations" }
        ],
        correctAnswer: 0,
        category: "Network Basics",
        explanation: "Both upload and download speeds are crucial for NCA Ghana: 1) Download speed affects how quickly staff can access online resources, download regulatory documents, or stream training videos. 2) Upload speed is important when submitting reports, sending large email attachments, or when NCA-CERT needs to upload security updates or alerts. For example, when NCA staff need to upload large regulatory filings or when regional offices send data to the head office, sufficient upload speed is essential for efficient operations.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "What role does a Network Interface Card (NIC) play in NCA's network infrastructure?",
        options: [
            { text: "It provides the physical connection between a device and the network" },
            { text: "It acts as a security firewall for the network" },
            { text: "It stores all the network's data" },
            { text: "It's only needed for wireless connections" }
        ],
        correctAnswer: 0,
        category: "Network Basics",
        explanation: "A Network Interface Card (NIC) is essential in NCA's infrastructure as it provides the physical connection between devices (like computers, servers, or printers) and the network. Whether it's a wired connection (like Ethernet) or wireless (Wi-Fi), the NIC handles the communication. For example, every computer in NCA's offices has a NIC that allows it to connect to the local area network (LAN), and through that, to other networks and the internet. The NIC is responsible for converting data into a format that can be transmitted over the network and vice versa.",
        reference: "NCA Network Fundamentals Notes"
    },
    
    // Network Types (11-20)
    {
        question: "Which type of network would be used within NCA's Head Office building in Accra to connect all the computers and printers?",
        options: [
            { text: "WAN (Wide Area Network)" },
            { text: "LAN (Local Area Network)" },
            { text: "MAN (Metropolitan Area Network)" },
            { text: "SAN (Storage Area Network)" }
        ],
        correctAnswer: 1,
        category: "Network Types",
        explanation: "A Local Area Network (LAN) is used within NCA's Head Office building to connect all computers, printers, and other devices. This allows for efficient sharing of resources like files and printers among staff members. The LAN at NCA's Head Office would use a combination of wired (Ethernet) and wireless (Wi-Fi) connections to provide network access throughout the building.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "How does NCA Ghana connect its head office in Accra with regional offices in cities like Kumasi, Tamale, and Takoradi?",
        options: [
            { text: "Using a WAN (Wide Area Network)" },
            { text: "Using separate, independent LANs" },
            { text: "Using only wireless connections" },
            { text: "Using a single large LAN" }
        ],
        correctAnswer: 0,
        category: "Network Types",
        explanation: "NCA Ghana uses a Wide Area Network (WAN) to connect its head office in Accra with regional offices across Ghana. This WAN allows for secure and reliable communication and data sharing between all locations. The WAN might use various technologies like leased lines, MPLS, or VPNs over the internet to connect these geographically dispersed locations. This setup enables staff in different regions to access centralized resources and collaborate effectively.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "When an NCA staff member connects their smartphone to wireless headphones in the office, what type of network are they using?",
        options: [
            { text: "LAN (Local Area Network)" },
            { text: "WAN (Wide Area Network)" },
            { text: "PAN (Personal Area Network)" },
            { text: "SAN (Storage Area Network)" }
        ],
        correctAnswer: 2,
        category: "Network Types",
        explanation: "When an NCA staff member connects their smartphone to wireless headphones, they're using a Personal Area Network (PAN). This is a small network used for connecting personal devices over a short range, typically using Bluetooth technology. PANs are different from the office LAN because they're designed for personal device connectivity rather than organizational networking. This allows staff to use their personal devices (like headphones) without affecting the main office network.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Which type of network would NCA Ghana likely use in their data center to connect servers to high-speed storage systems?",
        options: [
            { text: "LAN (Local Area Network)" },
            { text: "WAN (Wide Area Network)" },
            { text: "SAN (Storage Area Network)" },
            { text: "PAN (Personal Area Network)" }
        ],
        correctAnswer: 2,
        category: "Network Types",
        explanation: "NCA Ghana would use a Storage Area Network (SAN) in their data center to connect servers to high-speed storage systems. A SAN is specifically designed for high-performance, low-latency access to block-level storage. This is crucial for NCA's operations as it allows for fast access to large databases, regulatory filings, and monitoring data. The SAN would be separate from the regular office LAN to ensure optimal performance for storage operations and to keep storage traffic from affecting general network performance.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "How does NCA Ghana utilize WLAN (Wireless Local Area Network) in their offices?",
        options: [
            { text: "As a wired network alternative for mobile devices like laptops and tablets" },
            { text: "Only for guest internet access, not for official work" },
            { text: "As their primary network for all devices" },
            { text: "They don't use wireless networks for security reasons" }
        ],
        correctAnswer: 0,
        category: "Network Types",
        explanation: "NCA Ghana uses WLAN (Wireless Local Area Network) to provide wireless connectivity for mobile devices like laptops, tablets, and smartphones in their offices. This allows staff to move around the office while staying connected to the network. The WLAN would be secured with strong encryption (like WPA3) and proper authentication to ensure network security. While convenient, NCA might use wired connections for stationary devices like desktop computers and servers to ensure maximum reliability and performance for critical operations.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "How does NCA Ghana connect its head office in Accra with regional offices across the country?",
        options: [
            { text: "Using separate, independent networks for each location" },
            { text: "Using a WAN that connects all offices" },
            { text: "Using only wireless connections between offices" },
            { text: "Using a single large LAN that covers the entire country" }
        ],
        correctAnswer: 1,
        category: "Network Types",
        explanation: "NCA Ghana connects its head office in Accra with regional offices (like those in Kumasi, Tamale, and Takoradi) using a Wide Area Network (WAN). This WAN allows for secure data transfer, voice communications, and access to centralized resources across different geographical locations. The WAN might use various technologies such as leased lines, MPLS, or secure VPN connections over the internet to ensure reliable and secure communication between all NCA offices.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "How might NCA Ghana use a MAN (Metropolitan Area Network) in their operations?",
        options: [
            { text: "To connect multiple buildings within Accra, like their head office and nearby regional office" },
            { text: "To connect personal devices like smartphones and tablets" },
            { text: "To connect their Ghana offices with international locations" },
            { text: "To create a small home network" }
        ],
        correctAnswer: 0,
        category: "Network Types",
        explanation: "NCA Ghana might use a Metropolitan Area Network (MAN) to connect multiple buildings or facilities within the Accra metropolitan area. For example, they could use a MAN to connect their main head office with a nearby data center, training facility, or regional office in the same city. A MAN is larger than a single-building LAN but smaller than a WAN, making it ideal for connecting multiple locations within a city. This would allow for high-speed data transfer and resource sharing between NCA facilities in the same metropolitan area while maintaining better performance than a WAN connection.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "When an NCA staff member uses a wireless keyboard or headset with their computer, what type of network are they using?",
        options: [
            { text: "LAN (Local Area Network)" },
            { text: "WAN (Wide Area Network)" },
            { text: "PAN (Personal Area Network)" },
            { text: "MAN (Metropolitan Area Network)" }
        ],
        correctAnswer: 2,
    },
    {
        question: "If NCA Ghana were to implement a smart office system with connected devices like smart lighting, temperature control, and security systems, what type of network would be most appropriate?",
        options: [
            { text: "WAN (Wide Area Network)" },
            { text: "PAN (Personal Area Network)" },
            { text: "LAN (Local Area Network)" },
            { text: "MAN (Metropolitan Area Network)" }
        ],
        correctAnswer: 2,
        category: "Network Types",
        explanation: "For a smart office system at NCA Ghana, a Local Area Network (LAN) would be most appropriate. The LAN would connect all the smart devices (like lighting, climate control, and security systems) within the office building. This allows for centralized control and monitoring while keeping the traffic local for better performance and security. The LAN could use both wired (Ethernet) and wireless (Wi-Fi) connections, with appropriate security measures in place to protect the network from unauthorized access.",
        reference: "NCA Network Fundamentals Notes"
    },
    // Network Topologies (21-30)
    {
        question: "Which network topology is most likely used in NCA Ghana's office to connect all computers to a central switch?",
        options: [
            { text: "Bus topology" },
            { text: "Star topology" },
            { text: "Ring topology" },
            { text: "Mesh topology" }
        ],
        correctAnswer: 1,
        category: "Network Topologies",
        explanation: "NCA Ghana most likely uses a star topology in their office networks, where all computers and devices connect to a central switch. This is the most common and practical topology for modern office networks because: 1) It's easy to add or remove devices without disrupting the entire network, 2) If one connection fails, only that device is affected, and 3) It provides better performance and easier troubleshooting compared to other topologies. The central switch in NCA's network would be located in a secure communications room, with Ethernet cables running to wall ports throughout the office.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Why would NCA Ghana avoid using a bus topology for their office network?",
        options: [
            { text: "It's too expensive for their budget" },
            { text: "A single cable break could take down the entire network" },
            { text: "It doesn't support Wi-Fi connections" },
            { text: "It's only suitable for wireless networks" }
        ],
        correctAnswer: 1,
        category: "Network Topologies",
        explanation: "NCA Ghana would avoid using a bus topology for their office network because it has a critical weakness: if the main backbone cable fails or is damaged, the entire network would go down. In a busy office environment like NCA's, where network reliability is crucial for regulatory work, this single point of failure is unacceptable. Additionally, bus topologies are difficult to troubleshoot, have performance limitations as more devices are added, and don't scale well - all of which are important considerations for NCA's growing network needs.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Why might NCA Ghana consider implementing a partial mesh topology for their most critical network connections?",
        options: [
            { text: "To reduce cable costs while maintaining some redundancy" },
            { text: "Because it's the simplest topology to implement" },
            { text: "To connect all devices in a single line" },
            { text: "Because it requires no network switches" }
        ],
        correctAnswer: 0,
        category: "Network Topologies",
        explanation: "NCA Ghana might implement a partial mesh topology for their most critical network connections (like between core switches, servers, and security systems) to provide redundancy without the high cost and complexity of a full mesh. In a partial mesh, while not every device connects to every other device, the most critical connections have multiple paths. This means if one connection fails, traffic can be automatically rerouted through alternative paths, ensuring continuous operation of essential services. This approach balances reliability with practical considerations like cost and complexity, making it suitable for NCA's critical infrastructure.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Which network topology would provide the highest level of fault tolerance for NCA Ghana's most critical systems?",
        options: [
            { text: "Bus topology with a single backbone" },
            { text: "Star topology with a central switch" },
            { text: "Ring topology with unidirectional flow" },
            { text: "Full mesh topology with redundant paths" }
        ],
        correctAnswer: 3,
        category: "Network Topologies",
        explanation: "For NCA Ghana's most critical systems (like core network infrastructure, data centers, and communication hubs), a full mesh topology would provide the highest level of fault tolerance. In a full mesh: 1) Every device is connected to every other device, 2) Multiple redundant paths exist between any two points, 3) The failure of any single connection doesn't disrupt communications, and 4) Traffic can be automatically rerouted around failed links. While expensive to implement due to the high number of connections required, this level of redundancy is justified for NCA's most critical systems where maximum uptime is essential for regulatory and operational continuity.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "In which topology do all devices form a closed loop?",
        options: [
            { text: "Bus" },
            { text: "Star" },
            { text: "Ring" },
            { text: "Mesh" }
        ],
        correctAnswer: 2,
        category: "Network Topologies",
        explanation: "In a ring topology, devices are connected in a circular fashion, with each device connected to exactly two other devices, forming a single continuous path for signals. Data travels in one direction around the ring.",
        reference: "https://www.computerhope.com/jargon/r/ringtopo.htm"
    },
    {
        question: "Why might NCA Ghana choose not to implement a ring topology for their main office network?",
        options: [
            { text: "Because a single device or cable failure can break the entire network loop" },
            { text: "Because it's too expensive to implement" },
            { text: "Because it doesn't support wireless connections" },
            { text: "Because it requires special operating systems" }
        ],
        correctAnswer: 0,
        category: "Network Topologies",
        explanation: "NCA Ghana would likely avoid using a ring topology for their main office network because it has a critical vulnerability: if any single device or cable in the ring fails, the entire network can go down. In a ring topology, data travels in one direction around the loop, and a break anywhere in that loop disrupts all communications. For a critical organization like NCA that handles regulatory functions, this single point of failure is too risky. Instead, NCA would prefer more resilient topologies like star or partial mesh that can better handle individual connection failures without affecting the entire network.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Which network topology is most likely used in NCA Ghana's office to connect workstations to the network?",
        options: [
            { text: "Bus topology with a single backbone cable" },
            { text: "Star topology with a central switch" },
            { text: "Ring topology with devices connected in a loop" },
            { text: "Full mesh topology with every device connected to every other device" }
        ],
        correctAnswer: 1,
        category: "Network Topologies",
        explanation: "NCA Ghana most likely uses a star topology with a central switch in their office networks. This is the standard for modern Ethernet networks because it offers several advantages: 1) Each workstation connects directly to a central switch, so if one connection fails, only that device is affected, 2) It's easy to add or remove devices without disrupting the network, 3) Troubleshooting is straightforward since issues are typically isolated to individual connections, and 4) It provides reliable performance for office applications. The central switch in NCA's network would be located in a secure communications room, with Ethernet cables running to wall ports throughout the office.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "How might NCA Ghana benefit from using a hybrid network topology in their organization?",
        options: [
            { text: "By combining different topologies to optimize performance and reliability for different departments" },
            { text: "By using only wireless connections throughout the entire organization" },
            { text: "By implementing the same topology in every office regardless of size or function" },
            { text: "By avoiding the use of any centralized network equipment" }
        ],
        correctAnswer: 0,
        category: "Network Topologies",
        explanation: "NCA Ghana could benefit from a hybrid topology by combining different network designs to best suit various needs across the organization. For example: 1) Using a star topology in office areas for reliable workstation connections, 2) Implementing a partial mesh between critical servers and network devices for redundancy, and 3) Using point-to-point wireless links to connect remote buildings. This approach allows NCA to optimize performance, reliability, and cost-effectiveness by using the most appropriate topology for each specific use case within their network infrastructure.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Which topology is most fault-tolerant?",
        options: [
            { text: "Bus" },
            { text: "Star" },
            { text: "Ring" },
            { text: "Mesh" }
        ],
        correctAnswer: 3,
        category: "Network Topologies",
        explanation: "A mesh topology is the most fault-tolerant because it provides multiple paths for data to travel between any two points. If one connection fails, data can be automatically rerouted through alternative paths, ensuring continuous network operation.",
        reference: "https://www.computerhope.com/jargon/m/mesh.htm"
    },
    {
        question: "Why did NCA Ghana likely choose a star topology over a bus topology for their office network?",
        options: [
            { text: "Because it uses less cable than a bus topology" },
            { text: "Because a single cable failure only affects one device, not the entire network" },
            { text: "Because it's more complex to set up than a bus topology" },
            { text: "Because it requires all devices to share the same communication medium" }
        ],
        correctAnswer: 1,
        category: "Network Topologies",
        explanation: "NCA Ghana likely chose a star topology over a bus topology for their office network because it provides much better reliability. In a star topology, each device connects independently to a central switch, so if one cable fails, only that specific device is affected. This is crucial for NCA's operations because: 1) Network downtime can disrupt critical regulatory functions, 2) IT staff can quickly identify and fix individual connection issues, and 3) The rest of the network continues to function normally even if one connection fails. In contrast, a bus topology would risk taking down the entire network if the main cable were damaged.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Why might NCA Ghana have chosen not to implement a token ring topology in their office network?",
        options: [
            { text: "Because it's more difficult to troubleshoot than modern alternatives" },
            { text: "Because it requires all devices to share bandwidth in sequence" },
            { text: "Because a single device failure can disrupt the entire network" },
            { text: "All of the above" }
        ],
        correctAnswer: 3,
        category: "Network Topologies",
        explanation: "NCA Ghana likely avoided using a token ring topology for several important reasons: 1) In a token ring, if any single device or connection fails, the entire network can go down - an unacceptable risk for critical operations, 2) Devices must wait for the token before transmitting, which can lead to inefficient bandwidth usage in modern networks, 3) Troubleshooting can be more complex compared to star topologies, and 4) Modern switched Ethernet networks provide better performance and reliability. For these reasons, NCA would prefer more reliable and manageable topologies like star or hybrid designs for their office network.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Which network topology would be most appropriate for one of NCA Ghana's smaller regional offices with about 10-15 workstations?",
        options: [
            { text: "Bus topology with a single backbone cable" },
            { text: "Star topology with a central switch" },
            { text: "Ring topology with token passing" },
            { text: "Full mesh topology with redundant connections" }
        ],
        correctAnswer: 1,
        category: "Network Topologies",
        explanation: "For one of NCA Ghana's smaller regional offices with 10-15 workstations, a star topology with a central switch would be the most appropriate choice. This is because: 1) It's cost-effective and easy to manage with a limited IT staff, 2) If one connection fails, only that workstation is affected, 3) It's easy to add or remove devices as needed, and 4) It provides sufficient performance for typical office applications. The central switch could be a managed switch that allows for VLANs and other features that might be needed to connect back to NCA's main office in Accra while maintaining security and performance.",
        reference: "NCA Network Fundamentals Notes"
    },
    // Network Devices (31-40)
    {
        question: "Which network device operates at the network layer (Layer 3) of the OSI model?",
        options: [
            { text: "Hub" },
            { text: "Switch" },
            { text: "Router" },
            { text: "Bridge" }
        ],
        correctAnswer: 2,
        category: "Network Devices",
        explanation: "A router operates at the network layer (Layer 3) of the OSI model and is responsible for forwarding data packets between different networks based on IP addresses.",
        reference: "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/how-does-a-router-work.html"
    },
    {
        question: "What is the primary function of a switch in a network?",
        options: [
            { text: "To connect multiple networks together" },
            { text: "To forward data based on MAC addresses" },
            { text: "To provide wireless connectivity" },
            { text: "To assign IP addresses to devices" }
        ],
        correctAnswer: 1,
        category: "Network Devices",
        explanation: "A switch operates at the data link layer (Layer 2) of the OSI model and forwards data based on MAC addresses. It learns which devices are connected to which ports and only sends data to the intended recipient, making networks more efficient than hubs.",
        reference: "https://www.cisco.com/c/en/us/products/switches/what-is-a-network-switch.html"
    },
    {
        question: "What is the main difference between a hub and a switch?",
        options: [
            { text: "A hub is wireless, a switch is wired" },
            { text: "A hub operates at Layer 2, a switch at Layer 3" },
            { text: "A hub broadcasts data to all ports, a switch sends data only to the intended recipient" },
            { text: "A switch is used in WANs, a hub in LANs" }
        ],
        correctAnswer: 2,
        category: "Network Devices",
        explanation: "The key difference is that a hub broadcasts incoming data to all connected devices, while a switch learns which devices are connected to which ports and forwards data only to the intended recipient, making networks more efficient and secure.",
        reference: "https://www.howtogeek.com/99001/htg-explains-whats-the-difference-between-hubs-switches-and-routers/"
    },
    {
        question: "Which device would you use to connect your home network to the internet?",
        options: [
            { text: "Switch" },
            { text: "Hub" },
            { text: "Router" },
            { text: "Bridge" }
        ],
        correctAnswer: 2,
        category: "Network Devices",
        explanation: "A router is used to connect your home network to the internet. It routes data between your local network and the internet, typically providing additional features like Network Address Translation (NAT) and firewall protection.",
        reference: "https://www.lifewire.com/what-is-a-router-2618162"
    },
    {
        question: "What is the purpose of a wireless access point (WAP)?",
        options: [
            { text: "To connect wireless devices to a wired network" },
            { text: "To boost the range of a wireless network" },
            { text: "To provide internet access without a modem" },
            { text: "To secure a wireless network" }
        ],
        correctAnswer: 0,
        category: "Network Devices",
        explanation: "A wireless access point (WAP) is a networking device that allows wireless devices to connect to a wired network using Wi-Fi. It serves as the interconnection point between the wireless network and the fixed wire network.",
        reference: "https://www.cisco.com/c/en/us/products/wireless/wireless-access-points/what-is-a-wireless-access-point.html"
    },
    {
        question: "What is the function of a modem?",
        options: [
            { text: "To connect multiple devices to a network" },
            { text: "To convert digital data to analog signals and vice versa" },
            { text: "To route data between networks" },
            { text: "To provide wireless connectivity" }
        ],
        correctAnswer: 1,
        category: "Network Devices",
        explanation: "A modem (modulator-demodulator) converts digital data from a computer or network into analog signals that can be transmitted over telephone lines or cable systems, and vice versa. It's essential for connecting to the internet via these types of connections.",
        reference: "https://www.lifewire.com/what-is-a-modem-817861"
    },
    {
        question: "Which device would you use to connect two different network segments that use different protocols?",
        options: [
            { text: "Router" },
            { text: "Switch" },
            { text: "Gateway" },
            { text: "Hub" }
        ],
        correctAnswer: 2,
        category: "Network Devices",
        explanation: "A gateway is a network node that connects two networks that use different protocols. It can translate between different network architectures or protocols, allowing communication between networks that would otherwise be incompatible.",
        reference: "https://www.techopedia.com/definition/24361/network-gateway"
    },
    {
        question: "What is the purpose of a network bridge?",
        options: [
            { text: "To connect two separate networks" },
            { text: "To divide a network into segments to reduce traffic" },
            { text: "To provide wireless access" },
            { text: "To assign IP addresses" }
        ],
        correctAnswer: 1,
        category: "Network Devices",
        explanation: "A network bridge connects multiple network segments at the data link layer (Layer 2) of the OSI model. It helps reduce network traffic by dividing a network into segments and only forwarding traffic between segments when necessary.",
        reference: "https://www.computerhope.com/jargon/b/bridge.htm"
    },
    {
        question: "Which device would you use to extend the range of a wireless network?",
        options: [
            { text: "Router" },
            { text: "Switch" },
            { text: "Wireless Range Extender" },
            { text: "Hub" }
        ],
        correctAnswer: 2,
        category: "Network Devices",
        explanation: "A wireless range extender (or wireless repeater) is used to extend the coverage area of a wireless network by receiving the existing WiFi signal, amplifying it, and then transmitting the boosted signal.",
        reference: "https://www.lifewire.com/wireless-range-extender-816563"
    },
    {
        question: "What is the main difference between a router and a modem?",
        options: [
            { text: "A router connects to the internet, a modem connects devices" },
            { text: "A modem connects to the internet, a router connects devices" },
            { text: "A router is wireless, a modem is wired" },
            { text: "There is no difference, they are the same device" }
        ],
        correctAnswer: 1,
        category: "Network Devices",
        explanation: "A modem connects your home network to your Internet Service Provider (ISP), while a router connects your wired and wireless devices to the modem and each other. Many devices combine both functions into a single unit called a gateway or wireless router.",
        reference: "https://www.highspeedinternet.com/resources/modem-vs-router-whats-the-difference"
    },
    // Network Protocols (41-50)
    {
        question: "What does TCP/IP stand for?",
        options: [
            { text: "Transmission Control Protocol/Internet Protocol" },
            { text: "Transfer Control Protocol/Internet Protocol" },
            { text: "Transmission Control Program/Internet Program" },
            { text: "Transfer Control Program/Internet Program" }
        ],
        correctAnswer: 0,
        category: "Network Protocols",
        explanation: "TCP/IP stands for Transmission Control Protocol/Internet Protocol. It is the basic communication language or protocol of the Internet and private networks, consisting of a suite of protocols that governs how data is transmitted over networks.",
        reference: "https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/"
    },
    {
        question: "Which protocol is used to automatically assign IP addresses to devices on a network?",
        options: [
            { text: "DNS" },
            { text: "DHCP" },
            { text: "FTP" },
            { text: "HTTP" }
        ],
        correctAnswer: 1,
        category: "Network Protocols",
        explanation: "DHCP (Dynamic Host Configuration Protocol) is used to automatically assign IP addresses and other network configuration parameters to devices on a network, eliminating the need for manual IP address configuration.",
        reference: "https://www.isc.org/dhcp/"
    },
    {
        question: "What is the main purpose of DNS in networking?",
        options: [
            { text: "To assign IP addresses to devices" },
            { text: "To translate domain names to IP addresses" },
            { text: "To secure network communications" },
            { text: "To connect different networks together" }
        ],
        correctAnswer: 1,
        category: "Network Protocols",
        explanation: "The Domain Name System (DNS) translates human-readable domain names (like www.example.com) into IP addresses (like 192.0.2.1) that computers use to identify each other on the network.",
        reference: "https://www.cloudflare.com/learning/dns/what-is-dns/"
    },
    {
        question: "Which protocol is used for secure web browsing (HTTPS)?",
        options: [
            { text: "SSL" },
            { text: "TLS" },
            { text: "Both SSL and TLS" },
            { text: "FTP" }
        ],
        correctAnswer: 2,
        category: "Network Protocols",
        explanation: "HTTPS (HTTP Secure) uses either SSL (Secure Sockets Layer) or its successor TLS (Transport Layer Security) to secure the connection between a web server and a browser, encrypting the data exchanged.",
        reference: "https://www.cloudflare.com/learning/ssl/what-is-https/"
    },
    {
        question: "What is the main difference between TCP and UDP?",
        options: [
            { text: "TCP is faster, UDP is more reliable" },
            { text: "TCP is connection-oriented, UDP is connectionless" },
            { text: "TCP is used for video streaming, UDP for web pages" },
            { text: "TCP is older, UDP is newer" }
        ],
        correctAnswer: 1,
        category: "Network Protocols",
        explanation: "TCP (Transmission Control Protocol) is connection-oriented, meaning it establishes a connection before sending data and ensures reliable delivery. UDP (User Datagram Protocol) is connectionless and does not guarantee delivery, but is faster and has less overhead.",
        reference: "https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/"
    },
    {
        question: "Which port number is used by HTTP?",
        options: [
            { text: "21" },
            { text: "25" },
            { text: "80" },
            { text: "443" }
        ],
        correctAnswer: 2,
        category: "Network Protocols",
        explanation: "HTTP (Hypertext Transfer Protocol) uses port 80 by default. This is the standard port for unencrypted web traffic.",
        reference: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
    },
    {
        question: "What is the purpose of the ARP protocol?",
        options: [
            { text: "To resolve IP addresses to MAC addresses" },
            { text: "To assign IP addresses to devices" },
            { text: "To route packets between networks" },
            { text: "To encrypt network traffic" }
        ],
        correctAnswer: 0,
        category: "Network Protocols",
        explanation: "The Address Resolution Protocol (ARP) is used to map an IP address to a physical (MAC) address on a local network. It's essential for communication between devices on the same network segment.",
        reference: "https://www.cloudflare.com/learning/network-layer/what-is-arp/"
    },
    {
        question: "Which protocol is used to send email between mail servers?",
        options: [
            { text: "SMTP" },
            { text: "POP3" },
            { text: "IMAP" },
            { text: "FTP" }
        ],
        correctAnswer: 0,
        category: "Network Protocols",
        explanation: "SMTP (Simple Mail Transfer Protocol) is used to send and route email between mail servers. POP3 and IMAP are used by email clients to retrieve messages from a server.",
        reference: "https://www.cloudflare.com/learning/email-security/what-is-smtp/"
    },
    {
        question: "What is the purpose of ICMP?",
        options: [
            { text: "To manage network devices" },
            { text: "To send error messages and operational information" },
            { text: "To transfer files between systems" },
            { text: "To provide secure remote access" }
        ],
        correctAnswer: 1,
        category: "Network Protocols",
        explanation: "The Internet Control Message Protocol (ICMP) is used by network devices to send error messages and operational information indicating success or failure when communicating with another IP address. The ping utility uses ICMP.",
        reference: "https://www.cloudflare.com/learning/ddos/glossary/internet-control-message-protocol-icmp/"
    },
    {
        question: "Which protocol is used to securely transfer files between systems?",
        options: [
            { text: "HTTP" },
            { text: "FTP" },
            { text: "SFTP" },
            { text: "SMTP" }
        ],
        correctAnswer: 2,
        category: "Network Protocols",
        explanation: "SFTP (SSH File Transfer Protocol) is used to securely transfer files between systems over a secure shell (SSH) connection. Unlike regular FTP, it encrypts both commands and data.",
        reference: "https://www.ssh.com/academy/ssh/sftp"
    },
    // NCA Ghana Network Questions (51-60)
    {
        question: "At NCA Ghana, which type of network connects all the computers, printers, and servers within the Head Office building in Accra?",
        options: [
            { text: "WAN (Wide Area Network)" },
            { text: "LAN (Local Area Network)" },
            { text: "SAN (Storage Area Network)" },
            { text: "PAN (Personal Area Network)" }
        ],
        correctAnswer: 1,
        category: "Network Types",
        explanation: "The network within the NCA Head Office building is a Local Area Network (LAN) as it connects devices within a limited geographical area like a single building.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Which network topology is most likely used in NCA's internal office networks, where all devices connect to a central switch?",
        options: [
            { text: "Bus Topology" },
            { text: "Star Topology" },
            { text: "Ring Topology" },
            { text: "Mesh Topology" }
        ],
        correctAnswer: 1,
        category: "Network Topologies",
        explanation: "NCA's internal LANs would use a Star Topology, where all devices connect to a central switch. This is the most common and efficient topology for office networks.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "What type of network connects NCA's regional offices in Kumasi, Tamale, and other locations back to the Head Office?",
        options: [
            { text: "LAN" },
            { text: "WAN" },
            { text: "PAN" },
            { text: "WLAN" }
        ],
        correctAnswer: 1,
        category: "Network Types",
        explanation: "A Wide Area Network (WAN) is used to connect multiple LANs across different geographical locations, such as connecting NCA's regional offices to the Head Office.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Which network device would NCA use to connect their internal network to the internet and direct traffic between different network segments?",
        options: [
            { text: "Hub" },
            { text: "Switch" },
            { text: "Router" },
            { text: "Modem" }
        ],
        correctAnswer: 2,
        category: "Network Devices",
        explanation: "A router is used to connect different networks together and direct traffic between them, such as connecting NCA's internal network to the internet or to other office locations.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "What is the main disadvantage of a bus topology that makes it unsuitable for NCA's office networks?",
        options: [
            { text: "It requires too many cables" },
            { text: "If the main cable breaks, the entire network goes down" },
            { text: "It's too expensive to implement" },
            { text: "It's too complex to manage" }
        ],
        correctAnswer: 1,
        category: "Network Topologies",
        explanation: "In a bus topology, all devices are connected to a single main cable. If this cable breaks, the entire network becomes inoperable, which is why it's not suitable for critical networks like NCA's.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Which network device would NCA use to connect multiple devices within their office while ensuring data is only sent to the intended recipient?",
        options: [
            { text: "Hub" },
            { text: "Switch" },
            { text: "Router" },
            { text: "Modem" }
        ],
        correctAnswer: 1,
        category: "Network Devices",
        explanation: "A switch is used to connect multiple devices in a network and intelligently forwards data only to the specific device it's intended for, unlike a hub which broadcasts to all connected devices.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "What type of network would NCA staff use when connecting their Bluetooth headphones to their work computers?",
        options: [
            { text: "LAN" },
            { text: "WAN" },
            { text: "PAN" },
            { text: "SAN" }
        ],
        correctAnswer: 2,
        category: "Network Types",
        explanation: "A Personal Area Network (PAN) is used for connecting personal devices like Bluetooth headphones or fitness trackers to a computer or smartphone over a very short distance.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Which network topology would be most suitable for ensuring high availability between NCA's critical servers in their data center?",
        options: [
            { text: "Bus" },
            { text: "Star" },
            { text: "Mesh" },
            { text: "Ring" }
        ],
        correctAnswer: 2,
        category: "Network Topologies",
        explanation: "A mesh topology provides multiple paths between devices, ensuring high availability. If one connection fails, data can be rerouted through alternative paths, making it ideal for critical systems.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "What is the main advantage of using a star topology in NCA's office networks?",
        options: [
            { text: "It uses the least amount of cable" },
            { text: "If one connection fails, only that device is affected" },
            { text: "It's the most secure topology" },
            { text: "It doesn't require any network devices" }
        ],
        correctAnswer: 1,
        category: "Network Topologies",
        explanation: "In a star topology, each device connects directly to a central switch. If one connection fails, only that device is affected, while the rest of the network continues to function normally.",
        reference: "NCA Network Fundamentals Notes"
    },
    {
        question: "Which network device is considered outdated and inefficient, and would not be used in NCA's modern network infrastructure?",
        options: [
            { text: "Switch" },
            { text: "Router" },
            { text: "Hub" },
            { text: "Wireless Access Point" }
        ],
        correctAnswer: 2,
        category: "Network Devices",
        explanation: "Hubs are considered outdated because they simply broadcast all data to all connected devices, creating unnecessary network traffic. NCA would use switches instead, which are more efficient and secure.",
        reference: "NCA Network Fundamentals Notes"
    },
    // More questions will be added in subsequent chunks
];
