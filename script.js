window.header = {
  Title: "Muteeb Akram",
  DefaultTheme: "dark",
  Favicon: "./assets/favicon.ico",
  Pages: [
    {
      Name: "Home",
      ID: "home",
      Link: "./index.html",
    },
    {
      Name: "Experience",
      ID: "experience",
      Link: "./experience.html",
    },
    {
      Name: "Education",
      ID: "education",
      Link: "./education.html",
    },
    {
      Name: "Projects",
      ID: "projects",
      Link: "./projects.html",
    },
    {
      Name: "Publications",
      ID: "publications",
      Link: "./publications.html",
    },
    {
      Name: "Contact",
      ID: "contact",
      Link: "./contact.html",
    },
  ],
};

window.home = [
  {
    Name: "Muteeb Akram Nawaz Doctor",
    Title: "Senior System Software Engineer",
    Organization: "NVIDIA",
    Email: "muteebakram@gmail.com",
    Location: "San Jose, California, USA",
    AboutTitle: "About Me",
    Image: {
      Src: "./assets/profile-image.jpg",
      Alt: "Muteeb Akram Nawaz Doctor",
    },
    Paragraphs: `
        I'm currently a Senior System Software Engineer at <a href="https://www.nvidia.com/en-us/">NVIDIA</a>, 
        where I build Embedded and Edge AI products. I enjoy working where hardware meets software—across 
        computer architecture, operating systems, distributed systems, and embedded systems.
      <br>
      <br>
        I earned my Master’s in Computer Science from the <a target="_blank" href="https://www.utah.edu">University of Utah</a>, 
        Where I developed low-power neural networks for lightning detection on satellites with <a target="_blank" href="https://users.cs.utah.edu/~saday/">Prof. Saday</a>. 
        I also collaborated with <a target="_blank" href="https://users.cs.utah.edu/~vijay/index.html">Prof. Vijay Nagarajan</a> and <a target="_blank" href="https://rstutsman.github.io">Prof. Ryan Stutsman</a> 
        on new scheduling approaches for disaggregated memory systems like CXL. And I helped mentor senior students as a teaching assistant for capstone projects.
      <br>
      <br>
        I started as an intern at <a href="https://www.cisco.com">Cisco Systems</a> in Bangalore and became Software Engineer 2 on the 
        <a target="_blank" href="https://www.cisco.com/site/us/en/products/computing/servers-unified-computing-systems/index.html">Cloud & Compute</a> team. 
        I implemented server management utilities using the <a target="_blank" href="https://www.dmtf.org/standards/redfish">DMTF Redfish</a> API—covering diagnostics, 
        firmware updates, data sanitization, and OS provisioning for Cisco UCS servers. This role sparked my deep interest in systems engineering.
      <br>
      <br>
        I hold a Bachelor’s degree in Computer Science from <a target="_blank" href="https://rvce.edu.in">R. V. College of Engineering (RVCE)</a>, 
        working on diverse projects—from traffic decongestion systems to HTTP/3 protocol research. Before that, I studied at 
        <a target="_blank" href="https://www.revapucollege.edu.in/yelahanka/about-yelahanka">Reva Independent PU College</a> in Bangalore and 
        <a target="_blank" href="https://deepayanschool.com">Deepayan School</a> in Hospet.
      <br>
      <br>
        I'm grateful to my family, friends, mentors, and teachers. Their support shaped my journey.
      <br>
    `,
  },
];

window.experience = [
  {
    Company: "NVIDIA",
    Type: "Full Time",
    CompanyLogo: "./assets/nvidia_logo.png",
    Location: "Santa Clara, California, USA",
    Roles: [
      {
        Title: "Sr. System Software Engineer",
        TimePeriod: "Feb 03, 2025 - Present",
        Description: `<ul class="role-ul">
        <li>Working on Nvidia's Jetson products with <i>Linux for Tegra</i> Software Team.</li>        
      </ul>`,
      },
    ],
    Pictures: [
      {
        Src: "./assets/nvidia3.jpeg",
        Subtitle: "NVIDIA First Day.<br>Feb 3, 2025.",
      },
    ],
  },
  {
    Company: "University of Utah",
    Subtitle: "Prof. P. (Saday) Sadayappan",
    Type: "Research",
    CompanyLogo: "./assets/university_of_utah_logo.svg",
    Location: "Salt Lake City, Utah, USA",
    Roles: [
      {
        Title: "Research Assistant",
        TimePeriod: "Fall 2024",
        Description: `<ul class="role-ul">
        <li>NASA Satellite Autonomous Storm Tracking and Control for Space Based Lightning Sensors.</li>
      </ul>`,
      },
    ],
  },
  {
    Company: "NVIDIA",
    Type: "Internship",
    CompanyLogo: "./assets/nvidia_logo.png",
    Location: "Santa Clara, California, USA",
    Roles: [
      {
        Title: "System Software Intern",
        TimePeriod: "May 13, 2024 - August 16, 2024",
        Description: `<ul class="role-ul">
        <li>Working on Nvidia's Jetson products with <i>Linux for Tegra</i> Software Team.</li>
        <li>Designed & developed PLDM based Redfish Update API for Nvidia's IGX safety functionality.</li>
        <li>Added HTTPS/CIFS remote virtual media support for Nvidia's OpenBMC via Redfish for webUI.</li>
      </ul>`,
      },
    ],
    Pictures: [
      {
        Src: "./assets/nvidia0.jpeg",
        Subtitle: "NVIDIA Internship 1st Week.<br>May 17, 2024.",
      },
      {
        Src: "./assets/nvidia1.jpeg",
        Subtitle: "NVIDIA Great America.<br>Jun 28, 2024.",
      },
      {
        Src: "./assets/nvidia2.jpeg",
        Subtitle: "Universal Studios, LA.<br>Jul 4, 2024.",
      },
    ],
  },
  {
    Company: "University of Utah",
    Subtitle: "Prof. Vijay Nagarajan",
    Type: "Research",
    CompanyLogo: "./assets/university_of_utah_logo.svg",
    Location: "Salt Lake City, Utah, USA",
    Roles: [
      {
        Title: "Independent Study",
        TimePeriod: "Spring 2024",
        Description: `<ul class="role-ul">
        <li>New distributed scheduler for disaggregated memory like CXL, RDMA, etc.</li>
      </ul>`,
      },
    ],
  },
  {
    Company: "University of Utah",
    Subtitle: "Professors: Jim de St Germain, David Bean, and Aaron Wood",
    CompanyLogo: "./assets/university_of_utah_logo.svg",
    Location: "Salt Lake City, Utah, USA",
    Type: "Teaching",
    Roles: [
      {
        Title: "CS4500 Senior Capstone Project",
        TimePeriod: "Spring 2024",
      },
      {
        Title: "CS4000 Senior Capstone Design",
        TimePeriod: "Fall 2023",
        Description: `<ul class="role-ul">
          <li>Mentoring a class of 160 senior undergraduates in their project ideation, design, development, and deployment.</li>
        </ul>`,
      },
    ],
  },
  {
    Company: "Cisco Systems",
    Type: "Full Time",
    CompanyLogo: "./assets/cisco_logo.png",
    Location: "Bangalore, Karnataka, India",
    Roles: [
      {
        Title: "Software Engineer II",
        TimePeriod: "Aug 2022 - July 2023",
        Description: `<ul class="role-ul">
          <li>Engineered a diagnostic utility for Cisco UCS servers, enabling troubleshooting of CPUs, 
            DIMMs, & PCIe devices. Achieving 40% faster root cause detection, 10% decrease in RMA costs,
              and streamlining debugging for TAC.
          </li>
          <li>Designed a secure Data Sanitization framework with Redfish APIs to fully wipe data from storage
            controllers, NVMe & disks.
          </li>
          <li>Owned & revamped Cisco firmware application front-end with web components and designed
            12+ back-end APIs. Shipped the application in a customized Linux container, offering CLI,
            UI, & Redfish interfaces.
          </li>
          <li>Implemented thread synchronization to concurrently install operating systems and update the
            firmware of 100+ Cisco UCS servers at once.
          </li>
        </ul>`,
      },
      {
        Title: "Software Engineer",
        TimePeriod: "Aug 2020 - Aug 2022",
        Description: `<ul class="role-ul">
          <li>Worked on Baseboard Management Controller to streamline low-level firmware and BIOS update,
            resulting in a 15% reduction in system downtime and improved system stability.
          </li>
          <li>Migrate from legacy build systems to container-based CI/CD builds utilizing runC and
            dockerd runtime engines, resulting in a notable 20% acceleration in build times.
          </li>
          <li>Owned and maintained Cisco Inventory Portal by automating source check-ins, creating
            SSH key-pairs, and optimizing large NFS storage, resulting in a 30% reduction in
            storage & 2x API performance.
          </li>
        </ul>`,
      },
    ],
    Pictures: [
      {
        Src: "./assets/cisco1.png",
        Subtitle: "Cisco First Team Outing.<br>Aug 26, 2022.",
      },
      {
        Src: "./assets/cisco2.png",
        Subtitle: "Cisco Last Working Day.<br>Jul 20, 2023.",
      },
    ],
  },
  {
    Company: "Cisco Systems",
    Type: "Internship",
    CompanyLogo: "./assets/cisco_logo.png",
    Location: "Bangalore, Karnataka, India",
    Roles: [
      {
        Title: "Software Engineer Intern",
        TimePeriod: "Jan 2020 - June 2020",
        Description: `<ul class="role-ul">
          <li>Developed 3 new industry-standard Redfish APIs for firmware discovery, update, & monitoring.</li>
          <li>Ported 7,000+ source code from Python2 to Python3 with no performance impact.</li>
        </ul>`,
      },
    ],
    Pictures: [
      {
        Src: "./assets/cisco0.png",
        Subtitle: "Cisco Internship Onboarding.<br>Jan 16, 2020.",
      },
    ],
  },
];

