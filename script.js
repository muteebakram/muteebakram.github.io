window.projects = [
  {
    Title: "Coherent Kubernetes Scheduler",
    Description: "TBD",
    Year: "2024",
    Date: "Jan 9, 2024",
    Skills: ["Computer Architecture", "C++"],
    TeamSize: 2,
    Links: {
      "Prof. Vijay Nagarajan": "https://users.cs.utah.edu/~vijay/",
      // "Github Code": "https://github.com/muteebakram/CS7810",
    },
  },
  {
    Title: "CS7810: Advance Memory Systems",
    Description: "TBD",
    Year: "2024",
    Date: "Jan 9, 2024",
    Skills: ["Computer Architecture", "C++"],
    TeamSize: 1,
    Links: {
      "Prof. Vijay Nagarajan": "https://users.cs.utah.edu/~vijay/",
      "Github Code": "https://github.com/muteebakram/CS7810",
    },
  },
  {
    Title: "CS7937: Advance Computer Architecture Seminar",
    Description: "TBD",
    Year: "2024",
    Date: "Jan 9, 2024",
    Skills: ["Computer Architecture"],
    TeamSize: 1,
    Links: {
      "Prof. Vijay Nagarajan": "https://users.cs.utah.edu/~vijay/",
      "Github Code": "https://github.com/muteebakram/CS7937",
    },
  },
  {
    Title: "Old Bailey's Problem",
    Description: "TBD",
    Year: "2024",
    Date: "Jan 9, 2024",
    Skills: ["Machine Learning", "Python"],
    TeamSize: 1,
    Links: {
      "Prof. Vivek Srikumar": "https://svivek.com",
      "Paper": "https://github.com/muteebakram/CS6350/blob/master/Project/CS6350_ML_Report_Muteeb_u1471482.pdf",
      "Github Code": "https://github.com/muteebakram/CS6350/tree/master/Project",
    },
  },
  {
    Title: "CS6350: Machine Learning",
    Description:
      "<ul class='project-ul'><li><a target='_blank' href='https://github.com/muteebakram/CS6350/tree/master/Assignments/Decision%20Trees/solution'>Decision Trees (DT)</a>: Learn to represent the problem as  DT. Develop variants of the ID3 algorithm, entropy, and information gain. Dealing with missing features and overfitting.</li>\
      <li><a target='_blank' href='https://github.com/muteebakram/CS6350/tree/master/Assignments/Linear%20classifiers%2C%20Online%20learning%2C%20Perceptron/solution'>Linear Classifiers, Online Learning, and Perceptron</a>:  What problem can linear classifiers help solve, and which problems are linearly separable. Different mistake bounds like CON and Halving algorithms. What makes the Perceptron? Learn its importance, updates, and variants.</li></ul>",
    Year: "2024",
    Date: "Jan 9, 2024",
    Skills: ["Machine Learning", "Python"],
    TeamSize: 1,
    Links: {
      "Prof. Vivek Srikumar": "https://svivek.com",
      "Github Code": "https://github.com/muteebakram/CS6350",
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
      "Github Code": "https://github.com/muteebakram/muteebakram.github.io",
      Website: "https://muteebakram.github.io/",
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
      "Prof. Saday": "https://users.cs.utah.edu/~saday/",
      "Github Code": "https://github.com/muteebakram/GEMM",
      Report:
        "https://github.com/muteebakram/GEMM/blob/master/term-project-fa23.pdf",
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
      "Prof. Ryan Stutsman": "https://rstutsman.github.io",
      "Github Code": "https://github.com/muteebakram/io_benchmark",
      Report:
        "https://github.com/muteebakram/io_benchmark/blob/master/pdfs/Report%20-%20Async%20IO%20Benchmark%3B%20Muteeb%2C%20Prikshit%2C%20Yuvraj.pdf",
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
    Links: {
      "Github Code": "",
    },
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
    Links: {
      "Github Code": "",
    },
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
class MyHeader extends HTMLElement {
  static observedAttributes = ["pageTitle", "theme"];

  constructor() {
    super();
    this.theme = "light";
    this.pageTitle = this.getAttribute("pageTitle");
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
    } else if (oldValue !== newValue && attr === "theme") this.theme = newValue;
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
    const setInitialTheme = initialTheme === null ? "light" : initialTheme;

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
    this.innerHTML = `
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link rel="stylesheet" href="./style.css">
        <title>Muteeb Akram: ${this.pageTitle}</title>
      </head>

      <header>
        <div class="header-container">
          <h1 class="name">Muteeb Akram</h1>
          <div title="Toggle Theme" class="theme-icon">
            ${this.renderThemeIcon()}
          </div>
        </div>
        <hr>
        <center>
        <div class="row-header">
          <section class="row-header-item" style="padding-left: 0;" title="Home"><a href="./index.html">Home</a></section>
          <section class="row-header-item" title="Experience"><a href="./experience.html">Experience</a></section>
          <section class="row-header-item" title="Education"><a href="./education.html">Education</a></section>
          <section class="row-header-item" title="Projects"><a href="./projects.html">Projects</a></section>
          <section class="row-header-item" title="Publications"><a href="./publications.html">Publications</a></section>
          <section class="row-header-item" style="padding-right: 0;" title="Contact"><a href="./contact.html">Contact</a></section>
        </div>
        </center>
        <h2 style="padding-top: 12px;">${this.pageTitle}</h2>
      </header>`;
  }
}

class MyHome extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="page-content">
        <div class="profile-container">
          <img class="profile-image" src="./assets/profile-image.jpg" alt="Profile Picture of Muteeb">
          <div>
            <strong>Muteeb Akram Nawaz Doctor</strong>
            <section class="small-pad" style="margin-top: 8px;">System Software Intern</section>
            <section class="small-pad">NVIDIA</section>
            <br>
            <section class="small-pad" style="margin-top: 8px;">Graduate Student & Teaching Assistant</section>
            <section class="small-pad">The University of Utah</section>
            <br>
            <section class="small-pad"><a href="mailto://muteebakram@gmail.com">muteebakram@gmail.com</a></section>
            <section class="small-pad">Salt Lake City, Utah, USA</section>
          </div>
        </div>
        <div class="about-text">
          <h4>About Me</h4>
          <p>
            I'm pursuing graduate studies in Computer Science at the
            <a target="_blank" href="https://www.cs.utah.edu">Kahlert School of Computing</a>,
            <a target="_blank" href="https://www.utah.edu">University of Utah</a>.
            My research interest lies in the intersection of hardware/software of computer systems, i.e.,
            computer architecture, operating systems, distributed systems, and embedded systems. Under the
            guidance of <a target="_blank" href="https://users.cs.utah.edu/~vijay/index.html">Prof. Vijay Nagarajan</a>
            my research focuses on re-imagining applications on CXL Memory. Additionally, I serve as a teaching
            assistant, helping senior's in their capstone projects.
          </p>
          <p>
            Before Utah, I was part of the Cloud & Compute Team at <a href="https://www.cisco.com">Cisco
              Systems</a>
            in Bangalore, India. I started as a college intern and progressed to the role of Software Engineer 2
            before leaving. While there, I worked on cutting-edge enterprise hardware and
            implemented industry-standard
            <a target="_blank" href="https://www.dmtf.org/standards/redfish">DMTF Redfish API</a>
            for diagnosing hardware, updating firmware, disk data
            sanitization, and installing operating systems for
            <a target="_blank"
              href="https://www.cisco.com/site/us/en/products/computing/servers-unified-computing-systems/index.html">
              Cisco UCS servers</a>.
            My experience at Cisco marked my introduction to the software industry.
            I found immense joy in tackling technical challenges and developed a keen interest in systems.
          </p>
          <p>
            Before Cisco, I did my Bachelor's in Computer Science at
            <a target="_blank" href="https://rvce.edu.in">R. V. College of Engineering (RVCE)</a> in
            Bangalore, India. I worked with Prof. Rajashree Shettar, Prof. Minal Moharir, and Prof. Veena Gadad
            on the traffic decongestion system, HTTP3/QUIC protocol survey, and server firmware
            management, respectively. Additionally, I was a member of the
            <a target="_blank" href="https://ecellrvce.in">Entrepreneurship Cell</a> and a volunteer for
            the Rotaract Club of RVCE.
          </p>
          <p>
            Before RVCE, I did my pre-university education with Deeksha Integrated Learning at
            <a target="_blank" href="https://www.revapucollege.edu.in/yelahanka/about-yelahanka">
              Reva Independent PU College</a>, Bangalore, India. It is here where I learned how to study and
            the importance of
            education and hard work. The passion and support of the teachers here truly inspired me.
          </p>
          <p>
            It all started at <a target="_blank" href="https://deepayanschool.com">Deepayan School</a>, Hospet,
            India.
          </p>
          <p>
            I'm forever grateful to my mother, father, younger brother, sister, and teachers for
            their unconditional love, guidance, and support.
          </p>
        </div>
      </div>`;
  }
}

class MyEducation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="education">
        <div class="education-section" style="margin-top: -8px;">
          <div class="education-text">
            <h3 id="masters">Kahlert School of Computing, The University of Utah</h3>
            <section class="degree-title">Master of Science, Computer Science</section>
            <section class="education-subtitle">
              Aug 2023 - May 2025
              <br>
              Salt Lake City, Utah, USA
              <br>
              <br>
              u1471482@umail.utah.edu
            </section>
          </div>
          <figure class="education-figure-container">
            <img class="education-image" src="./assets/uofu.jpeg" alt="The University of Utah U Statue.">
            <figcaption>Famous U Statue.</figcaption>
          </figure>
        </div>
        <br>
        <br>
        <div class="education-section">
          <div class="education-text">
            <h3 id="bachelors">R. V. College of Engineering (RVCE)</h3>
            <section class="degree-title">Bachelor of Engineering, Computer Science & Engineering</section>
            <section class="education-subtitle">
              Aug 2016 - July 2020
              <br>
              Mysore Road, Bangalore, Karnataka, India
              <br>
              <br>
              muteeban.cs16@rvce.edu.in
            </section>
          </div>
          <figure class="education-figure-container">
            <img class="education-image" src="./assets/rvce.jpg" alt="RVCE Front Entrance.">
            <figcaption>RVCE Front Gate. ID card is mandatory!</figcaption>
          </figure>
        </div>
        <br>
        <br>
        <div class="education-section">
          <div class="education-text">
            <h3 id="PUC">Deeksha Reva Independent PU College</h3>
            <section class="degree-title">Pre-University Education, Computer Science</section>
            <section class="education-subtitle">
              May 2014 - June 2016
              <br>
              Yelahanka, Bangalore, Karnataka, India
            </section>
          </div>
          <figure class="education-figure-container">
            <img class="education-image" src="./assets/reva.jpeg" alt="Reva PUC Building">
            <figcaption>Reva PUC building has nice proverbs.</figcaption>
          </figure>
        </div>
        <br>
        <br>
        <div class="education-section">
          <div class="education-text">
            <h3 id="classX">Deepayan Secondary School</h3>
            <section class="degree-title">Kinder Garden, Primary, and High School</section>
            <section class="education-subtitle">
              Jan 2001 - April 2014
              <br>
              NC Colony, Hospet, Karnataka, India
            </section>
          </div>
          <figure class="education-figure-container">
            <img class="education-image" src="./assets/deepayan.jpeg" alt="Deepayan Secondary School Building & Ground">
            <figcaption>Deepayan new building & ground. 2011</figcaption>
          </figure>
        </div>
        <br>
        <br>
      </div>`;
  }
}

