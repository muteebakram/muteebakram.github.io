window.projects = [
  {
    Title: "GEneral Matrix Multiplication (GEMM)",
    Description:
      "<ul class='project-ul'><li>Develop high-performance transformations for GEMM (matrix multiplication) with OpenMP & CUDA at runtime. Demonstrating techniques like loop unrolling, tiling, vectorization, permutation, coalesced shared memory, and more.</li>\
      <li>The project highlights the challenge of developing high-performance numerical libraries: high performance is desired across various problem sizes, and the specific matrix sizes used by an application program invoking the library routine are not known a priori.</li>\
      <li>Thus, adaptivity concerning the problem size parameters in the call can be beneficial. The adaptivity may involve dynamically choosing parameters such as tile sizes, shapes/sizes of thread blocks, or even different code versions, e.g., representing various loop permutations and/or degrees of loop unrolling. </li></ul>",
    Year: "2023",
    Date: "Nov 14, 2023",
    Skills: ["OpenMP", "CUDA", "HPC", "Parallel Programming"],
    TeamSize: 1,
    Professor: "Prof. Saday",
    ProfessorLink: "",
    TitleLink: "https://github.com/muteebakram/GEMM/blob/master/term-project-fa23.pdf",
    GithubLink: "https://github.com/muteebakram/GEMM",
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
    Professor: "Prof. Ryan Stutsman",
    ProfessorLink: "",
    TitleLink:
      "https://github.com/muteebakram/io_benchmark/blob/master/pdfs/Report%20-%20Async%20IO%20Benchmark%3B%20Muteeb%2C%20Prikshit%2C%20Yuvraj.pdf",
    GithubLink: "https://github.com/muteebakram/io_benchmark",
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
    Skills: [
      "C",
      "Ring Buffer",
      "Benchmark",
      "Kernel Programming",
      "Operating Systems",
    ],
    TeamSize: 2,
    GithubLink: "https://github.com/muteebakram/zerocopy-ringbuf",
  },
  {
    Title: "Cache Prefetchers",
    Description:
      "<ul class='project-ul'><li>DRAM Memory access is slow and takes several hundred cycles. Thus, SRAM-based memory, so-called caches that sit on the CPU, which take less than 10 cycles, are used. The idea here is to keep the instructions and data required for the CPU to execute in the cache.</li>\
      <li>Cache prefetching can be implemented both in hardware and software to determine the access pattern of the program and prefetch data or instructions ahead of execution and avoid DRAM memory access costs.</li>\
      <li>Implement Stride & Distance Hardware-based Cache Prefetchers on Intel Dynamic Pin Tool.</li></ul>",
    Year: "2023",
    Date: "Aug 21, 2023",
    Skills: ["Computer Architecture", "C++", "Intel Dynamic Pin Tool."],
    TeamSize: 1,
    GithubLink:
      "https://github.com/muteebakram/CS6810/tree/master/Assignments/2",
  },
  {
    Title: "Branch Predictors",
    Description:
      "<ul class='project-ul'><li>A CPU's performance can be increased by always taking the correct branches (if-else, for loops, etc.). The key idea here is to design a heuristic-based algorithm in hardware that predicts whether the branch will be taken.</li>\
      <li>Implement Local, Gshare Global, & Tournament Branch Predictors on the Intel Dynamic Pin Tool.</li></ul>",
    Year: "2023",
    Date: "Aug 21, 2023",
    Skills: ["Computer Architecture", "C++", "Intel Dynamic Pin Tool."],
    TeamSize: 1,
    GithubLink:
      "https://github.com/muteebakram/CS6810/tree/master/Assignments/1",
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
      "Intel Dynamic Pin Tool.",
    ],
    TeamSize: 1,
    Professor: "Prof. Vijay Nagarajan",
    ProfessorLink: "",
    GithubLink: "https://github.com/muteebakram/CS6810",
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
    Professor: "Prof. Ryan Stutsman",
    ProfessorLink: "",
    GithubLink: "https://github.com/muteebakram/CS6465",
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
    Professor: "Prof. Saday",
    ProfessorLink: "",
    GithubLink: "https://github.com/muteebakram/CS6230",
  },
  {
    Title: "QUIC Packet Identifier",
    Description:
      "The project involves capturing network packets, preprocessing them to remove noise, and implementing a classifier to determine the transport protocol used. The objective is to evaluate various machine learning algorithms for classifying packets based solely on characteristics such as size, headers, etc., without inspecting the packet contents.",
    Year: "2022",
    Date: "Feb 22, 2022",
    Skills: ["QUIC", "Wireshark", "Network Programming", "HTTP"],
    TeamSize: 1,
    GithubLink: "https://github.com/muteebakram/quic-classifier",
  },
  {
    Title: "Cross Platform CLI Timer",
    Description:
      "A simple CLI-based timer that runs in the background. When the timer reaches its end, the screen saver activates for the specified break duration. After the break concludes, the screen saver deactivates, allowing the user to resume work.",
    Year: "2020",
    Date: "Aug 2, 2020",
    Skills: ["CLI", "Python"],
    TeamSize: 1,
    GithubLink: "https://github.com/muteebakram/Timer",
  },
  {
    Title: "Learn ReactJS",
    Description:
      "Learn React Javascript Library. Developed a dummy TODO application.",
    Year: "2021",
    Date: "Dec 20, 2021",
    Skills: ["ReactJS", "Javascript"],
    TeamSize: 1,
    GithubLink: "https://github.com/muteebakram/react-js",
  },
  {
    Title: "Learn GoLang",
    Description:
      "Learn Go Programming Language, especially the concurrency and go routines. The intention was to test whether we should adopt Go programming at Cisco. Completed LinkedIn's Go Essential Training course.",
    Year: "2021",
    Date: "Aug 20, 2021",
    Skills: ["Go"],
    TeamSize: 1,
    Professor: "LinkedIn",
    ProfessorLink: "",
    GithubLink: "https://github.com/muteebakram/go-tutorial",
  },
  {
    Title: "CLI Games",
    Description:
      "Developed three fun little CLI games: Guess Number, Rock Paper Scissors, and Tic Tac Toe.",
    Year: "2021",
    Date: "Nov 5, 2021",
    Skills: ["Games", "CLI", "Python"],
    TeamSize: 1,
    GithubLink: "https://github.com/muteebakram/games",
  },
  {
    Title: "Blockchain",
    Description:
      "Explore Blockchain and Cryptocurrency - create coins, consensus protocols, smart contracts, mining, and hardware. Presented my learnings to the team at Cisco. Completed an Udemy course.",
    Year: "2021",
    Date: "Feb 13, 2021",
    Skills: ["Blockchain", "Cryptocurrency", "Python"],
    TeamSize: 1,
    Professor: "Udemy",
    ProfessorLink: "",
    GithubLink: "https://github.com/muteebakram/blockchain",
  },
  {
    Title: "Learn NodeJS",
    Description:
      "Learn and understand the workings of NodeJS. This was my formal introduction to Javascript and the workings of the v8 browser engine. The knowledge gained from this Udemy course helped me complete several front-end projects at Cisco.",
    Year: "2021",
    Date: "Feb 13, 2021",
    Skills: ["NodeJS", "Javascript", "Web Development"],
    TeamSize: 1,
    Professor: "Udemy",
    ProfessorLink: "",
    GithubLink: "https://github.com/muteebakram/nodejs-tutorial",
  },
  {
    Title: "Expense App",
    Description:
      "Designed and developed the fronted and backend of the Flutter application to track expenditures using Dart. The intention here was to give a shot to mobile development and test on my Pixel 2xl.",
    Year: "2020",
    Date: "Aug 17, 2020",
    Skills: ["Flutter", "Dart", "Android", "Mobile Development"],
    TeamSize: 1,
    Professor: "Udemy",
    ProfessorLink: "",
    GithubLink: "https://github.com/muteebakram/ExpenseApp",
  },
  {
    Title: "CI/CD with Docker Cloud Computing",
    Description:
      "Implement Continuous Integration and Continuous Deployment on the docker cloud. Once pushed to the cloud, a test container spins the application container and runs tests to validate the correctness of the application. When tests are passed, the new application container is deployed; otherwise, deployment fails.",
    Year: "2020",
    Date: "Dec 27, 2020",
    Skills: ["Containers", "Docker", "CI/CD", "Cloud Computing", "Python"],
    TeamSize: 1,
    Professor: "Udemy",
    ProfessorLink: "",
    GithubLink: "https://github.com/muteebakram/docker-cloud",
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
    GithubLink: "https://github.com/muteebakram/container-performance",
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
    GithubLink: "",
    TitleLink: "",
  },

  {
    Title: "Smart Parking System",
    Description:
      "<ul class='project-ul'><li>Designed and developed an end-to-end system with IR sensors connected to a WiFi module and an Android application to locate and reserve a parking slot in real-time.</li>\
      <li>The project was shortlisted to showcase at the Cisco RVCE IoT workshop, where we conducted a three-day workshop to teach it to 40 students.</li></ul>",
    Year: "2018",
    Date: "Oct 21, 2018",
    Skills: [
      "Embedded Systems",
      "IoT",
      "Arduino",
      "Camera",
      "Character Recognition",
      "Android",
      "Mobile Development",
      "Java",
      "C",
      "Python",
    ],
    TeamSize: 3,
    GithubLink: "",
    TitleLink: "",
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
    GithubLink: "https://github.com/muteebakram/Event-Managment-System",
    TitleLink: "",
  },
];