window.education = [
  {
    University: "University of Utah",
    Degree: "Master of Science",
    Major: "Computer Science",
    Duration: "Aug 2023 - Dec 2024",
    CGPA: "",
    Location: "Salt Lake City, Utah, USA",
    Logo: "./assets/university_of_utah_logo.svg",
    Pictures: [
      {
        Src: "./assets/uofu.jpeg",
        Subtitle: "Famous U Statue",
      },
    ],
  },
  {
    University: "R. V. College of Engineering",
    Degree: "Bachelor of Engineering",
    Major: "Computer Science",
    Duration: "Aug 2018 - May 2022",
    CGPA: "",
    Location: "Bangalore, Karnataka, India",
    Logo: "./assets/rvce_logo.png",
    Pictures: [
      {
        Src: "./assets/rvce.jpg",
        Subtitle: "RVCE Front Gate. ID card is mandatory!",
      },
    ],
  },
  {
    University: "Deeksha Integrated Learning",
    Degree: "Pre-University",
    Major: "Computer Science",
    Duration: "Aug 2016 - May 2018",
    CGPA: "",
    Location: "Bangalore, Karnataka, India",
    Logo: "./assets/deeksha_logo.png",
    Pictures: [
      {
        Src: "./assets/reva.jpeg",
        Subtitle: "Reva PUC building has nice proverbs.",
      },
    ],
  },
  {
    University: "Deepayan School",
    Degree: "Kindergarten to High School",
    Duration: "Aug 2014 - May 2016",
    CGPA: "",
    Location: "Hospet, Karnataka, India",
    Logo: "./assets/deepayan_logo.png",
    Pictures: [
      {
        Src: "./assets/deepayan.jpeg",
        Subtitle: "Deepayan new building & ground. 2011",
      },
    ],
  },
];

