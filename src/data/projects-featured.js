/**
 * Portfolio case studies: six projects.
 * Paths point to media in /public/projects/.
 * The PX4 source code is not public; intentionally no GitHub link is provided.
 */
export const featuredProjects = [
  {
    slug: "covapsy",
    name: "CoVAPSy — Autonomous Racing Car",
    date: "2026 · Robotics team project",
    category: "Autonomous robotics",
    shortDescription:
      "LiDAR-based autonomous navigation on a 1/10-scale racing car, with ROS 2, SLAM Toolbox and Nav2. Demonstrated at up to 2.5 m/s.",
    tagline: "From embedded electronics to real-world autonomous navigation.",
    description:
      "CoVAPSy is a student robotics platform built around a 1/10-scale car. The team develops the complete stack, from electronics and low-level actuation to mapping, localisation and autonomous track navigation.",
    context:
      "The objective is to build and continuously improve a small autonomous vehicle able to navigate indoor circuits and react to unexpected obstacles. The platform is developed as a team project at Sorbonne Université.",
    objective:
      "Improve the reliability of the embedded platform and make the vehicle navigate a mapped track at increasingly high speed, while responding to obstacles.",
    work: [
      "Improved the onboard electronics and contributed to the reliability of the embedded platform.",
      "Integrated SLAM Toolbox to build occupancy-grid maps using LiDAR scans.",
      "Contributed to Nav2 integration and tuned navigation parameters for the car's Ackermann steering and real track conditions.",
      "Participated in autonomous-track tests, localisation troubleshooting and obstacle-avoidance demonstrations.",
      "Started exploratory Webots simulation work for future reinforcement-learning experiments."
    ],
    results:
      "In a recorded team demonstration, the car completed three autonomous laps, then navigated around obstacles placed in its path. A speed of 2.5 m/s was reached during the demonstration. Webots and reinforcement learning are exploratory rather than validated sim-to-real results.",
    tags: ["ROS 2 Jazzy", "Nav2", "SLAM Toolbox", "LiDAR", "AMCL", "Raspberry Pi 5", "STM32", "Webots"],
    heroImage: "/projects/covapsy/car.jpg",
    heroAlt: "CoVAPSy autonomous racing car and its onboard electronics",
    images: ["/projects/covapsy/car.jpg", "/projects/covapsy/rviz-map.png"],
    youtubeURL: "https://www.youtube.com/embed/_qtebIZEp5c",
    videoTitle: "CoVAPSy — autonomous laps and obstacle avoidance",
    videoDescription:
      "Three autonomous laps, followed by an obstacle-avoidance test on the real track.",
    externalURL: "https://jacobamaury.github.io/site_doc_CoVAPSy_SU/",
    externalLabel: "Technical documentation",
    links: [
      { label: "Technical documentation", url: "https://jacobamaury.github.io/site_doc_CoVAPSy_SU/", kind: "primary" },
      { label: "Watch the demonstration", url: "https://www.youtube.com/watch?v=_qtebIZEp5c", kind: "secondary" }
    ],
    facts: [
      { value: "2.5 m/s", label: "Speed reached in demo" },
      { value: "3 laps", label: "Autonomous demo" },
      { value: "1/10", label: "Vehicle scale" }
    ],
    role: "Team project · electronics improvements, SLAM integration and Nav2 contributions",
    overview:
      "My main contributions were on the electronics, the integration of SLAM Toolbox, and the implementation and tuning of navigation components with the team. This page focuses on what was built and demonstrated on the real vehicle, rather than presenting every subsystem as my individual work.",
    sections: [
      {
        id: "platform",
        eyebrow: "01 / System",
        title: "A complete embedded robotics platform",
        paragraphs: [
          "The 1/10-scale vehicle combines a Raspberry Pi 5 running Ubuntu 24.04 and ROS 2 Jazzy with an STM32 microcontroller responsible for low-level interfaces. A rotating LiDAR provides the principal measurements for mapping, localisation and obstacle perception. An IMU and onboard odometry supply motion information.",
          "The architecture separates high-level robotic software from actuator control and electrical power. Improving the electronics was one of my main contributions to making the platform easier to test and operate."
        ],
        bullets: [
          "ROS 2 nodes handle sensor processing, localisation, navigation and motion commands.",
          "The vehicle uses Ackermann steering, requiring navigation parameters adapted to its turning constraints.",
          "LiDAR data is central to the localisation and obstacle-handling pipeline."
        ]
      },
      {
        id: "slam",
        eyebrow: "02 / Mapping",
        title: "Building maps with SLAM Toolbox",
        paragraphs: [
          "I integrated SLAM Toolbox into the workflow for mapping an indoor racing track. The car is driven manually around the circuit while LiDAR scans are used to construct an occupancy-grid map. The resulting map can then be cleaned and loaded by the navigation stack.",
          "For autonomous operation, AMCL estimates the vehicle's pose within the previously generated map. RViz is used to inspect the map, the vehicle pose and the route."
        ],
        media: {
          src: "/projects/covapsy/rviz-map.png",
          alt: "RViz occupancy-grid map of the CoVAPSy circuit with a red trajectory",
          caption: "RViz: mapped track, vehicle localisation and racing path."
        }
      },
      {
        id: "nav2",
        eyebrow: "03 / Navigation",
        title: "Nav2 integration and real-world tuning",
        paragraphs: [
          "I contributed to integrating Nav2 and iteratively adjusting its parameters with the team. Our navigation system combines a map server and AMCL localisation with path planning, trajectory tracking and collision-management components.",
          "For repeated racing laps, the application loads a set of waypoints, initialises the vehicle's pose and submits successive navigation goals. Real tests are essential: the controller must balance path-following accuracy, cornering behaviour, speed and robustness to localisation errors."
        ],
        bullets: [
          "Map-based localisation using AMCL and LiDAR scans.",
          "Trajectory tracking using Nav2 controllers, including Regulated Pure Pursuit.",
          "Waypoint-based lap execution with recovery handling.",
          "Parameter tuning on the real vehicle, not only in simulation."
        ]
      },
      {
        id: "results",
        eyebrow: "04 / Demonstration",
        title: "Autonomous laps and obstacle avoidance",
        paragraphs: [
          "In the demonstration video, the car completes three laps of the circuit autonomously. Obstacles are then placed on the track and the car navigates around them. The team reached 2.5 m/s during the demonstration.",
          "These results reflect a complete hardware-and-software system running on the real car. They are not simulated benchmark scores."
        ]
      },
      {
        id: "future",
        eyebrow: "05 / In progress",
        title: "Exploring Webots and reinforcement learning",
        paragraphs: [
          "We have started experimenting with Webots as a simulation environment for the vehicle. One longer-term direction is to investigate reinforcement learning and transfer promising behaviours from simulation to the physical car.",
          "This work is at an early stage. It is not presented here as a completed or experimentally validated sim-to-real pipeline."
        ]
      }
    ]
  },
  {
    slug: "px4",
    name: "PX4 — Research Drone Flight Control",
    date: "May–July 2026 · M1 research internship",
    category: "Flight control & research",
    shortDescription:
      "Migration of a laboratory drone control stack to PX4, a ROS 2 flight mode controlled by a Myo armband, and an experimental custom controller.",
    tagline: "Migrating a research flight-control stack without losing experimental flexibility.",
    description:
      "During my M1 internship at Heudiasyc (UTC/CNRS), I investigated replacing the laboratory's FL-AIR control architecture with PX4 and developed initial tools for research use.",
    context:
      "The laboratory's FL-AIR software supports research on drone control but is difficult to maintain and integrate with modern robotics tooling. PX4 offers a larger ecosystem, but researchers must still be able to create custom flight modes and control laws.",
    objective:
      "Validate an end-to-end PX4/ROS 2 architecture on a real drone, evaluate a resource-constrained platform, and establish a reusable approach to custom control development.",
    work: [
      "Selected compatible versions of PX4, ROS 2 Jazzy, Gazebo Harmonic, px4_msgs and Micro XRCE-DDS.",
      "Created a Python ROS 2 driver for the Myo armband and a C++ external PX4 flight mode.",
      "Validated Myo-controlled flight in Gazebo and subsequently on a real quadrotor.",
      "Investigated PX4 on Crazyflie, corrected motor mapping and fitted a firmware build with uXRCE-DDS into limited memory.",
      "Analysed the PX4 cascaded position, attitude and rate control loops and developed an experimental out-of-tree controller.",
      "Prepared a controller template, technical documentation and a GitLab continuous-integration workflow."
    ],
    results:
      "The Myo-based control chain was demonstrated on a real quadrotor. The experimental out-of-tree controller successfully integrated force-to-attitude setpoint generation with PX4, but was not completed or validated in real flight. The Crazyflie study identified hardware and communication limits preventing the desired ROS 2 workflow.",
    tags: ["PX4", "ROS 2 Jazzy", "C++", "Python", "Gazebo", "Micro XRCE-DDS", "Pixhawk 6", "Jetson Nano", "Quaternions"],
    heroImage: "/projects/px4/drone.jpg",
    heroAlt: "Research quadrotor used during the Heudiasyc internship",
    images: ["/projects/px4/drone.jpg", "/projects/px4/myo-architecture.png"],
    externalURL: "https://www.youtube.com/shorts/ZvkDZI-fqaA",
    externalLabel: "Simulation clip",
    links: [
      { label: "Simulation video", url: "https://www.youtube.com/shorts/ZvkDZI-fqaA", kind: "secondary" }
    ],
    facts: [
      { value: "Real flight", label: "Myo demo validated" },
      { value: "100 Hz", label: "Custom module loop" },
      { value: "ROS 2", label: "PX4 integration" }
    ],
    role: "Individual M1 internship · Heudiasyc research laboratory (UTC/CNRS)",
    overview:
      "The internship covered four complementary tasks: a reliable PX4/ROS 2 development environment, a working motion-controlled flight demonstration, a feasibility study on Crazyflie, and the first reusable building blocks for custom flight-control algorithms. The source code belongs to the host laboratory and is not publicly available.",
    sections: [
      {
        id: "architecture",
        eyebrow: "01 / Integration",
        title: "Connecting PX4, ROS 2 and Gazebo",
        paragraphs: [
          "The first challenge was version compatibility across PX4 firmware, px4_msgs, the PX4 ROS 2 Interface Library, Micro XRCE-DDS and ROS 2 Jazzy. I assembled and tested a compatible development stack with Gazebo Harmonic for simulation.",
          "PX4 modules exchange uORB messages internally; the Micro XRCE-DDS bridge exposes the relevant data to ROS 2 running on a companion computer. This allows custom ROS 2 applications to interact with the flight stack while PX4 retains responsibility for vehicle control and safety."
        ],
        bullets: [
          "PX4 v1.18 development revision and ROS 2 Jazzy.",
          "Gazebo Harmonic for software-in-the-loop simulation.",
          "Micro XRCE-DDS and px4_msgs for PX4 ↔ ROS 2 communication."
        ]
      },
      {
        id: "myo",
        eyebrow: "02 / Real-world demonstrator",
        title: "Controlling a quadrotor using arm motion",
        paragraphs: [
          "I developed a Python ROS 2 driver to publish the Myo armband's motion and gesture information, then implemented a C++ external flight mode using the PX4 ROS 2 Interface Library. Arm pitch and roll are transformed into vehicle-relative motion commands and then rotated into the navigation frame using the drone's current yaw.",
          "The complete chain was validated first in Gazebo and then on a physical quadrotor with a Pixhawk 6 and a Jetson Nano running ROS 2. The indoor setup used OptiTrack for localisation, and a second pilot could take control with a radio transmitter. The resulting flight mode was demonstrated during the laboratory's TechDays."
        ],
        media: {
          src: "/projects/px4/myo-architecture.png",
          alt: "Architecture connecting Myo armband, ROS 2, XRCE-DDS, PX4 and the quadrotor",
          caption: "System architecture extracted from my M1 internship report."
        }
      },
      {
        id: "crazyflie",
        eyebrow: "03 / Embedded constraints",
        title: "Investigating PX4 on Crazyflie",
        paragraphs: [
          "On the Crazyflie micro-drone, I corrected a motor numbering problem in its PX4 airframe configuration and reduced the firmware footprint to include the uXRCE-DDS client. The small device exposed practical memory and compute constraints.",
          "The remaining blocker was communication: the Crazyflie radio protocol was not directly compatible with the intended uXRCE-DDS transport. Combined with runtime limitations, this meant the platform did not meet the laboratory's requirements."
        ]
      },
      {
        id: "controller",
        eyebrow: "04 / Control algorithms",
        title: "An out-of-tree custom controller",
        paragraphs: [
          "I studied PX4's cascaded multicopter controller, from position and velocity setpoints to desired acceleration, attitude, angular rates and torque. This led to an out-of-tree module that can be compiled into PX4 without maintaining a direct fork of its main source tree.",
          "The module reads vehicle state and trajectory setpoints, computes a virtual force, derives a desired attitude quaternion and publishes vehicle_attitude_setpoint. PX4's standard inner attitude and angular-rate controllers remain active. The module runs at approximately 100 Hz and includes a takeover parameter to control when experimental setpoints may be published.",
          "This was a proof of integration, not a completed replacement for the entire flight-control cascade: the SFC and ESC variants remained experimental, SSC was unfinished and the full controller was not validated on a real drone."
        ],
        media: {
          src: "/projects/px4/px4-controller-diagram.png",
          alt: "PX4 cascaded multicopter controller architecture diagram",
          caption: "PX4 cascaded controller architecture, as documented in my internship report."
        }
      },
      {
        id: "handover",
        eyebrow: "05 / Deliverables",
        title: "Reusable foundations for the research team",
        paragraphs: [
          "Beyond the demonstrations, I prepared a reusable controller template, technical documentation and a GitLab CI pipeline to automate compilation checks. These deliverables were intended to make future control-law experiments easier to integrate and maintain.",
          "The work demonstrated a viable path from FL-AIR to PX4 while clearly identifying the areas that still require development and experimental validation. The laboratory's code is not published in this portfolio."
        ]
      }
    ]
  },
  {
    "slug": "stage-lip6",
    "name": "Cyclope — Medical Image Texture Analysis",
    "date": "June–August 2024 · LIP6 research internship",
    "category": "Image processing & high-level synthesis",
    "shortDescription": "Implemented gray-level co-occurrence matrices and 20 texture descriptors in C, then generated VHDL using Vitis HLS for the Cyclope research project.",
    "tagline": "From image texture features in C to an initial hardware-oriented implementation.",
    "overview": "My first research internship took place at LIP6, in the context of Cyclope: a miniature ingestible capsule being researched for 3D digestive-tract imaging and polyp detection. My personal contribution was limited to image-texture analysis and high-level synthesis, not the complete capsule or its 3D reconstruction system.",
    "description": "C implementation of GLCM-based texture analysis, Vitis HLS translation to VHDL and manual correctness checks on small matrices.",
    "context": "Cyclope is a research effort developing a swallowable capsule for digestive-tract inspection. My task concerned a specific image-processing algorithm.",
    "objective": "Implement a gray-level co-occurrence matrix and descriptors, explore their synthesis into VHDL, and verify calculations.",
    "work": [
      "Implemented gray-level co-occurrence matrix (GLCM) calculations in C and 20 texture descriptors.",
      "Used Vitis HLS to generate VHDL from the C description.",
      "Compared results on small matrices with independent hand calculations.",
      "Learned Linux, Git and collaborative engineering practices in a research laboratory."
    ],
    "results": "Functional correctness was checked on selected small test matrices; there was no deployment or hardware validation on a physical FPGA.",
    "tags": [
      "C",
      "GLCM",
      "20 texture descriptors",
      "Vitis HLS",
      "VHDL",
      "Linux",
      "Git"
    ],
    "heroImage": "/projects/stage-lip6/cyclope-capsule.jpg",
    "heroAlt": "Cyclope research capsule schematic showing a laser, camera, FPGA, processor, batteries and RF transmitter",
    "images": [
      "/projects/stage-lip6/cyclope-capsule.jpg"
    ],
    "githubRepositoryURL": "",
    "externalURL": "https://www.ins2i.cnrs.fr/fr/cnrsinfo/cyclope-une-capsule-avaler-pour-detecter-les-polypes",
    "links": [
      {
        "label": "Cyclope — CNRS article",
        "url": "https://www.ins2i.cnrs.fr/fr/cnrsinfo/cyclope-une-capsule-avaler-pour-detecter-les-polypes",
        "kind": "primary"
      }
    ],
    "facts": [
      {
        "value": "20",
        "label": "Texture descriptors implemented"
      },
      {
        "value": "C → VHDL",
        "label": "Vitis HLS workflow"
      },
      {
        "value": "Simulation",
        "label": "No physical FPGA deployment"
      }
    ],
    "role": "Individual contribution: image texture algorithm in C, HLS generation and small-case testing.",
    "sections": [
      {
        "id": "cyclope",
        "eyebrow": "The Cyclope medical imaging project",
        "title": "01 / Context",
        "paragraphs": [
          "Cyclope investigates an ingestible capsule for visualising the digestive tract in 3D and helping identify polyps. A compact system integrating laser projection, a camera, processing electronics and wireless communication creates strong embedded-hardware constraints.",
          "My internship was one small component of this broader research effort: I did not design the capsule, build its laser system or implement its complete polyp-detection pipeline."
        ],
        "media": {
          "src": "/projects/stage-lip6/cyclope-capsule.jpg",
          "alt": "Cyclope concept layout showing the laser and imaging modules",
          "caption": "Cyclope capsule architecture shown for project context; this is not a device I built."
        }
      },
      {
        "id": "glcm",
        "eyebrow": "Gray-level co-occurrence matrices and texture descriptors",
        "title": "02 / Implementation",
        "paragraphs": [
          "I wrote a C implementation of a gray-level co-occurrence matrix (GLCM) algorithm and 20 associated texture descriptors. The goal of these calculations is to characterise relationships between image intensities using numerical features.",
          "This task gave me a first practical introduction to implementing image-processing mathematics and translating an algorithm into executable code."
        ]
      },
      {
        "id": "hls",
        "eyebrow": "Generating VHDL with Vitis HLS",
        "title": "03 / Toolchain",
        "paragraphs": [
          "Rather than manually rewriting the algorithm in VHDL, I developed it in C and used Vitis HLS to generate a hardware-oriented description. This introduced me to the workflow and constraints of high-level synthesis.",
          "Work was carried out in a simulation environment. I did not deploy the design to, or validate it on, a physical FPGA."
        ],
        "media": {
          "src": "/projects/stage-lip6/hls-workflow.jpg",
          "alt": "Diagram of the C implementation, Vitis HLS, VHDL and testing workflow",
          "caption": "Simplified workflow of my contribution, not a hardware deployment diagram."
        }
      },
      {
        "id": "verification",
        "eyebrow": "Checking outputs against hand calculations",
        "title": "04 / Testing",
        "paragraphs": [
          "To validate the implementation on selected cases, I used small matrices with results I could work out manually. I then compared these expected values with the output of my code.",
          "These were limited functional checks. I did not obtain end-to-end capsule results, extensive benchmarks or physical FPGA performance measurements."
        ]
      },
      {
        "id": "learning",
        "eyebrow": "My first experience in collaborative research development",
        "title": "05 / Experience",
        "paragraphs": [
          "This internship was my first substantial opportunity to work on a technical problem alongside more experienced engineers and researchers. It was also my first significant experience with Linux and Git.",
          "Learning to use the command line, understand other people’s work and collaborate in an established research environment was just as valuable as the texture-analysis code itself."
        ]
      }
    ]
  },
  {
    "slug": "serveur-personnel",
    "name": "Personal Home Server & Self-Hosting",
    "date": "2024–present · Ongoing personal infrastructure",
    "category": "Linux, networking & DevOps",
    "shortDescription": "A self-hosted Debian server running Docker services, HTTPS reverse proxying with Traefik, WireGuard/SSH administration and home automation.",
    "tagline": "Taking ownership of my infrastructure with open-source tools.",
    "overview": "I started self-hosting to depend less on large technology companies, use open-source software and give friends and family access to alternatives. What began as an introduction to Linux and networking gradually became a practical, continuously evolving server infrastructure.",
    "description": "Self-hosted applications running on Debian, with containerization, reverse proxy, secure access and several real users.",
    "context": "Build a personal open-source ecosystem and learn how networked systems are deployed, maintained and secured.",
    "objective": "Deploy maintainable services under my own domain, centralise web access and keep administration accessible through a private VPN.",
    "work": [
      "Started on a Ryzen 7 2700 desktop with 16 GB RAM, then migrated to a ThinkCentre.",
      "Deployed and maintained applications using Docker and Docker Compose.",
      "Configured Traefik to route services through HTTPS and a shared domain.",
      "Configured remote access through WireGuard and SSH.",
      "Connected home automation devices using Zigbee and Matter/Thread."
    ],
    "results": "An actively used server hosting this portfolio, collaboration and project-management tools, Home Assistant and Minecraft servers.",
    "tags": [
      "Debian",
      "Docker",
      "Docker Compose",
      "Traefik",
      "HTTPS",
      "WireGuard",
      "SSH",
      "Zsh",
      "Zigbee",
      "Matter"
    ],
    "heroImage": "/projects/serveur-personnel/architecture.jpg",
    "heroAlt": "Diagram of a Debian home server, Traefik reverse proxy, Docker services and WireGuard administration",
    "images": [
      "/projects/serveur-personnel/architecture.jpg"
    ],
    "githubRepositoryURL": "",
    "externalURL": "",
    "links": [],
    "facts": [
      {
        "value": "24 GB",
        "label": "DDR4 memory in current server"
      },
      {
        "value": "1.5 TB",
        "label": "Storage"
      },
      {
        "value": "12 threads",
        "label": "Ryzen 5 PRO processor"
      }
    ],
    "role": "Designed, deployed and administered the infrastructure as an ongoing personal project.",
    "sections": [
      {
        "id": "motivation",
        "eyebrow": "Reducing platform dependence",
        "title": "01 / Motivation",
        "paragraphs": [
          "I wanted to rely less on large technology companies, discover more open-source software and make useful alternatives available to people close to me.",
          "The project also provided a practical way to learn Linux, network configuration and, later, containers and web infrastructure."
        ]
      },
      {
        "id": "hardware",
        "eyebrow": "From a spare desktop to a dedicated ThinkCentre",
        "title": "02 / Hardware",
        "paragraphs": [
          "The first server reused an old desktop computer with an AMD Ryzen 7 2700 and 16 GB of DDR4 RAM. As my needs changed, I migrated to a Lenovo ThinkCentre with a Ryzen 5 PRO processor (12 threads), 24 GB of DDR4 memory and 1.5 TB of storage.",
          "The current machine also includes radios for Zigbee and Matter-related smart-home connectivity. It runs Debian Server and is managed primarily from the command line, using Zsh."
        ]
      },
      {
        "id": "services",
        "eyebrow": "Self-hosted applications used in practice",
        "title": "03 / Applications",
        "paragraphs": [
          "Docker and Docker Compose let me run multiple independent applications on one server. My deployments include this portfolio, project and collaboration tools such as Mattermost, HedgeDoc, Vikunja and Jitsi, as well as Home Assistant.",
          "I also host Minecraft servers. The project is not just a laboratory exercise: some of these applications are used by friends or collaborators."
        ],
        "bullets": [
          "Portfolio and other personal websites",
          "Mattermost, HedgeDoc, Vikunja and Jitsi",
          "Home Assistant with Zigbee and Matter integration",
          "Minecraft game servers"
        ]
      },
      {
        "id": "reverse-proxy",
        "eyebrow": "Traefik, domain routing and HTTPS",
        "title": "04 / Networking",
        "paragraphs": [
          "The most challenging part was configuring Traefik to make multiple web applications reachable under my own domain with HTTPS, without exposing a separate external port for each website.",
          "Working through reverse-proxy routing, Docker networking, domain configuration and certificates made me much more comfortable with how internet-facing services are connected and secured. Non-HTTP services, such as game servers, may use separate connections and are not all routed through Traefik."
        ],

      },
      {
        "id": "administration",
        "eyebrow": "WireGuard, SSH and ongoing maintenance",
        "title": "05 / Operations",
        "paragraphs": [
          "I administer the Debian machine through SSH over a WireGuard VPN, rather than exposing SSH directly for routine remote access.",
          "Maintaining the platform has taught me Linux troubleshooting, container lifecycle management, secure remote access and the practical trade-offs of running real services. The infrastructure is still evolving."
        ]
      }
    ]
  },
  {
    "slug": "instruments-midi",
    "name": "Custom MIDI Controller & Motorized Fader",
    "date": "2024 · Personal electronics project",
    "category": "Embedded electronics & music technology",
    "shortDescription": "Built a two-microcontroller USB MIDI controller with a 16-pad MIDI Fighter section, DAW navigation controls and a motorized fader.",
    "tagline": "A custom-built interface combining music performance and DAW control.",
    "overview": "I designed and assembled a physical MIDI controller for music production. It combines a 16-pad performance section with a DAW control surface, including a motorized fader that can follow the state of a software track.",
    "description": "Dual Arduino Pro Micro controller using native USB MIDI, multiplexers, Mackie-style control messages and a modified 3D-printed enclosure.",
    "context": "Build a physical controller suited to music-production workflows, especially Ableton Live, while exploring embedded electronics and MIDI communication.",
    "objective": "Combine playable MIDI pads, transport/navigation controls and a motorized DAW fader into one custom device.",
    "work": [
      "Used two Arduino Pro Micro boards, with separate firmware for MIDI pads and DAW control.",
      "Used multiplexers to handle 16 MIDI performance buttons.",
      "Implemented USB MIDI output and Mackie-compatible control messaging.",
      "Handled DAW feedback to adjust a motorized fader automatically.",
      "Adapted an existing STL enclosure in Fusion 360, printed and assembled the device."
    ],
    "results": "Completed a working custom MIDI device with a playable pad section and motorized DAW control; advanced integration depends on the DAW’s supported control-surface protocols.",
    "tags": [
      "Arduino Pro Micro",
      "C/C++",
      "USB MIDI",
      "Multiplexers",
      "Mackie Control",
      "Motorized fader",
      "Fusion 360",
      "3D printing"
    ],
    "heroImage": "/projects/instruments-midi/midi-complete.jpeg",
    "heroAlt": "Completed black custom MIDI controller with 16 circular pads and navigation keys",
    "images": [
      "/projects/instruments-midi/midi-complete.jpeg",
      "/projects/instruments-midi/midi-pads.jpeg",
      "/projects/instruments-midi/midi-daw-controls.jpeg"
    ],
    "youtubeURL": "https://www.youtube.com/embed/Ie5PHu6YKz4",
    "videoTitle": "Custom MIDI Controller — demonstration",
    "videoDescription": "Video of my custom-built MIDI controller in use.",
    "githubRepositoryURL": "",
    "externalURL": "",
    "links": [
      {
        "label": "Watch the demonstration",
        "url": "https://www.youtube.com/watch?v=Ie5PHu6YKz4",
        "kind": "primary"
      }
    ],
    "facts": [
      {
        "value": "16 pads",
        "label": "Performance section"
      },
      {
        "value": "2 × Pro Micro",
        "label": "Dedicated microcontrollers"
      },
      {
        "value": "USB MIDI",
        "label": "Native communication"
      }
    ],
    "role": "Designed and built the electronics, firmware integration, control logic and customized enclosure.",
    "sections": [
      {
        "id": "architecture",
        "eyebrow": "Two Arduino Pro Micro boards",
        "title": "01 / System",
        "paragraphs": [
          "The controller combines two distinct subsystems. One Arduino Pro Micro handles the performance pads; another handles the DAW controls. Both use native USB MIDI to communicate with a computer.",
          "I designed it with Ableton Live in mind, but standard MIDI messages can also be used by other DAWs. More advanced control-surface behaviour depends on whether the software supports the relevant Mackie-compatible messages."
        ],
        "media": {
          "src": "/projects/instruments-midi/midi-complete.jpeg",
          "alt": "Full finished MIDI controller in its black printed case",
          "caption": "Finished controller: navigation controls, motorized fader area and 16 performance pads."
        }
      },
      {
        "id": "pads",
        "eyebrow": "A 16-pad MIDI Fighter-inspired interface",
        "title": "02 / Performance",
        "paragraphs": [
          "The performance section contains 16 arcade-style buttons that send MIDI note events. The notes are mapped in semitone steps and can be assigned to instruments, samples or other actions inside a DAW.",
          "I used multiplexers to connect the buttons efficiently to the Arduino Pro Micro. Working through their input scanning and testing the button handling was an important part of the implementation."
        ],
        "media": {
          "src": "/projects/instruments-midi/midi-pads.jpeg",
          "alt": "Close-up photograph of the sixteen circular MIDI pads",
          "caption": "Sixteen playable MIDI pads arranged in a 4 × 4 grid."
        }
      },
      {
        "id": "fader",
        "eyebrow": "DAW navigation and a motorized fader",
        "title": "03 / Control surface",
        "paragraphs": [
          "The control section adds navigation and transport-style interactions with the music software. I used Mackie-compatible MIDI messaging so that the DAW could interpret the physical controls as control-surface commands.",
          "The motorized fader was the main technical challenge. Unlike a normal potentiometer, it can automatically reposition itself to reflect the track state or automation received from the software. I had to select suitable components and decode the incoming MIDI messages in my firmware."
        ],
        "media": {
          "src": "/projects/instruments-midi/midi-daw-controls.jpeg",
          "alt": "Close-up of the navigation controls and fader section of the MIDI controller",
          "caption": "DAW controls and fader area (cropped from the original device photograph)."
        }
      },
      {
        "id": "enclosure",
        "eyebrow": "Adapting and assembling a 3D-printed case",
        "title": "04 / Fabrication",
        "paragraphs": [
          "I started with an existing STL enclosure and adapted it in Fusion 360 to accommodate the buttons and custom internal electronics.",
          "After 3D printing and painting the enclosure, I assembled the device. It brought together firmware, electronic connections, mechanical fit and usability in one finished prototype."
        ]
      },
      {
        "id": "outcome",
        "eyebrow": "A working piece of music-production hardware",
        "title": "05 / Takeaways",
        "paragraphs": [
          "This project gave me experience across microcontroller programming, USB MIDI, input multiplexing, feedback from external software and hands-on mechanical assembly.",
          "The most valuable part was making multiple subsystems work together in a physical device rather than testing a single circuit or isolated software component."
        ]
      }
    ]
  },
  {
    "slug": "ia-echecs",
    "name": "Chess AI — My First ML Experiment",
    "date": "2023 · Personal project",
    "category": "Early machine learning experiment",
    "shortDescription": "My first neural network: a TensorFlow MLP trained on high-Elo Chess.com games to predict moves, then tested against Minimax.",
    "tagline": "A deliberately simple MLP, an unforgiving benchmark, and an important lesson in model design.",
    "overview": "In 2023, I built my first machine-learning project around chess. Using TensorFlow, I trained a multilayer perceptron to predict the piece to move and its destination from a board position, then evaluated it against a traditional Minimax opponent.",
    "description": "First chess-learning experiment in Python and TensorFlow, compared against Minimax and found to be much weaker.",
    "context": "Explore neural networks in a structured decision-making environment as a first introduction to AI.",
    "objective": "Learn the practical workflow of supervised learning on chess games, from PGN parsing to move prediction and head-to-head testing.",
    "work": [
      "Prepared high-Elo Chess.com PGN games (players rated above 2000) as training data.",
      "Trained a basic TensorFlow MLP from board positions to piece-and-destination move predictions.",
      "When the first proposed move was illegal, attempted the next most probable prediction.",
      "Tested the model against an implemented Minimax chess program."
    ],
    "results": "The MLP never won against Minimax. The experiment revealed the weaknesses of naive next-move prediction without chess-specific structure or game-tree search.",
    "tags": [
      "Python",
      "TensorFlow",
      "MLP",
      "PGN",
      "Supervised learning",
      "Minimax"
    ],
    "heroImage": "/projects/ia-echecs/chess-ml-diagram.jpg",
    "heroAlt": "Schematic chessboard to multilayer perceptron and legal-move selection diagram",
    "images": [
      "/projects/ia-echecs/chess-ml-diagram.jpg"
    ],
    "githubRepositoryURL": "",
    "externalURL": "",
    "links": [],
    "facts": [
      {
        "value": "2023",
        "label": "First machine-learning project"
      },
      {
        "value": "2000+",
        "label": "Elo threshold in training games"
      },
      {
        "value": "0 wins",
        "label": "Against Minimax"
      }
    ],
    "role": "Built and tested the data pipeline and TensorFlow MLP as an exploratory first AI project.",
    "sections": [
      {
        "id": "dataset",
        "eyebrow": "Learning from high-Elo PGN games",
        "title": "01 / Data",
        "paragraphs": [
          "I used PGN files of Chess.com games played by players rated above 2000 Elo. These provided examples of moves from experienced players that I could use for supervised learning.",
          "The goal was not to reconstruct a high-performance chess engine, but to discover how to turn a dataset into a network capable of producing decisions."
        ]
      },
      {
        "id": "model",
        "eyebrow": "Predicting a piece and destination with an MLP",
        "title": "02 / Neural network",
        "paragraphs": [
          "I represented the current board position as the network input. The TensorFlow multilayer perceptron predicted which piece should move and its destination square.",
          "The network had no built-in understanding of chess legality. If its highest-ranked move was illegal, the program checked the next most likely proposed move, continuing until a legal candidate was found."
        ],
        "media": {
          "src": "/projects/ia-echecs/chess-ml-diagram.jpg",
          "alt": "Chess move prediction workflow with MLP and legal move filter",
          "caption": "Simplified reconstruction of the 2023 approach; not a screenshot of the original software."
        }
      },
      {
        "id": "benchmark",
        "eyebrow": "Testing against classical Minimax",
        "title": "03 / Evaluation",
        "paragraphs": [
          "I let the MLP-based agent play against an implementation of the Minimax algorithm. The network never won a match against it.",
          "That result was informative. Minimax explicitly searches possible future moves, whereas my basic MLP only selected a likely move from the current position, without a comparable look-ahead mechanism. I did not measure a competitive Elo or claim any playing strength."
        ]
      },
      {
        "id": "reflection",
        "eyebrow": "Why this failure was useful",
        "title": "04 / Lessons",
        "paragraphs": [
          "Today I would not choose such a basic architecture for a serious chess engine. Direct move prediction also makes legality difficult to manage unless the possible actions are masked or structured explicitly.",
          "At the time, however, the project helped me learn TensorFlow, supervised-learning data preparation, prediction handling and how to compare a learned system against a conventional algorithm. It marked the beginning of my interest in machine learning."
        ]
      }
    ]
  }
];