class MyExperience extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="font-size: 14px;">
        <a href="#current">Current</a>&nbsp; |&nbsp;
        <a href="#previous">Previous</a>&nbsp; |&nbsp;
        <a href="#internships">Internships</a>&nbsp; |&nbsp;
        <a href="#research">Research</a>&nbsp; |&nbsp;
        <a href="#teaching">Teaching</a>
      </div>
      <br>
      <div id="current">
        <section class="experience-title">Current</section>
        <section class="company-title" id="nvidia-internship">NVIDIA</section>
        May 2024 - Aug 2024
        <br>
        Santa Clara, CA, USA
        <br>
        <br>
        <section class="role-title">System Software Intern</section>
        <ul>
          <li>Working on Nvidia's Jetson Tegra Software Platform Team.</li>
          <li>Designed & developed PLDM based Redfish Update API for Nvidia IGX safety component with initrd.</li>
          <li>Added HTTPS/CIFS remote virtual media support on Nvidia OpenBMC on Redfish and webUI.</li>
        </ul>
      </div>
      <hr class="hr">
      <div id="previous">
        <section class="experience-title">Previous</section>
        <div class="company" id="cisco">
          <div>
            <section class="company-title">Cisco Systems</section>
            Aug 2020 - July 2023
            <br>
            mutnawaz@cisco.com
            <br>
            <br>
            3rd floor, BGL 17
            <br>
            Cessna Park, Bangalore, India
            <br>
            <br>
            <section class="role-title">Software Engineer II</section>
            <ul>
              <li>Engineered a diagnostic utility for Cisco UCS servers, enabling troubleshooting of CPUs, 
                DIMMs, & PCIe devices. Achieving 40% faster root cause dectection, 10% decrease in RMA costs,
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
            </ul>
            <section class="role-title">Software Engineer</section>
            <ul>
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
            </ul>
          </div>
          <div class="company-images">
            <figure>
              <img class="company-image" src="./assets/cisco1.png" alt="Cisco Team Outing">
              <figcaption>Cisco First Team Outing. Aug 26, 2022.</figcaption>
            </figure>
            <figure>
              <img class="company-image" src="./assets/cisco2.png" alt="Cisco Last Working Day">
              <figcaption>Cisco Last Working Day. Jul 20, 2023.</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <hr class="hr">
      <div id="internships">
        <section class="experience-title">Internships</section>
        <section class="company-title" id="cisco-internship">Cisco Systems</section>
        Jan 2020 - Jun 2020
        <br>
        mutnawaz@cisco.com
        <br>
        <br>
        <section class="role-title">Software Engineer Intern</section>
        <ul>
          <li>
            Developed 3 new industry-standard Redfish APIs for firmware discovery, update, & monitoring.
          </li>
          <li>
            Ported 7,000+ source code from Python2 to Python3 with no performance impact.
          </li>
        </ul>
        <div class="company-images">
          <figure>
            <img class="company-image" src="./assets/cisco0.png" alt="Cisco Onboarding">
            <figcaption>Cisco Internship Onboarding. Jan 16, 2020.</figcaption>
          </figure>
        </div>
      </div>
      <hr class="hr">
      <div id="research">
        <section class="experience-title">Research</section>
        <section class="company-title">The University of Utah</section>
        <section class="role-title">Spring 2024: CS6950 Independent Study</section>
        <section style="padding: 8px 0 0 0;">Prof. Vijay Nagarajan</sehttps://users.cs.utah.edu/~vijay/ction>
        <ul>
          <li>
            New distributed scheduler for disaggregated memory like CXL, RDMA, etc.
          </li>
        </ul>
      </div>
      <hr class="hr">
      <div id="teaching">
        <section class="experience-title">Teaching</section>
        <section class="company-title">The University of Utah</section>
        <section class="role-title">Fall 2023: CS4000 Senior Capstone Design</section>
        <section class="role-title">Spring 2024: CS4500 Senior Capstone Project</section>
        <section style="padding: 12px 0 0 0;">Professors: Jim de st Germain, David Bean, and Aaron Wood</section>
        <ul>
          <li>
            Mentoring a class of 160 senior undergraduates in their project ideation, design,
            development, and deployment.
          </li>
        </ul>
      </div>`;
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
      return `<h3><a target="_blank" href="${p.TitleLink}">${p.Title}</a></h3>`;

    return `<h3>${p.Title}</h3>`;
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
        <ol>
          <li>
            <section class="paper-title">
              <a target="_blank" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9777199&isnumber=9776641">
                A Detail Survey on QUIC and its Impact on Network Data Transmission
              </a>
            </section>
            2022 6th International Conference on Trends in Electronics and Informatics (ICOEI), Tirunelveli,
            India, 2022, pp. 378-385, doi: 10.1109/ICOEI53556.2022.9777199.
            <section class="paper-authors">
              <i>Pratiksha Narasimha Nayak G; Nimisha Dey; Neha N; Malavika Hariprasad; Sandhya S; Minal Moharir;
                <strong>Muteeb Akram</strong>
              </i>
            </section>
          </li>
          <li>
            <section class="paper-title">
              <a target="_blank" href="https://www.irjet.net/archives/V7/i5/IRJET-V7I51018.pdf">
                Server Firmware Management using DMTF Redfish REST APIs
              </a>
            </section>
            May 2020, International Research Journal of Engineering and Technology (IRJET)
            <section class="paper-authors">
              <i><strong>Muteeb Akram Nawaz</strong>, Veena Gadad (Dept. of Computer Science and Engineering,
                R V College of Engineering, Karnataka, India)
              </i>
            </section>
            <section class="paper-subsection">
              [ <a href="https://www.dmtf.org/about/academicalliance#redfish">DMTF Redfish Recognition</a> ]
            </section>
          </li>
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
      <div id="contact">
        <p style="padding: 6px 0 0 0;">Hello there!</p>
        <p>Feel free to reach out to me on any of the platforms.</p>
        <ul>
          <li><a target="_blank" href="mailto://muteebakram@gmail.com">muteebakram@gmail.com</a></li>
          <li><a target="_blank" href="https://github.com/muteebakram">github.com/muteebakram</a></li>
          <li>
            <a target="_blank" href="https://www.twitter.com/muteeb_akram/">twitter.com/muteeb_akram</a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/muteeb-akram/">linkedin.com/in/muteeb-akram</a>
          </li>
          <li>
            <a target="_blank" href="https://scholar.google.com/citations?user=miOm8JMAAAAJ&hl=en">scholar.google.com/citations?user=miOm8JMAAAAJ&hl=en</a>
          </li>
        </ul>
        <p>Thanks for stopping by.</p>
        <p>:wq</p>
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
    this.lastUpdated = "Jul 7, 2024";
    this.showHR = this.hasAttribute("showHR");
    this.showTop = this.hasAttribute("showTop");
    this.showCopyright = this.hasAttribute("showCopyright");
    this.showLastUpdated = this.hasAttribute("showLastUpdated");
  }

  connectedCallback() {
    const lastUpdated = `<div class="footer-text">Last Updated ${this.lastUpdated}</div>`;
    const copyright = `<div class="footer-text">™ and © Muteeb Akram. All Rights Reserved.</div>`;

    this.innerHTML = `
      ${this.showHR ? `<hr>` : ``}
      <footer>
        <div class="footer-container">
          ${this.showCopyright ? copyright : ``}
          ${this.showTop ? `` : ``}
          ${this.showLastUpdated ? lastUpdated : ``}
        </div>
      </footer>`;
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