window.projects = [
  {
    Title: "ECE6785: Advanced Embedded Systems",
    Description:
      "<ul class='project-ul'>\
        <li>Embedded systems, focusing on real-time requirements and reliable systems. The course will cover practical implementation of real-time systems using Real Time Operating Systems (RTOS). Topics covered include: timing requirements, low power modes and energy efficiency, concurrency, distributed communication using CAN bus, system testing and verification.</li>\
      </ul>",
    Year: "2024",
    Date: "Aug 16, 2024",
    Skills: ["C", "Embedded Systems"],
    Links: {
      "Course Page": "https://github.com/uofu-emb/rtos?tab=readme-ov-file",
      "Github Code": "https://github.com/muteebakram/emb-rtos-labs",
      "Ashton Snelgrove": "https://ashton.snelgrove.science",
    },
  },
  {
    Title: "CS6450: Distributed Systems",
    Description:
      "<ul class='project-ul'>\
        <li>The design and implementation of real-world distributed systems. Topics include messaging, messaging failure semantics, remote procedure calls, replication, partitioning, scaling, recovery, fault-tolerance, consistency models, transactions, concurrency control, failure models, consensus protocols, Byzantine fault tolerance, and peer-to-peer systems. Heavy emphasis on systems programming with a focus on highly concurrent code in non-deterministic environments.</li>\
      </ul>",
    Year: "2024",
    Date: "Aug 16, 2024",
    Skills: ["Go", "Distributed Systems"],
    Links: {
      "Github Code": "https://github.com/muteebakram/CS6450",
      "Prof. Ryan Stutsman": "https://rstutsman.github.io",
    },
  },
  {
    Title: "CS6150: Graduate Algorithm",
    Description:
      "<ul class='project-ul'>\
        <li>Design and analysis of algorithms. Topics include Greedy algorithms, dynamic programming, divide and conquer, Asymptomatic analysis and recurrence relations, Graph algorithms and network flows, Computational complexity and intractability, NP-hardness and beyond, and Approximation algorithms.</li>\
      </ul>",
    Year: "2024",
    Date: "Aug 16, 2024",
    Skills: ["Graduate Algorithm"],
    Links: {
      "Dr. Valerio Pascucci": "https://www.sci.utah.edu/people/pascucci.html",
    },
  },
  {
    Title: "Coherent Kubernetes Scheduler",
    Description:
      "<ul class='project-ul'>\
        <li>Characterize performance of centralized KubeSim & distributed Work Stealing Queues for Kubernetes.</li>\
        <li>Designed coherent multi-node simulator in C++ mimicking Kubernetes & WSQ scheduler.</li>\
        <li>Showcased 10x Kubernetes performance increase with CXL based WSQ scheduler.</li>\
      </ul>",
    Year: "2024",
    Date: "Jan 9, 2024",
    Skills: ["C++", "Computer Architecture"],
    TeamSize: 2,
    Links: {
      Paper:
        "https://github.com/muteebakram/CS7810/blob/master/Report/CS7810_Distributed_Schedulers.pdf",
      "Github Code": "https://github.com/icsa-caps/distributed-scheduler",
      "Prof. Vijay Nagarajan": "https://users.cs.utah.edu/~vijay/",
    },
  },
  {
    Title: "CS7810: Advance Architecture & Memory Systems",
    Description:
      "Recent technological advances have meant that computing today is predominantly concurrent and heterogeneous. Today's mobile phones, desktops and servers consist of multiple different processors including CPUs, GPUs and other accelerators. Therefore, applications written for these systems are typically concurrent with communication and coordination bottlenecks the performance and energy efficiency of the system.<br><br>\
      One effective way to reduce data movement is to replicate objects in multiple locations, abstractly speaking, in hardware or software. When there are multiple replicas of a data item the question of consistency comes into play, since a precise notion of a consistency model is essential to to be able to reason about what value an object read will return.<br><br>\
      How does one precisely specify a consistency model? How does one design protocols that ensure that the replicas are kept consistent as per the requirements of the consistency model efficiently and correctly? How to take advantage of modern technological innovations such as RDMA, CXL and Non-volatile memory technologies?<br><br>\
      This research-oriented course strives to answer these questions by studying memory consistency from multiple perspectives: computer-architecture predominantly but also formal methods and verification, programming languages, and distributed systems. In that sense, this was a unique course as it spans the system stack.",
    Year: "2024",
    Date: "Jan 9, 2024",
    Skills: ["C++", "Computer Architecture"],
    TeamSize: 1,
    Links: {
      "Github Code": "https://github.com/muteebakram/CS7810",
      "Prof. Vijay Nagarajan": "https://users.cs.utah.edu/~vijay/",
    },
  },
  {
    Title: "CS7937: Advance Architecture & VLSI Seminar",
    Description: "TBD",
    Year: "2024",
    Date: "Jan 9, 2024",
    Skills: ["Computer Architecture"],
    TeamSize: 1,
    Links: {
      "UtahArch Lab": "https://arch.cs.utah.edu/arch-rd-club.html",
      "Reading Spring'24":
        "https://arch.cs.utah.edu/arch-rd-club_spring24.html",
      "Github Code": "https://github.com/muteebakram/CS7937",
      "Prof. Vijay Nagarajan": "https://users.cs.utah.edu/~vijay/",
    },
  },
  {
    Title: "Old Bailey's Problem",
    Description:
      'The "Old Bailey Decision Classifier" is a machine learning project to predict the outcomes of criminal trials held at the Old Bailey, the central criminal court of England and Wales. Utilizing a diverse dataset of trial transcripts, case summaries, and others. Different machine learning algorithms and various classifiers are employed to predict sentencing decisions. The classifier achieves high accuracy in predicting verdicts,\
      such as guilty or not guilty, through dataset cleaning and transformation, model optimization, and fine-tuning hyperparameter. The Old Bailey Decision Classifier describes authors understanding of Machine Learning algorithms and their implementation to solve a real-world problem using different classifiers and algorithms.',
    Year: "2024",
    Date: "Jan 9, 2024",
    Skills: ["Machine Learning", "Python"],
    TeamSize: 1,
    Links: {
      Paper:
        "https://github.com/muteebakram/CS6350/blob/master/Project/CS6350_ML_Report_Muteeb_u1471482.pdf",
      "Github Code":
        "https://github.com/muteebakram/CS6350/tree/master/Project",
      "Kaggle Competition":
        "https://www.kaggle.com/competitions/uofu-ml-spring-2024-project",
      "Prof. Vivek Srikumar": "https://svivek.com",
    },
  },
  {
    Title: "CS6350: Machine Learning",
    Description:
      "<ul class='project-ul'><li><a target='_blank' href='https://github.com/muteebakram/CS6350/tree/master/Assignments/Decision%20Trees/solution'>Decision Trees (DT)</a>: Learn to represent the problem as  DT. Develop variants of the ID3 algorithm, entropy, and information gain. Dealing with missing features and overfitting.</li>\
      <li><a target='_blank' href='https://github.com/muteebakram/CS6350/tree/master/Assignments/Linear%20classifiers%2C%20Online%20learning%2C%20Perceptron/solution'>Linear Classifiers, Online Learning, and Perceptron</a>:  What problem can linear classifiers help solve, and which problems are linearly separable. Different mistake bounds like CON and Halving algorithms. What makes the Perceptron? Learn its importance, updates, and variants.</li>\
      <li><a target='_blank' href='https://github.com/muteebakram/CS6350/tree/master/Assignments/Computational%20Learning%20Theory/solution'>Computational Learning Theory</a>:  The Theory of Generalization: When can be trust the learning algorithm? Errors of hypotheses Batch Learning •Probably Approximately Correct (PAC) learning •Positive and negative learnability results •Agnostic Learning •Shattering and the VC dimension</li>\
      <li><a target='_blank' href='https://github.com/muteebakram/CS6350/tree/master/Assignments/HW5-Quiz%20Boosting%20and%20Ensembles'>Boosting and Ensembles</a>: Step through the AdaBoost algorithm on a certain dataset. The goal is to understand the mechanics of the algorithm, and also to understand what ensembles are.</li>\
      <li><a target='_blank' href='https://github.com/muteebakram/CS6350/tree/master/Assignments/Logistic%20Regression%20and%20SVMs'>Logistic Regression and SVMs</a>: The concept of probabilistic learning introduces shift from discrete label values (such as 0 or 1) to using values between 0 and 1 for classification.\
      This approach involves exploring Bayesian probability an logistic regression. The fundamental idea revolve around maximizing a Posterior (MAP), which represents the hypothesis’s probability given the dataset being directly proportional to Maximum Likelihood Estimation (MLE), which assesses how well a hypothesis performs given the dataset, along with incorporating prior knowledge of the hypothesis.</li>\
      </ul>",
    Year: "2024",
    Date: "Jan 9, 2024",
    Skills: ["Machine Learning", "Python"],
    TeamSize: 1,
    Links: {
      "Github Code": "https://github.com/muteebakram/CS6350",
      "Course Page":
        "https://svivek.com/teaching/machine-learning/spring2024/info.html",
      "Lecture Videos":
        "https://www.youtube.com/watch?v=hPsvYcI9fnE&list=PLbuogVdPnkCr-ANNi5GZid3MvSkzm_wnM",
      "Prof. Vivek Srikumar": "https://svivek.com",
    },
  },
  {
    Title: "Personal Portfolio Website",
    Description:
      "Develop this minimal website to showcase my experience, education, projects, research, skills, publication, and more.",
    Year: "2024",
    Date: "Feb 4, 2024",
    Skills: ["HTML", "CSS", "Javascript", "Web Components", "Web Development"],
    TeamSize: 1,
    Links: {
      Website: "https://muteebakram.github.io/",
      "Github Code": "https://github.com/muteebakram/muteebakram.github.io",
    },
  },
  {
    Title: "GEneral Matrix Multiplication (GEMM)",
    Description:
      "<ul class='project-ul'><li>Develop high-performance transformations for GEMM (matrix multiplication) with OpenMP & CUDA at runtime. Demonstrating techniques like loop unrolling, tiling, vectorization, permutation, coalesced shared memory, and more.</li>\
      <li>The project highlights the challenge of developing high-performance numerical libraries: high performance is desired across various problem sizes, and the specific matrix sizes used by an application program invoking the library routine are not known a priori.</li>\
      <li>Thus, adaptivity concerning the problem size parameters in the call can be beneficial. The adaptivity may involve dynamically choosing parameters such as tile sizes, shapes/sizes of thread blocks, or even different code versions, e.g., representing various loop permutations and/or degrees of loop unrolling. </li></ul>",
    Year: "2023",
    Date: "Nov 14, 2023",
    Skills: ["C", "OpenMP", "CUDA", "HPC", "Parallel Programming"],
    TeamSize: 1,
    Links: {
      Report:
        "https://github.com/muteebakram/GEMM/blob/master/term-project-fa23.pdf",
      "Github Code": "https://github.com/muteebakram/GEMM",
      "Prof. Saday": "https://users.cs.utah.edu/~saday/",
    },
  },
  {
    Title: "I/O Protocols Benchmark",
    Description:
      "<ul class='project-ul'><li>Analyze and benchmark different async I/O protocols like libaio, Intel SPDK, and io_uring (variants) using the fio tool.</li>\
      <li>The storage devices are getting extremely fast and have reached sub-10 microseconds latency, and the kernel support for IO needs to catch up and utilize the high bandwidth of these devices.</li>\
      <li>Recent asynchronous IO protocols like libaio, io_uring, and SPDK aim to bridge this gap. These protocols scale differently depending on the cores, storage device type, and configurations such as iodepth.</li>\
      <li>An interesting IO protocol configuration we wanted to explore is io_uring with kernel submission queue polling (SQPOLL). This option has the kernel continuously poll for submission queue requests in the shared memory submission queue, allowing users to submit IO requests without using a system call.</li>\
      <li>From our benchmark results, the io_uring SQPoll with multiple kernel workers outperforms the SQPoll pinning, and the number of kernel threads to assign depends on the workload.</li></ul>",
    Year: "2023",
    Date: "Aug 21, 2023",
    Skills: [
      "C",
      "Python",
      "I/O",
      "Benchmark",
      "Kernel Programming",
      "Operating Systems",
    ],
    TeamSize: 3,
    Links: {
      Report:
        "https://github.com/muteebakram/io_benchmark/blob/master/pdfs/Report%20-%20Async%20IO%20Benchmark%3B%20Muteeb%2C%20Prikshit%2C%20Yuvraj.pdf",
      "Github Code": "https://github.com/muteebakram/io_benchmark",
      "Prof. Ryan Stutsman": "https://rstutsman.github.io",
    },
  },
  {
    Title: "Zero Copy - Magic - Ring Buffer",
    Description:
      '<ul class="project-ul"><li>Developed an Inter Process Communication (IPC) with no communication cost.</li>\
      <li>Ring buffer read and write operations are "zero-copy," i.e., it must not copy into any intermediate buffer; a process should write bytes directly to the buffer, and another process will directly read those bytes.</li>\
      <li>The kernel is only involved in setting up and tearing down ring buffers.</li>\
      <li>The ring buffer is "magic," i.e., it is mapped twice into the user address space to avoid awkward fragmentation problems when the area the user is reading from or writing wraps around the end of the ring buffer. As a result, it will always be able to copy in/copy out data from the buffer in one memmove call.</li></ul>',
    Year: "2023",
    Date: "Aug 21, 2023",
    Skills: ["C", "Benchmark", "Kernel Programming", "Operating Systems"],
    TeamSize: 2,
    Links: {
      "Github Code": "https://github.com/muteebakram/zerocopy-ringbuf",
    },
  },
  {
    Title: "Cache Prefetchers",
    Description:
      "<ul class='project-ul'><li>DRAM Memory access is slow and takes several hundred cycles. Thus, SRAM-based memory, so-called caches that sit on the CPU, which take less than 10 cycles, are used. The idea here is to keep the instructions and data required for the CPU to execute in the cache.</li>\
      <li>Cache prefetching can be implemented both in hardware and software to determine the access pattern of the program and prefetch data or instructions ahead of execution and avoid DRAM memory access costs.</li>\
      <li>Implement Stride & Distance Hardware-based Cache Prefetchers on Intel Dynamic Pin Tool.</li></ul>",
    Year: "2023",
    Date: "Aug 21, 2023",
    Skills: ["Computer Architecture", "C++", "Intel Dynamic Pin Tool"],
    TeamSize: 1,
    Links: {
      "Github Code":
        "https://github.com/muteebakram/CS6810/tree/master/Assignments/2",
    },
  },
  {
    Title: "Branch Predictors",
    Description:
      "<ul class='project-ul'><li>A CPU's performance can be increased by always taking the correct branches (if-else, for loops, etc.). The key idea here is to design a heuristic-based algorithm in hardware that predicts whether the branch will be taken.</li>\
      <li>Implement Local, Gshare Global, & Tournament Branch Predictors on the Intel Dynamic Pin Tool.</li></ul>",
    Year: "2023",
    Date: "Aug 21, 2023",
    Skills: ["Computer Architecture", "C++", "Intel Dynamic Pin Tool"],
    TeamSize: 1,
    Links: {
      "Github Code":
        "https://github.com/muteebakram/CS6810/tree/master/Assignments/1",
    },
  },
  {
    Title: "CS6810: Computer Architecture",
    Description:
      "<ul class='project-ul'><li>Learn ISA, pipelining, caches, synchronization, branch prediction, prefetching, speculation, shared memory architecture, memory coherence & memory consistency models.</li>\
      <li>The course provided me an understanding of how the hardware of the CPU, caches, and memory work together. </li>\
      <li>Deep dive into shared memory architecture and learn the importance of memory models for both programming languages and hardware.</li></ul>",
    Year: "2023",
    Date: "Aug 21, 2023",
    Skills: [
      "Computer Architecture",
      "Memory Models",
      "C++",
      "Intel Dynamic Pin Tool",
    ],
    TeamSize: 1,
    Links: {
      "Prof. Vijay Nagarajan": "https://users.cs.utah.edu/~vijay/",
      "Github Code": "https://github.com/muteebakram/CS6810",
    },
  },
  {
    Title: "CS6465: Advance Operating Systems",
    Description:
      "<ul class='project-ul'><li>Learn & understand workings of process, system calls, page tables, virtual memory, scheduling, interrupts, device drivers, file systems, and I/O with code walk-through.</li>\
      <li>Deep dive into research topics like persistent memory, disaggregated memory, virtualization, memory models, and eBPF</li>\
      <li>Learned kernel programming on RISC-V based xv6 operating system.</li></ul>",
    Year: "2023",
    Date: "Aug 21, 2023",
    Skills: [
      "Operating Systems",
      "Kernel Programming",
      "Memory Models",
      "C",
      "RISC-V",
    ],
    TeamSize: 1,
    Links: {
      "Prof. Ryan Stutsman": "https://rstutsman.github.io",
      "Github Code": "https://github.com/muteebakram/CS6465",
    },
  },
  {
    Title: "CS6230: Parallel Programming & HPC",
    Description:
      "<ul class='project-ul'><li>Learn core concepts of parallel programming, cache analysis, data dependency, loop transformations, and vectorization.</li>\
      <li>Learn OpenMP pragmas, threads, synchronization, atomics, and more. Implement OpenMP with different work distributions.</li>\
      <li>Learn Message Passing Interface (MPI) contrast to shared memory parallel programming and understand collectives and communication protocols.</li>\
      <li>Learn GPU architecture, scheduling, wraps, and memory hierarchy. Implement CUDA programming with loop unrolling, coalesced memory, shared memory, and more.</li></ul>",
    Year: "2023",
    Date: "Aug 21, 2023",
    Skills: ["HPC", "OpenMP", "CUDA", "MPI", "C", "Parallel Programming"],
    TeamSize: 1,
    Links: {
      "Prof. Saday": "https://users.cs.utah.edu/~saday/",
      "Github Code": "https://github.com/muteebakram/CS6230",
    },
  },
  {
    Title: "QUIC Packet Identifier",
    Description:
      "The project involves capturing network packets, preprocessing them to remove noise, and implementing a classifier to determine the transport protocol used. The objective is to evaluate various machine learning algorithms for classifying packets based solely on characteristics such as size, headers, etc., without inspecting the packet contents.",
    Year: "2022",
    Date: "Feb 22, 2022",
    Skills: ["QUIC", "Wireshark", "Python", "Machine Learning", "HTTP"],
    TeamSize: 1,
    Links: {
      "Github Code": "https://github.com/muteebakram/quic-classifier",
    },
  },
  {
    Title: "Cross Platform CLI Timer",
    Description:
      "A simple CLI-based timer that runs in the background. When the timer reaches its end, the screen saver activates for the specified break duration. After the break concludes, the screen saver deactivates, allowing the user to resume work.",
    Year: "2020",
    Date: "Aug 2, 2020",
    Skills: ["CLI", "Python"],
    TeamSize: 1,
    Links: {
      "Github Code": "https://github.com/muteebakram/Timer",
    },
  },
  {
    Title: "Learn ReactJS",
    Description:
      "Learn React Javascript Library. Developed a dummy TODO application.",
    Year: "2021",
    Date: "Dec 20, 2021",
    Skills: ["ReactJS", "Javascript"],
    TeamSize: 1,
    Links: {
      "Github Code": "https://github.com/muteebakram/react-js",
    },
  },
  {
    Title: "Learn GoLang",
    Description:
      "Learn Go Programming Language, especially the concurrency and go routines. The intention was to test whether we should adopt Go programming at Cisco. Completed LinkedIn's Go Essential Training course.",
    Year: "2021",
    Date: "Aug 20, 2021",
    Skills: ["Go"],
    TeamSize: 1,
    Links: {
      "LinkedIn Course": "",
      "Github Code": "https://github.com/muteebakram/go-tutorial",
    },
  },
  {
    Title: "CLI Games",
    Description:
      "Developed three fun little CLI games: Guess Number, Rock Paper Scissors, and Tic Tac Toe.",
    Year: "2021",
    Date: "Nov 5, 2021",
    Skills: ["Games", "CLI", "Python"],
    TeamSize: 1,
    Links: {
      "Github Code": "https://github.com/muteebakram/games",
    },
  },
  {
    Title: "Blockchain",
    Description:
      "Explore Blockchain and Cryptocurrency - create coins, consensus protocols, smart contracts, mining, and hardware. Presented my learnings to the team at Cisco. Completed an Udemy course.",
    Year: "2021",
    Date: "Feb 13, 2021",
    Skills: ["Blockchain", "Cryptocurrency", "Python"],
    TeamSize: 1,
    Links: {
      "Udemy Course": "",
      "Github Code": "https://github.com/muteebakram/blockchain",
    },
  },
  {
    Title: "Learn NodeJS",
    Description:
      "Learn and understand the workings of NodeJS. This was my formal introduction to Javascript and the workings of the v8 browser engine. The knowledge gained from this Udemy course helped me complete several front-end projects at Cisco.",
    Year: "2021",
    Date: "Feb 13, 2021",
    Skills: ["NodeJS", "Javascript", "Web Components", "Web Development"],
    TeamSize: 1,
    Links: {
      "Udemy Course": "",
      "Github Code": "https://github.com/muteebakram/nodejs-tutorial",
    },
  },
  {
    Title: "Expense App",
    Description:
      "Designed and developed the fronted and backend of the Flutter application to track expenditures using Dart. The intention here was to give a shot to mobile development and test on my Pixel 2xl.",
    Year: "2020",
    Date: "Aug 17, 2020",
    Skills: ["Flutter", "Dart", "Android", "Mobile Development"],
    TeamSize: 1,
    Links: {
      "Udemy Course": "",
      "Github Code": "https://github.com/muteebakram/ExpenseApp",
    },
  },
  {
    Title: "CI/CD with Docker Cloud",
    Description:
      "Implement Continuous Integration and Continuous Deployment on the docker cloud. Once pushed to the cloud, a test container spins the application container and runs tests to validate the correctness of the application. When tests are passed, the new application container is deployed; otherwise, deployment fails.",
    Year: "2020",
    Date: "Dec 27, 2020",
    Skills: ["Containers", "Docker", "CI/CD", "Cloud Computing", "Python"],
    TeamSize: 1,
    Links: {
      "Udemy Course": "",
      "Github Code": "https://github.com/muteebakram/docker-cloud",
    },
  },
  {
    Title: "Analysis of Container Runtime Engines",
    Description:
      "Assessed the performance of different container runtime engines on CPU, memory utilization, and I/O throughput for scalability, replication, patches, and deployment strategies. <i>Need help to complete project</i>. ",
    Year: "2022",
    Date: "Sept 20, 2022",
    Skills: [
      "Containers",
      "Docker",
      "runC",
      "containerD",
      "Benchmark",
      "Python",
    ],
    TeamSize: 1,
    Links: {
      "Github Code": "https://github.com/muteebakram/container-performance",
    },
  },
  {
    Title: "Traffic Decongestion System",
    Description:
      "<ul class='project-ul'><li>Develop dataset and trained neural networks to run on peripheral devices for vehicle detection to predict traffic volume. Implemented Yolo-v3-based object detection and communication between devices and achieved an accuracy of 95.83%.<li>Worked with Prof. Rajashree Shettar and showcased our work at the Indian Institute of Science, Bangalore.</li></ul>",
    Year: "2019",
    Date: "Dec 12, 2019",
    Skills: [
      "IoT",
      "Camera",
      "Raspberry Pi",
      "Embedded Systems",
      "Machine Learning",
      "Object Detection",
      "C",
      "Python",
    ],
    TeamSize: 3,
    Links: {},
  },
  {
    Title: "Smart Parking System",
    Description:
      "<ul class='project-ul'><li>Designed and developed an end-to-end system with IR sensors connected to a WiFi module with a camera to run character recognition for vehicle license numbers and an Android application to locate and reserve a parking slot in real-time.</li>\
      <li>The project was shortlisted to showcase at the Cisco RVCE IoT workshop, where we conducted a three-day workshop to teach it to 40 students.</li></ul>",
    Year: "2018",
    Date: "Oct 21, 2018",
    Skills: [
      "Embedded Systems",
      "IoT",
      "Arduino",
      "Camera",
      "Machine Learning",
      "Android",
      "Mobile Development",
      "Java",
      "C",
      "Python",
    ],
    TeamSize: 3,
    Links: {},
  },
  {
    Title: "Event Management System",
    Description:
      "Designed and developed a fully functional website to find, host & reserve private and public events. The project showcased the concepts of Software Engineering practices and DBMS. Some project features are transactional bookings, notification, authentication, and implementation of database concepts like ACID, normalization, etc.",
    Year: "2019",
    Date: "Jul 30, 2019",
    Skills: [
      "Firebase",
      "DBMS",
      "SQL",
      "HTML",
      "CSS",
      "Javascript",
      "Web Development",
    ],
    TeamSize: 2,
    Links: {
      "Github Code": "https://github.com/muteebakram/Event-Managment-System",
    },
  },
];

