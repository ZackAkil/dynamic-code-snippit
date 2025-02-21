# Dynamic Code Snippet Demo ([live demo](https://zackakil.github.io/dynamic-code-snippit/))

This project demonstrates a dynamic code snippet generator using Vue.js. The core idea is to show how you can build a UI that lets users select features, and then dynamically generate code based on those selections.

## Key Features

*   **Feature Selection:**  A list of checkboxes allows users to enable or disable different features.
*   **Dynamic Code Generation:** The code snippet updates in real-time based on the selected features.  Lines of code are included or excluded depending on which features are active.
*   **Code Highlighting:**  Hovering over a feature in the list highlights the corresponding code sections, providing a clear visual connection between features and their implementation.

## How it Works

The demo uses a `codeTemplate` object in `dynamicCode.js` to define the code snippet. Each line of code is associated with a set of features.  When a feature is enabled, any code lines associated with that feature are included in the generated snippet.

The `shownLines` computed property in the Vue instance filters the `codeTemplate.lines` array based on the currently enabled features. This ensures that only the relevant code is displayed.

## Use Cases

This approach can be useful in a variety of situations, such as:

*   **Generating configuration files:** Allowing users to select options and generate a configuration file with the appropriate settings.
*   **Creating API request code:** Building code snippets for different API endpoints and parameters.
*   **Simplifying complex code:**  Providing a way for users to choose which parts of a large codebase they need, and then generating a simplified version.