class MyFilters extends HTMLElement {
  constructor() {
    super();
    this.skills = [];
    this.years = [];
    this.titles = [];
    // this.professors = [];
    this.selectedSkills = [];
    this.selectedYears = [];
    this.selectedTitles = [];
    // this.selectedProfessors = [];
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

    this.renderMyProjects();
  }

  renderMyProjects() {
    const component = document.querySelector("my-projects");
    component.projects = JSON.stringify(this.selectedProjects);
  }

  renderFilters() {
    let filters = ``;

    let yearFilter = `<select id="selectedYears" placeholder="Select Year" txtSearch="Search Year" style="width: 100px;" multiple multiselect-search="true" @click=${this.onFilterSelect}>`;
    yearFilter += this.years.map(
      (year) => `<option value="${year}">${year}</option>`
    );
    yearFilter += "</select>";

    let skillFilter = `<select id="selectedSkills" placeholder="Select Skills" txtSearch="Search Skills" style="width: 180px;" multiple multiselect-search="true" @click=${this.onFilterSelect}>`;
    skillFilter += this.skills.map(
      (skill) => `<option value="${skill}">${skill}</option>`
    );
    skillFilter += "</select>";

    let titleFilter = `<select id="selectedTitles" placeholder="Select Projects" txtSearch="Search Projects" style="width: 320px;" multiple multiselect-search="true" @click=${this.onFilterSelect}>`;
    titleFilter += this.titles.map(
      (skill) => `<option value="${skill}">${skill}</option>`
    );
    titleFilter += "</select>";

    filters += `<div class="filters-div">Filters: &nbsp; ${titleFilter}&nbsp; ${skillFilter}&nbsp; ${yearFilter}</div>`;
    return filters;
  }