window.publications = [
  {
    Title:
      "A Detail Survey on QUIC and its Impact on Network Data Transmission",
    URL: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9777199&isnumber=9776641",
    Conference:
      "2022 6th International Conference on Trends in Electronics and Informatics (ICOEI), Tirunelveli, India, 2022, pp. 378-385, doi: 10.1109/ICOEI53556.2022.9777199",
    Authors:
      "Pratiksha Narasimha Nayak G; Nimisha Dey; Neha N; Malavika Hariprasad; Sandhya S; Minal Moharir; Muteeb Akram",
  },
  {
    Title: "Server Firmware Management using DMTF Redfish REST APIs",
    URL: "https://www.irjet.net/archives/V7/i5/IRJET-V7I51018.pdf",
    Conference:
      "May 2020, International Research Journal of Engineering and Technology (IRJET)",
    Authors:
      "Muteeb Akram Nawaz, Veena Gadad (Dept. of Computer Science and Engineering, R V College of Engineering, Karnataka, India)",
    Links: [
      {
        Text: "DMTF Redfish Recognition",
        URL: "https://www.dmtf.org/about/academicalliance#redfish",
      },
    ],
  },
];

window.contact = [
  {
    greeting: "Hello there!",
    message: "Feel free to reach out to me on any of the platforms.",
    links: [
      {
        url: "mailto://muteebakram@gmail.com",
        text: "muteebakram@gmail.com",
      },
      {
        url: "https://www.linkedin.com/in/muteeb-akram/",
        text: "linkedin.com/in/muteeb-akram",
      },
      {
        url: "https://github.com/muteebakram",
        text: "github.com/muteebakram",
      },
      {
        url: "https://www.instagram.com/muteebakram/",
        text: "instagram.com/muteebakram",
      },
      {
        url: "https://www.twitter.com/muteebakram/",
        text: "twitter.com/muteeb_akram",
      },
      {
        url: "https://scholar.google.com/citations?user=miOm8JMAAAAJ&hl=en",
        text: "scholar.google.com/citations?user=muteebakram",
      },
    ],
    closing: "Thanks for stopping by.<br>:wq",
  },
];

