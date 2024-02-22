class MyProjects extends HTMLElement {
  constructor() {
    super();
    this.projects = [
      {
        Title: "GEneral Matrix Multiplication (GEMM)",
        Description: `• &nbsp; Develop high-performance transformations for GEMM (matrix multiplication) with OpenMP & CUDA at runtime.<br>
        • &nbsp; The project highlights the challenge of developing high-performance numerical libraries: high performance is desired across a range of different problem sizes and the specific matrix sizes used by an application program invoking the library routine is not known a priori. Thus, adaptivity with respect to the problem size parameters in the call can be beneficial. The adaptivity may involve dynamically choosing parameters such as tile sizes, shapes/sizes of thread blocks, or even different code versions, e.g., representing different loop permutations and/or degrees of loop unrolling. `,
        Year: "2023",
        Date: "Nov 14, 2023",
        Tags: ["OpenMP", "CUDA", "HPC"],
        TeamSize: 1,
        GithubLink: "https://github.com/muteebakram/GEMM",
      },
      {
        Title: "I/O Protocols Benchmark",
        Description: `Analyze and benchmark different async I/O protocols like libaio, Intel SPDK, and io_uring (variants) using fio tool.`,
        Year: "2023",
        Date: "Aug 21, 2023",
        Tags: ["C", "Python", "I/O", "Benchmark"],
        TeamSize: 3,
        GithubLink: "https://github.com/muteebakram/io_benchmark",
      },
      {
        Title: "Zero Copy - Magic - Ring Buffer",
        Description: `• &nbsp; ring buffer read and write operations are zero copy (they must not copy into any intermediate buffer; a process should write bytes directly to the buffer, and another process should directly read those bytes).<br>
        • &nbsp; the kernel is never involved except to setup and tear down ring buffers.<br>
        • &nbsp; the ring buffer is "magic"; that is, it is mapped twice into the user address space to avoid awkward fragmentation problems when the area the user is reading from or writing to wraps around the end of the ring buffer. As a result, it always be able to copy in/copy out data from the buffer in one memmove call.<br>`,
        Year: "2023",
        Date: "Aug 21, 2023",
        Tags: ["C", "Ring Buffer", "Kernel Programming"],
        TeamSize: 2,
        GithubLink: "https://github.com/muteebakram/zerocopy-ringbuf",
      },
      {
        Title: "Cache Prefetchers",
        Description: `Implement Stride & Distance Hardware-based Cache Prefetchers on Intel Dynamic Pin Tool.`,
        Year: "2023",
        Date: "Aug 21, 2023",
        Tags: ["C++"],
        TeamSize: 1,
        GithubLink:
          "https://github.com/muteebakram/CS6810/tree/master/Assignments/2",
      },
      {
        Title: "Branch Predictors",
        Description: `Implement Local, Gshare Global, & Tournament Branch Predictors on the Intel Dynamic Pin Tool.`,
        Year: "2023",
        Date: "Aug 21, 2023",
        Tags: ["C++", "Intel Dynamic Pin Tool."],
        TeamSize: 1,
        GithubLink:
          "https://github.com/muteebakram/CS6810/tree/master/Assignments/1",
      },
      {
        Title: "CS6810: Computer Architecture",
        Description: `Learn ISA, pipelining, caches, synchronization, branch prediction, prefetching, speculation, shared memory architecture, memory coherence & memory consistency models.<br>`,
        Year: "2023",
        Date: "Aug 21, 2023",
        Tags: ["C++", "Intel Dynamic Pin Tool."],
        TeamSize: 1,
        Professor: "Prof. Vijay Nagarajan",
        GithubLink: "https://github.com/muteebakram/CS6810",
      },
      {
        Title: "CS6465: Advance Operating Systems Implementation",
        Description: `
        • &nbsp; Learn & understand process, system calls, page tables, virtual memory, interrupts, device drivers, I/O, persistent memory, and more.<br>
        • &nbsp; Develop kernel programming on RISC-V based xv6 operating system.<br>`,
        Year: "2023",
        Date: "Aug 21, 2023",
        Tags: ["Operating System", "Kernel Programming", "C"],
        TeamSize: 1,
        Professor: "Prof. Ryan Stutsman",
        GithubLink: "https://github.com/muteebakram/CS6465",
      },
      {
        Title: "CS6230: Parallel Programming & High Performance Computing",
        Description: `
        • &nbsp; Learn core concepts of parallel programming, cache analysis, data dependency, & loop transformations.<br>
        • &nbsp; Implement OpenMP with different work distributions.<br>
        • &nbsp; Learn and understand MPI, collectives, and communication protocols.<br>
        • &nbsp; Learn and implement CUDA with unrolling, coalesced memory, shared memory, and more.<br>`,
        Year: "2023",
        Date: "Aug 21, 2023",
        Tags: ["HPC", "OpenMP", "CUDA", "MPI", "C"],
        TeamSize: 1,
        Professor: "Prof. Saday",
        GithubLink: "https://github.com/muteebakram/CS6230",
      },
      {
        Title: "QUIC Packet Identifier",
        Description:
          "Capture network packets, clean the packets, and implement classifier to identify the transport protocol used. The goal of the project is to test different machine learning algorithms to classify the packets by transport protocol without opening the packet based on size, header, etc.",
        Year: "2022",
        Date: "Feb 22, 2022",
        Tags: ["QUIC", "Wireshark", "Network Programming", "HTTP"],
        TeamSize: 1,
        GithubLink: "https://github.com/muteebakram/quic-classifier",
      },
      {
        Title: "Cross Platform CLI Timer",
        Description:
          "A simple CLI based timer that runs in background. Once the timer end is hit, screen saver is started and at the start of timer, screen saver is disabled.",
        Year: "2020",
        Date: "Aug 2, 2020",
        Tags: ["CLI", "Python"],
        TeamSize: 1,
        GithubLink: "https://github.com/muteebakram/Timer",
      },
      {
        Title: "Learn ReactJS",
        Description:
          "Learn React Javascript Library. Developed a dummy TODO application.",
        Year: "2021",
        Date: "Dec 20, 2021",
        Tags: ["ReactJS", "Javascript"],
        TeamSize: 1,
        GithubLink: "https://github.com/muteebakram/react-js",
      },
      {
        Title: "Learn GoLang",
        Description:
          "Learn Go Programming Language. Completed LinkedIn's Go Essential Training course.",
        Year: "2021",
        Date: "Aug 20, 2021",
        Tags: ["Go"],
        TeamSize: 1,
        GithubLink: "https://github.com/muteebakram/go-tutorial",
      },
      {
        Title: "CLI Games",
        Description:
          "Developed three fun little CLI games -  Guess Number, Rock Paper Scissors, and Tic Tac Toe",
        Year: "2021",
        Date: "Nov 5, 2021",
        Tags: ["Games", "Python"],
        TeamSize: 1,
        GithubLink: "https://github.com/muteebakram/games",
      },
      {
        Title: "Blockchain",
        Description:
          "Explore Blockchain and Cryptocurrency - create coins, consensus protocols, smart contracts, mining, and hardware. Presented the learnings to team at Cisco. Completed Udemy course.",
        Year: "2021",
        Date: "Feb 13, 2021",
        Tags: ["Blockchain", "Cryptocurrency", "Python"],
        TeamSize: 1,
        GithubLink: "https://github.com/muteebakram/blockchain",
      },
      {
        Title: "Learn NodeJS",
        Description:
          "Learn and understand the workings of NodeJS. Completed Udemy course.",
        Year: "2021",
        Date: "Feb 13, 2021",
        Tags: ["NodeJS", "Javascript", "Web Development"],
        TeamSize: 1,
        GithubLink: "https://github.com/muteebakram/nodejs-tutorial",
      },
      {
        Title: "Expense App",
        Description:
          "Designed and developed UI and backend of Flutter application to track expenditure.",
        Year: "2020",
        Date: "Aug 17, 2020",
        Tags: ["Flutter", "Dart", "Android App", "Mobile"],
        TeamSize: 1,
        GithubLink: "https://github.com/muteebakram/ExpenseApp",
      },
      {
        Title: "CI/CD with Docker Cloud",
        Description:
          "Implement Continuous Integration and Continuous Deployment using docker cloud. Once pushed to cloud, a test container spins the application container and runs a tests to validate the correctness of application. When tests are passed application container is deployed else deployment is failed.",
        Year: "2020",
        Date: "Dec 27, 2020",
        Tags: ["Container", "Docker", "CI/CD", "Cloud", "Python"],
        TeamSize: 1,
        GithubLink: "https://github.com/muteebakram/docker-cloud",
      },
      {
        Title: "Analysis of Container Runtime Engines",
        Description:
          "Assessed the performance of container runtime engines on CPU, memory utilization, and I/O throughput for operations like scalability, replication, applying patches, and different deployment strategies. Could not complete.",
        Year: "2022",
        Date: "Sept 20, 2022",
        Tags: [
          "Container",
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
          "Collected data & trained neural networks to run on peripheral devices for vehicle detection to predict traffic volume. Implemented yolo-v3 based object detection, communication between devices, and achieved an accuracy of 95.83%.",
        Year: "2019",
        Date: "Dec 12, 2019",
        Tags: [
          "Embedded Systems",
          "IoT",
          "Raspberry Pi",
          "Camera",
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
          "Designed and developed a system with IR sensors connected to a WiFi module and Android application to find and book a parking slot in real-time. Taught the project to 40 students in the Cisco RVCE IoT workshop",
        Year: "2018",
        Date: "Oct 21, 2018",
        Tags: [
          "Embedded Systems",
          "IoT",
          "Arduino",
          "Camera",
          "Character Recognition",
          "Android App",
          "Mobile",
          "Java",
          "C",
          "Python",
        ],
        TeamSize: 2,
        GithubLink: "",
        TitleLink: "",
      },

      {
        Title: "Event Management System",
        Description:
          "Developed a website to find, host & book events. The project involved fully transactional bookings, notification, authentication, and implementation of database concepts like ACID, normalization, etc",
        Year: "2019",
        Date: "Jul 30, 2019",
        Tags: [
          "Firebase",
          "DBMS",
          "Web Development",
          "HTML",
          "CSS",
          "Javascript",
        ],
        TeamSize: 2,
        GithubLink: "https://github.com/muteebakram/Event-Managment-System",
        TitleLink: "",
      },
    ];
  }

  getProjectTitle(p) {
    if (p.TitleLink && p.TitleLink !== "")
      return `<a target="_blank" href="${p.TitleLink}"><strong>${p.Title}</strong></a>`;

    return `<strong>${p.Title}</strong>`;
  }

  getGithubLink(p) {
    if (p.GithubLink && p.GithubLink !== "")
      return `
        <section style="font-size: 14px">
          GitHub Link: 
          <a target="_blank" href="${p.GithubLink}">
            ${p.GithubLink.replace("https://", "")}
          </a>
        </section>`;

    return ``;
  }

  getTeamSize(p) {
    if (p.TeamSize && p.TeamSize > 1)
      return ` &nbsp; • &nbsp; Team of ${p.TeamSize}`;

    return ``;
  }

  getProfessorName(p) {
    if (p.Professor && p.Professor !== "")
      return ` &nbsp; • &nbsp; Taught by ${p.Professor}`;

    return ``;
  }

  getTags(p) {
    if (p.Tags && p.Tags.length) {
      return `${p.Tags.map((tag) => `#${tag}  `).join(" ")}`;
    }

    return ``;
  }

  prepareProjectMap() {
    var projectMap = this.projects.reduce(function (map, project) {
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

  renderProject(p) {
    return `
      ${this.getProjectTitle(p)}
      <br>
      <section style='font-size: 12px; margin: 6px 0;'>
        ${p.Date} &nbsp;•&nbsp; Tags: ${this.getTags(p)}
        ${this.getTeamSize(p)} ${this.getProfessorName(p)}
      </section>
      <p>${p.Description}</p>
      ${this.getGithubLink(p)}
      <hr style="margin: 24px 0; opacity: 0.4">`;
  }

  renderProjectByYear(projects) {
    return projects.map((p) => `${this.renderProject(p)}`).join(" ");
  }

  connectedCallback() {
    var projectMap = this.prepareProjectMap();

    var resultantHTML = `<i style="font-size: 12px;">Showing results for ${this.projects.length} projects.</i><br>`;

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
          <p title="Home"><a href="./index.html">Home</a></p>
          <p title="Experience"><a href="./experience.html">Experience</a></p>
          <p title="Education"><a href="./education.html">Education</a></p>
          <p title="Projects"><a href="./projects.html">Projects</a></p>
          <p title="Publications"><a href="./publications.html">Publications</a></p>
          <p title="Contact"><a href="./contact.html">Contact</a></p>
        </div>
        <h2>${this.title}</h2>
      </header>`;
  }
}

class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.lastUpdated = "Feb 18, 2024";
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
customElements.define("my-projects", MyProjects);
