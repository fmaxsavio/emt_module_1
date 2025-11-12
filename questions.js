const questions = [
    {
    q: "Vector addition follows which property?",
    options: ["Associative", "Distributive", "Commutative", "Both A and C"],
    answer: 3,
  },
  {
    q: "The dot product of two perpendicular vectors is",
    options: ["Zero", "One", "Infinity", "Undefined"],
    answer: 0,
  },
  {
    q: "The result of a cross product of two vectors is a",
    options: ["Scalar", "Complex number", "Vector", "Tensor"],
    answer: 2,
  },
  {
    q: "Which operation results in a scalar quantity?",
    options: ["Cross product", "Vector addition", "Dot product", "Vector subtraction"],
    answer: 2,
  },
  {
    q: "The magnitude of the vector A = 3i + 4j is",
    options: ["7", "5", "12", "1"],
    answer: 1,
  },
  {
    q: "Two vectors are said to be parallel if their cross product is",
    options: ["Maximum", "Unity", "Zero", "Infinite"],
    answer: 2,
  },
  {
    q: "Unit vector is a vector that has",
    options: ["Zero direction", "Unit magnitude", "Negative components", "No magnitude"],
    answer: 1,
  },
  {
    q: "The angle between two vectors can be found using",
    options: ["Vector subtraction", "Scalar multiplication", "Dot product", "Cross multiplication only"],
    answer: 2,
  },
  {
    q: "Vector subtraction is equivalent to",
    options: ["Addition of inverse vector", "Scalar subtraction", "Product of two vectors", "Removing direction"],
    answer: 0,
  },
  {
    q: "The cross product of two vectors is maximum when the angle between them is",
    options: ["90 degrees", "0 degrees", "45 degrees", "180 degrees"],
    answer: 0,
  },
  {
    q: "Which of the following best describes the gradient of a scalar field?",
    options: [
      "A scalar quantity that shows how the field spreads",
      "A vector showing the direction of maximum rate of change",
      "A constant describing uniform motion",
      "A measure of curvature in the field"
    ],
    answer: 1,
  },
  {
    q: "The divergence of a vector field at a point gives:",
    options: [
      "The rate of change of direction",
      "The amount of vector field flowing into or out of a point",
      "The rotational strength of the field",
      "The perpendicular component of the vector"
    ],
    answer: 1,
  },
  {
    q: "Which of the following indicates a solenoidal field?",
    options: ["Gradient = 0", "Curl = 0", "Divergence = 0", "Flux = 0"],
    answer: 2,
  },
  {
    q: "Which operation results in a scalar from a vector field?",
    options: ["Gradient", "Curl", "Divergence", "Cross product"],
    answer: 2,
  },
  {
    q: "In which direction does the gradient of a temperature field point?",
    options: [
      "Toward the coldest region",
      "Toward the hottest region",
      "In the direction of constant temperature",
      "Opposite to the direction of increasing temperature"
    ],
    answer: 1,
  },
  {
    q: "Curl of a vector field represents:",
    options: [
      "Outward flow of field lines",
      "Rotation or circulation around a point",
      "The field's zero value",
      "Intensity of scalar field"
    ],
    answer: 1,
  },
  {
    q: "Which of the following has zero divergence?",
    options: [
      "Uniform electric field",
      "Point source field",
      "Rotational magnetic field",
      "Electric dipole field"
    ],
    answer: 0,
  },
  {
    q: "Divergence of a magnetic field is always:",
    options: ["Positive", "Negative", "Constant", "Zero"],
    answer: 3,
  },
  {
    q: "The mathematical operation del X A refers to:",
    options: ["Gradient of A", "Divergence of A", "Curl of A", "Laplacian of A"],
    answer: 2,
  },
  {
    q: "In a conservative field, the curl is:",
    options: ["Maximum", "Constant", "Unity", "Zero"],
    answer: 3,
  },
  {
    q: "What does a line integral physically represent in vector field analysis",
    options: ["Area enclosed by the curve", "Net energy stored in a system", "Total field strength along a path", "Rate of change at a point"],
    answer: 2,
  },
  {
    q: "Which integral best measures the total flux passing through a surface",
    options: ["Volume integral", "Line integral", "Surface integral", "Path integral"],
    answer: 2,
  },
  {
    q: "The surface integral is most appropriate when calculating",
    options: ["Change in vector direction", "Total force along a curve", "Flow through a surface", "Angle between vectors"],
    answer: 2,
  },
  {
    q: "In vector calculus, a volume integral helps calculate",
    options: ["Field strength at a surface", "Change in magnetic field", "Total quantity within a space", "Angle between two fields"],
    answer: 2,
  },
  {
    q: "Stoke's theorem connects",
    options: ["Curl and surface integrals", "Divergence and volume", "Field strength and area", "Charge and electric field"],
    answer: 0,
  },
  {
    q: "Which application would most likely use line integrals",
    options: ["Measuring current through a conductor", "Calculating the area of a surface", "Determining the work done by a field", "Finding total volume enclosed"],
    answer: 2,
  },
  {
    q: "Which theorem allows replacing a surface integral of curl with a line integral",
    options: ["Gauss s theorem", "Newton s law", "Faraday s law", "Stoke s theorem"],
    answer: 3,
  },
  {
    q: "When is a vector field said to be conservative",
    options: ["When its curl is non-zero", "When its line integral around a closed loop is zero", "When its divergence is infinite", "When it varies linearly"],
    answer: 1,
  },
  {
    q: "Which concept relates the total flux leaving a volume to its boundary surface",
    options: ["Stoke s theorem", "Divergence theorem", "Coulomb s law", "Phasor transformation"],
    answer: 1,
  },
  {
    q: "Which of the following quantities is best evaluated using a volume integral",
    options: ["Voltage along a conductor", "Flow across a surface", "Density over a region", "Curl around a boundary"],
    answer: 2,
  },
  {
    q: "Which coordinate system is most suitable for problems with circular symmetry?",
    options: ["Cartesian", "Cylindrical", "Spherical", "Elliptical"],
    answer: 1,
  },
  {
    q: "In spherical coordinates, which variable typically represents the angle from the vertical axis?",
    options: ["Radial distance", "Azimuth angle", "Elevation angle", "Polar angle"],
    answer: 3,
  },
  {
    q: "Which coordinate system is ideal for modeling the electric field around a wire?",
    options: ["Cartesian", "Cylindrical", "Spherical", "Cuboidal"],
    answer: 1,
  },
  {
    q: "What makes orthogonal coordinate systems unique?",
    options: ["They have non-linear grids", "Their axes intersect at right angles", "They can only describe 2D planes", "They are used only in optics"],
    answer: 1,
  },
  {
    q: "The Cartesian coordinate system is best suited for:",
    options: ["Problems involving concentric spheres", "Modeling heat around a cylinder", "Uniform field analysis in straight geometries", "Solving wave equations in polar space"],
    answer: 2,
  },
  {
    q: "Which of the following is true for orthogonal curvilinear coordinates?",
    options: ["The coordinate lines do not intersect", "All coordinates are non-independent", "Unit vectors are mutually perpendicular", "Coordinates are always time-dependent"],
    answer: 2,
  },
  {
    q: "Which coordinate system uses radius, angle in plane, and height as parameters?",
    options: ["Cylindrical", "Spherical", "Polar", "Cartesian"],
    answer: 0,
  },
  {
    q: "Spherical coordinates are most effective when analyzing fields around:",
    options: ["Rectangular plates", "Long wires", "Point sources", "Flat surfaces"],
    answer: 2,
  },
  {
    q: "In cylindrical coordinates, the variable that represents height is:",
    options: ["Radius", "Azimuth", "Elevation", "Longitudinal position"],
    answer: 3,
  },
  {
    q: "What defines an orthogonal system of coordinates?",
    options: ["Equal axes lengths", "Parallel coordinate lines", "Perpendicular coordinate axes", "Angular displacement"],
    answer: 2,
  },
  {
    q: "Which of the following best describes a phasor in electrical engineering?",
    options: ["A time-varying magnetic field", "A rotating vector that represents sinusoidal functions", "A type of resistor used in AC circuits", "A scalar quantity used in DC analysis"],
    answer: 1,
  },
  {
    q: "Phasor addition is used to simplify the analysis of which type of signals?",
    options: ["Static magnetic fields", "Constant voltage sources", "Sinusoidal alternating signals", "Non-electrical mechanical systems"],
    answer: 2,
  },
  {
    q: "Which operation allows the combination of two sinusoidal voltages in phasor form?",
    options: ["Cross product", "Multiplication", "Vector addition", "Scalar projection"],
    answer: 2,
  },
  {
    q: "Rotating vectors are most useful in analyzing:",
    options: ["Non-linear circuits", "Steady-state DC systems", "Time-harmonic electromagnetic fields", "Chemical reactions"],
    answer: 2,
  },
  {
    q: "Which component of a rotating vector remains constant over time?",
    options: ["Its angle", "Its position", "Its magnitude", "Its frequency"],
    answer: 2,
  },
  {
    q: "In phasor representation, subtraction of vectors gives information about:",
    options: ["Average value of the signals", "The resistive power only", "The phase and amplitude differences", "The total energy loss"],
    answer: 2,
  },
  {
    q: "Which of the following best represents a practical use of rotating vectors?",
    options: ["Designing hydraulic pumps", "Describing alternating magnetic fields in motors", "Modeling thermal diffusion", "Analyzing internet traffic flow"],
    answer: 1,
  },
  {
    q: "Multiplication of phasors is primarily used to determine:",
    options: ["Signal decay over distance", "Voltage-current relationships in impedance", "Frequency drift in communication", "Heat loss in conductors"],
    answer: 1,
  },
  {
    q: "In a sinusoidal system, the direction of a rotating vector represents:",
    options: ["The voltage amplitude", "The average power", "The instantaneous position of the waveform", "The shape of the conductor"],
    answer: 2,
  },
  {
    q: "What is the main advantage of using phasors in electrical analysis?",
    options: ["They reduce power consumption", "They convert sinusoidal functions to simpler algebraic form", "They eliminate the need for circuit diagrams", "They improve insulation properties"],
    answer: 1,
  },
  ]