class MyHeader extends HTMLElement {
  static observedAttributes = ["pageTitle", "pageSubTitle", "theme"];

  constructor() {
    super();
    this.theme = window.header.DefaultTheme;
    this.pageTitle = this.getAttribute("pageTitle");
    this.pageSubTitle = this.getAttribute("pageSubTitle");
  }

  get theme() {
    return this.getAttribute("theme");
  }

  set theme(newValue) {
    this.setAttribute("theme", newValue);
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue !== newValue && attr === "pageTitle") {
      this.pageTitle = newValue;
    } else if (oldValue !== newValue && attr === "pageSubTitle")
      this.pageSubTitle = newValue;
    else if (oldValue !== newValue && attr === "theme") this.theme = newValue;
  }

  connectedCallback() {
    this.setInitialTheme();
    this.render();
    this.querySelector("#theme-toggle").addEventListener(
      "click",
      this.onThemeChange
    );
  }

  setInitialTheme() {
    const initialTheme = localStorage.getItem("theme");
    const setInitialTheme =
      initialTheme === null ? window.header.DefaultTheme : initialTheme;

    this.theme = setInitialTheme;

    if (setInitialTheme === "light")
      document.body.classList.remove("dark-theme");
    else document.body.classList.add("dark-theme");
  }

  onThemeChange() {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    this.theme = newTheme;

    if (newTheme === "light") document.body.classList.remove("dark-theme");
    else document.body.classList.add("dark-theme");
    localStorage.setItem("theme", newTheme);
  }

  renderThemeIcon() {
    const lightIcon = `<svg id="theme-toggle" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.14a.722.722 0 0 0-.722.722v2.166a.722.722 0 0 0 1.444 0v-2.166a.722.722 0 0 0-.722-.721ZM12 2.25a.722.722 0 0 0-.722.722v2.166a.722.722 0 0 0 1.444 0V2.972A.722.722 0 0 0 12 2.25ZM5.86 12a.722.722 0 0 0-.723-.722H2.972a.722.722 0 0 0 0 1.444h2.165A.722.722 0 0 0 5.86 12ZM21.028 11.278h-2.165a.722.722 0 0 0 0 1.444h2.165a.722.722 0 0 0 0-1.444ZM7.148 16.13a.72.72 0 0 0-.51.21l-1.533 1.534a.72.72 0 1 0 1.022 1.022l1.532-1.533a.724.724 0 0 0-.51-1.233ZM16.852 7.87a.72.72 0 0 0 .51-.21l1.533-1.533a.72.72 0 0 0 .211-.511.72.72 0 0 0-.722-.722.72.72 0 0 0-.51.21L16.34 6.639a.72.72 0 0 0-.211.51.72.72 0 0 0 .722.722ZM6.127 5.105a.72.72 0 0 0-.511-.211.72.72 0 0 0-.722.722.72.72 0 0 0 .21.51L6.638 7.66a.72.72 0 0 0 .511.211.72.72 0 0 0 .722-.722.72.72 0 0 0-.21-.51L6.126 5.105ZM17.363 16.34a.72.72 0 1 0-1.022 1.022l1.532 1.533a.72.72 0 0 0 1.022 0 .72.72 0 0 0 0-1.021l-1.532-1.533ZM12 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5Z" fill="currentColor"></path></svg>`;
    const darkIcon = `<svg id="theme-toggle" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.742 13.045a8.086 8.086 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.026 8.026 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.936 9.936 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1 1 0 0 0-1.224-1.224Zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.952 7.952 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.973 9.973 0 0 0 7.848 2.891 8.037 8.037 0 0 1-1.484 2.059Z" fill="currentColor"></path></svg>`;

    return this.theme === "dark" ? lightIcon : darkIcon;
  }

  render() {
    const subTitle = this.pageSubTitle
      ? `<section class="header-subtitle">${this.pageSubTitle}</section>`
      : "";

    this.innerHTML = `
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="./style.css">
        <link rel="icon" type="image/x-icon" href="${window.header.Favicon}">
        <title>Muteeb Akram: ${this.pageTitle}</title>
      </head>
      <header>
        <div class="header-container">
          <h1 class="name">${window.header.Title}</h1>
          <div title="Toggle theme" class="theme-icon">
            ${this.renderThemeIcon()}
          </div>
        </div>
        <hr>
        <center>
        <div class="row-header">
          ${window.header.Pages.map(
            (page) => `
            <section id="#" title="${page.ID}" class="row-header-item">
              <a href="${page.Link}">${page.Name}</a>
            </section>
          `
          ).join("")}
        </div>
        </center>
        <div class="exp-header">
          <label class="page-title">${this.pageTitle}</label>
          ${subTitle}
        </div>
      </header>`;
  }
}