  render() {
    this.innerHTML = `${this.renderFilters()}`;
  }
}

class MyProjects extends HTMLElement {
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
    // Convert the string from my-filters to object.
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
      return `<a target="_blank" href="${p.TitleLink}"><section class="project-title">${p.Title}</section></a>`;

    return `<section class="project-title">${p.Title}</section>`;
  }

  getGithubLink(p) {
    if (p.GithubLink && p.GithubLink !== "")
      return `
        <section class="project-subsection">
          Github Link:&nbsp;
          <a target="_blank" href="${p.GithubLink}">
            ${p.GithubLink.replace("https://", "")}
          </a>
        </section>`;

    return ``;
  }

  getTeamSize(p) {
    if (p.TeamSize && p.TeamSize > 1)
      return `&nbsp; • &nbsp;Team of ${p.TeamSize}`;

    return ``;
  }

  getProfessorName(p) {
    if (p.Professor && p.Professor !== "")
      return `&nbsp; • &nbsp; Taught by ${p.Professor}`;

    return ``;
  }

  getSkills(p) {
    if (p.Skills && p.Skills.length) {
      return `${p.Skills.map((tag) => `&nbsp;&nbsp;#${tag}`).join("")}`;
    }

    return ``;
  }

  renderProject(p) {
    return `
      ${this.getProjectTitle(p)}
      <section class="project-subsection">
        ${p.Date} &nbsp;•&nbsp; Skills: ${this.getSkills(p)}
        ${this.getTeamSize(p)} ${this.getProfessorName(p)}
      </section>
      ${this.getGithubLink(p)}
      <section class="project-description">${p.Description}</section>
      <hr class="project-hr">`;
  }

  renderProjectByYear(projects) {
    return projects.map((p) => `${this.renderProject(p)}`).join(" ");
  }

  render(projectMap) {
    let resultantHTML = `<br><i style="font-size: 12px">Showing ${this.projectCount} projects from ${window.projects.length} projects with ${this.skillCount} skills from ${this.totalSkillCount} skills.</i>`;

    projectMap.forEach((projects, year) => {
      resultantHTML += `<h2>${year}</h2>${this.renderProjectByYear(projects)}`;
    });

    this.innerHTML = resultantHTML;
  }
}

class MyHeader extends HTMLElement {
  static observedAttributes = ["title"];

  constructor() {
    super();
    this.title = "Muteeb Akram";
  }

  attributeChangedCallback(_, oldValue, newValue) {
    if (oldValue !== newValue) this.title = newValue;
  }

  connectedCallback() {
    this.innerHTML = `
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link rel="stylesheet" href="./style.css">
        <title>Muteeb Akram: ${this.title}</title>
      </head>

      <header>
        <h1 class="name">Muteeb Akram</h1>
        <hr />
        <div class="row">
          <section title="Home"><a href="./index.html">Home</a></section>
          <section title="Experience"><a href="./experience.html">Experience</a></section>
          <section title="Education"><a href="./education.html">Education</a></section>
          <section title="Projects"><a href="./projects.html">Projects</a></section>
          <section title="Publications"><a href="./publications.html">Publications</a></section>
          <section title="Contact"><a href="./contact.html">Contact</a></section>
        </div>
        <h2>${this.title}</h2>
      </header>`;
  }
}

class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.lastUpdated = "Mar 3, 2024";
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="copyright-text">™ and © Muteeb Akram. All Rights Reserved.</div>
        <div class="last-updated">Last Updated ${this.lastUpdated}</div>
      </footer>`;
  }
}

customElements.define("my-header", MyHeader);
customElements.define("my-footer", MyFooter);
customElements.define("my-filters", MyFilters);
customElements.define("my-projects", MyProjects);
