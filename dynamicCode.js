const dynamicCode = {
  features: [
    {
      name: "advancedMode",
      enabled: false,
      displayName: "Advanced Mode",
    },
    { name: "logging", enabled: false, displayName: "Enable Logging" },
    {
      name: "errorHandling",
      enabled: false,
      displayName: "Error Handling",
    },
    { name: "newFeature", enabled: false, displayName: "New Feature" },
  ],
  codeTemplate: {
    lines: [
      { code: "// This is the default code", features: [] },
      { code: "function doSomething() {", features: [] },
      { code: "  // Basic operation", features: [] },
      {
        code: "  // Advanced functionality enabled",
        features: ["advancedMode"],
      },
      {
        code: "  // Performing complex calculations...",
        features: ["advancedMode"],
      },
      {
        code: "  console.log('Doing something 1st...');",
        features: ["logging"],
      },
      { code: "  try {", features: ["errorHandling"] },
      {
        code: "    // Code that might throw an error",
        features: ["errorHandling"],
      },
      { code: "  } catch (error) {", features: ["errorHandling"] },
      {
        code: "    console.error('An error occurred: ', error);",
        features: ["errorHandling"],
      },
      { code: "  }", features: ["errorHandling"] },
      {
        code: "  console.log('Doing something 2nd...');",
        features: ["logging"],
      },
      { code: "  // New feature enabled", features: ["newFeature"] },
      {
        code: "  // New feature actions here",
        features: ["newFeature"],
      },
      { code: "}", features: [] },
    ],
  },
};