class MyHome extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      ${window.home
        .map(
          (section) => `
        <div class="profile-container">
          <img class="profile-image" src="${section.Image.Src}" alt="${
            section.Image.Alt
          }">
          <div>
            <strong>${section.Name}</strong>
            <section class="pad" style="margin-top: 16px;">${
              section.Title
            }</section>
            <section class="pad">${section.Organization}</section>
            <section class="small-pad" style="margin-top: 20px;"><a href="mailto://${
              section.Email
            }">${section.Email}</a></section>
            <section class="small-pad">${section.Location}</section>
          </div>
        </div>
        <div class="about-text">
          <h4>${section.AboutTitle}</h4>
          ${section.Paragraphs ? section.Paragraphs : ``}
        </div>
      `
        )
        .join("")}
      </div>`;
  }
}

class MyEducation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="education" class="education">
        ${window.education
          .map(
            (edu) => `
          <div class="education-section">
            <div class="education-container">
              ${
                edu.Logo
                  ? `
                <div class="education-logo-container">
                  <img class="education-logo" src="${edu.Logo}" alt="${edu.University} Logo">
                </div>
              `
                  : ""
              }
              <div class="education-content">
                <div class="education-text">
                  <section class="school-title" id="${edu.Degree?.toLowerCase()?.replace(
                    " ",
                    "-"
                  )}">${edu.University}</section>
                  <section class="degree-title">${edu.Degree}${
              edu.Major ? `, ${edu.Major}` : ""
            }</section>
                  ${
                    edu.CGPA
                      ? `<section class="education-subtitle">CGPA: ${edu.CGPA}</section>`
                      : ""
                  }
                  <section class="education-subtitle">${edu.Duration}</section>
                  <section class="education-subtitle">${edu.Location}</section>
                </div>
                ${
                  edu.Pictures
                    ? `
                <div class="company-images">
                  ${edu.Pictures.map(
                    (pic) => `
                    <figure>
                      <img class="company-image" src="${pic.Src}" alt="${
                      pic.Subtitle
                    }">
                      ${
                        pic.Subtitle
                          ? `<figcaption>${pic.Subtitle}</figcaption>`
                          : ""
                      }
                    </figure>
                  `
                  ).join("")}
                </div>`
                    : ""
                }
              </div>
            </div>
            ${
              edu.Description
                ? `<section class="education-description">${edu.Description}</section>`
                : ""
            }
          </div>
          <hr class="hr">
        `
          )
          .join("")}
      </div>`;
  }
}

class MyExperience extends HTMLElement {
  constructor() {
    super();
    this.selectedType = "All";
    this.experience = [];
    this.experienceTypes = [];
  }

  connectedCallback() {
    this.prepareExperienceTypes();
    this.addEventListener("click", this.onTabClick);
    this.render(window.experience);
  }

  prepareExperienceTypes() {
    this.experienceTypes = [
      ...new Set(window.experience.map((exp) => exp.Type)),
    ];
    this.experienceTypes.unshift("All");
    this.experienceTypes.sort();
  }

  onTabClick(event) {
    const selectedType = event.target.innerText;
    if (!this.experienceTypes.includes(selectedType)) return;

    const filteredExperience =
      selectedType === "All"
        ? window.experience
        : window.experience.filter(
            (exp) => exp.Type?.toLowerCase() === selectedType.toLowerCase()
          );

    this.selectedType = selectedType;
    this.render(filteredExperience);
  }

  render(experience) {
    this.innerHTML = `
      <div class="page-content">
        <div class="filter-experience-tabs">
          ${this.experienceTypes
            .map(
              (type) =>
                `<a class="filter-experience-tab" @click="${() =>
                  this.onTabClick(type)}" style="${
                  type === this.selectedType
                    ? "text-decoration: underline;"
                    : ""
                }">${type}</a>`
            )
            .join(" ᐧ ")}
        </div>
        ${experience
          .map(
            (exp) => `
          <div class="company">
            <div class="company-header">
              ${
                exp.CompanyLogo
                  ? `
                <div class="company-logo-container">
                  <img class="company-logo" src="${exp.CompanyLogo}" alt="${exp.Company} Logo">
                </div>
              `
                  : ""
              }
              <div>
                <section class="company-title">${exp.Company}</section>
                <section class="company-location">${exp.Location}</section>
              </div>
            </div>
            ${exp.Roles.map(
              (role) => `
              <div class="role">
                <div class="role-header">
                  <div class="role-header-item">
                    <section class="role-title">${role.Title}</section>
                    ${
                      exp.Subtitle
                        ? `<section class="advisor-name">${exp.Subtitle}</section>`
                        : ""
                    }
                  </div>
                  <div class="role-header-item">
                    <section class="role-duration">${role.TimePeriod}</section>
                  </div>
                </div>
                ${
                  role.Description
                    ? `<section class="role-description">${role.Description}</section>`
                    : ""
                }
              </div>
            `
            ).join("")}
            ${
              exp.Pictures
                ? `
              <div class="company-images">
                ${exp.Pictures.map(
                  (pic) => `
                  <figure>
                    <img class="company-image" src="${pic.Src}" alt="${
                    pic.Subtitle
                  }">
                    ${
                      pic.Subtitle
                        ? `<figcaption>${pic.Subtitle}</figcaption>`
                        : ""
                    }
                  </figure>
                `
                ).join("")}
              </div>
            `
                : ""
            }
          </div>
          <hr class="hr">
        `
          )
          .join("")}
      </div>
    `;
  }
}

class MyFilter extends HTMLElement {
  constructor() {
    super();
    this.skills = [];
    this.years = [];
    this.titles = [];
    this.selectedSkills = [];
    this.selectedYears = [];
    this.selectedTitles = [];
    this.projects = window.projects;
  }

  connectedCallback() {
    this.prepareFilters();
    // FIXME When filter is added clicking on x of filter must also trigger this event.
    this.addEventListener("click", this.onFilterSelect);
    this.render();
  }

  prepareFilters() {
    this.years = this.projects.map((p) => p.Year);
    this.years = [...new Set(this.years)]; // Remove duplicates
    // this.years = this.years.filter((value, index)=> this.years.indexOf(value) === index); // Remove duplicates
    this.years.sort().reverse(); // Current year at the beginning.

    this.titles = this.projects.map((p) => p.Title);
    this.titles = [...new Set(this.titles)]; // Remove duplicates

    // this.professors = this.projects.map((p) => p.Professor);
    // this.professors = [...new Set(this.professors)]; // Remove duplicates

    this.skills = this.projects.map((p) => p.Skills).flat(1); // Convert 2D array to 1D array.
    this.skills = [...new Set(this.skills)]; // Remove duplicates
    this.skills.sort();
  }

  onFilterSelect() {
    let selectedYears = Array.from(
      document.getElementById("selectedYears").options
    )
      .filter((option) => option.selected)
      .map((option) => option.value);

    // console.log("this.selectedYears", selectedYears);
    this.selectedYears = selectedYears;

    let selectedSkills = Array.from(
      document.getElementById("selectedSkills").options
    )
      .filter((option) => option.selected)
      .map((option) => option.value);

    // console.log("this.selectedSkills", selectedSkills);
    this.selectedSkills = selectedSkills;

    let selectedTitles = Array.from(
      document.getElementById("selectedTitles").options
    )
      .filter((option) => option.selected)
      .map((option) => option.value);

    // console.log("this.selectedTitles", selectedTitles);
    this.selectedTitles = selectedTitles;

    // Prepare the projects to show with filters selected.
    // Start from all projects and filter one bye one.
    this.selectedProjects = this.projects;
    if (this.selectedYears.length) {
      this.selectedProjects = this.selectedProjects.filter((p) =>
        this.selectedYears.includes(p.Year)
      );
    }

    // console.log("this.selectedProjects", this.selectedProjects);
    if (this.selectedSkills.length) {
      this.selectedProjects = this.selectedProjects.filter((project) =>
        project.Skills.some((skill, _) => this.selectedSkills.includes(skill))
      );
    }

    if (this.selectedTitles.length) {
      this.selectedProjects = this.selectedProjects.filter((p) =>
        this.selectedTitles.includes(p.Title)
      );
    }

    this.renderMyProject();
  }

  renderMyProject() {
    const component = document.querySelector("my-project");
    component.projects = JSON.stringify(this.selectedProjects);
  }

  renderFilters() {
    let filters = ``;
    const filterIcon = ``;
    // const filterIcon = `<svg class="filter-icon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 30 30" id="filter"><path fill="#111224" d="M17 11H4A1 1 0 0 1 4 9H17A1 1 0 0 1 17 11zM26 11H22a1 1 0 0 1 0-2h4A1 1 0 0 1 26 11z"></path><path fill="#111224" d="M19.5 13.5A3.5 3.5 0 1 1 23 10 3.5 3.5 0 0 1 19.5 13.5zm0-5A1.5 1.5 0 1 0 21 10 1.5 1.5 0 0 0 19.5 8.5zM26 21H13a1 1 0 0 1 0-2H26A1 1 0 0 1 26 21zM8 21H4a1 1 0 0 1 0-2H8A1 1 0 0 1 8 21z"></path><path fill="#111224" d="M10.5,23.5A3.5,3.5,0,1,1,14,20,3.5,3.5,0,0,1,10.5,23.5Zm0-5A1.5,1.5,0,1,0,12,20,1.5,1.5,0,0,0,10.5,18.5Z"></path></svg>`;

    let yearFilter = `<select id="selectedYears" placeholder="Select Year" txtSearch="Search Year" style="width: 20%" multiple multiselect-search="true" @click=${this.onFilterSelect}>`;
    yearFilter += this.years.map(
      (year) => `<option value="${year}">${year}</option>`
    );
    yearFilter += "</select>";

    let skillFilter = `<select id="selectedSkills" placeholder="Select Skills" txtSearch="Search Skills" style="width: 30%" multiple multiselect-search="true" @click=${this.onFilterSelect}>`;
    skillFilter += this.skills.map(
      (skill) => `<option value="${skill}">${skill}</option>`
    );
    skillFilter += "</select>";

    let titleFilter = `<select id="selectedTitles" placeholder="Select Projects" txtSearch="Search Projects" style="width: 35%" multiple multiselect-search="true" @click=${this.onFilterSelect}>`;
    titleFilter += this.titles.map(
      (skill) => `<option value="${skill}">${skill}</option>`
    );
    titleFilter += "</select>";

    filters += `<div class="filters-div">${filterIcon} ${titleFilter}&nbsp; ${skillFilter}&nbsp; ${yearFilter}</div>`;
    return filters;
  }

  render() {
    this.innerHTML = `${this.renderFilters()}`;
  }
}

class MyProject extends HTMLElement {
  static observedAttributes = ["projects"];

  constructor() {
    super();
    this.skillCount = 0;
    this.totalSkillCount = this.getSkillCount(window.projects);
    this.projectCount = window.projects.length;
    // Property projects here is a string. my-filter component sends a string of objects.
    this.projects = JSON.stringify(window.projects);
  }

  connectedCallback() {
    if (!this.projects) return;

    let projectMap = this.prepareProjectMap();
    this.render(projectMap);
  }

  getSkillCount(projects) {
    let skillCount;
    skillCount = projects.map((p) => p.Skills).flat(1); // Convert 2D array to 1D array.
    skillCount = [...new Set(skillCount)]; // Remove duplicates
    return skillCount.length;
  }

  get projects() {
    return this.getAttribute("projects");
  }

  set projects(newValue) {
    this.setAttribute("projects", newValue);
  }

  attributeChangedCallback(_, oldValue, newValue) {
    // Don't change the project value when newValue is empty.
    if (newValue && oldValue !== newValue) {
      this.projects = newValue;
      this.connectedCallback(); // Re-render manually when the project value changes.
    }
  }

  prepareProjectMap() {
    // Convert the string from my-filter to object.
    let projects = JSON.parse(this.projects);
    this.projectCount = projects.length;
    this.skillCount = this.getSkillCount(projects);

    let projectMap = projects.reduce(function (map, project) {
      if (!(project.Year in map)) map[project.Year] = [];
      map[project.Year].push(project);
      return map;
    }, {});

    const map = new Map(Object.entries(projectMap));
    let sortedArray = Array.from(map.entries());

    sortedArray.sort((a, b) => b[0] - a[0]);
    let sortedMap = new Map(sortedArray);

    return sortedMap;
  }

  getProjectTitle(p) {
    if (p.TitleLink && p.TitleLink !== "")
      return `<label class="project-title"><a target="_blank" href="${p.TitleLink}">${p.Title}</a></label>`;

    return `<label class="project-title">${p.Title}</label>`;
  }

  getLinks(p) {
    if (p.Links && Object.keys(p.Links).length) {
      let links = ` `;

      Object.entries(p.Links).forEach(([key, value], index) => {
        // prettier-ignore
        links += value ? `<a target="_blank" href="${value}">${key}</a>` : `${key}`;
        if (index != Object.keys(p.Links).length - 1)
          links += `&nbsp; • &nbsp;`;
      });

      return links;
    }

    return ``;
  }

  getTeamSize(p) {
    if (p.TeamSize && p.TeamSize > 1)
      return `&nbsp;•&nbsp;Team of ${p.TeamSize}`;

    return ``;
  }

  getProfessorName(p) {
    if (p.Professor && p.Professor !== "")
      return `${p.Professor} &nbsp;•&nbsp; `;

    return ``;
  }

  getSkills(p) {
    if (p.Skills && p.Skills.length) {
      return `&nbsp;•&nbsp; Skills:
        ${p.Skills.map((tag) => `&nbsp;&nbsp;#${tag}`).join("")}`;
    }

    return ``;
  }

  renderProject(p) {
    return `
      ${this.getProjectTitle(p)}
      <section class="project-subsection">
        ${p.Date} ${this.getSkills(p)}
        ${this.getTeamSize(p)} 
      </section>
      <section class="project-subsection">
        ${this.getLinks(p)}
      </section>
      <section class="project-description">${p.Description}</section>
      <hr class="hr">`;
  }

  renderProjectByYear(projects) {
    return projects.map((p) => `${this.renderProject(p)}`).join(" ");
  }

  render(projectMap) {
    let resultantHTML = `<section class="filter-result">Showing ${this.projectCount} from ${window.projects.length} projects with ${this.skillCount} from ${this.totalSkillCount} skills.</section>`;

    projectMap.forEach((projects, year) => {
      resultantHTML += `
        <section class="year-title">${year}</section>
        ${this.renderProjectByYear(projects)}`;
    });

    this.innerHTML = resultantHTML;
  }
}

class MyPublication extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="#publications">
        <ol class="paper-list">${window.publications
          .map(
            (pub, index) => `
          <li>
            <section class="paper-title">
              <a target="_blank" href="${pub.URL}">${pub.Title}</a>
            </section>
            ${pub.Conference}
            <section class="paper-authors">
              <i>${pub.Authors}</i>
            </section>
            ${
              pub.Links
                ? `
              <section class="paper-subsection">
                ${pub.Links.map(
                  (link) => `
                  [ <a href="${link.URL}">${link.Text}</a> ]
                `
                ).join("")}
              </section>
            `
                : ""
            }
          </li>
          `
          )
          .join("")}
        </ol>
      </div>`;
  }
}

class MyContact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="contact" class="contact">
        ${window.contact
          .map(
            (section) => `
          <p style="padding: 6px 0 0 0;">${section.greeting}</p>
          <p>${section.message}</p>
          <ul class="contact-ul">
            ${section.links
              .map(
                (link) => `
              <li>
                <a target="_blank" href="${link.url}">${link.text}</a>
              </li>
            `
              )
              .join("")}
          </ul>
          ${section.closing}
        `
          )
          .join("")}
      </div>`;
  }
}

class MyFooter extends HTMLElement {
  static observedAttributes = [
    "showHR",
    "showTop",
    "showCopyright",
    "showLastUpdated",
  ];

  constructor() {
    super();
    this.lastUpdated = "April 14th, 2025";
    this.showHR = this.hasAttribute("showHR");
    this.showTop = this.hasAttribute("showTop");
    this.showCopyright = this.hasAttribute("showCopyright");
    this.showLastUpdated = this.hasAttribute("showLastUpdated");
  }

  connectedCallback() {
    const showTop = `<div class="footer-text"><a href="#">Go Top ↑</a></div>`;
    const lastUpdated = `<div class="footer-text">Last Updated ${this.lastUpdated}</div>`;
    const copyright = `<div class="footer-text">™ and © Muteeb Akram. All Rights Reserved.</div>`;

    this.innerHTML = `
      ${this.showHR ? `<hr>` : ``}
        <div class="footer-container">
          ${this.showCopyright ? copyright : ``}
          ${this.showTop ? showTop : ``}
          ${this.showLastUpdated ? lastUpdated : ``}
        </div>`;
  }
}

customElements.define("my-header", MyHeader);
customElements.define("my-home", MyHome);
customElements.define("my-experience", MyExperience);
customElements.define("my-education", MyEducation);
customElements.define("my-publication", MyPublication);
customElements.define("my-filter", MyFilter);
customElements.define("my-project", MyProject);
customElements.define("my-contact", MyContact);
customElements.define("my-footer", MyFooter);
